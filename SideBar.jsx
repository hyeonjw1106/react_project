import "./App.css"

export default function SideBar() {
    return (
        <>
        <div className="sidebar-div">
            <button className="sidebar-home side-menu-button">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIGZvY3VzYWJsZT0iZmFsc2UiIGFyaWEtaGlkZGVuPSJ0cnVlIiBzdHlsZT0icG9pbnRlci1ldmVudHM6IG5vbmU7IGRpc3BsYXk6IGluaGVyaXQ7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48cGF0aCBkPSJtMTEuNDg1IDIuMTQzLTggNC44LTIgMS4yYTEgMSAwIDAwMS4wMyAxLjcxNEwzIDkuNTY3VjIwYTIgMiAwIDAwMiAyaDV2LThoNHY4aDVhMiAyIDAgMDAyLTJWOS41NjdsLjQ4NS4yOWExIDEgMCAwMDEuMDMtMS43MTRsLTItMS4yLTgtNC44YTEgMSAwIDAwLTEuMDMgMFoiPjwvcGF0aD48L3N2Zz4="
                width="28"
                height="28"
                alt="home"
                />
                <p> 홈 </p>
            </button>

            <button className="sidebar-shorts side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24'><path d='m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z'/></svg>"
                width="28"
                height="28"
                alt="shorts"
                />
                <p> Shorts </p>
            </button>

            <button className="sidebar-subs side-menu-button">
                <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22currentColor%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%3E%3Cpath%20d%3D%22M18%201H6a2%202%200%2000-2%202h16a2%202%200%2000-2-2Zm3%204H3a2%202%200%2000-2%202v13a2%202%200%20002%202h18a2%202%200%20002-2V7a2%202%200%2000-2-2ZM3%2020V7h18v13H3Zm13-6.5L10%2010v7l6-3.5Z%22/%3E%3C/svg%3E"
                width="28"
                height="28"
                alt="subscribe"
                />
                <p> 구독 </p>
            </button>

            <div className="separate-line"></div>

            <button className="sidebar-record side-menu-button">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik04Ljc2IDEuNDg3YTExIDExIDAgMTEtNy41NCAxMi43MDYgMSAxIDAgMDEuOTYtLjQgOSA5IDAgMDAxNC4yNTQgNS4zOEE5IDkgMCAwMDE2Ljc5IDQuMzggOSA5IDAgMDA0LjUxOCA3SDdhMSAxIDAgMDEwIDJIMVYzYTEgMSAwIDAxMiAwdjIuNjc4YTExIDExIDAgMDE1Ljc2LTQuMTkyWk0xMiA2YTEgMSAwIDAwLTEgMXY1LjU4bC41MDQuMjg4IDMuNSAyYTEgMSAwIDEwLjk5Mi0xLjczNkwxMyAxMS40MlY3YTEgMSAwIDAwLTEtMVoiPjwvcGF0aD48L3N2Zz4="
                width="28"
                height="28"
                alt="record"
                />
                <p> 기록 </p>
            </button>

            <button className="sidebar-list side-menu-button">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xNiAxNS4zOTVhLjUuNSAwIDAxLjc2Mi0uNDI2TDIyLjUgMTguNWwtNS43MzggMy41MzFhLjUuNSAwIDAxLS43NjItLjQyNXYtNi4yMTJaTTE0IDE5SDRhMSAxIDAgMTEwLTJoMTB2MlpNMTkgMTFhMSAxIDAgMTEwIDJINGEgMSAxIDAgMTEwLTJoMTZaTTIwIDVhMSAxIDAgMTEwIDJINGEgMSAxIDAgMTEwLTJoMTZaIj48L3BhdGg+PC9zdmc+"
                width="28"
                height="28"
                alt="list"
                />
                <p> 재생목록 </p>
            </button>

            <button className="sidebar-reserve side-menu-button">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIGZvY3VzYWJsZT0iZmFsc2UiIGFyaWEtaGlkZGVuPSJ0cnVlIiBzdHlsZT0icG9pbnRlci1ldmVudHM6IG5vbmU7IGRpc3BsYXk6IGluaGVyaXQ7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7Ij48cGF0aCBkPSJNMTIgMUM1LjkyNSAxIDEgNS45MjUgMSAxMnM0LjkyNSAxMSAxMSAxMSAxMS00LjkyNSAxMS0xMVMxOC4wNzUgMSAxMiAxem0wIDJhOSA5IDAgMTEwIDE4LjAwMUE5IDkgMCAwMTEyIDN6bTAgM2ExIDEgMCAwMC0xIDF2NS41NjVsLjQ4NS4yOTIgMy4zMyAyYTEgMSAwIDAwMS4wMy0xLjcxNEwxMyAxMS40MzVWNyExIDEgMCAwMC0xLTFaIj48L3BhdGg+PC9zdmc+"
                width="28"
                height="28"
                alt="reserve"
                />
                <p> 나중에 볼 동영상 </p>
            </button>

            <button className="sidebar-good side-menu-button">
                <img src={'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M9.221 1.795a1 1 0 011.109-.656l1.04.173a4 4 0 013.252 4.784L14 9h4.061a3.664 3.664 0 013.576 2.868A3.68 3.68 0 0121 14.85l.02.087A3.815 3.815 0 0120 18.5v.043l-.01.227a2.82 2.82 0 01-.135.663l-.106.282A3.754 3.754 0 0116.295 22h-3.606l-.392-.007a12.002 12.002 0 01-5.223-1.388l-.343-.189-.27-.154a2.005 2.005 0 00-.863-.26l-.13-.004H3.5a1.5 1.5 0 01-1.5-1.5V12.5A1.5 1.5 0 013.5 11h1.79l.157-.013a1 1 0 00.724-.512l.063-.145 2.987-8.535Zm-1.1 9.196A3 3 0 015.29 13H4v4.998h1.468a4 4 0 011.986.528l.27.155.285.157A10 10 0 0012.69 20h3.606c.754 0 1.424-.483 1.663-1.2l.03-.126a.819.819 0 00.012-.131v-.872l.587-.586c.388-.388.577-.927.523-1.465l-.038-.23-.02-.087-.21-.9.55-.744A1.663 1.663 0 0018.061 11H14a2.002 2.002 0 01-1.956-2.418l.623-2.904a2 2 0 00-1.626-2.392l-.21-.035-2.71 7.741Z"></path></svg>'}
                width="28"
                height="28"
                alt="good"
                />
                <p>좋아요 표시한 동영상</p>
            </button>

            <div className="separate-line"></div>

            <button className="sidebar-shopping side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%;'><path d='M16 6h4a2 2 0 012 2v10a4 4 0 01-4 4H6a4 4 0 01-4-4V8a2 2 0 012-2h4V4.344l.005-.048C8.195 2.32 10.039 1 12 1c1.96 0 3.805 1.32 3.995 3.296l.005.048V6Zm-6 0h4V4.447C13.906 3.732 13.149 3 12 3s-1.906.732-2 1.447V6ZM4 18a2 2 0 002 2h12a2 2 0 002-2V8H4v10Zm11-9a1 1 0 00-1 1v.553c-.094.715-.851 1.447-2 1.447s-1.906-.732-2-1.447V10a1 1 0 00-2 0v.656l.005.048C8.195 12.68 10.04 14 12 14c1.961 0 3.805-1.32 3.995-3.296l.005-.048V10a1 1 0 00-1-1Z'></path></svg>"
                width="28"
                height="28"
                alt="shopping"
                />
                <p>쇼핑</p>
            </button>

            <button className="sidebar-music side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%;'><path d='M11 2.766v10.99a4.5 4.5 0 101.994 3.976L13 17.5V9.2l5.485 3.292A1 1 0 0020 11.634V6.966a1 1 0 00-.485-.857l-7-4.2A1 1 0 0011 2.766Zm2 4.102V4.533l5 3v2.335l-5-3ZM8.5 15a2.5 2.5 0 110 5.001A2.5 2.5 0 018.5 15Z'></path></svg>"
                width="28"
                height="28"
                alt="music"
                />
                <p>음악</p>
            </button>

            <button className="sidebar-live side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%;'><path d='M4.222 4.223a11 11 0 000 15.555 1 1 0 101.414-1.414 9 9 0 010-12.727 1 1 0 10-1.414-1.414Zm13.79.353a1 1 0 000 1.414 8.5 8.5 0 010 12.022 1 1 0 001.413 1.414 10.501 10.501 0 000-14.85 1 1 0 00-1.413 0Zm-2.83 2.827a1 1 0 000 1.414 4.501 4.501 0 010 6.365 1.001 1.001 0 001.414 1.414 6.5 6.5 0 000-9.193 1 1 0 00-1.415 0Zm-7.78 0a6.5 6.5 0 000 9.194 1 1 0 001.415-1.415 4.5 4.5 0 010-6.364 1.001 1.001 0 00-1.415-1.415ZM12 10a2 2 0 100 4 2 2 0 000-4Z'></path></svg>"
                width="28"
                height="28"
                alt="live"
                />
                <p>라이브</p>
            </button>

            <button className="sidebar-game side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%;'><path d='M15.97 2.615 12 4.998 8.03 2.615a2 2 0 00-2.06 0l-5 3A2 2 0 000 7.33v7.34a2 2 0 00.97 1.715l10 6c.634.38 1.426.38 2.06 0l10-6A1.998 1.998 0 0024 14.67V7.33a2 2 0 00-.97-1.715l-5-3a2 2 0 00-2.06 0ZM12 7.33l5-3 5 3v7.34l-10 6-10-6V7.33l5-3 5 3ZM7 7.5a1 1 0 00-1 1v1.502H4.5a1 1 0 000 2H6V13.5a1 1 0 102 0v-1.498h1.5a1 1 0 000-2H8V8.5a1 1 0 00-1-1Zm11.5 1.502a1.5 1.5 0 100 3 1.5 1.5 0 000-3Zm-4 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3Z'></path></svg>"
                width="28"
                height="28"
                alt="game"
                />
                <p>게임</p>
            </button>

            <button className="sidebar-sport side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%'><path d='M17.5 1h-11A1.5 1.5 0 005 2.5V4H2a1 1 0 00-1 1v3a5 5 0 004.669 4.987 7.01 7.01 0 004.72 3.826l-2.926 4.655A1 1 0 008.31 23h7.38a1 1 0 00.847-1.532l-2.927-4.657a7.01 7.01 0 004.72-3.824A5 5 0 0023 8V5a1 1 0 00-1-1h-3V2.5A1.5 1.5 0 0017.5 1ZM7 10V3h10v7a5 5 0 11-10 0ZM3 8V6h2v4c0 .283.017.565.052.845A3 3 0 013 8Zm16 2V6h2v2a3 3 0 01-2.053 2.845c.034-.277.052-.559.053-.845Zm-8.88 11L12 18.008 13.88 21h-3.76Z'/></svg>"
                width="28"
                height="28"
                alt="sport"
                />
                <p>스포츠</p>
            </button>
            
            <button className="sidebar-edu side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%'><path d='M11.485 2.143 1.486 8.148a1 1 0 000 1.715L5 11.968v4.957a2 2 0 00.992 1.73l5.504 3.21a1 1 0 001.008 0l5.504-3.212A2 2 0 0019 16.926V11.97l2-1.2V18a1 1 0 002 0V9a1 1 0 00-.485-.852l-10-6.005a1 1 0 00-1.03 0ZM3.944 9.005 12 4.167l8.057 4.837L12 13.834l-8.056-4.83Zm8.57 6.852L17 13.167v3.759l-5 2.917-5-2.917v-3.758l4.486 2.69a1 1 0 001.028-.001Z'/></svg>"
                width="28"
                height="28"
                alt="edu"
                />
                <p>학습 프로그램</p>
            </button>

            <button className="sidebar-podcast side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%'><path d='M12 1a10 10 0 00-8.66 15 1 1 0 001.732-1 8 8 0 1113.856 0 1 1 0 001.732 1A10 10 0 0012 1Zm0 5a4 4 0 00-4 4v4a4 4 0 003 3.874V20h-1a1 1 0 000 2h4a1 1 0 000-2h-1v-2.126A4 4 0 0016 14v-4a4 4 0 00-4-4Zm0 2a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2Z'/></svg>"
                width="28"
                height="28"
                alt="podcast"
                />
                <p>팟캐스트</p>
            </button>

            <div className="separate-line"></div>

            <button className="sidebar-premium side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 24 24' enable-background='new 0 0 24 24' xml:space='preserve' focusable='false' aria-hidden='true' style='pointer-events:none;display:inherit;width:100%;height:100%'><g><path fill='%23FF0033' d='M21.58,7.19c-0.23-0.86-0.91-1.54-1.77-1.77C18.25,5,12,5,12,5S5.75,5,4.19,5.42C3.33,5.65,2.65,6.33,2.42,7.19C2,8.75,2,12,2,12s0,3.25,0.42,4.81c0.23,0.86,0.91,1.54,1.77,1.77C5.75,19,12,19,12,19s6.25,0,7.81-0.42c0.86-0.23,1.54-0.91,1.77-1.77C22,15.25,22,12,22,12S22,8.75,21.58,7.19z'></path><polygon fill='%23FFFFFF' points='10,15 15,12 10,9'></polygon></g></svg>"
                width="28"
                height="28"
                alt="premium"
                />
                <p> YouTube Premium </p>
            </button>

            <button className="sidebar-ymusic side-menu-button">
                <img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><circle fill="%23FF0033" cx="12" cy="12" r="11"/><path fill="%23FFFFFF" d="M12,6.25c3.17,0,5.75,2.58,5.75,5.75s-2.58,5.75-5.75,5.75S6.25,15.17,6.25,12S8.83,6.25,12,6.25 M12,5.25c-3.73,0-6.75,3.02-6.75,6.75s3.02,6.75,6.75,6.75s6.75-3.02,6.75-6.75S15.73,5.25,12,5.25L12,5.25z"/><polygon fill="%23FFFFFF" points="10,15 15,12 10,9"/></g></svg>'
                width="28"
                height="28"
                alt="ymusic"
                />
                <p> YouTube Music </p>
            </button>


            <button className="sidebar-ykids side-menu-button">
                <img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><g><path fill="%23FF0033" d="M22.64,13.2c-0.01-1.04-0.62-5.98-0.9-6.74c-0.19-0.5-0.58-1.4-1.31-1.95c-0.94-0.7-1.7-0.83-2.68-0.85C17.06,3.64,6.12,5.03,4.79,5.51C3.8,5.88,3.03,6.35,2.42,6.95c-0.99,0.98-1.18,1.93-1.02,3.6c0.14,1.52,0.85,6.55,1.21,7.59c0.39,1.15,1.11,2.03,2.3,2.16c3.62,0.39,4.48-1.6,12.9-1.58c2.55,0.01,3.82-1.11,4.35-2.08C22.77,15.49,22.65,13.99,22.64,13.2z"/><path fill="%23212121" d="M17.47,4.04C17.47,4.04,17.48,4.04,17.47,4.04c0.94,0.02,1.67,0.14,2.56,0.81c0.7,0.53,1.08,1.39,1.25,1.86c0.28,0.73,0.85,5.44,0.86,6.43c0.01,0.76,0.12,2.19-0.47,3.28c-0.5,0.92-1.71,1.98-4.13,1.98c-0.01,0-0.01,0-0.02,0c-0.04,0-0.07,0-0.11,0c-7.23,0-8.55,1.56-11.33,1.56c-0.27,0-0.56-0.02-0.87-0.05c-1.13-0.12-1.82-0.96-2.19-2.06c-0.34-0.99-1.01-5.79-1.15-7.24c-0.15-1.6,0.03-2.51,0.98-3.44c0.58-0.57,1.32-1.02,2.27-1.37C6.38,5.35,16.73,4.04,17.47,4.04 M17.47,3.2c-0.47,0-3.53,0.37-6.09,0.72C8.82,4.27,5.6,4.75,4.84,5.03c-1.06,0.39-1.9,0.9-2.56,1.56C1.05,7.8,0.9,9.06,1.05,10.7c0.12,1.27,0.8,6.28,1.19,7.43c0.53,1.55,1.55,2.48,2.89,2.62c0.33,0.04,0.64,0.05,0.96,0.05c1.17,0,2.1-0.25,3.18-0.54c1.69-0.45,3.8-1.02,8.15-1.02l0.11,0l0.02,0c1.07,0,3.68-0.24,4.86-2.42c0.63-1.17,0.6-2.59,0.58-3.43c0-0.09,0-0.18-0.01-0.26c-0.01-1.01-0.59-5.85-0.92-6.72c-0.38-1-0.89-1.75-1.53-2.23c-1.05-0.79-1.94-0.96-3.04-0.98l-0.01,0L17.47,3.2L17.47,3.2z"/></g><g><path fill="%23FFFFFF" d="M15.28,11.85c-0.03,0.02-0.05,0.03-0.08,0.05c-0.21,0.14-0.42,0.28-0.63,0.43c-0.49,0.33-3.33,2.26-3.33,2.26c-0.24,0.18-0.7,0.47-0.87,0.38c-0.17-0.09-0.23-0.72-0.27-1.02l-0.01-0.07c-0.05-0.36-0.46-3.83-0.51-4.21C9.56,9.56,9.5,9.17,9.62,9.08c0.13-0.1,0.47,0.01,0.58,0.05c0.66,0.21,3.93,1.35,4.95,1.86c0.03,0.02,0.06,0.03,0.1,0.04c0.15,0.06,0.35,0.15,0.35,0.39C15.6,11.65,15.42,11.76,15.28,11.85z"/><path fill="%23212121" d="M10.04,9.59c1.14,0.38,3.77,1.32,5.01,1.87c-0.15,0.1-0.3,0.2-0.45,0.3c-0.58,0.39-3.94,2.68-3.94,2.68l-0.02,0.01l-0.02,0.01c0,0,0,0,0,0c0-0.03-0.01-0.05-0.01-0.07l-0.02-0.13l-0.01-0.08c-0.04-0.31-0.31-2.58-0.48-3.94C10.08,9.98,10.06,9.76,10.04,9.59 M9.4,8.56c-0.07,0-0.14,0.01-0.18,0.05c-0.15,0.11-0.07,0.58-0.05,0.7c0.05,0.45,0.54,4.56,0.6,4.99l0.01,0.08c0.05,0.36,0.12,1.1,0.33,1.21c0.03,0.01,0.06,0.02,0.1,0.02c0.25,0,0.68-0.28,0.93-0.47c0,0,3.36-2.29,3.94-2.68c0.25-0.17,0.5-0.34,0.75-0.51c0.03-0.02,0.06-0.04,0.1-0.06c0.17-0.1,0.38-0.23,0.38-0.5c-0.01-0.29-0.24-0.39-0.41-0.46c-0.04-0.02-0.08-0.03-0.11-0.05c-1.21-0.61-5.09-1.96-5.87-2.21C9.8,8.63,9.58,8.56,9.4,8.56L9.4,8.56z"/></g></g></svg>'
                width="28"
                height="28"
                alt="ykids"
                />
                <p> YouTube Kids </p>
            </button>

            <div className="separate-line"></div>

            <button className="sidebar-set side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true'><path d='M12.844 1h-1.687a2 2 0 00-1.962 1.616 3 3 0 01-3.92 2.263 2 2 0 00-2.38.891l-.842 1.46a2 2 0 00.417 2.507 3 3 0 010 4.525 2 2 0 00-.417 2.507l.843 1.46a2 2 0 002.38.892 3.001 3.001 0 013.918 2.263A2 2 0 0011.157 23h1.686a2 2 0 001.963-1.615 3.002 3.002 0 013.92-2.263 2 2 0 002.38-.892l.842-1.46a2 2 0 00-.418-2.507 3 3 0 010-4.526 2 2 0 00.418-2.508l-.843-1.46a2 2 0 00-2.38-.891 3 3 0 01-3.919-2.263A2 2 0 0012.844 1Zm-1.767 2.347a6 6 0 00.08-.347h1.687a4.98 4.98 0 002.407 3.37 4.98 4.98 0 004.122.4l.843 1.46A4.98 4.98 0 0018.5 12a4.98 4.98 0 001.716 3.77l-.843 1.46a4.98 4.98 0 00-4.123.4A4.979 4.979 0 0012.843 21h-1.686a4.98 4.98 0 00-2.408-3.371 4.999 4.999 0 00-4.12-.399l-.844-1.46A4.979 4.979 0 005.5 12a4.98 4.98 0 00-1.715-3.77l.842-1.459a4.98 4.98 0 004.123-.399 4.981 4.981 0 002.327-3.025ZM16 12a4 4 0 11-7.999 0 4 4 0 018 0Zm-4 2a2 2 0 100-4 2 2 0 000 4Z'/></svg>"
                width="28"
                height="28"
                alt="set"
                />
                <p>설정</p>
            </button>

            <button className="sidebar-report side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true'><path d='m4 2.999-.146.073A1.55 1.55 0 003 4.454v16.545a1 1 0 102 0v-6.491a7.26 7.26 0 016.248.115l.752.376a8.94 8.94 0 008 0l.145-.073c.524-.262.855-.797.855-1.382V4.458a1.21 1.21 0 00-1.752-1.083 7.26 7.26 0 01-6.496 0L12 2.999a8.94 8.94 0 00-8 0Zm7.105 1.79v-.002l.752.376A9.26 9.26 0 0019 5.641v7.62a6.95 6.95 0 01-6.105-.052l-.752-.376A9.261 9.261 0 005 12.355v-7.62a6.94 6.94 0 016.105.054Z'/></svg>"
                width="28"
                height="28"
                alt="report"
                />
                <p>신고 기록</p>
            </button>

            <button className="sidebar-service side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' focusable='false' aria-hidden='true'><path d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 110 18.001A9 9 0 0112 3Zm.5 3h-.483a3.45 3.45 0 00-3.089 1.909l-.323.644a1 1 0 001.79.894l.322-.643a1.46 1.46 0 011.3-.804h.483a1.5 1.5 0 01.153 2.992l-.306.016A1.5 1.5 0 0011 12.5v1a1 1 0 002 0v-.535A3.5 3.5 0 0012.5 6Zm-.5 9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5Z'/></svg>"
                width="28"
                height="28"
                alt="service"
                />
                <p>고객센터</p>
            </button>

            <button className="sidebar-opinion side-menu-button">
                <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24'><path d='M19 2H5a4 4 0 00-4 4v10a4 4 0 004 4h2v1.604a1.41 1.41 0 002.095 1.232L14.2 20H19a4 4 0 004-4V6a4 4 0 00-4-4ZM5 4h14a2 2 0 012 2v10a2 2 0 01-2 2h-5.318l-.453.252L9 20.6V18H5a2 2 0 01-2-2V6a2 2 0 012-2Zm7 2a1 1 0 00-1 1v4.5a1 1 0 002 0V7a1 1 0 00-1-1Zm0 7.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5Z'/></svg>"
                width="28"
                height="28"
                alt="opinion"
                />
                <p>의견 보내기</p>
            </button>



        </div>
        </>
    )
}