import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import TopBar from './TopBar';
import Library from './Library';
import Allmusic from './Allmusic';
import Onlymusic from './Onlymusic';
import Potcast from './Potcast';
import Playlist from './Playlist';
import Songlist from './Songlist';
import Premium from './Premium';
import Musicbar from './Musicbar';
import './App.css';

function MainLayout({ setSonglist, songlist }) {
  return (
    <>
      <TopBar setSonglist={setSonglist} />
      <Library />
      <Songlist songlist={songlist} />
      <Musicbar songlist={songlist} />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}

export default function App() {
  const [songlist, setSonglist] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/premium" element={<Premium />} />

        <Route element={<MainLayout setSonglist={setSonglist} songlist={songlist} />}>
          <Route path="/" element={<Allmusic />} />
          <Route path="/onlymusic" element={<Onlymusic />} />
          <Route path="/potcast" element={<Potcast />} />
          <Route path="/playlist" element={<Playlist setSonglist={setSonglist} />} />
        </Route>
      </Routes>
    </Router>
  );
}
