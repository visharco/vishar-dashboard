import React, { Component } from 'react';

//
//
//

import gallery from '../../../assets/icons/gallery.svg';
import psd from '../../../assets/icons/psd.svg';
import tiff from '../../../assets/icons/tiff.svg';
import tikgreen from '../../../assets/icons/tikgreen.svg';

//
//compoents
//


import './style.css';
import StatusMessage from '../../StatusMessage/StatusMessage';
import TextArea from '../../common/textarea/textarea';
import Button from '../../common/Button/Button';
import DesignerExample from '../DesignerExample/DesignerExample';



class SubmitDesign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitDesignSuccess : false,
            designerExample : false
        }
    }

    // success submit files
    submitDesign = () =>{
        this.setState({
            submitDesignSuccess : true
        })
    }


    openModalDesignerExample = () => {
        this.setState({ designerExample: true })
    }

    closeModalProject = () => {
        this.setState({ designerExample: false })
    }

    render() {
        return (
    
            <div className="SubmitDesign">
                {this.state.designerExample ? <DesignerExample closeProject={this.closeModalProject} /> : ''}

            {
                !this.state.submitDesignSuccess ?
                <div className="SD-action-page" ref={this.SDActionPage}  >
                    <div className="SD-title" >
                        ثبت طرح
                    </div>
                    <StatusMessage
                        bgColor=" rgba(242, 201, 76, 0.7)"
                        color="#A88823"
                        text="
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        " />
                    <div className="SD-body" >
                        <div className="SD-cover-image" >
                            <div className="SDC-title" >
                                <h1>کاور عکس</h1>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            </div>
                            <div className="SDC-upload" >
                                <h1>عکس پروفایل</h1>
                                <div className="SDC-img" >
                                    <img src={gallery} alt="کاربر" />
                                </div>
                                <p className="SDC-text" >
                                    برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                </p>

                            </div>
                        </div>
                        <div className="SD-upload-files" >
                            <div className="SDUF-up" >
                                <div className="SDUF-left" >
                                    <h1>آپلود فایل</h1>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                </div>
                                <div className="SDUF-button" onClick={this.openModalDesignerExample} >
                                    دیدن نمونه کار
                                </div>
                            </div>
                            <div className="SDUF-down" >
                                <div className="SDUF-upload" >
                                    <h1>آپلود عکس</h1>
                                    <div className="SDUF-img" >
                                        <img src={psd} alt="کاربر" />
                                    </div>
                                    <p className="SDUF-text" >
                                        برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                    </p>
                                </div>

                                <div className="SDUF-upload" >
                                    <h1>آپلود عکس</h1>
                                    <div className="SDUF-img" >
                                        <img src={tiff} alt="کاربر" />
                                    </div>
                                    <p className="SDUF-text" >
                                        برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="SD-desc" >
                            <h1>توضیحات</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            <TextArea 
                                type={'text'} 
                                name={'submitDescription'}
                                placeholder={'توضیح خود را بنویسید ...'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />

                        </div>
                        <div className="SD-action" >
                            <Button                                                                  
                                isLoading={this.state.isLoading}                                    
                                title={'ثبت طرح'}                                                      
                                bgcolor={'#0080FF'}                                                 
                                hoverbgcolor={'rgb(0, 128, 255)'}                                          
                                click={this.submitDesign}
                                borderRadius="5px"
                                color="#fff"
                                id={'1'}
                                />   
                        </div>
                    </div>
                </div> :
                <div className="SD-success-page" ref={this.SDSuccesPage} >
                    <div className="SDS-right">
                        <img src={tikgreen} alt="" />
                        <div className="SDS-right-text" >
                            <h1>برای آپلود عکس کلیک کنید یا عکس را رها کنید</h1>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                    </div>
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'ثبت طرح'}                                                      
                        bgcolor={'#EEE'}                                                 
                        hoverbgcolor={'#fff'}                                          
                        click={this.submitDesign}
                        borderRadius="30px"
                        color="#a4a4a4"
                        id={'1'}
                        />
                </div>
            }





            </div>
        );
    }
}

export default SubmitDesign;