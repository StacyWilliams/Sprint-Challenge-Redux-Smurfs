/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING, SUCCESS, FAILURE, ADDING} FROM '../actions';

const initialState = {
  smurfs: [],
  fetching: false,
  addingSmurf: false,
  updatingSMurf: false,
  err:null
  
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer =(state= initialState, action) => {
  switch(action.type){
    case FETCHING:
       return {...state,
       fetching:true}
    case ADDING:
       return {...state,
       fetching:true}
    case SUCCESS:
       return {...state,
        smurfs:action.payload,
       fetching:false}
    case FAILURE:
       return {...state,
        error:action.payload,
       fetching:false}


      default:
        return{...state};
  }
}