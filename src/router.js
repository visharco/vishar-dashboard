import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';


import RootComponent from './root';
import LoginScreen from './container/auth/login';
import RegisterScreen from './container/auth/register';
 

class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <Router history={browserHistory}>
                <Route path="/" component={RootComponent} >
                    <IndexRoute   component={LoginScreen} /> 
                    <Route   path="login" component={LoginScreen} /> 
                    <Route   path="register" component={RegisterScreen} />  
                </Route>
            </Router>
         );
    }
}
 
export default RouterComponent;