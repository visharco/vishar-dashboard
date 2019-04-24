import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Cover from '../../../component/cover/cover';
import Input from '../../../component/common/input/Input';
import Button from '../../../component/common/Button/Button';

import logo from '../../../assets/images/logo.png'

import './style.css'

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToRegister = () => {
         browserHistory.push('/login');
    }

    _onClickRegister = () =>{
        alert(this.state.name)
    }

    changedHandler = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    render() {
        return (
            <div className="registerLogin" >
                <div className="container-fluid" >
                    <div className="container" >

                        <Cover />
                        <div className="RL-right" >
                            <div className="RL-title" >
                                <img src={logo} alt="لوگو" />
                                <h1>ثبت نام</h1>
                            </div>
                            <div className="RL-inputs" >
                                <Input
                                    type={'text'}
                                    name={'name'}
                                    placeholder={'نام و نام خانوادگی'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <Input
                                    type={'text'}
                                    name={'email'}
                                    placeholder={'ایمیل '}
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
                                <div className="R-checkbox" >

                                    <p>
                                        <input type="radio" id="design" name="radio-group" defaultChecked />
                                        <label htmlFor="design">
                                            <span>من نیاز به یک طرح دارم</span>
                                        </label>
                                    </p>
                                    <p>
                                        <input type="radio" id="designer" name="radio-group" />
                                        <label htmlFor="designer">
                                            <span>من یک طراحم</span>
                                        </label>
                                    </p>

                                </div>
                            </div>



                            <div className="RL-button" >
                                <Button
                                    isLoading={this.state.isLoading}
                                    title={'ثبت نام'}
                                    bgcolor={'#0080FF'}
                                    hoverbgcolor={'rgba(0, 128, 255, .8)'}
                                    click={this._onClickRegister}
                                    borderRadius="2px"
                                    color="#fff"
                                />
                                <p className="change-page-text" >
                                    یک حساب کاربری دارد
                                    <span onClick={this.goToRegister} > ورود </span>
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterComponent;