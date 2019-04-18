import React, { Component } from 'react';

//
//
//

import usergrey from '../../assets/icons/usergrey.svg';
import Input from '../../component/common/input/Input';
import Button from '../../component/common/Button/Button';

//
//compoents
//


import './style.css';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {}
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
                            name={'email'}
                            placeholder={'نام و نام خانوادگی'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                        />
                        <Input
                            type={'text'}
                            name={'email'}
                            placeholder={'ایمیل'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                        />
                        <Input
                            type={'text'}
                            name={'email'}
                            placeholder={' موبایل'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                        />
                        <Input
                            type={'text'}
                            name={'email'}
                            placeholder={'تلفن'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
                        />
                        <Input
                            type={'text'}
                            name={'email'}
                            placeholder={'شهر / مکان'}
                            changed={this.changedHandler}
                            error={this.state.forgetEmailError}
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
                                click={this.callSubmit}
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