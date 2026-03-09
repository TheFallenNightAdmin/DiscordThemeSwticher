/**
 * @name DiscordThemes
 * @author Pagoni Hax
 * @description A theme switcher with a sleek overlay menu. Press ESC (when no modal is open) to toggle.
 * @version 1.0.0
 */

module.exports = class {
    constructor() {
        this.PLUGIN_NAME = 'DiscordThemes';
        this.THEMES = [
            { name: 'Kirito',           color: '#FF0000', url: 'https://files.catbox.moe/9kscsb.txt'  },
            { name: 'Fallout Terminal', color: '#4AEF98', url: 'https://files.catbox.moe/mjvcpo.txt'  },
            { name: 'CyberPunk',        color: '#FF003C', url: 'https://files.catbox.moe/gxfgvs.css'  },
            { name: 'Hax',              color: '#FF003C', url: 'https://files.catbox.moe/gqnx5q.txt'  },
            { name: 'Newbie',           color: '#6A0DAD', url: 'https://files.catbox.moe/s5bz8u.txt'  },
            { name: 'TIO',              color: '#CC0000', url: 'https://files.catbox.moe/y9001d.txt'  },
            { name: 'Luna',             color: '#6A0DAD', url: 'https://files.catbox.moe/novg23.txt'  },
        ];

        this.activeName  = null;
        this.menuOpen    = false;
        this.cssCache    = {};
        this._keyHandler = null;
        this._observer   = null;
    }

    getName()        { return 'DiscordThemes'; }
    getAuthor()      { return 'Pagoni Hax'; }
    getDescription() { return 'A theme switcher with a sleek overlay menu. Press ESC (when no modal is open) to toggle.'; }
    getVersion()     { return '1.0.0'; }

    start() {
        this.activeName = BdApi.Data.load(this.PLUGIN_NAME, 'discord_theme') || null;

        this._injectBaseCSS();
        this._applyMenuStyle();
        this._buildPill();

        if (this.activeName && this.THEMES.find(t => t.name === this.activeName)) {
            this._applyTheme(this.activeName);
        }

        this._keyHandler = this._onKeyDown.bind(this);
        document.addEventListener('keydown', this._keyHandler, true);

        this._observer = new MutationObserver(() => this._guardActiveTheme());
        this._observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    stop() {
        BdApi.DOM.removeStyle(`${this.PLUGIN_NAME}-base`);
        BdApi.DOM.removeStyle(`${this.PLUGIN_NAME}-menu`);
        BdApi.DOM.removeStyle(`${this.PLUGIN_NAME}-active`);

        document.getElementById('dt-overlay')?.remove();
        document.getElementById('dt-pill')?.remove();

        if (this._keyHandler) document.removeEventListener('keydown', this._keyHandler, true);
        if (this._observer)   this._observer.disconnect();
    }

    _injectBaseCSS() {
        BdApi.DOM.addStyle(`${this.PLUGIN_NAME}-base`, `
            #dt-overlay {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 2147483646;
                background: rgba(0,0,0,0.65);
                backdrop-filter: blur(3px);
                align-items: center;
                justify-content: center;
            }
            #dt-overlay.open {
                display: flex;
                animation: dt-pop 0.16s cubic-bezier(0.16,1,0.3,1);
            }
            @keyframes dt-pop {
                from { opacity: 0; transform: scale(0.94) translateY(-8px); }
                to   { opacity: 1; transform: scale(1)    translateY(0);    }
            }
            #dt-panel {
                width: 240px;
                max-height: 420px;
                display: flex;
                flex-direction: column;
                border-radius: 4px;
                overflow: hidden;
                font-family: 'Share Tech Mono','Courier New',monospace;
            }
            #dt-title {
                flex-shrink: 0;
                padding: 8px 12px 7px;
                font-size: 10px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                display: flex;
                justify-content: space-between;
                align-items: center;
                user-select: none;
            }
            #dt-title-esc {
                font-size: 9px;
                opacity: 0.35;
                letter-spacing: 0.1em;
            }
            #dt-list {
                overflow-y: scroll;
                flex: 1;
                padding: 4px 0;
            }
            #dt-list::-webkit-scrollbar { width: 3px; }
            .dt-row {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 7px 12px;
                cursor: pointer;
                border-left: 2px solid transparent;
                user-select: none;
                transition: background 0.08s, border-color 0.08s;
            }
            .dt-row:hover { background: rgba(255,255,255,0.04); }
            .dt-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                flex-shrink: 0;
            }
            .dt-name {
                flex: 1;
                font-size: 12px;
                letter-spacing: 0.04em;
            }
            .dt-check {
                width: 12px;
                height: 12px;
                border-radius: 2px;
                border: 1px solid rgba(255,255,255,0.2);
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 9px;
                transition: background 0.1s, border-color 0.1s;
            }
            .dt-empty {
                padding: 18px 12px;
                font-size: 11px;
                opacity: 0.3;
                font-family: 'Share Tech Mono',monospace;
                letter-spacing: 0.08em;
            }
            #dt-pill {
                position: fixed;
                bottom: 16px;
                left: 16px;
                z-index: 2147483647;
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px 4px 7px;
                border-radius: 3px;
                cursor: pointer;
                font-family: 'Share Tech Mono',monospace;
                font-size: 10px;
                letter-spacing: 0.1em;
                user-select: none;
                transition: border-color 0.15s, color 0.15s, box-shadow 0.15s;
            }
            #dt-pill-dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                flex-shrink: 0;
                transition: background 0.2s, box-shadow 0.2s;
            }
        `);
    }

    _defaultThemeVars() {
        return {
            color:      '#888888',
            accent:     '#888888',
            menuBg:     'rgba(10,10,10,0.97)',
            menuBorder: '#333333',
            menuGlow:   'rgba(100,100,100,0.2)',
            textColor:  '#cccccc',
            titleColor: '#888888',
            pillBg:     'rgba(10,10,10,0.85)',
            pillBorder: '#333333',
        };
    }

    _themeVars(entry) {
        if (!entry) return this._defaultThemeVars();
        const c = entry.color || '#888';
        return {
            color:      c,
            accent:     c,
            menuBg:     entry.menuBg     || 'rgba(8,8,8,0.97)',
            menuBorder: entry.menuBorder || c,
            menuGlow:   entry.menuGlow   || c + '33',
            textColor:  entry.textColor  || '#dddddd',
            titleColor: c,
            pillBg:     'rgba(8,8,8,0.85)',
            pillBorder: c + '55',
        };
    }

    _buildMenuCSS(t) {
        return `
            #dt-panel {
                background: ${t.menuBg};
                border: 1px solid ${t.menuBorder};
                box-shadow: 0 0 0 1px rgba(0,0,0,0.9), 0 10px 50px rgba(0,0,0,0.95), 0 0 28px ${t.menuGlow};
            }
            #dt-title {
                color: ${t.titleColor};
                text-shadow: 0 0 8px ${t.titleColor}99;
                border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            #dt-list { scrollbar-color: ${t.accent}44 transparent; }
            .dt-row.active {
                background: ${t.accent}14;
                border-left-color: ${t.accent};
            }
            .dt-row.active .dt-name {
                color: ${t.accent};
                text-shadow: 0 0 8px ${t.accent};
            }
            .dt-row.active .dt-check {
                background: ${t.accent};
                border-color: ${t.accent};
                color: #000;
            }
            .dt-row:hover { border-left-color: ${t.accent}55; }
            .dt-name  { color: ${t.textColor}; }
            .dt-check { border-color: ${t.accent}44; }
            #dt-pill {
                background: ${t.pillBg};
                border: 1px solid ${t.pillBorder};
                color: ${t.accent}99;
            }
            #dt-pill:hover {
                border-color: ${t.accent};
                color: ${t.accent};
                box-shadow: 0 0 8px ${t.menuGlow};
            }
            #dt-pill-dot {
                background: ${t.accent};
                box-shadow: 0 0 5px ${t.accent};
            }
        `;
    }

    _applyMenuStyle() {
        const entry = this.THEMES.find(t => t.name === this.activeName) || null;
        const t = this._themeVars(entry);
        BdApi.DOM.removeStyle(`${this.PLUGIN_NAME}-menu`);
        BdApi.DOM.addStyle(`${this.PLUGIN_NAME}-menu`, this._buildMenuCSS(t));
    }

    _buildPill() {
        if (document.getElementById('dt-pill')) return;
        const pill = document.createElement('div');
        pill.id = 'dt-pill';

        const dot = document.createElement('div');
        dot.id = 'dt-pill-dot';

        const label = document.createElement('span');
        label.id = 'dt-pill-label';
        label.textContent = 'THEMES';

        pill.appendChild(dot);
        pill.appendChild(label);
        pill.onclick = () => this._toggleMenu();
        document.body.appendChild(pill);
    }

    async _fetchCSS(theme) {
        if (this.cssCache[theme.name]) return this.cssCache[theme.name];
        const res = await fetch(theme.url);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const text = await res.text();
        this.cssCache[theme.name] = text;
        return text;
    }

    async _applyTheme(name) {
        const entry = this.THEMES.find(t => t.name === name);

        BdApi.DOM.removeStyle(`${this.PLUGIN_NAME}-active`);

        if (!entry) {
            this.activeName = null;
            BdApi.Data.save(this.PLUGIN_NAME, 'discord_theme', null);
            this._applyMenuStyle();
            this._syncRows();
            return;
        }

        this._setRowStatus(name, 'loading');
        let css;
        try {
            css = await this._fetchCSS(entry);
        } catch (e) {
            console.error('[DiscordThemes]', name, e);
            this._setRowStatus(name, 'error');
            return;
        }

        BdApi.DOM.addStyle(`${this.PLUGIN_NAME}-active`, css);
        this.activeName = name;
        BdApi.Data.save(this.PLUGIN_NAME, 'discord_theme', name);
        this._setRowStatus(name, '');
        this._applyMenuStyle();
        this._syncRows();
    }

    _guardActiveTheme() {
        if (!this.activeName) return;
        const styleId = `${this.PLUGIN_NAME}-active`;
        if (!document.getElementById(`bd-${styleId}`)) {
            const entry = this.THEMES.find(t => t.name === this.activeName);
            if (entry && this.cssCache[entry.name]) {
                BdApi.DOM.addStyle(styleId, this.cssCache[entry.name]);
            }
        }
    }

    _buildOverlay() {
        if (document.getElementById('dt-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'dt-overlay';
        overlay.onclick = e => { if (e.target === overlay) this._closeMenu(); };

        const panel = document.createElement('div');
        panel.id = 'dt-panel';

        const title = document.createElement('div');
        title.id = 'dt-title';
        title.innerHTML = '<span>Discord Themes</span><span id="dt-title-esc">ESC</span>';
        panel.appendChild(title);

        const list = document.createElement('div');
        list.id = 'dt-list';

        if (this.THEMES.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'dt-empty';
            empty.textContent = 'no themes loaded';
            list.appendChild(empty);
        } else {
            this.THEMES.forEach(theme => {
                const row = document.createElement('div');
                row.className = 'dt-row' + (theme.name === this.activeName ? ' active' : '');
                row.dataset.name = theme.name;

                const dot = document.createElement('div');
                dot.className = 'dt-dot';
                dot.style.background  = theme.color;
                dot.style.boxShadow   = '0 0 5px ' + theme.color;

                const nameSpan = document.createElement('span');
                nameSpan.className   = 'dt-name';
                nameSpan.textContent = theme.name;

                const check = document.createElement('div');
                check.className   = 'dt-check';
                check.textContent = theme.name === this.activeName ? '✓' : '';

                row.appendChild(dot);
                row.appendChild(nameSpan);
                row.appendChild(check);

                row.onclick = () => {
                    if (this.activeName === theme.name) {
                        this._applyTheme(null);
                    } else {
                        this._applyTheme(theme.name);
                    }
                };

                list.appendChild(row);
            });
        }

        panel.appendChild(list);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);
        this._applyMenuStyle();
    }

    _openMenu() {
        this._buildOverlay();
        const o = document.getElementById('dt-overlay');
        if (o) { o.classList.add('open'); this.menuOpen = true; }
    }

    _closeMenu() {
        const o = document.getElementById('dt-overlay');
        if (o) { o.classList.remove('open'); this.menuOpen = false; }
    }

    _toggleMenu() {
        if (this.menuOpen) this._closeMenu(); else this._openMenu();
    }

    _setRowStatus(name, state) {
        const row   = document.querySelector(`.dt-row[data-name="${CSS.escape(name)}"]`);
        if (!row) return;
        const check = row.querySelector('.dt-check');
        if (!check) return;
        if      (state === 'loading') check.textContent = '…';
        else if (state === 'error')   check.textContent = '!';
        else check.textContent = row.classList.contains('active') ? '✓' : '';
    }

    _syncRows() {
        document.querySelectorAll('.dt-row').forEach(row => {
            const isActive = row.dataset.name === this.activeName;
            row.classList.toggle('active', isActive);
            const check = row.querySelector('.dt-check');
            if (check) check.textContent = isActive ? '✓' : '';
        });
    }

    _onKeyDown(e) {
        if (e.key !== 'Escape') return;
        if (this.menuOpen) {
            e.stopPropagation();
            this._closeMenu();
            return;
        }
        if (document.querySelector('[class*="modal-"],[class*="popout-"]')) return;
        e.stopPropagation();
        this._openMenu();
    }
};