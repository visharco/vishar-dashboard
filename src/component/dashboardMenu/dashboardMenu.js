import React, { Component } from 'react';
import { browserHistory } from 'react-router';
//
//
//

import userblack from '../../assets/icons/userblack.svg';
import employee from '../../assets/icons/employee.svg';
import employees from '../../assets/icons/employees.svg';
import message from '../../assets/icons/message.svg';
import payment from '../../assets/icons/payment.svg';
import logout from '../../assets/icons/logout.svg';
import user from '../../assets/icons/user.svg';

//
//compoents
//


import './style.css';


class DashboardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    DashboardMenu = React.createRef();

    handleScroll = () => {

        if (window.scrollY >= 100) {
            this.DashboardMenu.current.style.top = `0px`;
            this.DashboardMenu.current.style.height = `100vh`;
        } else {
            this.DashboardMenu.current.style.top = `80px`;
            this.DashboardMenu.current.style.height = `calc(100vh - 80px)`;
        }
    };


    goToProfile = () => {
        browserHistory.push('/profile');
    }
    goToSingleProject = () => {
        browserHistory.push('/singleProject');
    }
    goToCollaborateProject= () => {
        browserHistory.push('/collaborateProject');
    }
    goToProfile = () => {
        browserHistory.push('/profile');
    }
    goToProfile = () => {
        browserHistory.push('/profile');
    }
    goToProfile = () => {
        browserHistory.push('/profile');
    }
    render() {
        return (
            <div className="DashboardMenu" ref={this.DashboardMenu}>
                <div>

                    <div className="DM-title" >
                        <img src={user} alt="طراح" />
                        <div className="DM-title-name">
                            <h1>امید آرمانی</h1>
                            <h2>omidarmani@gmail.com</h2>
                        </div>

                    </div>
                    <div className="DM-body" >
                        <div className="DM-body-child" onClick={this.goToProfile} >
                            <p>پروفایل</p>
                            <img src={userblack} alt="کاربر" />
                        </div>
                        <div className="DM-body-child" onClick={this.goToSingleProject} >
                            <p>پروژه های فردی</p>
                            <img src={employee} alt="فردی" />
                        </div>
                        <div className="DM-body-child" onClick={this.goToCollaborateProject} >
                            <p>پروژه های همکاری</p>
                            <img src={employees} alt="همکاری" />
                        </div>
                        <div className="DM-body-child" onClick={this.goToProfile} >
                            <p>پیامها</p>
                            <img src={message} alt="پیام ها" />
                        </div>
                        <div className="DM-body-child" onClick={this.goToProfile} >
                            <p>تراکنشها</p>
                            <img src={payment} alt="تراکنش" />
                        </div>

                    </div>
                </div>
                
                <div className="logout" >
                    <p>
                        <span>خروج</span>
                        <img src={logout} alt="خروج" />
                    </p>

                </div>
            </div>
        );
    }
}

export default DashboardMenu;