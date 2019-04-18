import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// import RootComponent from './root';
import RootScreen from './root';
import LoginScreen from './container/auth/login/login';
import RegisterScreen from './container/auth/register/register';
import ForgetPasswordScreen from './container/auth/forgetPassword/forgetPassword';
import DashboardComponent from './container/dashboard/dashboard';
import ProfileScreen from './component/profile/profile';
import PaymentsScreen from './component/payments/payments';
import SingleProjectScreen from './component/singleProject/singleProject'
import CollaborateProjectScreen from './component/collaborateProject/collaborateProject';
import ProjectDetailScreen from './component/projectDetail/projectDetail';
import CreateNewProjectScreen from './component/createNewProject/createNewProject';
import NotificationScreen from './component/notification/notification';
import DesignMessageScreen from './component/designMessage/designMessage';
import DesignerMessageScreen from './component/designerMessage/designerMessage';


import DesignerProfileScreen from './component/Designer/DesignerProfile/DesignerProfile'
import DesignerWalletScreen from './component/Designer/DesignerWallet/DesignerWallet'



class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Router history={browserHistory}>
                <Route path="/login" component={LoginScreen} ></Route>
                <Route path="/register" component={RegisterScreen} ></Route>
                <Route path="forgetPassword" component={ForgetPasswordScreen} />

                <Route path="/" component={RootScreen} >
                    <IndexRoute component={DashboardComponent} />
                    <Route path="dashboard" component={DashboardComponent} />
                    <Route path="register" component={RegisterScreen} />
                    <Route path="profile" component={ProfileScreen} />
                    <Route path="payments" component={PaymentsScreen} />
                    <Route path="singleProject" component={SingleProjectScreen} />
                    <Route path="collaborateProject" component={CollaborateProjectScreen} />
                    <Route path="projectDetail" component={ProjectDetailScreen} />
                    <Route path="createNewProject" component={CreateNewProjectScreen} />
                    <Route path="notification" component={NotificationScreen} />
                    <Route path="designMessage" component={DesignMessageScreen} />
                    <Route path="designerMessage" component={DesignerMessageScreen} />
                    

                    <Route path="DesignerProfile" component={DesignerProfileScreen} />
                    <Route path="DesignerWallet" component={DesignerWalletScreen} />

                </Route>

            </Router>
        );
    }
}

export default RouterComponent;