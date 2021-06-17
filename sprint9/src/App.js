import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import SideBar from './Components/SideBar/sidebar';
import RecommendedVideos from './Components/RecommendedVideos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path='/'>
            <div className="app__mainpage">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
