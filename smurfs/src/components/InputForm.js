import React from 'react';
import {connect} from 'react-redux';


class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''

        }
    }

render(){
    return(
        <form>
            <input
            onChange = {this.changehandler}
            type="text"
            name="name"
            placeholder='Name'
            value= {this.state.name}
            required>

            <input
            onChange = {this.changehandler}
            type="number"
            name="age"
            placeholder='Age'
            value= {this.state.age}
            required> 

            <input
            onChange = {this.changehandler}
            type="text"
            name="height"
            placeholder='Height'
            value= {this.state.height}
            required> 
            <button type='submit'>Add Smurf</button> 
        </form>
    )
}


}

export default InputForm