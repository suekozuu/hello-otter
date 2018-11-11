import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Navbar from './Component/Landing/Navbar.js'
import Landing from './Component/Landing/Landing.js';
import What from './Component/What/What.js';
import Who from './Component/Who/Who.js';
import Faqs from './Component/FAQs/Faqs.js';

class App extends Component {
  render() {
    return (
      <div>
        
        <Landing/>
        <What/>
        <Who/>
        <Faqs/>
        <Navbar/>
      </div>
    );
  }
}

export default App;