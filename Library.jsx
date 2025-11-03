import React from 'react';
import { useNavigate } from 'react-router-dom';
import pl_title from './assets/pl_title.png';
import size_up from './assets/size_up.png';
import './App.css';

export default function Library() {
  const navigate = useNavigate();

  return (
    <div className='library'>
      <h4 className='my-library'>내 라이브러리</h4>
      <button className='create-pl'>+ 만들기</button>
      <img src={size_up} className='size-up-logo'/>
      <div className='category-pl'>플레이리스트</div>

      <div 
        className='pl-list' 
        onClick={() => navigate('/playlist')}
        style={{ cursor: 'pointer' }}
      >
        <img src={pl_title} className='pl-img'/>
        <h4 className='pl-info-name'>내 플레이리스트#1</h4>
        <p className='pl-info-cate'>플레이리스트 · 현준우</p>
      </div>
    </div>
  );
}
