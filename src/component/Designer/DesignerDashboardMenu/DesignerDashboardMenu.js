import React, { Component } from 'react';
import { browserHistory } from 'react-router';
//
//
//

import userblack from '../../../assets/icons/userblack.svg';
import employee from '../../../assets/icons/employee.svg';
import employees from '../../../assets/icons/employees.svg';
import message from '../../../assets/icons/message.svg';
import payment from '../../../assets/icons/payment.svg';
import logout from '../../../assets/icons/logout.svg';
import user from '../../../assets/icons/user.svg';
import wallet from '../../../assets/icons/wallet.svg';
import portfoilo from '../../../assets/icons/portfoilo.svg';

//
//compoents
//


import './style.css';


class DesignerDashboardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openHumberger: false
        }
    }

    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    DesignerDashboardMenu = React.createRef();

    handleScroll = () => {

        if(window.innerWidth > 900){
            if (window.scrollY >= 100 ) {
                this.DesignerDashboardMenu.current.style.top = `0px`;
                this.DesignerDashboardMenu.current.style.height = `100vh`;
            } else if(window.scrollY < 100) {
                this.DesignerDashboardMenu.current.style.top = `80px`;
                this.DesignerDashboardMenu.current.style.height = `calc(100vh - 80px)`;
            }

        }
    };


    goToDesignerProfile = () => {
        browserHistory.push('/DesignerProfile');
    }
    goToDesignerWallet = () => {
        browserHistory.push('/DesignerWallet');
    }
    goToDesignerSingleProject = () => {
        // browserHistory.push('/DesignerSingleProject');
    }
    goToDesignerCollaborateProject = () => {
        // browserHistory.push('/DesignerCollaborateProject');
    }
    goToDesignerDesignMessage = () => {
        // browserHistory.push('/DesignerDesignMessage');
    }
    goToDesignerPayments = (e) => {
        // browserHistory.push('/DesignerPayments');
    }
    goToDesignerPortfoilo = (e) => {
        // browserHistory.push('/DesignerPortfoilo');
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
                this.DesignerDashboardMenu.current.style.backgroundColor = '#000000d4'
                this.DesignerDashboardMenu.current.style.width = '100%'
            } else {
                this.menuTablet.current.className = 'DB-menuRight'
                this.DesignerDashboardMenu.current.style.backgroundColor = 'unset'
                this.DesignerDashboardMenu.current.style.width = 'inherit'
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
            <div className="DesignerDashboardMenu" ref={this.DesignerDashboardMenu} onClick={this.openCloseHumbergerMenu}>
                <div className="hamburger"  ref={this.humberger}>
                    <span className={line1.join(' ')}></span>
                    <span className={line2.join(' ')} ></span>
                    <span className={line3.join(' ')} ></span>
                </div>
                <div ref={this.menuTablet} className="DB-menuRight"  >


                    <div >
                        <div className="DDM-title" >
                            <img src={user} alt="طراح" />
                            <div className="DDM-title-name">
                                <h1>امید آرمانی</h1>
                                <h2>omidarmani@gmail.com</h2>
                                <span>طراح</span>
                            </div>
                        </div>
                        <div className="DDM-body" >
                            <div className="DDM-body-child" onClick={this.goToDesignerProfile} >
                                <p>پروفایل</p>
                                <img src={userblack} alt="کاربر" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerWallet} >
                                <p>کیف پول </p>
                                <img src={wallet} alt="فردی" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerSingleProject} >
                                <p>پروژه های فردی</p>
                                <img src={employee} alt="فردی" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerCollaborateProject} >
                                <p>پروژه های همکاری</p>
                                <img src={employees} alt="همکاری" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerDesignMessage} >
                                <p>پیامها</p>
                                <img src={message} alt="پیام ها" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerPayments} >
                                <p>تراکنشها</p>
                                <img src={payment} alt="تراکنش" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerPortfoilo} >
                                <p>نمونه کارهای من</p>
                                <img src={portfoilo} alt="تراکنش" />
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

export default DesignerDashboardMenu;