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
                <div className="P-title" >
                    پروفایل
                </div>
                <div className="P-body" >
                    <div className="P-upload" >
                        <h1>عکس پروفایل</h1>
                        <div className="PU-img" >
                            <img src={usergrey} alt="کاربر" />
                        </div>
                        <p className="PU-text" >
                            برا آپلود عکس کلیک کنید یا عکس را رها کنید
                        </p>

                    </div>
                    <div className="P-inputs" >
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
                            placeholder={'Email'}
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
                        <div className="P-btns" >
                            <div className="P-cancel" >
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

                </div>
            </div>
        );
    }
}

export default Profile;