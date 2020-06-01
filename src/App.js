import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Users from './containers/Users';
import Products from './containers/Products/Products';
import Sidebar from './containers/Sidebar/Sidebar';
import ProductDetail from './containers/ProductDetail/ProductDetail';
import Login from './containers/Login/Login';
import asyncComponent from './hoc/asyncComponent';

import {auth} from './firebase/util';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});
import classes from './index.scss';

const App = (props) =>  {
    const [sideBarOpen, toggleSideBar] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(null);
    console.log('isLoggedIn', isLoggedIn);
    useEffect(() => {
        const authListner = auth.onAuthStateChanged(authStatus => {
            if (!authStatus) {
                setLoggedIn(isLoggedIn => isLoggedIn = null)
            } else {
                setLoggedIn(isLoggedIn => isLoggedIn = authStatus)
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
            <div className = {classes.container}>
                
                <Header openSideBar = {openSideBar}
                isLoggedIn ={isLoggedIn}  />
                <Sidebar open = {sideBarOpen} openSideBar = {openSideBar}/>
                <div className = {classes.main}>
                    <Route path="/" exact component={Products} />
                    <Route path="/signin" exact
                    render = {() =>isLoggedIn ?<Redirect to="/" />: (
                        
                    <Login />
                    )}
                     />
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
                <div className = {classes.footer}>
                    All rights reserved
                </div>
            </div>
        );
    
}

export default App;