import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import Cover from '../../../component/cover/cover';
import Input from '../../../component/common/input/Input';
import Button from '../../../component/common/Button/Button';

import logo from '../../../assets/images/logo.png'

import './style.css'


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    goToLogin = () => {
        browserHistory.push('/register');
    }
    goToForgetPassword = () => {
        browserHistory.push('/forgetPassword');

    }
    render() {
        return (
            <div className="registerLogin" >
                <div className="container-fluid" >
                    <div className="container" >

                        <Cover />

                        <div className="RL-right" >
                            <div className="RL-title" >
                                <img src={logo} />
                                <h1>ورود</h1>
                            </div>
                            <div className="RL-inputs" >
                                <Input
                                    type={'text'}
                                    name={'emailnumber'}
                                    placeholder={'ایمیل / شماره همراه'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <Input
                                    type={'text'}
                                    name={'password'}
                                    placeholder={'رمز عبور'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <p className="forget-pass-text" onClick={this.goToForgetPassword} >رمز عبور را فراموش کردید ؟</p>
                            </div>
                            <div className="RL-button" >
                                <Button
                                    isLoading={this.state.isLoading}
                                    title={'ورود'}
                                    bgcolor={'#0080FF'}
                                    hoverbgcolor={'rgba(0, 128, 255, .8)'}
                                    click={this.callSubmit}
                                    borderRadius="2px"
                                    color="#fff"
                                />

                                <p className="change-page-text" >
                                    نیاز به حساب کاربری داری ؟
                                    <span onClick={this.goToLogin} > ایجاد حساب کاربری </span>
                                </p>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;