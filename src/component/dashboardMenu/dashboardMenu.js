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
    humberger = React.createRef()


    constructor(props) {
        super(props);
        this.state = {
            openHumberger: false
        }


        let self = this
        let lastScroll = 0;

        window.onscroll = function () {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

            if (currentScroll > 0 && lastScroll <= currentScroll) {
                lastScroll = currentScroll;
                self.humberger.current.style.display = 'none'
            } else {
                lastScroll = currentScroll;
                self.humberger.current.style.display = 'block'
            }
        };
    }


    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    DashboardMenu = React.createRef();

    handleScroll = () => {

        if(window.innerWidth > 900){
            if (window.scrollY >= 100 ) {
                this.DashboardMenu.current.style.top = `0px`;
                this.DashboardMenu.current.style.height = `100vh`;
            } else if(window.scrollY < 100) {
                this.DashboardMenu.current.style.top = `80px`;
                this.DashboardMenu.current.style.height = `calc(100vh - 80px)`;
            }

        }
    };


    goToProfile = () => {
        browserHistory.push('/profile');
    }
    goToSingleProject = () => {
        browserHistory.push('/singleProject');
    }
    goToCollaborateProject = () => {
        browserHistory.push('/collaborateProject');
    }
    goToMessage = () => {
        browserHistory.push('/Message');
    }

    goToPayments = (e) => {
        browserHistory.push('/payments');
    }

    menuTablet = React.createRef()

    openCloseHumbergerMenu = () =>{
        if(window.innerWidth < 900){

            this.setState((prevState) => {
                return {
                    openHumberger: !prevState.openHumberger
                }
            })
            if (!this.state.openHumberger) {
                this.menuTablet.current.className = 'DB-menuLeft'
                this.DashboardMenu.current.style.backgroundColor = '#000000d4'
                this.DashboardMenu.current.style.width = '100%'
            } else {
                this.menuTablet.current.className = 'DB-menuRight'
                this.DashboardMenu.current.style.backgroundColor = 'unset'
                this.DashboardMenu.current.style.width = 'inherit'
            }
        }
       
    }


    render() {
        let line1 = ['line line1']
        let line2 = ['line line2']
        let line3 = ['line line3']
        if (this.state.openHumberger) {
            line1 = ['lineX line1move']
            line2 = ['lineX line2move']
            line3 = ['lineX line3move']
        } else {
            line1 = ['line line1']
            line2 = ['line line2']
            line3 = ['line line3']
        }
        return (
            <div className="DashboardMenu" ref={this.DashboardMenu} onClick={this.openCloseHumbergerMenu}>
                <div className="hamburger"  ref={this.humberger}>
                    <span className={line1.join(' ')}></span>
                    <span className={line2.join(' ')} ></span>
                    <span className={line3.join(' ')} ></span>
                </div>
                <div ref={this.menuTablet} className="DB-menuRight"  >


                    <div >
                        <div className="DM-title" >
                            <img src={user} alt="طراح" />
                            <div className="DM-title-name">
                                <h1>امید آرمانی</h1>
                                <h2>omidarmani@gmail.com</h2>
                                <span>مشتری</span>
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
                            <div className="DM-body-child" onClick={this.goToMessage} >
                                <p>پیامها</p>
                                <img src={message} alt="پیام ها" />
                            </div>
                            <div className="DM-body-child" onClick={this.goToPayments} >
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
            </div>
        );
    }
}

export default DashboardMenu;