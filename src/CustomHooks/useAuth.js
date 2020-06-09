import React, {useContext} from 'react';
import {userContext} from '../Contexts/User/UserContext';
import {Redirect} from 'react-router-dom';

const useAuth = (props) => {
    const {currentUser} = useContext(userContext);
    if (!currentUser) {
        //  <Redirect to ="/signin/login" />
        props.history.push("/signin/login");
    } else {
        return true
    }

}

export default useAuth;
