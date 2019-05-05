import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Cover from '../../../component/cover/cover';
import Input from '../../../component/common/input/Input';
import Button from '../../../component/common/Button/Button';
import logo from '../../../assets/images/logo.png'


import EmailChecker from '../../../component/EmailChecker/EmailChecker'
import EnglishChecker from '../../../component/EnglishChecker/EnglishChecker'

//
// controler
//
import PostData from '../../../controler/postToApi';


import './style.css'

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namefamily: '',
            email: '',
            password: '',
            type: '',
            nameFamilyError: '',
            emailError: '',
            passwordError: '',
            userTypeError: false,
            userTypeErrorText: ''
        }
    }

    goToRegister = () => {
        browserHistory.push('/login');
    }

    changedHandler = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changedHandlerRadio = (e) => {
        console.log(e.target.id);
        this.setState({
            userType: e.target.id
        })
    }
    

    _onClickRegister = async () => {

        this.setState({
            isLoading: true,
            emailError: '',
            nameFamilyError: '',
            passwordError: '',
            userTypeErrorText: '',
        })

        


        // alert(this.state.name)
        let validation = false;

        const data = {
            "name": this.state.namefamily,
            "email": this.state.email,
            "password": this.state.password,
            "password_confirmation": this.state.password,
            "type": this.state.userType
        };
        console.log(this.state.password.trim())

        // chek simple validation // TODO later to be control correct
        if (this.state.namefamily === '') {
            this.setState({
                nameFamilyError: 'نام و نام خانوادگی را وارد نکرده اید',
            })
        }else if(EnglishChecker(this.state.namefamily) === true){
            this.setState({
                nameFamilyError: 'نام و نام خانوادگی را به صورت فارسی بنویسید',
            })
        }

        // //email
        if (this.state.email.trim() === '') {
            this.setState({
                emailError: 'ایمیل را وارد نکرده اید ',
            })
        } else {
            if (EmailChecker(this.state.email) === false) {
                this.setState({
                    emailError: 'ایمیل را اشتباه وارد کرده اید ',
                })
            }
        }


        // //password
        if (this.state.password.trim() === '') {
            console.log('pw')
            this.setState({
                passwordError: 'رمز عبور را وارد نکرده اید ',
            })
        } else if (this.state.password !== '' && this.state.password.length < 8) {
            console.log('pw')
            this.setState({
                passwordError: 'رمز عبور باید بیشتر از ۸ کاراکتر باشد ',
            })
        }

        // //user type
        if (this.state.userType !== 'customer' && this.state.userType !== 'designer') {
            this.setState({
                userTypeError: true,
                userTypeErrorText: 'سطح درسترسی خود را انتخاب کنید',
            })
        }

        // final check for submit form
        if (this.state.namefamily !== '' && EnglishChecker(this.state.namefamily) === false &&
            this.state.email !== '' && EmailChecker(this.state.email) === true &&
            this.state.password !== '' && this.state.password.length > 8 &&
            (this.state.userType === 'customer' || this.state.userType === 'designer')) {
            
            this.setState({
                userTypeError:false
            })
            const res = await PostData(data, 'auth/email/register');
            console.log(res)
            if (res.status === 200)
                this.goToRegister();
        }

        this.setState({
            isLoading: false
        })

    }

    componentWillUnmount(){
       
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
                                    name={'namefamily'}
                                    placeholder={'نام و نام خانوادگی'}
                                    changed={this.changedHandler}
                                    error={this.state.nameFamilyError}
                                    val={this.state.nameFamily}
                                />
                                <span>لطفا نام و نام خانودادگی خود را به صورت فارسی وارد نمایید</span>
                                <Input
                                    type={'text'}
                                    name={'email'}
                                    placeholder={'ایمیل '}
                                    changed={this.changedHandler}
                                    error={this.state.emailError}
                                />
                                <Input
                                    type={'password'}
                                    name={'password'}
                                    placeholder={'رمز عبور'}
                                    changed={this.changedHandler}
                                    error={this.state.passwordError}
                                />
                                <div className="R-checkbox" >

                                    <p>
                                        <input type="radio" id="customer" name="radio-group" onChange={this.changedHandlerRadio} />
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
                                    {
                                        this.state.userTypeError ?
                                            <span className="type-person bounceIn" >{this.state.userTypeErrorText}</span> : ''
                                    }

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