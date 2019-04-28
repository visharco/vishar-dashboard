import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import Cover from '../../../component/cover/cover';
import Input from './../../../component/common/input/Input';
import Button from './../../../component/common/Button/Button';

import EmailChecker from '../../../component/EmailChecker/EmailChecker'


import logo from '../../../assets/images/logo.png'

import './style.css'


class ForgetPasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetPasswordError:'',
            emailnumber:'',
            resetPasswordValid:false
        }
    }
    goToLogin = () => {
        browserHistory.push('/register');
    }

    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(isNaN(this.state.emailnumber))
    }

    _resetPassword = () =>{
        this.setState({
            isLoading: true,
            resetPasswordError:''
        })

        if( isNaN(this.state.emailnumber) === false){
            this.setState({
                resetPasswordValid:true
            })
        }else if (EmailChecker(this.state.emailnumber) === true){
            this.setState({
                resetPasswordValid:true
            })
        }else {
            this.setState({
                resetPasswordValid:false,
                resetPasswordError:'شماره همراه یا ایمیل اشتباه است '
            })
        }

        
    }



    render() {
        return (
            <div className="registerLogin" >
                <div className="container-fluid" >
                    <div className="container" >
                        
                            <Cover />
                    
                        <div className="RL-right" >
                            <div className="RL-title" >
                                <img src={logo} alt="لوگو"/>
                                <h1>فراموشی رمز عبور</h1>
                            </div>
                            <div className="RL-inputs" >
                                <Input
                                    type={'text'}
                                    name={'emailnumber'}
                                    placeholder={'ایمیل / شماره همراه'}
                                    changed={this.changedHandler}
                                    error={this.state.resetPasswordError}
                                    val={this.state.emailnumber}
                                />
                                
                            </div>
                            <div className="RL-button" >
                                <Button
                                    isLoading={this.state.isLoading}
                                    title={'به یادآوری رمز عبور'}
                                    bgcolor={'#0080FF'}
                                    hoverbgcolor={'rgba(0, 128, 255, .8)'}
                                    click={this._resetPassword}
                                    borderRadius="2px"
                                    color="#fff"
                                />

                                <p className="change-page-text" >
                                    حساب کاربری داری ؟
                                    <span onClick={this.goToLogin} >ورود </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgetPasswordComponent;