/**
 * @name ThemeSwitcher
 * @author Pagoni Hax
 * @description A sleek theme switcher panel for BetterDiscord. Press Escape to open.
 * @version 2.1.0
 * @source https://discord.gg/QcqX3TFGYs
 * @invite QcqX3TFGYs
 */

module.exports = (_ => {
    const config = {
        info: {
            name: 'ThemeSwitcher',
            authors: [{ name: 'Pagoni Hax', discord_id: '0' }],
            version: '2.1.0',
            description: 'A sleek inline theme switcher. Press Escape to open.',
        }
    };

    const THEMES = [
        { name: 'Kirito',           color: '#FF0000', css: ` :root,
            .visual-refresh,
            .visual-refresh.theme-dark {
                --rgb-highlight: 255, 0, 0;
                --highlight: rgb(var(--rgb-highlight));

                --rgb-background: 20, 0, 0;
                --background: rgb(var(--rgb-background));
                --text: rgb(255, 255, 255);

                --transition-time: 0.3s;

                --background-image: url('https://i.imgur.com/rsQuabC.png');
                --background-position: center;
                --background-size: cover;
                --background-blur: 3px;
                --background-brightness: 100%;

                --show-custom-title: 1;
                --custom-title-text: "GGO Kirito";
                --custom-title-font-size: 16px;
                --custom-title-font-weight: bold;
            }

            html, body {
                font-family: Arial, sans-serif;
            }

            .theme-dark body {
                background-color: var(--background);
                background-image: var(--background-image);
                background-position: var(--background-position);
                background-size: var(--background-size);
                backdrop-filter: blur(var(--background-blur)) brightness(var(--background-brightness));
            }

            .theme-dark .appMount__51fd7,
            .theme-dark .app__160d8,
            .theme-dark .bg__960e4,
            .theme-dark .guilds_c48ade,
            .theme-dark .scroller_ef3116,
            .theme-dark .sidebar_c48ade,
            .theme-dark .sidebar_c48ade::after,
            .theme-dark .container__2637a,
            .theme-dark .chat_f75fb0,
            .theme-dark .chatContent_f75fb0,
            .theme-dark .title_f75fb0,
            .theme-dark .searchBar__97492,
            .theme-dark .container_c8ffbb,
            .theme-dark .members_c8ffbb,
            .theme-dark .content_f75fb0,
            .theme-dark .container__91a9d,
            .theme-dark .channelTextArea__74017,
            .theme-dark .container__133bf,
            .theme-dark .section__00943,
            .theme-dark .nowPlayingColumn__133bf,
            .theme-dark .container__7d20c,
            .theme-dark .itemCard__7e549,
            .theme-dark .inset_bf1984,
            .theme-dark .container__9293f,
            .theme-dark .privateChannels__35e86,
            .theme-dark .scroller__99e7c,
            .theme-dark .layer__960e4,
            .theme-dark .standardSidebarView__23e6b,
            .theme-dark .sidebarRegionScroller__23e6b,
            .theme-dark .contentRegion__23e6b,
            .theme-dark .contentRegionScroller__23e6b,
            .theme-dark .container__4a84a,
            .theme-dark .stickyHeader_adb41f,
            .theme-dark .scroller_fb04e,
            .theme-dark .pageWrapper_a3a4ce,
            .theme-dark .footer__214dc,
            .theme-dark .container_f369db {
                background: rgba(0, 0, 0, 0) !important;
            }

            .theme-dark .numberBadge__2b1f5 {
                background-color: var(--highlight) !important;
                color: white;
            }

            .theme-dark .mention,
            .theme-dark .channelMention .name_b52c3f {
                background-color: rgba(255, 0, 0, 0.3);
                color: var(--highlight);
            }

            .theme-dark .lookFilled__201d5:not(.shinyButton__6a443) {
                background-color: var(--highlight) !important;
            }

            .title_c38106::before {
                position: fixed;
                left: 10px;
                color: var(--highlight);
                content: var(--custom-title-text);
                font-size: calc(var(--custom-title-font-size) * var(--show-custom-title));
                font-weight: var(--custom-title-font-weight);
                display: block;
                text-shadow: 0 0 6px rgba(var(--rgb-highlight), 0.95), 0 0 18px rgba(var(--rgb-highlight), 0.22);
            }` },
        { name: 'Fallout Terminal', color: '#4AEF98', css: `:root,
            .visual-refresh,
            .visual-refresh.theme-dark {
                --rgb-highlight: 74, 239, 152;
                --highlight: rgb(var(--rgb-highlight));

                --rgb-background: 0, 9, 0;
                --background: rgb(var(--rgb-background));
                --text: rgb(var(--rgb-highlight));

                --rgb-close-button: 212, 18, 39;
                --close-button: rgb(var(--rgb-close-button));

                --rgb-online-color: 57, 255, 20;
                --online-color: rgb(var(--rgb-online-color));

                --rgb-afk-color: 255, 255, 51;
                --afk-color: rgb(var(--rgb-afk-color));

                --rgb-dnd-color: 255, 0, 0;
                --dnd-color: rgb(var(--rgb-dnd-color));

                --rgb-streaming-color: 188, 19, 254;
                --streaming-color: rgb(var(--rgb-streaming-color));

                --transition-time: 0.3s;

                --background-image: unset;
                --background-position: center;
                --background-size: cover;
                --background-blur: 5px;
                --background-brightness: 100%;

                --show-original-title: 0;
                --show-custom-title: 1;
                --custom-title-text: "ROBCO Industries (tm)";
                --custom-title-font-size: 16px;
                --custom-title-font-weight: bold;
                --custom-title-margin-top: 0px;
                --custom-title-margin-left: 0px;
            }

            html, body {
                font-family: "Share Tech Mono", monospace;
            }

            .theme-dark body {
                background-color: var(--background);
                background-image: var(--background-image);
                background-position: var(--background-position);
                background-size: var(--background-size);
                backdrop-filter: blur(var(--background-blur)) brightness(var(--background-brightness));
            }

            body::after {
                content: " ";
                display: block;
                position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                background:
                    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                    linear-gradient(90deg,
                        rgba(255, 0, 0, 0.06),
                        rgba(0, 255, 0, 0.02),
                        rgba(0, 0, 255, 0.06)
                    );
                z-index: 2;
                background-size: 100% 2px, 3px 100%;
                pointer-events: none;
            }

            body {
                box-shadow: 0 0 60px 10px rgba(74, 239, 152, 0.5) inset;
                text-shadow: 0 0 6px rgba(var(--rgb-highlight), 0.95), 0 0 20px rgba(var(--rgb-highlight), 0.35);
            }

            .theme-dark body,
            .theme-dark span,
            .theme-dark p,
            .theme-dark a,
            .theme-dark h1,
            .theme-dark h2,
            .theme-dark h3,
            .theme-dark .title_c38106,
            .theme-dark .header_c19a55,
            .theme-dark .info__2debe,
            .theme-dark .message-2qnXI6,
            .theme-dark .messageContent-2qWWxC,
            .theme-dark .username {
                color: var(--text) !important;
                text-shadow: 0 0 6px rgba(var(--rgb-highlight), 0.95), 0 0 20px rgba(var(--rgb-highlight), 0.35);
            }

            .title_c38106::before {
                position: fixed;
                left: 10px;
                color: var(--highlight);
                content: var(--custom-title-text);
                font-size: calc(var(--custom-title-font-size) * var(--show-custom-title));
                font-weight: var(--custom-title-font-weight);
                margin-top: var(--custom-title-margin-top);
                margin-left: var(--custom-title-margin-left);
                display: block;
                text-shadow: 0 0 6px rgba(var(--rgb-highlight), 0.95), 0 0 24px rgba(var(--rgb-highlight), 0.42);
            }

            .info__2debe:last-child::after {
                content: "Fallout 4 Terminal 4.0.1";
                font-size: 12px;
                line-height: 16px;
                color: rgb(var(--rgb-highlight));
            }` },
        { name: 'CyberPunk',        color: '#FF003C', css: ` @font-face {
              font-family: 'Rajdhani';
              font-style: normal;
              font-weight: 400;
              src: url(https://fonts.gstatic.com/s/rajdhani/v16/LDIxapCSOBg7S-QT7p4HM-Y.woff2) format('woff2');
            }

            @import url('https://patrykbielanin.github.io/discord-cyberpunk2077-theme/base.css');

            :root {
                --background-primary: linear-gradient(180deg, rgba(23,0,5,.75) 10%, rgba(0,0,0,1) 65%);
                --background-secondary: linear-gradient(180deg, rgba(23,0,5,.75) 10%, rgba(0,0,0,1) 65%);
                --font-primary: 'Rajdhani';
                --primary-text-color: lightgray;

                --primary: 23, 13, 22;
                --red: 255, 0, 60;
                --yellow: 243, 230, 0;
                --green: 71, 213, 139;
                --dark-green: 56, 171, 111;

                --neon-red-color: rgb(var(--red));
                --neon-yellow-color: rgb(var(--yellow));
                --neon-green-color: rgb(var(--green));

                --avatar-circle: 0;
                --avatar-rounded: 5px;
                --avatar-border: 1px solid var(--neon-red-color);
            }

            body {
                font-family: 'Rajdhani', sans-serif !important;
                color: var(--primary-text-color) !important;
            }

            :root {
              --glow-halo-size: 6px;
              --glow-soft-size: 20px;
              --glow-opacity-halo: 0.95;
              --glow-opacity-soft: 0.28;
            }

            .theme-dark body,
            .theme-dark span,
            .theme-dark p,
            .theme-dark a,
            .theme-dark h1,
            .theme-dark h2,
            .theme-dark h3,
            .theme-dark .title_f75fb0,
            .theme-dark .header_f37cb1,
            .theme-dark .message-2qnXI6,
            .theme-dark .messageContent-2qWWxC,
            .theme-dark .contents_c19a55,
            .theme-dark .markup__75297,
            .theme-dark .timestamp_c19a55 time {
              color: var(--primary-text-color) !important;
              text-shadow:
                0 0 var(--glow-halo-size) rgba(var(--red), var(--glow-opacity-halo)),
                0 0 var(--glow-soft-size) rgba(var(--red), var(--glow-opacity-soft));
              transition: text-shadow 0.25s ease;
            }

            .theme-dark .username_c19a55,
            .theme-dark .username,
            .theme-dark .name__2ea32,
            .theme-dark .name__29444 {
              color: rgb(var(--yellow)) !important;
              text-shadow:
                0 0 calc(var(--glow-halo-size) * 0.8) rgba(var(--yellow), 0.98),
                0 0 calc(var(--glow-soft-size) * 0.9) rgba(var(--yellow), 0.30);
              font-weight: 700 !important;
            }

            .theme-dark .markup__75297 code,
            .theme-dark .container_b7e1cb .embedWrapper_b7e1cb,
            .theme-dark .message-2qnXI6 .messageContent-2qWWxC .markup__75297 {
              text-shadow:
                0 0 4px rgba(var(--green), 0.9),
                0 0 18px rgba(var(--green), 0.18);
            }

            .title_f75fb0,
            .toolbar__9293f,
            .topic__6ec1a,
            .headerContent_f37cb1 {
              text-shadow:
                0 0 8px rgba(var(--red), 1),
                0 0 28px rgba(var(--red), 0.35);
            }

            #app-mount, .theme-dark body {
              box-shadow: inset 0 0 60px rgba(var(--primary), 0.08);
            }

            .cyber-glow-strong .theme-dark span,
            .cyber-glow-strong .theme-dark p,
            .cyber-glow-strong .theme-dark a,
            .cyber-glow-strong .theme-dark .messageContent-2qWWxC {
              text-shadow:
                0 0 8px rgba(var(--red), 1),
                0 0 36px rgba(var(--red), 0.45);
            }

            small, .small-2cP0Jg, .meta-1bd2Aw {
              text-shadow:
                0 0 3px rgba(var(--red), 0.9),
                0 0 10px rgba(var(--red), 0.18) !important;
            }
` },
        { name: 'Hax',              color: '#FF003C', css: `:root,
.visual-refresh,
.visual-refresh.theme-dark {
  --hax-bg-gradient: linear-gradient(180deg, rgba(23,0,5,.85) 6%, rgba(0,0,0,1) 75%);
  --hax-red: 255,0,60;
  --hax-blue: 114,234,248;

  --bg-r: 5,3,7;
  --text-r: 255,160,170;

  --scan-opacity: 0.06;
  --glow-opacity: 0.18;
  --crt-shift: 1.6px;

  --custom-title-text: "Hax";
  --custom-title-font-size: 16px;
  --custom-title-font-weight: bold;
}

.theme-dark body {
  background: var(--hax-bg-gradient) !important;
  color: rgb(var(--text-r)) !important;
  font-family: 'Rajdhani', "Share Tech Mono", monospace !important;
}

body::after {
  content: " ";
  display: block;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  pointer-events: none;
  z-index: 2;
  background:
    radial-gradient(60% 60% at 50% 45%, rgba(255,0,60,0.02) 0%, rgba(0,0,0,0.55) 60%),
    linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.0) 25%),
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255,0,60,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06));
  background-size: auto, auto, 100% 2px, 3px 100%;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0px,
      rgba(0,0,0,var(--scan-opacity)) 1px,
      rgba(0,0,0,0) 2px
    );
  mix-blend-mode: multiply;
  animation: hax-scan 10s linear infinite;
}
@keyframes hax-scan { 0% { background-position: 0 0; } 100% { background-position: 0 9999px; } }

.title_c38106::before,
.title_f75fb0::before {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 9999;
  color: rgb(var(--hax-red));
  content: var(--custom-title-text);
  font-size: var(--custom-title-font-size);
  font-weight: var(--custom-title-font-weight);
  display: block;
  text-shadow: 0 0 6px rgba(255,0,60,0.95), 0 0 20px rgba(255,0,60,0.35);
  pointer-events: none;
}

[class*="terminal"], [class*="Terminal"], .robo-header, .robo-title, .fallout-terminal, .terminal-window, .theme-terminal {
  background: rgba(var(--bg-r), 0.95) !important;
  color: rgb(var(--text-r)) !important;
  border-radius: 6px;
  border: 1px solid rgba(114,234,248,0.06);
  box-shadow:
    0 0 28px rgba(255,0,60,var(--glow-opacity)),
    inset 0 0 30px rgba(255,0,60,calc(var(--glow-opacity) * 0.6));
  position: relative;
  overflow: hidden;
}

.theme-dark .markup__75297,
.theme-dark .messageContent-2qWWxC,
.theme-dark .title_f75fb0,
.theme-dark .header_f37cb1,
.theme-dark .username_c19a55,
.theme-dark .username {
  color: rgb(var(--text-r)) !important;
  text-shadow:
    0 0 6px rgba(255,0,60,0.45),
    0 0 14px rgba(255,0,60,0.12),
    0 0 28px rgba(114,234,248,0.06);
}

.theme-dark .lookFilled__201d5:not(.shinyButton__6a443),
.theme-dark .numberBadge__2b1f5,
.theme-dark .mention,
.theme-dark .channelMention {
  background: transparent !important;
  border: 1px solid rgba(255,0,60,0.9) !important;
  color: rgb(255,0,60) !important;
  text-shadow: 0 0 8px rgba(255,0,60,0.6);
}

.terminal .cursor, .terminal-caret, .messageContent-2qWWxC .cursor {
  background: linear-gradient(90deg, rgba(255,0,60,1), rgba(114,234,248,0.95));
  box-shadow: 0 0 12px rgba(255,0,60, .6);
  width: 10px; height: 18px; border-radius: 2px;
}
::selection {
  background: rgba(255,0,60, 0.18);
  color: white;
}

@keyframes hax-flicker {
  0% { opacity: 1; }
  6% { opacity: 0.97; }
  8% { opacity: 0.92; }
  10% { opacity: 0.99; }
  100% { opacity: 0.995; }
}
[class*="terminal"], .robo-header, .robo-title, .fallout-terminal {
  animation: hax-flicker 6s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  body::before, body::after, [class*="terminal"] { animation: none !important; }
}

@media (max-width: 800px) {
  .title_c38106::before { font-size: 13px; left: 8px; top: 6px; }
  .theme-dark .messageContent-2qWWxC { font-size: 12px; }
}` },
        { name: 'Newbie',           color: '#6A0DAD', css: `:root {
  --newbie-bg: #0a0a12;
  --newbie-bg2: #141427;
  --newbie-sec: #6a0dad;
  --newbie-links: #4da6ff;
  --newbie-home-icon: url(https://i.imgur.com/RvlNQ7k.png);
  --newbie-background: url(https://i.imgur.com/3gIYB9i.jpeg);
  --glow-purple: 106, 13, 173;
}
.appMount__51fd7,
.app__160d8,
.bg__960e4 {
  background-color: var(--newbie-bg) !important;
  background-image: var(--newbie-background) !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  box-shadow: inset 0 0 80px rgba(var(--glow-purple), 0.4),
              0 0 40px rgba(var(--glow-purple), 0.25);
}
.theme-dark .sidebar_c48ade,
.theme-dark .container__2637a,
.theme-dark .members_c8ffbb,
.theme-dark .container_c8ffbb {
  background-color: rgba(20, 20, 39, 0.55) !important;
  box-shadow: inset 0 0 60px rgba(var(--glow-purple), 0.2);
}
/* Chat area transparency */
#app-mount,
[class*="chat"],
[class*="content"],
[class*="messages"],
[class*="scroller"],
[class*="scrollerInner"],
[class*="scrollerContent"],
[class*="messagesWrapper"],
[class*="chatContent"],
[class*="uploadArea"],
[class*="outer"] {
  background-color: transparent !important;
  background: transparent !important;
}
.theme-dark .numberBadge__2b1f5,
.theme-dark .mention,
.theme-dark .channelMention {
  background-color: var(--newbie-sec) !important;
  color: #fff !important;
  text-shadow: 0 0 6px rgba(var(--glow-purple), 0.95),
               0 0 20px rgba(var(--glow-purple), 0.35);
}
.theme-dark a,
.theme-dark .markup__75297 a,
.theme-dark .username {
  color: var(--newbie-links) !important;
  text-shadow: 0 0 6px rgba(77, 166, 255, 0.95),
               0 0 20px rgba(77, 166, 255, 0.35);
}
.theme-dark span,
.theme-dark p,
.theme-dark h1,
.theme-dark h2,
.theme-dark h3 {
  color: #e0e0ff !important;
  text-shadow: 0 0 6px rgba(var(--glow-purple), 0.95),
               0 0 20px rgba(var(--glow-purple), 0.35);
}
.theme-dark .channelTextArea__74017,
.theme-dark .searchBar__97492 {
  background-color: rgba(20, 20, 39, 0.65) !important;
  color: #fff !important;
  box-shadow: inset 0 0 25px rgba(var(--glow-purple), 0.3);
}
.theme-dark .layer__960e4,
.theme-dark .standardSidebarView__23e6b,
.theme-dark .contentRegion__23e6b,
.theme-dark .footer__214dc {
  background-color: rgba(10, 10, 18, 0.45) !important;
  box-shadow: 0 0 50px rgba(var(--glow-purple), 0.25);
}
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
::-webkit-scrollbar-track {
  background: var(--newbie-bg2) !important;
}
::-webkit-scrollbar-thumb {
  background: var(--newbie-links) !important;
  border-radius: 4px !important;
  box-shadow: 0 0 8px rgba(77, 166, 255, 0.7);
}
.theme-dark .members_c8ffbb,
.theme-dark .member_c8ffbb,
.theme-dark .memberInner__55c99 {
  background-color: rgba(20, 20, 39, 0.55) !important;
  color: #fff !important;
  text-shadow: 0 0 4px rgba(var(--glow-purple), 0.8);
}
.theme-dark .member_c8ffbb:hover {
  background-color: rgba(106, 13, 173, 0.6) !important;
  color: #fff !important;
  text-shadow: 0 0 8px rgba(var(--glow-purple), 1),
               0 0 24px rgba(var(--glow-purple), 0.45);
}
.theme-dark .members_c8ffbb .member_c8ffbb .username {
  color: var(--newbie-links) !important;
  text-shadow: 0 0 6px rgba(77, 166, 255, 0.95),
               0 0 20px rgba(77, 166, 255, 0.35);
}` },
        { name: 'TIO',              color: '#CC0000', css: `:root {
  --tso-bg: #000000;
  --tso-bg2: #0a0000;
  --tso-sec: #8b0000;
  --tso-links: #cc0000;
  --tso-text: #c0a0a0;
  --tso-background: url(https://i.imgur.com/JerfRFn.png);
  --glow-red: 139, 0, 0;
}
.appMount__51fd7,
.app__160d8,
.bg__960e4 {
  background-color: var(--tso-bg) !important;
  background-image: var(--tso-background) !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  box-shadow: inset 0 0 120px rgba(var(--glow-red), 0.6),
              0 0 60px rgba(var(--glow-red), 0.3);
}
.theme-dark .sidebar_c48ade,
.theme-dark .container__2637a,
.theme-dark .members_c8ffbb,
.theme-dark .container_c8ffbb {
  background-color: rgba(10, 0, 0, 0.55) !important;
  box-shadow: inset 0 0 60px rgba(var(--glow-red), 0.2);
}
#app-mount,
[class*="chat"],
[class*="content"],
[class*="messages"],
[class*="scroller"],
[class*="scrollerInner"],
[class*="scrollerContent"],
[class*="messagesWrapper"],
[class*="chatContent"],
[class*="uploadArea"],
[class*="outer"] {
  background-color: transparent !important;
  background: transparent !important;
}
.theme-dark .numberBadge__2b1f5,
.theme-dark .mention,
.theme-dark .channelMention {
  background-color: var(--tso-sec) !important;
  color: #fff !important;
  text-shadow: 0 0 6px rgba(var(--glow-red), 0.95),
               0 0 20px rgba(var(--glow-red), 0.35);
}
.theme-dark a,
.theme-dark .markup__75297 a {
  color: var(--tso-links) !important;
  text-shadow: 0 0 6px rgba(200, 0, 0, 0.95),
               0 0 20px rgba(200, 0, 0, 0.35);
}
.theme-dark .username,
.theme-dark .username_c19a55,
.theme-dark .name__2ea32,
.theme-dark .name__29444 {
  color: #cc0000 !important;
  text-shadow:
    0 0 6px rgba(180, 0, 0, 0.98),
    0 0 18px rgba(139, 0, 0, 0.55),
    0 0 40px rgba(100, 0, 0, 0.25);
  font-weight: 700 !important;
}
.theme-dark span,
.theme-dark p,
.theme-dark h1,
.theme-dark h2,
.theme-dark h3 {
  color: var(--tso-text) !important;
  text-shadow: 0 0 4px rgba(var(--glow-red), 0.6),
               0 0 12px rgba(var(--glow-red), 0.2);
}
.theme-dark .markup__75297,
.theme-dark .messageContent-2qWWxC {
  color: var(--tso-text) !important;
  text-shadow: 0 0 4px rgba(var(--glow-red), 0.5),
               0 0 10px rgba(var(--glow-red), 0.15);
}
.theme-dark .channelTextArea__74017,
.theme-dark .searchBar__97492 {
  background-color: rgba(10, 0, 0, 0.75) !important;
  color: #fff !important;
  box-shadow: inset 0 0 25px rgba(var(--glow-red), 0.3);
}
.theme-dark .layer__960e4,
.theme-dark .standardSidebarView__23e6b,
.theme-dark .contentRegion__23e6b,
.theme-dark .footer__214dc {
  background-color: rgba(5, 0, 0, 0.5) !important;
  box-shadow: 0 0 50px rgba(var(--glow-red), 0.25);
}
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
::-webkit-scrollbar-track {
  background: rgba(10, 0, 0, 0.8) !important;
}
::-webkit-scrollbar-thumb {
  background: #8b0000 !important;
  border-radius: 4px !important;
  box-shadow: 0 0 8px rgba(139, 0, 0, 0.8);
}
.theme-dark .members_c8ffbb,
.theme-dark .member_c8ffbb,
.theme-dark .memberInner__55c99 {
  background-color: rgba(10, 0, 0, 0.55) !important;
  color: var(--tso-text) !important;
  text-shadow: 0 0 4px rgba(var(--glow-red), 0.8);
}
.theme-dark .member_c8ffbb:hover {
  background-color: rgba(139, 0, 0, 0.5) !important;
  color: #fff !important;
  text-shadow: 0 0 8px rgba(var(--glow-red), 1),
               0 0 24px rgba(var(--glow-red), 0.45);
}
.theme-dark .members_c8ffbb .member_c8ffbb .username {
  color: #cc0000 !important;
  text-shadow: 0 0 6px rgba(180, 0, 0, 0.95),
               0 0 20px rgba(139, 0, 0, 0.45);
}` },
        { name: 'Luna',             color: '#6A0DAD', css: `:root,
.visual-refresh,
.visual-refresh.theme-dark {
  --luna-bg: #0a0a12;
  --luna-bg2: #141427;
  --luna-sec: #6a0dad;
  --luna-links: #4da6ff;
  --glow-purple: 106, 13, 173;

  --rgb-highlight: 255, 0, 0;
  --highlight: rgb(var(--rgb-highlight));

  --rgb-background: 20, 0, 0;
  --background: rgb(var(--rgb-background));
  --text: rgb(255, 255, 255);

  --transition-time: 0.3s;

  --show-custom-title: 1;
  --custom-title-text: "Luna Marie";
  --custom-title-font-size: 16px;
  --custom-title-font-weight: bold;

  --luna-home-icon: url(https://i.imgur.com/RvlNQ7k.png);
}

html, body {
  font-family: Arial, sans-serif;
}

.theme-dark body {
  background-color: var(--luna-bg) !important;
}

.appMount__51fd7,
.app__160d8,
.bg__960e4 {
  background-color: var(--luna-bg) !important;
  box-shadow: inset 0 0 80px rgba(var(--glow-purple), 0.4),
              0 0 40px rgba(var(--glow-purple), 0.25);
}

.theme-dark .appMount__51fd7,
.theme-dark .app__160d8,
.theme-dark .bg__960e4,
.theme-dark .guilds_c48ade,
.theme-dark .scroller_ef3116,
.theme-dark .sidebar_c48ade,
.theme-dark .sidebar_c48ade::after,
.theme-dark .container__2637a,
.theme-dark .chat_f75fb0,
.theme-dark .chatContent_f75fb0,
.theme-dark .title_f75fb0,
.theme-dark .searchBar__97492,
.theme-dark .container_c8ffbb,
.theme-dark .members_c8ffbb,
.theme-dark .content_f75fb0,
.theme-dark .container__91a9d,
.theme-dark .channelTextArea__74017,
.theme-dark .container__133bf,
.theme-dark .section__00943,
.theme-dark .nowPlayingColumn__133bf,
.theme-dark .container__7d20c,
.theme-dark .itemCard__7e549,
.theme-dark .inset_bf1984,
.theme-dark .container__9293f,
.theme-dark .privateChannels__35e86,
.theme-dark .scroller__99e7c,
.theme-dark .layer__960e4,
.theme-dark .standardSidebarView__23e6b,
.theme-dark .sidebarRegionScroller__23e6b,
.theme-dark .contentRegion__23e6b,
.theme-dark .contentRegionScroller__23e6b,
.theme-dark .container__4a84a,
.theme-dark .stickyHeader_adb41f,
.theme-dark .scroller_fb04e,
.theme-dark .pageWrapper_a3a4ce,
.theme-dark .footer__214dc,
.theme-dark .container_f369db {
  background: rgba(0, 0, 0, 0) !important;
}

.theme-dark .sidebar_c48ade,
.theme-dark .container__2637a,
.theme-dark .chat_f75fb0,
.theme-dark .content_f75fb0,
.theme-dark .members_c8ffbb,
.theme-dark .container_c8ffbb {
  background-color: var(--luna-bg2) !important;
  box-shadow: inset 0 0 60px rgba(var(--glow-purple), 0.2);
}

.theme-dark .mention,
.theme-dark .channelMention {
  background-color: var(--luna-sec) !important;
  color: #fff !important;
  text-shadow: 0 0 6px rgba(var(--glow-purple), 0.95),
               0 0 20px rgba(var(--glow-purple), 0.35);
}

.theme-dark .numberBadge__2b1f5 {
  background-color: var(--luna-sec) !important;
  color: white !important;
  text-shadow: 0 0 6px rgba(var(--glow-purple), 0.95),
               0 0 18px rgba(var(--glow-purple), 0.35);
}

.theme-dark .channelMention .name_b52c3f {
  background-color: rgba(106, 13, 173, 0.3) !important;
  color: var(--luna-sec) !important;
}

.theme-dark .lookFilled__201d5:not(.shinyButton__6a443) {
  background-color: var(--luna-sec) !important;
  box-shadow: 0 0 12px rgba(var(--glow-purple), 0.6);
}

.theme-dark a,
.theme-dark .markup__75297 a,
.theme-dark .username {
  color: var(--luna-links) !important;
  text-shadow: 0 0 6px rgba(77, 166, 255, 0.95),
               0 0 20px rgba(77, 166, 255, 0.35);
}

.theme-dark span,
.theme-dark p,
.theme-dark h1,
.theme-dark h2,
.theme-dark h3 {
  color: var(--highlight) !important;
  text-shadow: 0 0 6px rgba(var(--rgb-highlight), 0.95),
               0 0 20px rgba(var(--rgb-highlight), 0.35);
}

.theme-dark .channelTextArea__74017,
.theme-dark .searchBar__97492 {
  background-color: var(--luna-bg2) !important;
  color: #fff !important;
  box-shadow: inset 0 0 25px rgba(var(--glow-purple), 0.3);
}

.theme-dark .layer__960e4,
.theme-dark .standardSidebarView__23e6b,
.theme-dark .contentRegion__23e6b,
.theme-dark .footer__214dc {
  background-color: var(--luna-bg) !important;
  box-shadow: 0 0 50px rgba(var(--glow-purple), 0.25);
}

::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
::-webkit-scrollbar-track {
  background: var(--luna-bg2) !important;
}
::-webkit-scrollbar-thumb {
  background: var(--luna-links) !important;
  border-radius: 4px !important;
  box-shadow: 0 0 8px rgba(77, 166, 255, 0.7);
}

.theme-dark .members_c8ffbb,
.theme-dark .member_c8ffbb,
.theme-dark .memberInner__55c99 {
  background-color: var(--luna-bg2) !important;
  color: var(--highlight) !important;
  text-shadow: 0 0 4px rgba(var(--rgb-highlight), 0.8);
}

.theme-dark .member_c8ffbb:hover {
  background-color: var(--luna-sec) !important;
  color: var(--highlight) !important;
  text-shadow: 0 0 8px rgba(var(--rgb-highlight), 1),
               0 0 24px rgba(var(--rgb-highlight), 0.45);
}

.theme-dark .members_c8ffbb .member_c8ffbb .username {
  color: var(--luna-links) !important;
  text-shadow: 0 0 6px rgba(77, 166, 255, 0.95),
               0 0 20px rgba(77, 166, 255, 0.35);
}

.title_c38106::before {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 9999;
  color: var(--luna-sec);
  content: "Luna";
  font-size: calc(var(--custom-title-font-size) * var(--show-custom-title));
  font-weight: var(--custom-title-font-weight);
  display: block;
  text-shadow: 0 0 6px rgba(var(--glow-purple), 0.95),
               0 0 18px rgba(var(--glow-purple), 0.35);
}

.title_c38106::after {
  position: fixed;
  left: 52px;
  top: 10px;
  z-index: 9999;
  color: var(--highlight);
  content: " Marie";
  font-size: calc(var(--custom-title-font-size) * var(--show-custom-title));
  font-weight: var(--custom-title-font-weight);
  display: block;
  text-shadow: 0 0 6px rgba(var(--rgb-highlight), 0.95),
               0 0 18px rgba(var(--rgb-highlight), 0.22);
}` },
        { name: 'Blisma Corp',      color: '#f0b429', css: `@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Nunito:wght@400;500;600&family=Fira+Code&display=swap');

:root {
  --bc-background: url("https://i.imgur.com/KjO9m18.png");
  --bc-bg:         #00090f;
  --bc-gold:       #f0b429;
  --bc-gold-glow:  255, 180, 40;
  --bc-gold2:      #ffdc6e;
  --bc-blue:       #3b9eff;
  --bc-purple:     #8b5cf6;
  --bc-green:      #4ade80;
  --bc-text:       #c8d0e8;
  --bc-muted:      #7a82a0;
  --bc-border:     rgba(240, 180, 41, 0.22);
}

.appMount__51fd7,
.app__160d8,
.bg__960e4 {
  background-color: var(--bc-bg) !important;
  background-image: var(--bc-background) !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}

#app-mount,
[class*="chat"],
[class*="content"],
[class*="messages"],
[class*="scroller"],
[class*="scrollerInner"],
[class*="scrollerContent"],
[class*="messagesWrapper"],
[class*="chatContent"],
[class*="uploadArea"],
[class*="outer"],
[class*="base"],
[class*="layers"],
[class*="layer"] {
  background-color: transparent !important;
  background: transparent !important;
}

.theme-dark .sidebar_c48ade,
.theme-dark .container__2637a,
.theme-dark .members_c8ffbb,
.theme-dark .container_c8ffbb,
[class*="sidebar"],
[class*="guilds"],
[class*="members"],
[class*="panels"] {
  background-color: transparent !important;
}

.theme-dark .standardSidebarView__23e6b,
.theme-dark .contentRegion__23e6b,
.theme-dark .layer__960e4,
.theme-dark .footer__214dc {
  background-color: transparent !important;
}

.theme-dark .channelTextArea__74017,
.theme-dark .searchBar__97492,
[class*="channelTextArea"],
[class*="searchBar"] {
  background-color: rgba(0, 9, 15, 0.72) !important;
  border: 1px solid var(--bc-border) !important;
  border-radius: 10px !important;
  box-shadow: inset 0 0 20px rgba(var(--bc-gold-glow), 0.08) !important;
}

[class*="channelTextArea"]:focus-within,
[class*="searchBar"]:focus-within {
  border-color: var(--bc-gold) !important;
  box-shadow: 0 0 0 2px rgba(var(--bc-gold-glow), 0.2),
              inset 0 0 20px rgba(var(--bc-gold-glow), 0.1) !important;
}

.theme-dark .username,
.theme-dark .username_c19a55,
.theme-dark .name__2ea32,
.theme-dark .name__29444,
[class*="username"],
[class*="headerText"] {
  color: var(--bc-gold) !important;
  font-family: 'Cinzel', serif !important;
  font-weight: 600 !important;
  text-shadow:
    0 0 6px rgba(var(--bc-gold-glow), 0.9),
    0 0 18px rgba(var(--bc-gold-glow), 0.4) !important;
}

.theme-dark span,
.theme-dark p,
[class*="markup"],
[class*="messageContent"] {
  color: var(--bc-text) !important;
}

.theme-dark a,
[class*="anchor"] {
  color: var(--bc-blue) !important;
}

.theme-dark a:hover,
[class*="anchor"]:hover {
  color: var(--bc-gold) !important;
}

.theme-dark .numberBadge__2b1f5,
.theme-dark .mention,
.theme-dark .channelMention,
[class*="numberBadge"],
[class*="mention"] {
  background: linear-gradient(135deg, #c9920e, var(--bc-gold)) !important;
  color: #1a1000 !important;
  font-weight: 700 !important;
  text-shadow: none !important;
}

[class*="message"]:hover,
[class*="cozyMessage"]:hover {
  background: rgba(var(--bc-gold-glow), 0.04) !important;
  border-left: 2px solid rgba(var(--bc-gold-glow), 0.3) !important;
}

[class*="containerDefault"]:hover,
[class*="containerDefault"][class*="modeSelected"] {
  background: rgba(var(--bc-gold-glow), 0.1) !important;
  border-radius: 6px !important;
}

[class*="containerDefault"][class*="modeSelected"] [class*="name"] {
  color: var(--bc-gold2) !important;
}

[class*="categoryContainer"] [class*="name"],
[class*="membersGroup"] {
  color: var(--bc-gold) !important;
  font-family: 'Cinzel', serif !important;
  font-size: 11px !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
}

[class*="reaction"] {
  background: rgba(0, 9, 15, 0.6) !important;
  border: 1px solid var(--bc-border) !important;
  border-radius: 20px !important;
}

[class*="reaction"]:hover {
  background: rgba(var(--bc-gold-glow), 0.15) !important;
  border-color: var(--bc-gold) !important;
}

[class*="reactionMe"] {
  background: rgba(var(--bc-gold-glow), 0.2) !important;
  border-color: var(--bc-gold) !important;
}

[class*="embed"] {
  background: rgba(0, 9, 15, 0.65) !important;
  border-left: 3px solid var(--bc-gold) !important;
  border-radius: 0 8px 8px 0 !important;
}

[class*="popout"],
[class*="menu"],
[class*="tooltip"] {
  background: rgba(5, 12, 25, 0.97) !important;
  border: 1px solid var(--bc-border) !important;
  border-radius: 10px !important;
  box-shadow: 0 8px 40px rgba(0,0,0,0.7),
              0 0 0 1px rgba(var(--bc-gold-glow), 0.1) !important;
  backdrop-filter: blur(12px) !important;
}

[class*="button"][class*="lookFilled"][class*="colorBrand"],
[class*="button"][class*="lookFilled"][class*="colorGreen"] {
  background: linear-gradient(135deg, #c9920e, var(--bc-gold)) !important;
  color: #1a1000 !important;
  font-family: 'Cinzel', serif !important;
  font-weight: 700 !important;
  border: none !important;
  box-shadow: 0 2px 12px rgba(var(--bc-gold-glow), 0.35) !important;
}

[class*="button"][class*="lookFilled"][class*="colorBrand"]:hover,
[class*="button"][class*="lookFilled"][class*="colorGreen"]:hover {
  background: linear-gradient(135deg, var(--bc-gold), var(--bc-gold2)) !important;
  box-shadow: 0 4px 20px rgba(var(--bc-gold-glow), 0.55) !important;
  transform: translateY(-1px) !important;
}

[class*="statusOnline"]  { background-color: var(--bc-green)  !important; }
[class*="statusIdle"]    { background-color: var(--bc-gold)   !important; }
[class*="statusDnd"]     { background-color: #f87171          !important; }
[class*="statusOffline"] { background-color: #4a5070          !important; }

[class*="speaking"] [class*="avatar"] {
  box-shadow: 0 0 0 2px var(--bc-green) !important;
}

::-webkit-scrollbar       { width: 4px !important; height: 4px !important; }
::-webkit-scrollbar-track { background: transparent !important; }
::-webkit-scrollbar-thumb { background: rgba(var(--bc-gold-glow), 0.4) !important; border-radius: 4px !important; }
::-webkit-scrollbar-thumb:hover { background: rgba(var(--bc-gold-glow), 0.7) !important; }

::selection {
  background: rgba(var(--bc-gold-glow), 0.3) !important;
  color: #fff !important;
}

code, pre {
  background: rgba(0, 9, 15, 0.9) !important;
  border: 1px solid var(--bc-border) !important;
  color: var(--bc-green) !important;
  font-family: 'Fira Code', monospace !important;
  border-radius: 4px !important;
}` },
    ];

    const PANEL_CSS = `
        #ts-overlay {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.72);
            backdrop-filter: blur(6px) saturate(0.7);
            align-items: center;
            justify-content: center;
        }
        #ts-overlay.ts-open {
            display: flex;
            animation: ts-fadein 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes ts-fadein {
            from { opacity: 0; transform: scale(0.93) translateY(-10px); }
            to   { opacity: 1; transform: scale(1)    translateY(0); }
        }

        #ts-panel {
            width: 280px;
            max-height: 480px;
            display: flex;
            flex-direction: column;
            border-radius: 6px;
            overflow: hidden;
            background: #0d0d0d;
            border: 1px solid #2a2a2a;
            box-shadow:
                0 0 0 1px rgba(0,0,0,0.9),
                0 20px 60px rgba(0,0,0,0.95),
                0 0 40px rgba(255,255,255,0.03);
            font-family: 'Share Tech Mono', 'Fira Code', 'Courier New', monospace;
        }

        #ts-header {
            flex-shrink: 0;
            padding: 10px 14px 9px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #1e1e1e;
            background: #0a0a0a;
        }
        #ts-header-left {
            display: flex;
            align-items: center;
            gap: 7px;
        }
        #ts-header-icon {
            width: 14px; height: 14px;
            opacity: 0.8;
        }
        #ts-title {
            font-size: 10px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: #aaaaaa;
        }
        #ts-version {
            font-size: 8px;
            opacity: 0.3;
            letter-spacing: 0.1em;
            color: #888;
            margin-left: 4px;
        }
        #ts-close {
            width: 18px; height: 18px;
            border-radius: 3px;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            color: #444;
            font-size: 14px;
            transition: color 0.1s, background 0.1s;
            line-height: 1;
            user-select: none;
        }
        #ts-close:hover { color: #ccc; background: rgba(255,255,255,0.06); }

        #ts-active-bar {
            flex-shrink: 0;
            padding: 5px 14px;
            font-size: 9px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #333;
            background: #0a0a0a;
            border-bottom: 1px solid #161616;
            display: flex; align-items: center; gap: 6px;
            min-height: 26px;
        }
        #ts-active-dot {
            width: 5px; height: 5px;
            border-radius: 50%;
            background: #333;
            flex-shrink: 0;
            transition: background 0.2s, box-shadow 0.2s;
        }
        #ts-active-label { transition: color 0.2s; }

        #ts-search-wrap {
            padding: 8px 10px;
            border-bottom: 1px solid #161616;
            background: #0a0a0a;
            flex-shrink: 0;
        }
        #ts-search {
            width: 100%;
            box-sizing: border-box;
            background: rgba(255,255,255,0.04);
            border: 1px solid #222;
            border-radius: 3px;
            padding: 5px 9px;
            color: #ccc;
            font-family: inherit;
            font-size: 10px;
            letter-spacing: 0.06em;
            outline: none;
            transition: border-color 0.15s;
        }
        #ts-search::placeholder { color: #333; }
        #ts-search:focus { border-color: #444; }

        #ts-list {
            overflow-y: auto;
            flex: 1;
            padding: 4px 0;
        }
        #ts-list::-webkit-scrollbar { width: 3px; }
        #ts-list::-webkit-scrollbar-track { background: transparent; }
        #ts-list::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }

        .ts-row {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 14px;
            cursor: pointer;
            border-left: 2px solid transparent;
            user-select: none;
            transition: background 0.08s, border-color 0.1s;
        }
        .ts-row:hover { background: rgba(255,255,255,0.03); }
        .ts-row.ts-active { background: rgba(255,255,255,0.05); }

        .ts-dot {
            width: 8px; height: 8px;
            border-radius: 50%;
            flex-shrink: 0;
            transition: box-shadow 0.2s;
        }
        .ts-row:not(.ts-active) .ts-dot { opacity: 0.55; }
        .ts-row.ts-active .ts-dot { opacity: 1; }

        .ts-name {
            flex: 1;
            font-size: 11px;
            letter-spacing: 0.06em;
            color: #777;
            transition: color 0.1s, text-shadow 0.2s;
        }
        .ts-row.ts-active .ts-name { color: #dddddd; }
        .ts-row:hover:not(.ts-active) .ts-name { color: #999; }

        .ts-badge {
            font-size: 8px;
            letter-spacing: 0.12em;
            padding: 1px 5px;
            border-radius: 2px;
            border: 1px solid #222;
            color: #333;
            text-transform: uppercase;
            opacity: 0;
            transition: opacity 0.15s;
        }
        .ts-row.ts-active .ts-badge { opacity: 1; }

        .ts-check {
            width: 14px; height: 14px;
            border-radius: 2px;
            border: 1px solid #252525;
            flex-shrink: 0;
            display: flex; align-items: center; justify-content: center;
            font-size: 9px;
            color: transparent;
            transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .ts-row.ts-active .ts-check { color: #000; }

        #ts-footer {
            flex-shrink: 0;
            padding: 7px 14px;
            border-top: 1px solid #141414;
            background: #080808;
            display: flex; align-items: center; justify-content: space-between;
        }
        .ts-footer-text {
            font-size: 8px;
            letter-spacing: 0.12em;
            color: #252525;
            text-transform: uppercase;
        }
        #ts-reset {
            font-size: 8px;
            letter-spacing: 0.12em;
            color: #333;
            cursor: pointer;
            text-transform: uppercase;
            transition: color 0.1s;
        }
        #ts-reset:hover { color: #888; }

        #ts-pill {
            position: fixed;
            bottom: 16px;
            left: 16px;
            z-index: 9998;
            display: flex; align-items: center; gap: 6px;
            padding: 4px 11px 4px 8px;
            border-radius: 3px;
            cursor: pointer;
            font-family: 'Share Tech Mono', monospace;
            font-size: 9px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            user-select: none;
            background: #0c0c0c;
            border: 1px solid #1e1e1e;
            color: #444;
            transition: border-color 0.15s, color 0.15s, box-shadow 0.15s;
        }
        #ts-pill:hover {
            color: #aaa;
            border-color: #333;
            box-shadow: 0 0 12px rgba(0,0,0,0.6);
        }
        #ts-pill-dot {
            width: 5px; height: 5px;
            border-radius: 50%;
            background: #2a2a2a;
            flex-shrink: 0;
            transition: background 0.25s, box-shadow 0.25s;
        }
    `;


    function hexToRgb(hex) {
        const m = hex.replace('#', '').match(/.{2}/g);
        return m ? m.map(x => parseInt(x, 16)) : [136, 136, 136];
    }

    function withAlpha(hex, a) {
        const [r, g, b] = hexToRgb(hex);
        return `rgba(${r},${g},${b},${a})`;
    }


    return class ThemeSwitcher {
        constructor() {
            this._activeName = BdApi.Data.load('ThemeSwitcher', 'activeName') || null;
            this._menuOpen   = false;
            this._keyHandler = null;
            this._observer   = null;
            this._styleKey   = 'ThemeSwitcher-styles';
            this._themeKey   = 'ThemeSwitcher-theme';
        }


        start() {
            BdApi.DOM.addStyle(this._styleKey, PANEL_CSS);
            this._buildPill();
            this._buildOverlay();

            this._keyHandler = e => this._onKey(e);
            document.addEventListener('keydown', this._keyHandler, true);

            this._observer = new MutationObserver(() => {
                if (!document.getElementById('ts-pill'))    this._buildPill();
                if (!document.getElementById('ts-overlay')) this._buildOverlay();
            });
            this._observer.observe(document.body, { childList: true, subtree: false });

            if (this._activeName && THEMES.find(t => t.name === this._activeName)) {
                this._applyTheme(this._activeName, true);
            }
            this._log('Started.');
        }

        stop() {
            document.removeEventListener('keydown', this._keyHandler, true);
            if (this._observer) { this._observer.disconnect(); this._observer = null; }

            BdApi.DOM.removeStyle(this._styleKey);
            BdApi.DOM.removeStyle(this._themeKey);

            const overlay = document.getElementById('ts-overlay');
            const pill    = document.getElementById('ts-pill');
            if (overlay) overlay.remove();
            if (pill)    pill.remove();

            this._log('Stopped.');
        }

        getSettingsPanel() {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;font-family:monospace;color:#ccc;';
            wrap.innerHTML = `
                <div style="margin-bottom:10px;font-size:12px;opacity:0.6;">
                    Press <kbd style="background:#222;padding:2px 6px;border-radius:3px;font-family:inherit;">ESC</kbd>
                    in Discord to open the theme switcher, or click the pill in the bottom-left corner.
                </div>
                <div style="font-size:11px;opacity:0.4;">${THEMES.length} themes loaded · v${config.info.version}</div>
            `;
            return wrap;
        }


        _buildOverlay() {
            if (document.getElementById('ts-overlay')) return;

            const overlay = document.createElement('div');
            overlay.id = 'ts-overlay';
            overlay.addEventListener('click', e => {
                if (e.target === overlay) this._closeMenu();
            });

            const panel = document.createElement('div');
            panel.id = 'ts-panel';

            const header = document.createElement('div');
            header.id = 'ts-header';
            header.innerHTML = `
                <div id="ts-header-left">
                    <svg id="ts-header-icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="7" r="5.5" stroke="#555" stroke-width="1"/>
                        <circle cx="7" cy="7" r="2" fill="#555"/>
                        <line x1="7" y1="1.5" x2="7" y2="3.5" stroke="#555" stroke-width="1"/>
                        <line x1="7" y1="10.5" x2="7" y2="12.5" stroke="#555" stroke-width="1"/>
                        <line x1="1.5" y1="7" x2="3.5" y2="7" stroke="#555" stroke-width="1"/>
                        <line x1="10.5" y1="7" x2="12.5" y2="7" stroke="#555" stroke-width="1"/>
                    </svg>
                    <span id="ts-title">Theme Switcher</span>
                    <span id="ts-version">v${config.info.version}</span>
                </div>
                <div id="ts-close" title="Close (ESC)">×</div>
            `;
            header.querySelector('#ts-close').addEventListener('click', () => this._closeMenu());
            panel.appendChild(header);

            const activeBar = document.createElement('div');
            activeBar.id = 'ts-active-bar';
            activeBar.innerHTML = `<div id="ts-active-dot"></div><span id="ts-active-label">no theme active</span>`;
            panel.appendChild(activeBar);

            const searchWrap = document.createElement('div');
            searchWrap.id = 'ts-search-wrap';
            const search = document.createElement('input');
            search.id = 'ts-search';
            search.type = 'text';
            search.placeholder = 'search themes…';
            search.addEventListener('input', () => this._filterRows(search.value));
            searchWrap.appendChild(search);
            panel.appendChild(searchWrap);

            const list = document.createElement('div');
            list.id = 'ts-list';
            THEMES.forEach(theme => list.appendChild(this._makeRow(theme)));
            panel.appendChild(list);

            const footer = document.createElement('div');
            footer.id = 'ts-footer';
            footer.innerHTML = `
                <span class="ts-footer-text">${THEMES.length} themes · esc to close</span>
                <span id="ts-reset">Reset</span>
            `;
            footer.querySelector('#ts-reset').addEventListener('click', () => this._applyTheme(null));
            panel.appendChild(footer);

            overlay.appendChild(panel);
            document.body.appendChild(overlay);
            this._syncUI();
        }

        _makeRow(theme) {
            const row = document.createElement('div');
            row.className = 'ts-row';
            row.dataset.name = theme.name;

            const dot = document.createElement('div');
            dot.className = 'ts-dot';
            dot.style.background = theme.color;
            dot.style.boxShadow  = `0 0 6px ${theme.color}`;

            const name = document.createElement('span');
            name.className = 'ts-name';
            name.textContent = theme.name;

            const badge = document.createElement('span');
            badge.className = 'ts-badge';
            badge.textContent = 'active';
            badge.style.borderColor = withAlpha(theme.color, 0.3);
            badge.style.color       = theme.color;

            const check = document.createElement('div');
            check.className = 'ts-check';
            check.textContent = '✓';

            row.appendChild(dot);
            row.appendChild(name);
            row.appendChild(badge);
            row.appendChild(check);

            row.addEventListener('click', () => {
                if (this._activeName === theme.name) this._applyTheme(null);
                else this._applyTheme(theme.name);
            });

            return row;
        }

        _buildPill() {
            if (document.getElementById('ts-pill')) return;
            const pill = document.createElement('div');
            pill.id = 'ts-pill';
            pill.innerHTML = `<div id="ts-pill-dot"></div><span id="ts-pill-label">themes</span>`;
            pill.addEventListener('click', () => this._toggleMenu());
            document.body.appendChild(pill);
        }


        _applyTheme(name, silent = false) {
            BdApi.DOM.removeStyle(this._themeKey);

            const entry = THEMES.find(t => t.name === name) || null;

            if (!entry) {
                this._activeName = null;
                BdApi.Data.save('ThemeSwitcher', 'activeName', null);
                this._syncUI();
                return;
            }

            const css = entry.css.trim();

            if (!css || css.startsWith('/*')) {
                BdApi.UI.showToast(`ThemeSwitcher: "${name}" has no CSS yet — paste it into the plugin file.`, { type: 'warning', timeout: 4000 });
                return;
            }

            BdApi.DOM.addStyle(this._themeKey, css);
            this._activeName = name;
            BdApi.Data.save('ThemeSwitcher', 'activeName', name);
            this._syncUI();

            if (!silent) BdApi.UI.showToast(`Theme: ${name}`, { type: 'success', timeout: 2000 });
        }


        _syncUI() {
            const entry = THEMES.find(t => t.name === this._activeName) || null;
            const color = entry ? entry.color : null;

            document.querySelectorAll('.ts-row').forEach(row => {
                const active = row.dataset.name === this._activeName;
                row.classList.toggle('ts-active', active);
                const c = THEMES.find(t => t.name === row.dataset.name)?.color || '#888';
                if (active) {
                    row.style.borderLeftColor = c;
                    const check = row.querySelector('.ts-check');
                    if (check) {
                        check.style.background  = c;
                        check.style.borderColor = c;
                    }
                } else {
                    row.style.borderLeftColor = 'transparent';
                    const check = row.querySelector('.ts-check');
                    if (check) {
                        check.style.background  = '';
                        check.style.borderColor = '';
                    }
                }
            });

            const dot   = document.getElementById('ts-active-dot');
            const label = document.getElementById('ts-active-label');
            if (dot && label) {
                if (color) {
                    dot.style.background  = color;
                    dot.style.boxShadow   = `0 0 6px ${color}`;
                    label.style.color     = color;
                    label.textContent     = this._activeName;
                } else {
                    dot.style.background  = '#333';
                    dot.style.boxShadow   = 'none';
                    label.style.color     = '#333';
                    label.textContent     = 'no theme active';
                }
            }

            const pillDot   = document.getElementById('ts-pill-dot');
            const pillLabel = document.getElementById('ts-pill-label');
            if (pillDot && pillLabel) {
                if (color) {
                    pillDot.style.background  = color;
                    pillDot.style.boxShadow   = `0 0 5px ${color}`;
                    pillLabel.textContent     = this._activeName;
                } else {
                    pillDot.style.background  = '#2a2a2a';
                    pillDot.style.boxShadow   = 'none';
                    pillLabel.textContent     = 'themes';
                }
            }
        }

        _filterRows(query) {
            const q = query.trim().toLowerCase();
            document.querySelectorAll('.ts-row').forEach(row => {
                const match = !q || row.dataset.name.toLowerCase().includes(q);
                row.style.display = match ? '' : 'none';
            });
        }


        _openMenu() {
            this._buildOverlay();
            const o = document.getElementById('ts-overlay');
            const s = document.getElementById('ts-search');
            if (o) { o.classList.add('ts-open'); this._menuOpen = true; }
            if (s) { s.value = ''; this._filterRows(''); setTimeout(() => s.focus(), 80); }
        }

        _closeMenu() {
            const o = document.getElementById('ts-overlay');
            if (o) { o.classList.remove('ts-open'); this._menuOpen = false; }
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


        _log(...a) { console.log  (`%c[ThemeSwitcher]`, 'color:#4AEF98;font-weight:bold', ...a); }
        _err(...a) { console.error(`%c[ThemeSwitcher]`, 'color:#ff4a4a;font-weight:bold', ...a); }
    };
})();
