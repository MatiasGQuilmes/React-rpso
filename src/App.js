import React, { Fragment } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
  return (
  <div id="wrapper">
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <Main/>
      <Footer/>
    </div>

  </div>
  );
}

export default App;
