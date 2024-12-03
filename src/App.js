import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
  progress:0
}
  setProgress = (progress)=>{
  this.setState({progress:this.state.progress})
}
  render() {
    return (
      
      <div>
        <Navbar className="bg-dark "/>
        <News setProgress={this.setProgress} apikey={this.apiKey}  pageSize={this.pageSize} country="us" category="technology"/>
   
      </div>
        
 

    )
  }
}

export default App
