import './App.css'
import pl_title from './assets/pl_title.png';
import symphony from './assets/symphony.png';
import steps from './assets/steps.png';
import tloro from './assets/tloro.png';
import tnhmb from './assets/tnhmb.png';
import thesearch from './assets/thesearch.png';
import sugar from './assets/sugar.png';
import play from './assets/play.png';

export default function Playlist({ setSonglist }) {

    const playlistSongs = [
        { id: 1, img: symphony, title: "Symphony (feat.Zara Larsson)", singer: "Clean Bandit", album: "what is love?", time: "1:40" },
        { id: 2, img: steps, title: "Steps", singer: "Krimsonn", album: "Chapters EP", time: "1:40" },
        { id: 3, img: tloro, title: "The Last of Real Ones", singer: "Fall Out Boy", album: "MANIA", time: "1:40" },
        { id: 4, img: tnhmb,  title: "There's Nothing Holdin' Me Back", singer: "Shawn Mendes", album: "Illuminate", time: "1:40" },
        { id: 5, img: thesearch, title: "The Search", singer: "NF", album: "The Search", time: "1:40" },
        { id: 6, img: sugar, title: "Sugar", singer: "Maroon5", album: "V", time: "1:40" }
    ];

    const handlePlayClick = () => {
        setSonglist(playlistSongs);
    };

    return (
        <div className='music-div'>
            <div className='pl-header'>
                <img src={pl_title} className='pl-pl-title'/>
                <p className='pl-pl-state'> 공개 플레이리스트</p>
                <h1 className='pl-pl-name'>내 플레이리스트#1</h1>
                <img src={play} className='pl-play-but' onClick={handlePlayClick}/>
            </div>
            
            <div className='pl-pl-song-div'>
                <div className='pl-pl-list'>
                    {playlistSongs.map((song) => (
                        <div key={song.id} className='pl-pl-div'>
                            <p className='pl-id'>{song.id}</p>
                            <img src={song.img} className='pl-music-img'/>
                            <p className='pl-music-title'>{song.title}</p>
                            <p className='pl-music-singer'>{song.singer}</p>
                            <p className='pl-album'>{song.album}</p>
                            <p className='pl-time'>{song.time}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
