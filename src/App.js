import React, { Suspense, lazy } from 'react';
import './App.css';
import Fortnite from './Forntnite';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Appbar from './Appbar';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const Banners = lazy(() => import('./Banners'));
const Skin = lazy(() => import('./Skin'));
const Cosmatics = lazy(() => import('./Cosmatics'));

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router basename={'/fortnite-collections/'}>
      <Appbar />
      <Fortnite />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/banners" element={<Banners/>} />
              <Route path="/skins" element={<Skin/>} />
              <Route path="/cosmatics" element={<Cosmatics/>} />
              <Route path="/" exact element={<Banners/>} />
            </Routes>
          </Suspense>
      </Router>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
