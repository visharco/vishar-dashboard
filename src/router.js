import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// import RootComponent from './root';
import LoginScreen from './container/auth/login/login';
import RegisterScreen from './container/auth/register/register';
import ForgetPasswordScreen from './container/auth/forgetPassword/forgetPassword';
import DashboardComponent from './container/dashboard/dashboard';
import ProfileScreen from './component/profile/profile';
import SingleProjectScreen from './component/singleProject/singleProject'
import RootScreen from './root';


class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Router history={browserHistory}>
                 <Route path="/login" component={LoginScreen} >
                 </Route>

                <Route path="/" component={RootScreen} >
                    <IndexRoute component={DashboardComponent} />
                    <Route path="dashboard" component={DashboardComponent} />
                    <Route path="register" component={RegisterScreen} />
                    <Route path="forgetPassword" component={ForgetPasswordScreen} />
                    <Route path="profile" component={ProfileScreen} />
                    <Route path="singleProject" component={SingleProjectScreen} />
                </Route>
            
            </Router>
        );
    }
}

export default RouterComponent;