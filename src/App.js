import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import Topbar from './components/topbar';
import Home from './pages/home.jsx';
import MyPhotos from './pages/my-photos.jsx'
import Search from './pages/search.jsx'
import Footer from './components/footer';
import NotFound from './pages/notFound';

import "./styles/_blocks.scss";

function App() {
  return (
    <HashRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-photos' element={<MyPhotos />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
