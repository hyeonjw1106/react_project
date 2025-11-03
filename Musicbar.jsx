import { useEffect, useState, useRef } from 'react';
import shuffle from './assets/shuffle.png';
import back from './assets/back.png';
import bar_play from './assets/playing.png';
import stop from './assets/bar_play.png';
import forward from './assets/forward.png';
import repeat from './assets/repeat.png';
import './App.css';

export default function Musicbar({ songlist }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);

    const TOTAL_SECONDS = 100;

    const currentSong = songlist && songlist[currentIndex];

    useEffect(() => {
        if (!songlist || songlist.length === 0) return;

        clearInterval(intervalRef.current);

        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => {
                    if (prev < TOTAL_SECONDS) return prev + 1;
                    clearInterval(intervalRef.current);
                    setTimeout(() => {
                        setCurrentIndex(prev => (prev + 1) % songlist.length);
                        setSeconds(0);
                        setIsPlaying(true);
                    }, 1000);
                    return prev;
                });
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isPlaying, currentIndex, songlist]);

    const progress = (seconds / TOTAL_SECONDS) * 100;

    if (!songlist || songlist.length === 0) {
        return (
            <div className="music-state">
                <p className='none-play-state'>재생 중인 곡이 없습니다</p>
            </div>
        );
    }

    const nowMin = String(Math.floor(seconds / 60)).padStart(2, '0');
    const nowSec = String(seconds % 60).padStart(2, '0');

    const handlePlayPause = () => setIsPlaying(prev => !prev);
    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % songlist.length);
        setSeconds(0);
        setIsPlaying(true);
    };
    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? songlist.length - 1 : prev - 1));
        setSeconds(0);
        setIsPlaying(true);
    };

    return (
        <div className="music-bar-container">
            <div className="music-state">
                <img src={shuffle} className="shuffle-img" />
                <img src={back} className="back-img" onClick={handlePrev} />
                <img src={isPlaying ? bar_play : stop} className="bar-play-img" onClick={handlePlayPause} />
                <img src={forward} className="forward-img" onClick={handleNext} />
                <img src={repeat} className="repeat-img" />
            </div>

            <div className="progress-box">
                <div className="progress-bar" style={{ width: `${progress}%`, transition: 'width 1s linear' }}></div>
            </div>

            <p className="now-time">{nowMin}:{nowSec}</p>
            <p className="end-time">01:40</p>

            <div className="playing-song-img" style={{ backgroundImage: `url(${currentSong.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <p className="playing-song-title">{currentSong.title}</p>
            <p className="playing-song-singer">{currentSong.singer}</p>
        </div>
    );
}
