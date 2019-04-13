import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

//
//
//

import logo from './../../assets/images/logo.png'
import envelope from '../../assets/icons/envelope.svg';
import bell from '../../assets/icons/bell.svg';
import user from '../../assets/icons/user.svg';

//
//compoents
//


import './style.css';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToNotification = () => {
        browserHistory.push('/notification');
    }
    render() {
        return (
            <div className="header">
                <div className="container-fluid" >
                    <div className="container" >
                        <div className="header-menu" >
                            <div className="header-logo" >
                                <Link to="/" ><img src={logo} alt="لوگو" /></Link>
                            </div>
                            <ul className="menu-links">
                                <Link to="/contactUs" ><li className="menu-link">تماس ما</li></Link>
                                <Link to="/blog" ><li className="menu-link">بلاگ</li></Link>
                                <Link to="/aboutUs" ><li className="menu-link">درباره ما</li></Link>
                                <Link to="/projects" ><li className="menu-link">پروژه ها</li></Link>
                                <Link to="/designers" ><li className="menu-link">طراحان</li></Link>
                                <Link to="/categories" ><li className="menu-link">دسته بندی</li></Link>
                            </ul>
                        </div>
                        <div className="user-menu" >
                            <div className="user-welcome" >
                                <div className="user-text" >خوش اومدی , دانیال</div>
                                <div className="user-welcome-img">
                                    <img src={user} alt="کاربر" />

                                </div>
                            </div>
                            <div className="envelope-box" >
                                <img className="envelope-icon" src={envelope} alt="صندوق ورودی" />
                                <span className="envelope-number" >4</span>
                            </div>
                            <div className="envelope-box" onClick={this.goToNotification} >
                                <img className="envelope-icon" src={bell} alt="توجهات"/>  
                                <span className="envelope-number" >1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;