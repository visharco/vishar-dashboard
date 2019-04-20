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
                            <div className="DPE-desc-text" >
                                <h1>توضیحات</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
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