import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';

import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0,
  };
  setProgress=(progress)=>{
    this.setState({progress:progress})
  };
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News apiKey={this.apiKey}setProgress={this.setProgress}   key='general' pageSize={9} country="in" category='general'  />}/>
          <Route exact path='/business' element={<News apiKey={this.apiKey}setProgress={this.setProgress}   key='business' pageSize={9} country="in" category='business'  />}/>
          <Route exact path='/entertainment' element={<News apiKey={this.apiKey}setProgress={this.setProgress}   key='entertainment' pageSize={9} country="in" category='entertainment'/>}/>
          <Route exact path='/health' element={<News apiKey={this.apiKey}setProgress={this.setProgress}   key='health' pageSize={9} country="in" category='health'  />}/>
          <Route exact path='/science' element={<News apiKey={this.apiKey}setProgress={this.setProgress}   key='science' pageSize={9} country="in" category='science'  />}/>
          <Route exact path='/sports' element={<News apiKey={this.apiKey}setProgress={this.setProgress}   key='sports' pageSize={9} country="in" category='sports'  />}/>
          <Route exact path='/technology' element={<News apiKey={this.apiKey}setProgress={this.setProgress}   key='technology' pageSize={9} country="in" category='technology'  />}/>
        </Routes>
        </Router>
      </div> 
    )
  }
} 
