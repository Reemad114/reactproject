import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/home.js';
import ContactUs from './Components/Pages/Contact-Us/contact-us';
import AboutUs from './Components/Pages/About-Us/about-us.js';
import SignIn from './Components/Pages/Sign-In/sign-in.js';
import SignUp from './Components/Pages/Sign-Up/sign-up';
import PersonalArea from './Components/Pages/PersonalArea/personalarea.js';
import Contest from './Components/Pages/Contest/contest.js';
class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/contest" component={Contest}/>
           <Route path="/contact" component={ContactUs}/>
           <Route path="/about" component={AboutUs}/>
           <Route path="/signin" component={SignIn}/>
           <Route path="/signup" component={SignUp}/>
           <Route path="/personal" component={PersonalArea}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
