import React, { Component } from 'react';

//
//
//

import usergrey from '../../../assets/icons/usergrey.svg';
import Input from '../../common/input/Input';
import Button from '../../common/Button/Button';

//
//compoents
//


import './style.css';


class DesignerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    accountBox = React.createRef();
    profileBox = React.createRef();

    account = React.createRef();
    profile = React.createRef();


    descriptionHandler = (e) => {

        if (e.target.id === 'account') {
            this.accountBox.current.style.display = 'flex'
            this.profileBox.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.profile.current.style.backgroundColor = "#f1f1f1"
        }
        else if (e.target.id === 'profile') {
            this.profileBox.current.style.display = 'flex'
            this.accountBox.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.account.current.style.backgroundColor = "#f1f1f1"
        }

    }

    render() {
        return (
            <div className="DesignerProfile">
                <div className="DPE-title" >
                    پروفایل
                </div>
                <div className="DPE-desc-up" >
                    <div className="DPE-desc-box">
                        <div className="DPE-desc-title" onClick={this.descriptionHandler} id="profile" ref={this.profile} >پروفایل
                        </div>
                        <div className="DPE-desc-title" onClick={this.descriptionHandler} id="account" ref={this.account}>حساب کاربری
                        </div>
                    </div>

                </div>
                <div className="DPE-desc-down" >
                    <div className="DPE-desc-box2" >
                        <div className="DPE-account" ref={this.accountBox}>
                            <div className="DPEA-desc-text" >
                                <div className="DPE-inputs" >
                                    <Input
                                        type={'text'}
                                        name={'cardNumber'}
                                        placeholder={'شماره کارت'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                    />
                                    <div className="sample-card" >XXXX - XXXX - XXXX - XXXX</div>
                                    <Input
                                        type={'text'}
                                        name={'nameFamily'}
                                        placeholder={'نام و نام خانوادگی'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                    />
                                    <Input
                                        type={'text'}
                                        name={'bandName'}
                                        placeholder={' نام بانک'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                    />
                                    
                                    <div className="DPE-btns" >
                                        <div className="DPE-cancel" >
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

                        <div className="DPE-profile " ref={this.profileBox} >
                            <div className="DPE-inputs" >
                                <Input
                                    type={'text'}
                                    name={'designerName'}
                                    placeholder={'نام و نام خانوادگی'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <Input
                                    type={'text'}
                                    name={'designerEmail'}
                                    placeholder={'ایمیل'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <Input
                                    type={'text'}
                                    name={'designerMobile'}
                                    placeholder={' موبایل'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <Input
                                    type={'text'}
                                    name={'designerPhone'}
                                    placeholder={'تلفن'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <Input
                                    type={'text'}
                                    name={'designerCity'}
                                    placeholder={'شهر / مکان'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
                                />
                                <div className="DPE-btns" >
                                    <div className="DPE-cancel" >
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
                            <div className="DPE-upload" >
                                <h1>عکس پروفایل</h1>
                                <div className="DPE-img" >
                                    <img src={usergrey} alt="کاربر" />
                                </div>
                                <p className="DPE-text" >
                                    برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                </p>

                            </div>
                        </div>


                    </div>


                </div>

            </div>
        );
    }
}

export default DesignerProfile;