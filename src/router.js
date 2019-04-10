import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import RootComponent from './root';
import LoginScreen from './container/auth/login/login';
import RegisterScreen from './container/auth/register/register';
import ForgetPasswordScreen from './container/auth/forgetPassword/forgetPassword';
import DashboardComponent from './container/dashboard/dashboard';
import ProfileScreen from './component/profile/profile';

class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Router history={browserHistory}>
                <Route path="/" component={DashboardComponent} >
                    <IndexRoute component={DashboardComponent} />
                    <Route path="login" component={LoginScreen} />
                    <Route path="register" component={RegisterScreen} />
                    <Route path="forgetPassword" component={ForgetPasswordScreen} />
                    <Route path="profile" component={ProfileScreen} />
                </Route>
            </Router>
        );
    }
}

export default RouterComponent;