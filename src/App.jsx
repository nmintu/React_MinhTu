import React, { useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import RandomGift from './pages/RandomGift';
import Radio_TwoWayBinding from './pages/Radio_TwoWayBinding';
import CheckBox_TwoWayBinding from './pages/CheckBox_TwoWayBinding';
import TodoList from './pages/TodoList';
import UpdateTitle_useEffect from './pages/UpdateTitle_useEffect';
import CountDown from './pages/CountDown';
import PreviewAvatar from './pages/PreviewAvatar';


import './App.css'; // Import file CSS

function App() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <>
      <nav className="nav-container">
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

          </ul>
        )}
      </nav>

      {showLinks && (
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

          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
