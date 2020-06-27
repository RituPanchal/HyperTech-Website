import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';
import AboutUsComponent from './Components/AboutUs/aboutus.component';
import HomeComponent from './Components/Home/home.component';
import ApproachComponent from './Components/OurApproach/approach.component';
import FaciEquipComponent from './Components/FacilitiesEquipments/faciEquip.component';
import ServicesComponent from './Components/Services/services.component';
import './Components/fonts/fonts.css';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
          <Route path="/home" component={HomeComponent} />
          <Route path="/about-us" component={AboutUsComponent}/>
          <Route path="/our-approach" component={ApproachComponent}/>
          <Route path="/facilities-equipment" component={FaciEquipComponent}/>
          <Route path="/services" component={ServicesComponent} />
          <Redirect to="/home"/>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default AnimatedSwitch;

