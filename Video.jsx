import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import HeaderBar from "./HeaderBar";

export default function Video() {
    const { id } = useParams();
    const playerRef = useRef(null);

    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("player", {
                videoId: id,
                events: {
                    onReady: (event) => {
                        console.log("✅ YouTube Player Ready:", event);
                    },
                },
            });
        };

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [id]);

    const seekBackward = () => {
        if (playerRef.current) {
            const current = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(Math.max(current - 5, 0), true);
        }
    };

    const seekForward = () => {
        if (playerRef.current) {
            const current = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(current + 5, true);
        }
    };

    const fullscreen = () => {
        const iframe = document.getElementById("player");
        if (iframe.requestFullscreen) iframe.requestFullscreen();
        else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
        else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
        else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
    };

    const setVolume = () => {
        const input = document.querySelector(".set-sound");
        const value = Number(input.value);
        if (playerRef.current && !isNaN(value)) {
            const volume = Math.min(Math.max(value, 0), 100);
            playerRef.current.setVolume(volume);
        }
    };

    const setSpeed = () => {
        const input = document.querySelector(".set-speed");
        const value = Number(input.value);
        if (playerRef.current && !isNaN(value)) {
            playerRef.current.setPlaybackRate(value);
        }
    };

    return (
        <>
            <HeaderBar />

            <div>
                <div id="player" className="video"></div>
            </div>

            <div>
                <button className="func-button second-back" onClick={seekBackward}>
                    5초 전
                </button>
                <button className="func-button second-front" onClick={seekForward}>
                    5초 후
                </button>
                <button className="func-button fullscreen" onClick={fullscreen}>
                    전체화면
                </button>

                <input
                    type="number"
                    placeholder="소리 설정(백분율 기준)"
                    className="func-input set-sound"
                    onChange={setVolume}
                />

                <input
                    type="number"
                    placeholder="배속 설정(0.1 ~ 2)"
                    className="func-input set-speed"
                    onChange={setSpeed}
                />
            </div>
        </>
    );
}
