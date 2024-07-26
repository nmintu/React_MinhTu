import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {Home} from './pages/homepages/Home';
import RandomGift from './pages/selflearning/RandomGift';
import Radio_TwoWayBinding from './pages/selflearning/Radio_TwoWayBinding';
import CheckBox_TwoWayBinding from './pages/selflearning/CheckBox_TwoWayBinding';
import TodoList from './pages/selflearning/TodoList';
import UpdateTitle_useEffect from './pages/selflearning/UpdateTitle_useEffect';
import CountDown from './pages/selflearning/CountDown';
import PreviewAvatar from './pages/selflearning/PreviewAvatar';
import './index.css';  // Tailwind CSS
import { DefaultLayout } from './common/layout/DefaultLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />   
          <Route path="/randomGift" element={<RandomGift />} />
          <Route path="/radio" element={<Radio_TwoWayBinding />} />
          <Route path="/checkbox" element={<CheckBox_TwoWayBinding />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/updateTitle_useEffect" element={<UpdateTitle_useEffect />} />
          <Route path="/countDown" element={<CountDown />} />
          <Route path="/previewAvatar" element={<PreviewAvatar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
