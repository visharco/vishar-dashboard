import React, { Component } from 'react';

//
//
//

import userblack from '../../assets/icons/userblack.svg';
import employee from '../../assets/icons/employee.svg';
import employees from '../../assets/icons/employees.svg';
import message from '../../assets/icons/message.svg';
import payment from '../../assets/icons/payment.svg';
import logout from '../../assets/icons/logout.svg';
import pic1 from '../../assets/images/pic1.png';

//
//compoents
//


import './style.css';


class DashboardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="DashboardMenu">
                <div>

                    <div className="DM-title" >
                        <img src={pic1} alt="طراح" />
                        <div className="DM-title-name">
                            <h1>امید آرمانی</h1>
                            <h2>omidarmani@gmail.com</h2>
                        </div>

                    </div>
                    <div className="DM-body" >
                        <div className="DM-body-child" >
                            <p>پروفایل</p>
                            <img src={userblack} alt="کاربر" />
                        </div>
                        <div className="DM-body-child" >
                            <p>پروژه های فردی</p>
                            <img src={employee} alt="فردی" />
                        </div>
                        <div className="DM-body-child" >
                            <p>پروژه های همکاری</p>
                            <img src={employees} alt="همکاری" />
                        </div>
                        <div className="DM-body-child" >
                            <p>صندوق ورودی</p>
                            <img src={message} alt="پیام ها" />
                        </div>
                        <div className="DM-body-child" >
                            <p>تراکنش</p>
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