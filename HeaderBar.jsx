import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import mic from "./assets/mic.png";
import Sidebar from "./SideBar";

export default function HeaderBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleSearch = async () => {
        if (!query.trim()) return;
        try {
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(
                    query
                )}&key=AIzaSyDBetZ3x1LsB2yVXon4BDu80kZ3ZCetxg8`
            );
            const data = await res.json();
            console.log("검색 결과:", data.items);
            setResults(data.items || []);
        } catch (err) {
            console.error("검색 실패:", err);
        }
    };
    
    const handleVideoClick = (videoId) => {
        navigate(`/video/${videoId}`);
    };

    return (
        <>
            <div className="header-bar-container">
                <input
                    type="text"
                    className="search"
                    alt="search"
                    id="search"
                    placeholder="검색"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <img
                    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' id='yt-ringo2-svg_yt10' width='93' height='20' viewBox='0 0 93 20' focusable='false' aria-hidden='true' style='pointer-events: none; display: inherit; width: 100%; height: 100%;'><g><path d='M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z' fill='%23FF0033'></path><path d='M19 10L11.5 5.75V14.25L19 10Z' fill='white'></path></g><g id='youtube-paths_yt10' fill='white'><path d='M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z'></path><path d='M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z'></path><path d='M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z'></path><path d='M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z'></path><path d='M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z'></path><path d='M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z'></path><path d='M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z'></path></g></svg>"
                    className="youtube-logo"
                    onClick={() => {
                        setQuery("");
                        setResults([]);
                        navigate("/");
                    }}
                />
                <button className="search-button" onClick={handleSearch}>
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xMSAyYTkgOSAwIDEwNS42NDEgMTYuMDFsMy41IDMuNWExIDEgMCAxMDEuNDE0LTEuNDE0bC0zLjUtMy41YTEgMSAwIDAwLS4xOTctLjE1M0E4Ljk2IDguOTYgMCAwMDIwIDExYTkgOSAwIDAwLTktOVptMCAyYTcgNyAwIDExMCAxNCA3IDcgMCAwMTAtMTRaIi8+PC9zdmc+"
                        alt="search icon"
                        width="24"
                        height="24"
                    />
                </button>

                <button className="hamburger-menu" onClick={toggleSidebar}>
                    <img
                        src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M20 5H4a1 1 0 000 2h16a1 1 0 000-2Zm-1 6H4a1 1 0 000 2h15a1 1 0 000-2Zm0 6H4a1 1 0 000 2h15a1 1 0 000-2Z" fill="%23FFFFFF"/></svg>'
                        alt="menu icon"
                        width="24"
                        height="24"
                    />
                </button>

                <img src={mic} className="mic-icon" />

                <button className="make-button">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTEyIDNhMSAxIDAgMDAtMSAxdjdINGEuOTkuOTkgMCAwMDAgMmg3djdhMSAxIDAgMDAyIDB2LTdoN2ExIDEgMCAwMDAtMkgxM1Y0YTEgMSAwIDAwLTEtMVoiLz48L3N2Zz4="
                        width="21"
                        height="21"
                    />
                    <p className="make-text"> 만들기 </p>
                </button>

                <button className="alert-icon">
                    <img
                        src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' height='24' viewBox='0 0 24 24' width='24'><path d='M16 19a4 4 0 11-8 0H4.765C3.21 19 2.25 17.304 3.05 15.97l1.806-3.01A1 1 0 005 12.446V8a7 7 0 0114 0v4.446c0 .181.05.36.142.515l1.807 3.01c.8 1.333-.161 3.029-1.716 3.029H16ZM12 3a5 5 0 00-5 5v4.446a3 3 0 01-.428 1.543L4.765 17h14.468l-1.805-3.01A3 3 0 0117 12.445V8a5 5 0 00-5-5Zm-2 16a2 2 0 104 0h-4Z'/></svg>`}
                        width="24"
                        height="24"
                    />
                    <div className="alert-modal">
                        <p> 알림 </p>
                    </div>
                </button>

                <button className="header-profile-button">
                    <p> 준우 </p>
                </button>
            </div>

            {isSidebarOpen && <Sidebar />}

            {results.length > 0 ? (
                <div
                    className="search-results"
                    style={{
                        position: "absolute",
                        top: "80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "1480px",
                        background: "black",
                        borderRadius: 8,
                        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                        overflow: "hidden",
                        zIndex: 9999,
                    }}
                >
                    <div
                        style={{
                            padding: "12px 16px",
                            borderBottom: "1px solid #eee",
                            fontWeight: 700,
                        }}
                    >
                        검색 결과 — "{query}" ({results.length}개 중 상위 {results.length})
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {results.map((item) => {
                            const videoId = item.id?.videoId;
                            const thumb =
                                item.snippet?.thumbnails?.medium?.url ||
                                item.snippet?.thumbnails?.default?.url ||
                                "";
                            return (
                                <div
                                    key={videoId}
                                    onClick={() => handleVideoClick(videoId)}
                                    style={{
                                        display: "flex",
                                        gap: 12,
                                        padding: "12px 16px",
                                        cursor: "pointer",
                                        alignItems: "flex-start",
                                        borderBottom: "1px solid #7a7a7a",
                                    }}
                                >
                                    <img
                                        src={thumb}
                                        alt={item.snippet?.title}
                                        style={{
                                            width: 200,
                                            height: 112,
                                            objectFit: "cover",
                                            borderRadius: 6,
                                            flex: "0 0 200px",
                                        }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <div
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 600,
                                                lineHeight: "1.3",
                                                marginBottom: 6,
                                            }}
                                        >
                                            {item.snippet?.title}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 13,
                                                color: "#606060",
                                                marginBottom: 8,
                                            }}
                                        >
                                            {item.snippet?.channelTitle}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 13,
                                                color: "#808080",
                                            }}
                                        >
                                            {(item.snippet?.description || "").slice(0, 160)}
                                            {(item.snippet?.description || "").length > 160 ? "…" : ""}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (

                location.pathname === "/" && (
                    <div className="guest-div">
                        <h3 className="record-stop">시청 기록 사용 중지됨</h3>
                        <p className="set-change">
                            내 관심분야에 맞는 최신 동영상을 추천받으려면 언제든 설정을 변경하세요.
                        </p>
                        <a href="https://support.google.com/youtube/answer/95725">
                            <p className="detail">자세히 알아보기</p>
                        </a>
                        <button className="update"> 업데이트 설정 </button>
                    </div>
                )
            )}
        </>
    );
}
