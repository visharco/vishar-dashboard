import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Cover from '../../../component/cover/cover';
import Input from '../../../component/common/input/Input';
import Button from '../../../component/common/Button/Button';
import logo from '../../../assets/images/logo.png'

//
// controler
//
import PostData from '../../../controler/postToApi';


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
       // alert(this.state.name)
       let validation = false;

       const data = {
           "name": this.state.name,
           "email": this.state.email,
           "password": this.state.password,
           "password_confirmation": this.state.password,
           "type": this.state.userType
       };

       // chek simple validation // TODO later to be control correct
       if(this.state.name === '' || this.state.name === null || this.state.name === undefined)
            validation = true
       if(this.state.email === '' || this.state.email === null || this.state.email === undefined)
            validation = true
       if(this.state.password === '' || this.state.password === null || this.state.password === undefined)
            validation = true
       if(this.state.userType === '' || this.state.userType === null || this.state.userType === undefined)
            validation = true

       if(validation=== false){
        const res = PostData(data, 'auth/email/register');
        console.log(res)
        this.goToRegister();
       }
 
    }

    changedHandler = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changedHandlerRadio = (e) => {
        //console.log(e.target.id); 
        this.setState({
            userType: e.target.id
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
                                <span>لطفا نام و نام خانودادگی خود را به صورت فارسی وارد نمایید</span>
                                <Input
                                    type={'text'}
                                    name={'email'}
                                    placeholder={'ایمیل '}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <Input
                                    type={'password'}
                                    name={'password'}
                                    placeholder={'رمز عبور'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <div className="R-checkbox" >

                                    <p>
                                        <input type="radio" id="customer" name="radio-group"   onChange={this.changedHandlerRadio} />
                                        <label htmlFor="customer">
                                            <span>من نیاز به یک طرح دارم</span>
                                        </label>
                                    </p>
                                    <p>
                                        <input type="radio" id="designer" name="radio-group" onChange={this.changedHandlerRadio} />
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