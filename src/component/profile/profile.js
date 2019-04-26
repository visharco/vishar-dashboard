import React, { Component } from 'react';

//
// Internal Component
//

import Input from '../../component/common/input/Input';
import Button from '../../component/common/Button/Button';

//
// ّIcons -------------------->
//
import usergrey from '../../assets/icons/usergrey.svg';

//
// Controler-------------------->
//

import GetToApi from '../../controler/getToApi';
import PostToApi from '../../controler/postToApi';
import Token from '../../api/token';



import './style.css';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    changedHandler = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async()=> {
        const res = await GetToApi('profile/init');
        console.log(res)
        this.setState({
            name : res.data.name,
            email : res.data.email,
            phone : res.data.phone,
            tell : res.data.tell,
            city : res.data.city
        }) 
    }

    _CallSave = async()=>{
        this.setState({
            isLoading:true
        })

        const data ={
            "name"  : this.state.name, 
            "phone" : this.state.phone,
            "tell"  : this.state.tell,
            "city"  : this.state.city
        }

        const res = await PostToApi(data, 'profile/update');
        console.log(res);
        this.setState({
            isLoading:false
        })


    }



    render() {
        return (
            <div className="Profile">
                <div className="PE-title" >
                    پروفایل
                </div>
                <div className="PE-body" >

                    <div className="PE-inputs" >
                        <Input
                            type={'text'}
                            name={'name'}
                            placeholder={'نام و نام خانوادگی'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                            val={this.state.name}
                        />
                        <Input
                            type={'text'}
                            name={'email'}
                            placeholder={'ایمیل'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                            val={this.state.email}
                            readonly={true} 
                        />
                        <Input
                            type={'text'}
                            name={'phone'}
                            placeholder={' تلفن همراه'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                            val={this.state.phone}
                        />
                        <Input
                            type={'text'}
                            name={'tell'}
                            placeholder={'تلفن'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                            val={this.state.tell}
                        />
                        <Input
                            type={'text'}
                            name={'city'}
                            placeholder={'شهر / مکان'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                            val={this.state.city}
                        />
                        <div className="PE-btns" >
                            <div className="PE-cancel" >
                                انصراف
                        </div>
                            <Button
                                isLoading={this.state.isLoading}
                                title={'ذخیره'}
                                bgcolor={'#0080FF'}
                                hoverbgcolor={'#rgb(160, 160, 160)'}
                                click={this._CallSave}
                                borderRadius="30px"
                                color="#fff"
                            />
                        </div>
                    </div>
                    <div className="PE-upload" >
                        <h1>عکس پروفایل</h1>
                        <div className="PU-img" >
                            <img src={usergrey} alt="کاربر" />
                        </div>
                        <p className="PU-text" >
                            برای آپلود عکس کلیک کنید یا عکس را رها کنید
                        </p>

                    </div>

                </div>
            </div>
        );
    }
}

export default Profile;