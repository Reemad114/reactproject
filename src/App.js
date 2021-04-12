import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/home.js';
import ContactUs from './Components/Pages/Contact-Us/contact-us.js';
import AboutUs from './Components/Pages/About-Us/about-us.js';
import SignIn from './Components/Pages/Sign-In/sign-in.js';
import PersonalArea from './Components/Pages/PersonalArea/personalarea.js';

class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/contact" component={ContactUs}/>
           <Route path="/about" component={AboutUs}/>
           <Route path="/signin" component={SignIn}/>
           <Route path="/personal" component={PersonalArea}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
