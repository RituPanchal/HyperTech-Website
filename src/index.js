import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import NavBarComponent from './Components/Navigation/navbar.component';
import AnimatedSwitch from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Footer from './Components/Footer/footer.component';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBarComponent/>
        <AnimatedSwitch className="App" />
        {/* <Footer/> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

