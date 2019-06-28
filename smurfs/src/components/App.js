import React, { Component } from 'react';
import SmurfList from './SmurfList'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.smurfs
  }
  render() {
    return (
      <div className="App">
        <h1>I don't give a Redux</h1>
        <inputForm />
        <SmurfList smurfs={this.props.smurfs} />
        
      </div>
    );
  }
}

export default App;
