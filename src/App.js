import React, { Component } from 'react';

let obj = {
  name: 'a',
  age: 24
}

export default class App extends Component {
  checkLog() {
    return {
      ...obj,
      address: 'abc'
    }
    // return Object.assign({}, obj, {address: 'def'});
  }
  render() {
    let entry = this.checkLog();
    console.log(entry, JSON.stringify(entry));
    return (
      <h1>Hello, world. {JSON.stringify(entry) + ' ; ' + Object.assign}</h1>
    );
  }
}
