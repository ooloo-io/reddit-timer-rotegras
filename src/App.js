import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Search from './pages/Search';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
