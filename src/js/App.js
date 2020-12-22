import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <BrowserRouter basename={window.location.href}>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/sign-up' exact component={SignUp} />
          </Switch>
      </Router>
    </BrowserRouter>
    </>
  );
}

export default App;
