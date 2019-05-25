// import React, { Component } from 'react';

// import { browserHistory } from 'react-router';

// import EmailChecker from '../../../component/EmailChecker/EmailChecker'


// import Cover from '../../../component/cover/cover';
// import Input from '../../../component/common/input/Input';
// import Button from '../../../component/common/Button/Button';

// import logo from '../../../assets/images/logo.png'

// import './style.css'

// //
// // controler ------------->

// import PostData from '../../../controler/postToApi';


// class LoginComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             emailError: '',
//             passwordError: ''
//         }
//     }

//     goToLogin = () => {
//         browserHistory.push('/register');
//     }
//     goToForgetPassword = () => {
//         browserHistory.push('/forgetPassword');
//     }

//     _callLogin = async () => {
//         this.setState({
//             isLoading: true,
//             emailError: '',
//             passwordError: ''
//         })

//         if ( this.state.email.trim() === '') {
//             this.setState({
//                 emailError: 'ایمیل را وارد نکردید'
//             })

//         }

//         if ( this.state.email.trim() !== '') {
//             if (EmailChecker(this.state.email) === false) {
//                 this.setState({ emailError: 'ایمیل را اشتباه وارد کرده اید'})
//             }
//         }


//         if (this.state.password.trim() === '' ) {
//             this.setState({
//                 passwordError: 'پسورد را وارد نکردید'
//             })
//         }

//         if (this.state.password.trim() !== '' && this.state.password.length < 8 ) {
//             this.setState({
//                 passwordError: 'رمز عبور باید بیشتر از ۸ کاراکتر باشد'
//             })
//         }

     

//         //
//         // provider data for API --------------------------------------------------------------->
//         //
//         const data = new FormData();
 
//         data.append('email', this.state.email);
//         data.append('password', this.state.password); 





//         if (this.state.email !== '' && this.state.password !== '' && EmailChecker(this.state.email) === true) {

//             const res = await PostData(data, 'auth/email/login', null)
//             console.log(res)

//             //
//             // when the login infromation is ok, go to dashboard component.
//             //

//             if (res.status === 200) {
//                 localStorage.setItem('@authorization_vishar', res.data.token);
//                 browserHistory.push('/dashboard');
//                 window.location.reload();
//             }

//             if (res.status === 400) {
//                 this.setState({
//                     emailError: '',
//                     passwordError: 'رمز عبور را اشتباه وارد کرده اید'
//                 })
//             }
//             if (res.status === 401) {
//                 this.setState({
//                     emailError: '',
//                     passwordError: 'رمز عبور را اشتباه وارد کرده اید'
//                 })
//             }
//         }






//         this.setState({
//             isLoading: false
//         })

//     }

//     changedHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }




//     render() {
//         return (
//             <div className="registerLogin" >
//                 <div className="container-fluid" >
//                     <div className="container" >

//                         <Cover />

//                         <div className="RL-right" >
//                             <div className="RL-title" >
//                                 <img src={logo} alt="لوگو" />
//                                 <h1>ورود</h1>
//                             </div>
//                             <div className="RL-inputs" >
//                                 <Input
//                                     type={'text'}
//                                     name={'email'}
//                                     placeholder={'ایمیل / شماره همراه'}
//                                     changed={this.changedHandler}
//                                     error={this.state.emailError}
//                                     val={this.state.email}
//                                 />
//                                 <Input
//                                     type={'password'}
//                                     name={'password'}
//                                     placeholder={'رمز عبور'}
//                                     changed={this.changedHandler}
//                                     error={this.state.passwordError}
//                                     val={this.state.password}
//                                 />
//                                 <p className="forget-pass-text" onClick={this.goToForgetPassword} >رمز عبور را فراموش کردید ؟</p>
//                             </div>
//                             <div className="RL-button" >
//                                 <Button
//                                     isLoading={this.state.isLoading}
//                                     title={'ورود'}
//                                     bgcolor={'#0080FF'}
//                                     hoverbgcolor={'rgba(0, 128, 255, .8)'}
//                                     click={this._callLogin}
//                                     borderRadius="2px"
//                                     color="#fff"
//                                 />

//                                 <p className="change-page-text" >
//                                     نیاز به حساب کاربری داری ؟
//                                     <span onClick={this.goToLogin} > ایجاد حساب کاربری </span>
//                                 </p>

//                             </div>

//                         </div>


//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default LoginComponent;



import React , { Component } from 'react';
import './style.css'; 
import logo from '../../../assets/images/logo.png'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <div className="cover">
                 <img src={logo} className="login-logo" alt="لوگو" />
                <div className="login-container">
                    <div className="login-header">
                        <div className="col-50 login-header-item ">ثبت نام</div>
                        <div className="col-50 login-header-item ">ورود</div>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default LoginComponent;