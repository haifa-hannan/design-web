import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer  from './Footer';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
