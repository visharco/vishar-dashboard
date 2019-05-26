import React, {Component} from 'react';
import './style.css';
import logo from '../../../assets/images/logo.png'
import Input from '../../../component/common/input/Input';
import Button from '../../../component/common/Button/Button';
import {browserHistory} from 'react-router';
import PostData from '../../../controler/postToApi';
import EmailChecker from '../../../component/EmailChecker/EmailChecker'
import EnglishChecker from '../../../component/EnglishChecker/EnglishChecker'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'login',
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            isLoading:false,

            isLoadingReg: false,
            emailErrorReg: '',
            nameFamilyErrorReg: '',
            passwordErrorReg: '',
            userTypeErrorText: '',
            emailReg:'',
            passwordReg:''


        }
    }


    goToLogin = () => {
        browserHistory.push('/register');
    }
    goToForgetPassword = () => {
        browserHistory.push('/forgetPassword');
    }

    _callLogin = async () => {
        this.setState({
            isLoading: true,
            emailError: '',
            passwordError: ''
        })

        if (this.state.email.trim() === '') {
            this.setState({
                emailError: 'ایمیل را وارد نکردید'
            })

        }

        if (this.state.email.trim() !== '') {
            if (EmailChecker(this.state.email) === false) {
                this.setState({emailError: 'ایمیل را اشتباه وارد کرده اید'})
            }
        }


        if (this.state.password.trim() === '') {
            this.setState({
                passwordError: 'پسورد را وارد نکردید'
            })
        }

        if (this.state.password.trim() !== '' && this.state.password.length < 8) {
            this.setState({
                passwordError: 'رمز عبور باید بیشتر از ۸ کاراکتر باشد'
            })
        }

        //
        // provider data for API --------------------------------------------------------------->
        //
        const data = new FormData();

        data.append('email', this.state.email);
        data.append('password', this.state.password);


        if (this.state.email !== '' && this.state.password !== '' && EmailChecker(this.state.email) === true) {

            const res = await PostData(data, 'auth/email/login', null)
            console.log(res)

            //
            // when the login infromation is ok, go to dashboard component.
            //

            if (res.status === 200) {
                localStorage.setItem('@authorization_vishar', res.data.token);
                browserHistory.push('/dashboard');
                window.location.reload();
            }

            if (res.status === 400) {
                this.setState({
                    emailError: '',
                    passwordError: 'رمز عبور را اشتباه وارد کرده اید'
                })
            }
            if (res.status === 401) {
                this.setState({
                    emailError: '',
                    passwordError: 'رمز عبور را اشتباه وارد کرده اید'
                })
            }

          
        }
        this.setState({
            isLoading: false, 
        })
    }


    _opentabs(val) {
        this.setState({
            type: val
        })
    }

    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    //
    // -------------------------------------------------- register ------------------------------------------------
    //


    changedHandlerRadio = (e) => {
        console.log(e.target.id);
        this.setState({
            userType: e.target.id
        })
    }


    _onClickRegister = async () => {

        this.setState({
            isLoadingReg: true,
            emailErrorReg: '',
            nameFamilyErrorReg: '',
            passwordErrorReg: '',
            userTypeErrorText: '',
        })


        // alert(this.state.name)
        let validation = false;


        const data = new FormData();

        data.append('name', this.state.namefamily);
        data.append('email', this.state.emailReg);
        data.append('password', this.state.passwordReg);
        data.append('password_confirmation', this.state.passwordReg);
        data.append('type', this.state.userType);


        // console.log(this.state.password.trim())

        // chek simple validation // TODO later to be control correct
        if (this.state.namefamily === '') {
            this.setState({
                nameFamilyErrorReg: 'نام و نام خانوادگی را وارد نکرده اید',
            })
        } 
        
        // else if (EnglishChecker(this.state.namefamily) === true) {
        //     this.setState({
        //         nameFamilyErrorReg: 'نام و نام خانوادگی را به صورت فارسی بنویسید',
        //     })
        // }

        // //email
        if (this.state.emailReg.trim() === '') {
            this.setState({
                emailErrorReg: 'ایمیل را وارد نکرده اید ',
            })
        } else {
            if (EmailChecker(this.state.emailReg) === false) {
                this.setState({
                    emailErrorReg: 'ایمیل را اشتباه وارد کرده اید ',
                })
            }
        }


        // //password
        if (this.state.passwordReg.trim() === '') {
            console.log('pw')
            this.setState({
                passwordErrorReg: 'رمز عبور را وارد نکرده اید ',
            })
        } else if (this.state.passwordReg !== '' && this.state.passwordReg.length < 6) {
            console.log('pw')
            this.setState({
                passwordErrorReg: 'رمز عبور باید بیشتر از 6 کاراکتر باشد ',
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
        if (this.state.namefamily !== ''  &&
            this.state.emailReg !== '' && EmailChecker(this.state.emailReg) === true &&
            this.state.passwordReg !== '' && this.state.passwordReg.length > 8 &&
            (this.state.userType === 'customer' || this.state.userType === 'designer')) {

            this.setState({
                userTypeError: false
            })
            const res = await PostData(data, 'auth/email/register');
            console.log(res)
            if (res.status === 200) {
                localStorage.setItem('@authorization_vishar', res.data.token);
                browserHistory.push('/dashboard');
                window.location.reload();
            }
        }

        this.setState({
            isLoadingReg: false
        })


    }


    render() {

        const _renderLogin = (
            <div className="login-form">
                <h2>ورود به سیستم</h2>
                <p>جهت ورود به سیستم ، لطفا اطلاعات زیر را وارد نمایید</p>
                <Input
                    type={'text'}
                    name={'email'}
                    placeholder={'ایمیل / شماره همراه'}
                    changed={this.changedHandler}
                    error={this.state.emailError}
                    val={this.state.email}
                />

                <Input
                    type={'password'}
                    name={'password'}
                    placeholder={'رمز عبور'}
                    changed={this.changedHandler}
                    error={this.state.passwordError}
                    val={this.state.password}
                />

                <Button
                    isLoading={this.state.isLoading}
                    title={'ورود'}
                    bgcolor={'#0080FF'}
                    hoverbgcolor={'rgba(0, 128, 255, .8)'}
                    click={this._callLogin}
                    borderRadius="2px"
                    color="#fff"
                />
            </div>
        )


        const _renderRegister = (
            <div className="register-form">
                <h2> ثبت نام در ویشار</h2>
                <p>جهت عضویت در ویشار لطفا اطلاعات زیر را وارد نمایید</p>

                <Input
                    type={'text'}
                    name={'namefamily'}
                    placeholder={'نام و نام خانوادگی'}
                    changed={this.changedHandler}
                    error={this.state.nameFamilyErrorReg} 
                />
                {/* <span>لطفا نام و نام خانودادگی خود را به صورت فارسی وارد نمایید</span> */}
                <Input
                    type={'email'}
                    name={'emailReg'}
                    placeholder={'ایمیل '}
                    changed={this.changedHandler}
                    error={this.state.emailErrorReg}
                />
                <Input
                    type={'password'}
                    name={'passwordReg'}
                    placeholder={'رمز عبور'}
                    changed={this.changedHandler}
                    error={this.state.passwordErrorReg}
                />
                <div className="R-checkbox">

                    <p>
                        <input type="radio" id="customer" name="radio-group" onChange={this.changedHandlerRadio}/>
                        <label htmlFor="customer">
                            <span>من نیاز به یک طرح دارم</span>
                        </label>
                    </p>
                    <p>
                        <input type="radio" id="designer" name="radio-group" onChange={this.changedHandlerRadio}/>
                        <label htmlFor="designer">
                            <span>من یک طراحم</span>
                        </label>
                    </p>
                    {
                        this.state.userTypeError ?
                            <span className="type-person bounceIn">{this.state.userTypeErrorText}</span> : ''
                    }

                </div>
                <br/>
                <br/>

                <Button
                    isLoading={this.state.isLoadingReg}
                    title={'ثبت نام'}
                    bgcolor={'#0080FF'}
                    hoverbgcolor={'rgba(0, 128, 255, .8)'}
                    click={this._onClickRegister}
                    borderRadius="2px"
                    color="#fff"
                />

            </div>
        )


        return (
            <div className="cover">
                <img src={logo} className="login-logo" alt="لوگو"/>
                <div className="login-container">
                    <div className="login-header">
                        <div className="col-50 login-header-item " onClick={() => this._opentabs('register')}>ثبت نام
                        </div>
                        <div className="col-50 login-header-item " onClick={() => this._opentabs('login')}>ورود</div>
                    </div>

                    {this.state.type === 'login' ? _renderLogin : _renderRegister}

                </div>


            </div>
        );
    }
}

export default LoginComponent;