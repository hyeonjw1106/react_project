import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Onlymusic({ setPage }) {
  const navigate = useNavigate();
  return (
    <div className='music-div'>
      <button 
        className='all-onlymusic'
        onClick={() => navigate('/')}
      >
        모두
      </button>
      <button className='only-music-onlymusic'>음악</button>
      <button 
        className='potcast-onlymusic'
        onClick={() => navigate('/potcast')}
      >
        팟캐스트
      </button>
    </div>
  );
}
