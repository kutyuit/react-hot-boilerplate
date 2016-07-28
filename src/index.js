import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Sub1 from './Sub1';
import Sub2 from './Sub2';
import Child1 from './Child1';
import Home from './Home';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="content1" component={Sub1}>
        <Route path="child1" component={Child1}/>
      </Route>
      <Route path="content2" component={Sub2}/>
    </Route>
  </Router>
), document.getElementById('root'));
