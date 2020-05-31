import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Users from './containers/Users';
import Products from './containers/Products/Products';
import Sidebar from './containers/Sidebar/Sidebar';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});
import classes from './index.scss';

const App = (props) =>  {
    const [sideBarOpen, toggleSideBar] = useState(false);
    const openSideBar = () => {
        toggleSideBar(sideBarOpen => !sideBarOpen)
    }
    
        return (
            <div className = {classes.container}>
                
                <Header openSideBar = {openSideBar}  />
                <Sidebar open = {sideBarOpen} openSideBar = {openSideBar}/>
                <div className = {classes.main}>
                    <Route path="/" exact component={Products} />
                    <Route path="/product:id" component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
                <div className = {classes.footer}>
                    All rights reserved
                </div>
            </div>
        );
    
}

export default App;