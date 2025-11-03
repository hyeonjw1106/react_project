import './App.css';
import pl_title from './assets/pl_title.png';
import play from './assets/play.png';
import { useNavigate } from 'react-router-dom';

import shawn_mendes from './assets/shawn_mendes.png';
import justin from './assets/justin.png';
import haon from './assets/haon.png';
import umyull from './assets/umyull.png';
import iu from './assets/iu.png';

import native from './assets/native.png';
import travel from './assets/travel.png';
import a from './assets/A.png';
import ahod from './assets/aHeadOfDreams.png';
import boy from './assets/boyhood.png';

export default function Allmusic({ setPage }) {
  const artists = [
    { img: shawn_mendes, name: "Shawn Mendes", intro: "캐나다의 싱어송라이터" },
    { img: justin, name: "Justin Bieber", intro: "캐나다의 가수" },
    { img: haon, name: "HAON", intro: "대한민국의 래퍼" },
    { img: umyull, name: "음율", intro: "대한민국의 혼성 가수" },
    { img: iu, name: "아이유", intro: "대한민국의 가수" }
  ];

  const albums = [
    { img: ahod, name: "A Head Of Dreams" },
    { img: a, name: "A" },
    { img: travel, name: "travel" },
    { img: native, name: "Native" },
    { img: boy, name: "boyhood" }
  ];

  const navigate = useNavigate();

  return (
    <div className='music-div'>
      <button className='all'>모두</button>
      <button 
        className='only-music' 
        onClick={() => navigate('/onlymusic')}
      >
        음악
      </button>
      <button 
        className='potcast'
        onClick={() => navigate('/potcast')}
      >
        팟캐스트
      </button>

      <div 
        className='music-div-pl'
        onClick={() => navigate('/playlist')}
      >
        <img src={pl_title} className='pl-title-img'/>
        <p className='pl-title'> 내 플레이리스트#1 </p>
      </div>

      <div className='artist'>
        <h2 className='artist-title'>인기 아티스트</h2>
        <div className='artist-list'>
          {artists.map((artist, idx) => (
            <div className='artist-div' key={idx}>
              <img src={artist.img} className='artist-img' />
              <img src={play} className='play-icon' />
              <p className='artist-name'>{artist.name}</p>
              <p className='artist-intro'>{artist.intro}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='album'>
        <h2 className='album-title'>인기 앨범 및 싱글</h2>
        <div className='album-list'>
          {albums.map((album, idx) => (
            <div className='album-div' key={idx}>
              <img src={album.img} className='album-img' />
              <img src={play} className='play-icon' />
              <p className='album-name'>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
