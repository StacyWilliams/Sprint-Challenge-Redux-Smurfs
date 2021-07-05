import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {getSmurfs,deleteSmurf} from "../actions";
import SmurfList from "./SmurfList";
import InputForm from "./InputForm"

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  deleteItem = (e, index) => {
    e.preventDefault()
    this.props.deleteSmurf(index)
}
  render() {
    console.log('App return', this.props.smurfs)
    return (
      <div className="App">
         <h1> I don't give a Redux </h1>
        <InputForm />
        <SmurfList delete={this.deleteSmurf} smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    smurfs:state.smurfs,
    fetching:state.fetching,
    error:state.error
  }
}

export default connect(mapStateToProps,{getSmurfs,deleteSmurf})(App); 
