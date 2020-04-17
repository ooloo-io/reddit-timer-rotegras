import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Search from './pages/Search/Search';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Theme from './theme/Theme';
import GlobalStyle from './theme/GlobalStyle';
import AppWrapper from './App.styles';


function App() {
  return (
    <Theme>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search/:slug">
              <Search />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/how-it-works">
              <HowItWorks />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppWrapper>
    </Theme>
  );
}

export default App;
