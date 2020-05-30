import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});
import classes from './index.css';

class App extends Component {
    render () {
        return (
            <div className = {classes.container}>
                <Header />
                <div className = {classes.main}>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
                <div className = {classes.footer}>
                    Footer
                </div>
            </div>
        );
    }
}

export default App;