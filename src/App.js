import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './categories';
import Home from './home';

import './App.css';

const App = () => (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />    
        <Route exact path="/categories" component={Categories} />    
        {/* <Route exact path="/categories/premier-league" component={Goals} />     */}
      </Switch>
     </Router>
    </div>
);

export default App;
