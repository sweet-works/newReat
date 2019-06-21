import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
import Footer from './components/footbar/Footer'
import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";
import Course from "./views/course/Course";
import Home from "./views/home/Home";
import User from "./views/user/User";
import Baby from "./views/baby/Baby";
import Community from './views/community/Community'
function App() {
  return (
    <div className="App" style={{paddingTop:'.5rem',paddingBottom:".5rem"}}>

        <Navbar/>
        
        <Switch>
          <Route  path='/home' component={Home}/>
          <Redirect exact path="/" to="/home"/>
          <Route path='/course' component={Course}/>
          <Route path='/user' component={User}/>
          <Route path='/baby' component={Baby}/>
          <Route path='/community' component={Community}/>
          <Route component={Error}/>
        </Switch>
        
        <Footer/>
    </div>
  );
}

export default App;
