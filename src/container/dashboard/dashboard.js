import React, { Component } from 'react';




import './style.css'
import DashboardMenu from '../../component/dashboardMenu/dashboardMenu';
import HeaderComponent from '../../component/header/header';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                <DashboardMenu />
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;