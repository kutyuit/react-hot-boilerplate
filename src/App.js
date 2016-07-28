import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li><Link to="/" activeStyle={{color: 'green'}} onlyActiveOnIndex={true}>Home</Link></li> */}
          <li><IndexLink to="/" activeStyle={{color: 'green'}}>Home</IndexLink></li>
          <li>
            <Link to="/content1" activeStyle={{color: 'green'}}>Content 1</Link>
            <ul>
              <li><Link to="/content1/child1">Child 1</Link></li>
            </ul>
          </li>
          <li><Link to="/content2" activeStyle={{color: 'green'}}>Content 2</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
