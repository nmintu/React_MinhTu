import React, { useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/selflearning/Home';
import RandomGift from './pages/selflearning/RandomGift';
import Radio_TwoWayBinding from './pages/selflearning/Radio_TwoWayBinding';
import CheckBox_TwoWayBinding from './pages/selflearning/CheckBox_TwoWayBinding';
import TodoList from './pages/selflearning/TodoList';
import UpdateTitle_useEffect from './pages/selflearning/UpdateTitle_useEffect';
import CountDown from './pages/selflearning/CountDown';
import PreviewAvatar from './pages/selflearning/PreviewAvatar';
import MainLayout from './common/layout/MainLayout';

import './index.css';  // Tailwind CSS

function App() {
  //const [showLinks, setShowLinks] = useState(true);

  return (
    <>
      {/* <nav className="nav-container">
        <button className="toggle-button" onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? 'Hide Links' : 'Show Links'}
        </button>
        {showLinks && (
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/randomGift">RandomGift</Link></li>
            <li><Link to="/radio">Radio_TwoWayBinding</Link></li>
            <li><Link to="/checkbox">CheckBox_TwoWayBinding</Link></li>
            <li><Link to="/todolist">TodoList</Link></li>
            <li><Link to="/updateTitle_useEffect">UpdateTitle_useEffect</Link></li>
            <li><Link to="/countDown">CountDown</Link></li>
            <li><Link to="/previewAvatar">PreviewAvatar</Link></li>
            <li><Link to="/socialTask">SocialTask</Link></li>

          </ul>
        )}
      </nav> */}

      <MainLayout/>
        
      {/* {showLinks && (
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/randomGift" element={<RandomGift />} />
            <Route path="/radio" element={<Radio_TwoWayBinding />} />
            <Route path="/checkbox" element={<CheckBox_TwoWayBinding />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/updateTitle_useEffect" element={<UpdateTitle_useEffect />} />
            <Route path="/countDown" element={<CountDown />} />
            <Route path="/previewAvatar" element={<PreviewAvatar />} />
            <Route path="/socialTask" element={<SocialTask />} />

            
          </Route>
        </Routes>
      )} */}
    </>
  );
}

export default App;
