import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';


import RootComponent from './root';
import LoginScreen from './container/auth/login';
 

class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <Router history={browserHistory}>
                <Route path="/" component={RootComponent} >
                    <IndexRoute   component={login} /> 
                    <Route   path="index" component={login} /> 
                    {/* <Route   path="categories" component={CategorieScreen} />   */}
                </Route>
            </Router>
         );
    }
}
 
export default RouterComponent;