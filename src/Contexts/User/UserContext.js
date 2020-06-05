import React, {createContext, useReducer} from 'react';
export const SET_USER = "SET_USER"; 

export const userContext = createContext();
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state, action) => {
    switch(action.type) {
        case SET_USER: 
        if (state.currentUser === action.user) {
            return state;
        }
        return {
            ...state,
            currentUser : action.user
        }            
        default:
            return state;
        }
    }

const UserContextProvider = (props) => {

    const [{currentUser}, dispatch] = useReducer(userReducer,INITIAL_STATE)
    return (
        <userContext.Provider value={{currentUser, dispatch}} >
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider;


