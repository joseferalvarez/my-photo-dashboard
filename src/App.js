import React from 'react';
import './App.css';
import "./styles/_blocks.scss"
import { Route, Routes } from 'react-router';

import Topbar from './components/topbar';
import Home from './pages/home.jsx';
import MyPhotos from './pages/my-photos.jsx'
import Search from './pages/search.jsx'
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Routes>
          <Route path='/myphotodashboard' exact element={<Home />} />
          <Route path='/myphotodashboard/myphotos' element={<MyPhotos />} />
          <Route path='/myphotodashboard/search' element={<Search />} />
          <Route path='/myphotodashboard/*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
