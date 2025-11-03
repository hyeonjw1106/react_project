import './App.css';
import { useNavigate } from 'react-router-dom';

export default function Potcast({ setPage }) {
  const navigate = useNavigate();
  return (
    <div className='music-div'>
      <button 
        className='all-potcast'
        onClick={() => navigate('/')}
      >
        모두
      </button>
      <button 
        className='only-music-potcast'
        onClick={() => navigate('/onlymusic')}
      >
        음악
      </button>
      <button className='potcast-potcast'>팟캐스트</button>
    </div>
  );
}