import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Content1 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(this.context);
    e.target.name.value = '';
    this.context.router.push('/content1/child1');
    // browserHistory.push('/content1/child1');
  }
  render() {
    return (
      <div>
        <h2>Content 1</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="Your Name" name="name"/>
            <br/>
            <input type="submit" defaultValue="Submit"/>
          </form>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Content1.contextTypes = {
  router: React.PropTypes.object
};