/**
 * @name LocalThemeSwitcher
 * @author Pagoni Hax
 * @description Randomly applies one of your installed BetterDiscord themes on startup. Press Escape to open the switcher.
 * @version 1.0.0
 */

module.exports = (_ => {
    return class LocalThemeSwitcher {
        constructor() {
            this._themeKey   = 'LocalThemeSwitcher_active';
            this._activeName = null;
            this._menuOpen   = false;
            this._onKey      = this._onKey.bind(this);
        }

        start() {
            this._log('started');

            const saved = BdApi.Data.load('LocalThemeSwitcher', 'activeName');
            const themes = this._getThemes();

            if (saved && themes.find(t => t.name === saved)) {
                this._applyTheme(saved, true);
            } else if (themes.length > 0) {
                const random = themes[Math.floor(Math.random() * themes.length)];
                this._applyTheme(random.name, false);
            } else {
                BdApi.UI.showToast('LocalThemeSwitcher: No installed themes found.', { type: 'warning', timeout: 4000 });
            }

            this._buildPill();
            document.addEventListener('keydown', this._onKey, true);
        }

        stop() {
            document.removeEventListener('keydown', this._onKey, true);
            document.getElementById('ts-overlay')?.remove();
            document.getElementById('ts-pill')?.remove();
            BdApi.Data.save('LocalThemeSwitcher', 'activeName', this._activeName);
            this._log('stopped');
        }


        _getThemes() {
            try {
                return (BdApi.Themes.getAll() || []).map(t => ({
                    name:    t.name || t.getName?.() || 'Unknown',
                    enabled: t.enabled ?? false,
                    raw:     t
                }));
            } catch(e) {
                this._err('Could not read themes:', e);
                return [];
            }
        }

        _applyTheme(name, silent = false) {
            const themes = this._getThemes();
            const entry  = themes.find(t => t.name === name);

            if (!entry) {
                this._activeName = null;
                BdApi.Data.save('LocalThemeSwitcher', 'activeName', null);
                this._syncUI();
                return;
            }

            themes.forEach(t => {
                if (t.name !== name && t.enabled) {
                    BdApi.Themes.disable(t.name);
                }
            });

            BdApi.Themes.enable(name);
            this._activeName = name;
            BdApi.Data.save('LocalThemeSwitcher', 'activeName', name);
            this._syncUI();

            if (!silent) BdApi.UI.showToast(`Theme: ${name}`, { type: 'success', timeout: 2000 });
        }

        _resetTheme() {
            const themes = this._getThemes();
            themes.forEach(t => { if (t.enabled) BdApi.Themes.disable(t.name); });
            this._activeName = null;
            BdApi.Data.save('LocalThemeSwitcher', 'activeName', null);
            this._syncUI();
        }


        _buildPill() {
            if (document.getElementById('ts-pill')) return;
            const pill = document.createElement('div');
            pill.id = 'ts-pill';
            pill.style.cssText = `
                position: fixed; bottom: 14px; left: 14px; z-index: 9999;
                display: flex; align-items: center; gap: 6px;
                background: rgba(0,0,0,0.75); border: 1px solid rgba(255,255,255,0.1);
                padding: 5px 10px; border-radius: 20px; cursor: pointer;
                font-size: 12px; color: #ccc; font-family: sans-serif;
                backdrop-filter: blur(6px);
            `;
            pill.innerHTML = `<div id="ts-pill-dot" style="width:8px;height:8px;border-radius:50%;background:#2a2a2a;"></div><span id="ts-pill-label">themes</span>`;
            pill.addEventListener('click', () => this._toggleMenu());
            document.body.appendChild(pill);
            this._syncUI();
        }

        _buildOverlay() {
            if (document.getElementById('ts-overlay')) return;

            const overlay = document.createElement('div');
            overlay.id = 'ts-overlay';
            overlay.style.cssText = `
                display: none; position: fixed; inset: 0; z-index: 99999;
                background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
                align-items: center; justify-content: center;
            `;
            overlay.addEventListener('click', e => { if (e.target === overlay) this._closeMenu(); });

            const panel = document.createElement('div');
            panel.id = 'ts-panel';
            panel.style.cssText = `
                background: #111; border: 1px solid rgba(255,255,255,0.08);
                border-radius: 10px; padding: 16px; width: 340px; max-height: 520px;
                display: flex; flex-direction: column; gap: 10px;
                font-family: sans-serif; color: #ccc;
                box-shadow: 0 0 40px rgba(0,0,0,0.8);
            `;

            const header = document.createElement('div');
            header.style.cssText = `font-size:13px; font-weight:bold; color:#fff; display:flex; justify-content:space-between; align-items:center;`;
            header.innerHTML = `<span>Local Theme Switcher</span><span id="ts-random-btn" style="cursor:pointer;font-size:11px;color:#888;border:1px solid #333;padding:2px 8px;border-radius:10px;">🎲 Random</span>`;
            header.querySelector('#ts-random-btn').addEventListener('click', () => {
                const themes = this._getThemes();
                if (themes.length === 0) return;
                const pick = themes[Math.floor(Math.random() * themes.length)];
                this._applyTheme(pick.name);
            });
            panel.appendChild(header);

            const activeBar = document.createElement('div');
            activeBar.id = 'ts-active-bar';
            activeBar.style.cssText = `display:flex;align-items:center;gap:6px;font-size:11px;`;
            activeBar.innerHTML = `<div id="ts-active-dot" style="width:8px;height:8px;border-radius:50%;background:#333;"></div><span id="ts-active-label" style="color:#555;">no theme active</span>`;
            panel.appendChild(activeBar);

            const search = document.createElement('input');
            search.id = 'ts-search';
            search.type = 'text';
            search.placeholder = 'search themes…';
            search.style.cssText = `
                background:#1a1a1a; border:1px solid #333; border-radius:6px;
                padding:6px 10px; color:#fff; font-size:12px; outline:none; width:100%; box-sizing:border-box;
            `;
            search.addEventListener('input', () => this._filterRows(search.value));
            panel.appendChild(search);

            const list = document.createElement('div');
            list.id = 'ts-list';
            list.style.cssText = `overflow-y:auto; display:flex; flex-direction:column; gap:4px; max-height:300px;`;
            this._getThemes().forEach(theme => list.appendChild(this._makeRow(theme)));
            panel.appendChild(list);

            const footer = document.createElement('div');
            footer.style.cssText = `display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#555;`;
            footer.innerHTML = `<span id="ts-count">${this._getThemes().length} themes · esc to close</span><span id="ts-reset" style="cursor:pointer;color:#888;">Reset</span>`;
            footer.querySelector('#ts-reset').addEventListener('click', () => this._resetTheme());
            panel.appendChild(footer);

            overlay.appendChild(panel);
            document.body.appendChild(overlay);
            this._syncUI();
        }

        _makeRow(theme) {
            const row = document.createElement('div');
            row.className = 'ts-row';
            row.dataset.name = theme.name;
            row.style.cssText = `
                display:flex; align-items:center; gap:8px; padding:8px 10px;
                border-radius:6px; cursor:pointer; border-left:2px solid transparent;
                transition: background 0.15s;
            `;
            row.onmouseenter = () => { if (this._activeName !== theme.name) row.style.background = '#1e1e1e'; };
            row.onmouseleave = () => { if (this._activeName !== theme.name) row.style.background = ''; };

            const dot = document.createElement('div');
            dot.style.cssText = `width:8px;height:8px;border-radius:50%;background:#4AEF98;flex-shrink:0;`;

            const name = document.createElement('span');
            name.style.cssText = `flex:1; font-size:12px; color:#ccc;`;
            name.textContent = theme.name;

            const badge = document.createElement('span');
            badge.className = 'ts-badge';
            badge.textContent = 'active';
            badge.style.cssText = `display:none; font-size:10px; border:1px solid rgba(74,239,152,0.3); color:#4AEF98; padding:1px 6px; border-radius:8px;`;

            row.appendChild(dot);
            row.appendChild(name);
            row.appendChild(badge);

            row.addEventListener('click', () => {
                if (this._activeName === theme.name) this._resetTheme();
                else this._applyTheme(theme.name);
            });

            return row;
        }

        _syncUI() {
            document.querySelectorAll('.ts-row').forEach(row => {
                const active = row.dataset.name === this._activeName;
                row.style.background      = active ? '#1a1a1a' : '';
                row.style.borderLeftColor = active ? '#4AEF98' : 'transparent';
                const badge = row.querySelector('.ts-badge');
                if (badge) badge.style.display = active ? '' : 'none';
            });

            const dot   = document.getElementById('ts-active-dot');
            const label = document.getElementById('ts-active-label');
            if (dot && label) {
                if (this._activeName) {
                    dot.style.background = '#4AEF98';
                    dot.style.boxShadow  = '0 0 6px #4AEF98';
                    label.style.color    = '#4AEF98';
                    label.textContent    = this._activeName;
                } else {
                    dot.style.background = '#333';
                    dot.style.boxShadow  = 'none';
                    label.style.color    = '#555';
                    label.textContent    = 'no theme active';
                }
            }

            const pillDot   = document.getElementById('ts-pill-dot');
            const pillLabel = document.getElementById('ts-pill-label');
            if (pillDot && pillLabel) {
                if (this._activeName) {
                    pillDot.style.background = '#4AEF98';
                    pillDot.style.boxShadow  = '0 0 5px #4AEF98';
                    pillLabel.textContent    = this._activeName;
                } else {
                    pillDot.style.background = '#2a2a2a';
                    pillDot.style.boxShadow  = 'none';
                    pillLabel.textContent    = 'themes';
                }
            }
        }

        _filterRows(query) {
            const q = query.trim().toLowerCase();
            document.querySelectorAll('.ts-row').forEach(row => {
                row.style.display = (!q || row.dataset.name.toLowerCase().includes(q)) ? '' : 'none';
            });
        }

        _openMenu() {
            this._buildOverlay();
            const o = document.getElementById('ts-overlay');
            const s = document.getElementById('ts-search');
            const list = document.getElementById('ts-list');
            if (list) {
                list.innerHTML = '';
                this._getThemes().forEach(t => list.appendChild(this._makeRow(t)));
                document.getElementById('ts-count').textContent = `${this._getThemes().length} themes · esc to close`;
            }
            if (o) { o.style.display = 'flex'; this._menuOpen = true; }
            if (s) { s.value = ''; this._filterRows(''); setTimeout(() => s.focus(), 80); }
            this._syncUI();
        }

        _closeMenu() {
            const o = document.getElementById('ts-overlay');
            if (o) { o.style.display = 'none'; this._menuOpen = false; }
        }

        _toggleMenu() {
            if (this._menuOpen) this._closeMenu(); else this._openMenu();
        }

        _onKey(e) {
            if (e.key !== 'Escape') return;
            if (this._menuOpen) {
                e.stopPropagation();
                this._closeMenu();
                return;
            }
            if (document.querySelector('[class*="modal-"],[class*="popout-"],[class*="layer-"]')) return;
            e.stopPropagation();
            this._openMenu();
        }

        _log(...a) { console.log(`%c[LocalThemeSwitcher]`, 'color:#4AEF98;font-weight:bold', ...a); }
        _err(...a) { console.error(`%c[LocalThemeSwitcher]`, 'color:#ff4a4a;font-weight:bold', ...a); }
    };
})();
