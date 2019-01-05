import React, {Component} from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  //Read React State and Lifecycle Docs

  componentDidMount() {
    //Usually where initial http requests are made
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      })
    );
  }

/*  componentWillMount() {
    //Runs before component loads
    //Deprecated after React 17
    console.log('componentWillMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //Runs after component updates
    console.log('componentDidUpdate');
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    //Deprecated after React 17
  }

  componentWillReceiveProps(nextProps, nextContext) {
    //Runs when new props are received, usually with Redux
    //Deprecated after React 17
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //Needs to return state or null
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //Runs before mutations are made
  }*/

  render() {
    const {title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
