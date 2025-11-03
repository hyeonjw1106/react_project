import { Link } from 'react-router-dom';
import { useState } from 'react';
import spotify_logo from './assets/spotify_logo.png';
import home_logo from './assets/home_logo.png';
import install_logo from './assets/install_logo.png';
import news_logo from './assets/news_logo.png';
import social_logo from './assets/social_logo.png';
import Friend from './Friend';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function TopBar({ setPage, setSonglist }) {
  const navigate = useNavigate();
  const [isFriendOpen, setIsFriendOpen] = useState(false); // 모달 상태

  return (
    <div className="top-bar">
      <img src={spotify_logo} className='top-spoti-logo'/>
      <img 
        src={home_logo} 
        className='top-home-logo'
        onClick={() => {
          navigate('/');      
          setSonglist([]);    
        }}
        style={{ cursor: 'pointer' }}
      />
      <input type='text' placeholder='  어떤 콘텐츠를 감상하고 싶으세요?' className='searcher'/>

      <Link to="/premium">
        <button className='premium_button'>Premium 둘러보기</button>
      </Link>

      <img src={install_logo} className='top-install-logo'/>
      <img src={news_logo} className='top-news-logo'/>

      {/* social_logo 클릭 시 Friend 모달 열기 */}
      <img 
        src={social_logo} 
        className='top-social-logo'
        onClick={() => setIsFriendOpen(true)}
        style={{ cursor: 'pointer' }}
      />

      <button className='profile'>현</button>

      {/* Friend 모달 조건부 렌더링 */}
      {isFriendOpen && <Friend onClose={() => setIsFriendOpen(false)} />}
    </div>
  );
}
