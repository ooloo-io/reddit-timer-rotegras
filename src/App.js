import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Styled from 'styled-components';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Search from './pages/Search';
import HowItWorks from './pages/HowItWorks';
import Theme from './theme/Theme';
import GlobalStyle from './theme/GlobalStyle';

const StyledWrapper = Styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    overflow-x: hidden;
`;

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <StyledWrapper>
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
          <Footer />
        </Router>
      </StyledWrapper>
    </Theme>
  );
}

export default App;
