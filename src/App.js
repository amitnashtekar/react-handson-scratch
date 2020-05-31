import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Users from './containers/Users';
import Products from './containers/Products/Products';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});
import classes from './index.scss';

class App extends Component {
    render () {
        return (
            <div className = {classes.container}>
                <Header />
                <div className = {classes.main}>
                    <Route path="/" exact component={Products} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
                <div className = {classes.footer}>
                    All rights reserved
                </div>
            </div>
        );
    }
}

export default App;