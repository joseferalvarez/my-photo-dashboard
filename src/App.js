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
          <Route path='/my-photo-dashboard/#/' exact element={<Home />} />
          <Route path='/my-photo-dashboard/#/my-photos' element={<MyPhotos />} />
          <Route path='/my-photo-dashboard/#/search' element={<Search />} />
          <Route path='/my-photo-dashboard/*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
