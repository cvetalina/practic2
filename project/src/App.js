import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import Travels from './components/Travels';

// import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>
          {/* < Menu /> */}
          < Header />
        <div>
          <Routes>
            <Route path={'/About'} element={<About />} />
            <Route path={'/Contacts'} element={<Contacts />} />
            <Route path={'/Travels'} element={<Travels />} />
            <Route path={'/'} element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;