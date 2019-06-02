import React, {Component} from 'react';
import './style.css';
import logo from '../../../assets/images/logo.png'
import Input from '../../../component/common/input/Input';
import Button from '../../../component/common/Button/Button';
import {browserHistory} from 'react-router';
import PostData from '../../../controler/postToApi';
import EmailChecker from '../../../component/EmailChecker/EmailChecker'
import EnglishChecker from '../../../component/EnglishChecker/EnglishChecker'
import SweetAlert from 'sweetalert-react';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'login',
            emailLogin: '',
            passwordLogin: '',
            emailLoginError: '',
            passwordLoginError: '',
            isLoading:false,

            isLoadingRegister: false,
            emailErrorRegister: '',
            nameFamilyErrorRegister: '',
            passwordErrorRegister: '',
            userTypeErrorText: '',
            name: '',
            emailRegister: '',
            passwordRegister: '',

            // isLoadingReg: false,
            // emailErrorReg: '',
            // nameFamilyErrorReg: '',
            // passwordErrorReg: '',
            // userTypeErrorText: '',
            // emailReg:'',
            // passwordReg:'',
            // namefamily:'',
            // userTypeErrorText:''


        }
    }

    componentDidMount(){
        document.getElementById('login').classList.add ( "activeTab");

    }

    
    goToLogin = () => {
        browserHistory.push('/register');
    }
    goToForgetPassword = () => {
      //  browserHistory.push('/forgetPassword');
    }

    _callLogin = async () => {
        this.setState({
            isLoading: true,
            emailLoginError: '',
            passwordLoginError: ''
        })
 
        if (this.state.emailLogin.trim() === '') {
            return  this.setState({
                emailLoginError: 'ایمیل را وارد نکردید',
                isLoading:false
            })
        }
        
            if (EmailChecker(this.state.emailLogin) === false) {
                return   this.setState({
                    emailLoginError: 'ایمیل را اشتباه وارد کرده اید',
                    isLoading:false
                })
            }
         
        if (this.state.passwordLogin.trim() === '') {
            return  this.setState({
                passwordLoginError: 'پسورد را وارد نکردید',
                isLoading:false
            })
        }

     

        //
        // provider data for API --------------------------------------------------------------->
        //
        const data = new FormData();

        data.append('email', this.state.emailLogin);
        data.append('password', this.state.passwordLogin);


        const res = await PostData(data, 'auth/email/login', null) 

        if (res.status === 200) {
            localStorage.setItem('@authorization_vishar', res.data.token);
            browserHistory.push('/dashboard');
            window.location.reload();
        }
        else{
            this.setState({
                show:true,
                errorMessage : res.error,
                isLoading: false, 
            })
        }
   
      
    }


    _opentabs =async(val) => {
        document.getElementById('login').classList.remove ( "activeTab");
        document.getElementById('register').classList.remove ( "activeTab");
       await this.setState({
            type: val,
            emailLogin: '',
            passwordLogin: '',
            emailLoginError: '',
            passwordLoginError: '',
            isLoading:false,

            isLoadingRegister: false,
            emailErrorRegister: '',
            nameFamilyErrorRegister: '',
            passwordErrorRegister: '',
            userTypeErrorText: '',
            name: '',
            emailRegister: '',
            passwordRegister: '',
        })
 
        document.getElementById(val).classList.add ( "activeTab");
        // document.getElementById("MyElement").classList.add('MyClass');

    }

    changedHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
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
            isLoadingRegister: true,
            emailErrorRegister: '',
            nameError: '',
            passwordErrorRegister: '',
            userTypeErrorText: '',
        })


        // console.log(this.state.password.trim())

        // chek simple validation // TODO later to be control correct
        if (this.state.name === '') {
            
            return this.setState({
                 nameError: 'نام و نام خانوادگی را وارد نکرده اید',
                 isLoadingRegister: false
             })
         } 
         
     
         // //email
         if (this.state.emailRegister.trim() === '') {
             return this.setState({
                 emailErrorRegister: 'ایمیل را وارد نکرده اید ',
                 isLoadingRegister: false
             })
         } else {
             if (EmailChecker(this.state.emailRegister) === false) {
                 return  this.setState({
                     emailErrorRegister: 'ایمیل را اشتباه وارد کرده اید ',
                     isLoadingRegister: false
                 })
             }
         }
 
 
         // //password
         if (this.state.passwordRegister.trim() === '') { 
             return this.setState({
                 passwordErrorRegister: 'رمز عبور را وارد نکرده اید ',
                 isLoadingRegister: false
             })
         } 
 
         // //user type
         if (this.state.userType === '') {
             return this.setState({
                 userTypeError: true,
                 userTypeErrorText: 'سطح درسترسی خود را انتخاب کنید',
                 isLoadingRegister: false
             })
         }

         


        const data = new FormData();

        data.append('name', this.state.name);
        data.append('email', this.state.emailRegister);
        data.append('password', this.state.passwordRegister);
        data.append('password_confirmation', this.state.passwordRegister);
        data.append('type', this.state.userType);


       
      
            const res = await PostData(data, 'auth/email/register');
            if (res.status === 200) {
                localStorage.setItem('@authorization_vishar', res.data.token);
                browserHistory.push('/dashboard');
                window.location.reload();
            }
            else
            {
                this.setState({
                    show:true,
                    errorMessage: res.error
                })
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
                    name={'emailLogin'}
                    placeholder={'پست الکترونیک'}
                    changed={this.changedHandler}
                    error={this.state.emailLoginError} 
                    val={this.state.emailLogin}
                    autocomplete="off"
                />

                <Input
                    type={'password'}
                    name={'passwordLogin'}
                    placeholder={'رمز عبور'}
                    changed={this.changedHandler}
                    error={this.state.passwordLoginError}
                    val={this.state.passwordLogin}
                    autocomplete="off"
                />

                <Button
                    isLoading={this.state.isLoading}
                    title={'ورود'}
                    bgcolor={'#2d9cdb'}
                    hoverbgcolor={'#2d9cdb'}
                    click={this._callLogin}
                    borderRadius="5px"
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
                    name={'name'}
                    placeholder={'نام و نام خانوادگی'}
                    changed={this.changedHandler}
                    error={this.state.nameError} 
                    autocomplete="off"
                    vla={this.state.name}
                />
                {/* <span>لطفا نام و نام خانودادگی خود را به صورت فارسی وارد نمایید</span> */}
                <Input
                    type={'email'}
                    name={'emailRegister'}
                    placeholder={'ایمیل '}
                    changed={this.changedHandler}
                    error={this.state.emailErrorRegister}
                    vla={this.state.emailRegister}
                    autocomplete="off"
                />
                <Input
                    type={'password'}
                    name={'passwordRegister'}
                    placeholder={'رمز عبور'}
                    changed={this.changedHandler}
                    error={this.state.passwordErrorRegister}
                    autocomplete="off"
                    vla={this.state.passwordRegister}
                />
                <div className="R-checkbox">

                    <p>
                        <input type="radio" id="customer" name="radio-group" onChange={this.changedHandlerRadio}/>
                        <label htmlFor="customer">
                            <span>من نیاز به طرح دارم</span>
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
                    bgcolor={'#2d9cdb'}
                    hoverbgcolor={'#2d9cdb'}
                    click={this._onClickRegister}
                    borderRadius="5px"
                    color="#fff"
                />

            </div>
        )


        return (
            <div className="cover">
                 <SweetAlert
                            show={this.state.show}
                            title=""
                            text={this.state.errorMessage}
                            onConfirm={() => this.setState({ show: false })}
                        />
                <a href="http://www.vishar.com">
                    <img src={logo} className="login-logo" alt="لوگو"/>
                </a>
                <div className="login-container">
                    <div className="login-header">
                        <div id="register" className={"col-50 login-header-item " }  onClick={() => this._opentabs('register')}>ثبت نام
                        </div>
                        <div id="login" className={"col-50 login-header-item "  } onClick={() => this._opentabs('login')}>ورود</div>
                    </div>

                    {this.state.type !== 'login' ?   _renderRegister :_renderLogin}


         
                </div>


            </div>
        );
    }
}

export default LoginComponent;