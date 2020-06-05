import React, { useState, useEffect, useContext } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Users from './containers/Users';
import Products from './containers/Products/Products';
import Sidebar from './containers/Sidebar/Sidebar';
import ProductDetail from './containers/ProductDetail/ProductDetail';
import Login from './containers/Login/Login';
import asyncComponent from './hoc/asyncComponent';

import { auth, handleUserSnapshot } from './firebase/util';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});
import classes from './index.scss';
import SignUp from './containers/Login/SignUp/SingUp';
import { withRouter } from 'react-router-dom';
import { userContext, SET_USER } from './Contexts/User/UserContext';


const App = (props) => {
    const [sideBarOpen, toggleSideBar] = useState(false);
    // const [isLoggedIn, setLoggedIn] = useState(null);
    const { currentUser: isLoggedIn, dispatch } = useContext(userContext);
    console.log('isLoggedIn', isLoggedIn);
    useEffect(() => {
        const authListner = auth.onAuthStateChanged(async authStatus => {
            if (!authStatus) {
                //setLoggedIn(isLoggedIn => isLoggedIn = null);
                dispatch({ type: SET_USER, user: null })
            } else {
                const userRef = await handleUserSnapshot(authStatus);
                userRef.onSnapshot(snapshot => {
                    // setLoggedIn(isLoggedIn => isLoggedIn = {
                    //         id: snapshot.id,
                    //         ...snapshot.data()
                    //     })
                    dispatch({
                        type: SET_USER, user: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })

                })

            }
        })
        return () => {
            authListner();
        }
    }, []);

    const openSideBar = () => {
        toggleSideBar(sideBarOpen => !sideBarOpen)
    }

    return (
        <div className={classes.container}>            
            <Header  openSideBar={openSideBar}
                isLoggedIn={isLoggedIn} />
            <Sidebar open={sideBarOpen} openSideBar={openSideBar} />
            <div className={classes.main}>
                <Route path="/" exact component={Products} />

                <Route path="/signin/:type"
                    render={(props) => isLoggedIn ? <Redirect to="/" /> : (

                        <Login {...props} />
                    )}
                />
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/pizza" component={AsyncPizza} />
            </div>
            <div className={classes.footer}>
                All rights reserved
                </div>
        </div>
    );

}
App.whyDidYouRender = true

export default withRouter(App);