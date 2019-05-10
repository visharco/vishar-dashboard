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

    DesignerDashboardMenu = React.createRef();

    handleScroll = () => {

        if (window.innerWidth > 900) {
            if (window.scrollY >= 100) {
                this.DesignerDashboardMenu.current.style.top = `0px`;
                this.DesignerDashboardMenu.current.style.height = `100vh`;
            } else if (window.scrollY < 100) {
                this.DesignerDashboardMenu.current.style.top = `80px`;
                this.DesignerDashboardMenu.current.style.height = `calc(100vh - 80px)`;
            }

        }
    };


    goToDesignerProfile = () => {
        browserHistory.push('/DesignerProfile');
        console.log('0')

    }
    goToDesignerWallet = () => {
        browserHistory.push('/DesignerWallet');
    }
    goToDesignerSingleProject = () => {
        browserHistory.push('/DesignerSingleProject');
        console.log('0')
    }
    goToDesignerCollaborateProject = () => {
        browserHistory.push('/DesignerCollaborateProject');
    }
    goToDesignerMessage = () => {
        browserHistory.push('/DesignerMessage');
    }
    goToDesignerPayments = (e) => {
        browserHistory.push('/DesignerPayments');
    }
    goToDesignerPorfolio = (e) => {
        browserHistory.push('/DesignerPorfolio');
    }

    menuTablet = React.createRef()

    openCloseHumbergerMenu = () => {
        if (window.innerWidth < 900) {

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
                <div className="hamburger" ref={this.humberger}>
                    <span className={line1.join(' ')}></span>
                    <span className={line2.join(' ')} ></span>
                    <span className={line3.join(' ')} ></span>
                </div>
                <div ref={this.menuTablet} className="DB-menuRight"  >


                    <div >
                        <div className="DDM-title" >
                            <img src={user} alt="طراح" />
                            <div className="DDM-title-name">
                                <h1>{this.props.data.name}</h1>
                                <h2>{this.props.data.email}</h2>
                                <span>{this.props.data.type}</span>
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
                            <div className="DDM-body-child" onClick={this.goToDesignerMessage} >
                                <p>پیامها</p>
                                <img src={message} alt="پیام ها" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerPayments} >
                                <p>تراکنشها</p>
                                <img src={payment} alt="تراکنش" />
                            </div>
                            <div className="DDM-body-child" onClick={this.goToDesignerPorfolio} >
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