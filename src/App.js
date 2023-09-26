import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes} from "react-router-dom"; // Import necessary components and functions from react-router-dom
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=15;
  apiKey= "37d0d25c22304fd0a0a26f293c57f9ea"
  // apiKey= process.env.REACT_APP_NEWS

state={
  progress:0
}

setProgress=(progress)=>{
  this.setState({progress: progress})
}

  render() {
    return (
      <div>
          <BrowserRouter>
        <Navbar></Navbar>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        {/* <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="us" categoty="science"></News> */}
        <Routes>
            <Route exact path="/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general"></News>} />
            <Route exact path="/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business"></News>} />
<Route exact path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"></News>} />
<Route exact path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general"pageSize={this.pageSize} country="us" category="general"></News>} />
<Route exact path="/health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health"></News>} />
<Route exact path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science"></News>} />
<Route exact path="/sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"pageSize={this.pageSize} country="us" category="sports"></News>} />
<Route exact path="/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology"></News>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

