import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';
import Search from './pages/Search';
import Theme from './theme/Theme';
import GlobalStyle from './theme/GlobalStyle';
import { Wrapper } from './App.styles';


function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search/:slug">
              <Search />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Wrapper>
    </Theme>
  );
}

export default App;
