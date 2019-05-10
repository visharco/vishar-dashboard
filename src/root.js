// import React, {Component} from 'react';
// // import {browserHistory } from 'react-router'
//  import Header from "./component/header/header";
// //  import Footer from "./component/footer/footer";
 
 
// export default class Root extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

  

    
  

//     render() { 
//         return ( 
//             <div>
//                 <Header />
//                 <div> 
                    
//                     { this.props.children}
//                 </div>
//                 {/* <Footer /> */}
              
//             </div>
//          );
//     }
// }
 










import React, { Component } from 'react';

import GetApi from './controler/getToApi';


 
import DashboardMenu from './component/dashboardMenu/dashboardMenu';
import HeaderComponent from './component/header/header';
import DesignerDashboardMenu from './component/Designer/DesignerDashboardMenu/DesignerDashboardMenu';


class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: []
        }
    }

    componentWillMount = async() => {
        const res = await GetApi('profile/init');

       await this.setState({
            userInfo: res.data
        })

    }



    render() {
        return (
            <div >
                <HeaderComponent />
                <div className="dashboard" >

                    <div className="container-fluid" >
                        <div className="container" >
                            <div className="dashboard-left" >
                                {this.props.children}
                            </div>
                            <div className="dashboard-right" >
                            {this.state.userInfo.type ==='customer' ?  <DashboardMenu /> :   <DesignerDashboardMenu data={this.state.userInfo} />}
                               
                                {/* <DesignerDashboardMenu /> */}
                                
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RootComponent;