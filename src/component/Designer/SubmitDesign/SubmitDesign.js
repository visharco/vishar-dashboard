import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

//
//
//

import gallery from '../../../assets/icons/cover.png';
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
            designerExample : false,
            cover:[],
            tiff:[],
            psd:[], 
            
        }
    }

    // success submit files
    submitDesign = () =>{
        console.log(this.state.cover.length)

        let validation = true;

        if(this.state.cover.length === 0){
            validation =false;
            this.setState({
                show:true,
                errorMessage:'لطفا فایل کاور را وارد نمایید'
            })
        
        }
        else if(this.state.tiff.length === 0){
            validation =false;
            this.setState({
                show:true,
                errorMessage:'لطفا فایل تیف  را وارد نمایید'
            })
        }
        else if(this.state.psd.length === 0){
            validation =false;
            this.setState({
                show:true,
                errorMessage:'لطفا فایل پی اس دی  را وارد نمایید'
            })
        }

        console.log(validation)


        if(validation === true){
            this.setState({
                submitDesignSuccess : true
            })
        }



    }


    openModalDesignerExample = () => {
        this.setState({ designerExample: true })
    }

    closeModalProject = () => {
        this.setState({ designerExample: false })
    }

    _uploadPicture = (e) => {
        console.log(e.target.name)

            this.setState({
                selectedFile: e.target.files[0],
                [e.target.name]:URL.createObjectURL(e.target.files[0])
            })
      

        // console.log(e.target.files[0])
    }


    render() {
        return (
    
            <div className="SubmitDesign">
                {this.state.designerExample ? <DesignerExample closeProject={this.closeModalProject} /> : ''}

            {
                !this.state.submitDesignSuccess ?
                <div className="SD-action-page" ref={this.SDActionPage}  >

                    <SweetAlert
                            show={this.state.show}
                            title=""
                            text={this.state.errorMessage}
                            onConfirm={() => this.setState({ show: false })}
                        />


                    <div className="SD-title" >
                        ثبت طرح
                    </div>
                    <StatusMessage  
                        type="warning"
                        text="لطفا توجه داشته باشید، جهت ثبت طرح خود شما تنها می توانید یک طرح را برای مشتری ارسال نماید. در صورتی که طرح های بیشتری طراحی نموده اید ، هر کدام را جداگانه ارسال نمایید." 
                    />
                    <div className="SD-body" >
                        <div className="SD-cover-image" >
                            <div className="SDC-title" >
                                <h1>کاور عکس</h1>
                                <p>لطفا تصویر کاور خود را با پسوند JPG ذخیره کنید</p>
                                <p>
                                    <span>برای داشتن شانس بیشتر لطفا از کاور حرفه ای و زیبا برای ارائه به مشتری استاده نماید.</span>
                                    <span className="SDUF-link" onClick={this.openModalDesignerExample} > مشاهده نمونه کاور</span>
                                </p>


                              

                            </div>
                            
                            <label htmlFor="cover" className="SDC-upload" >
                                <h1>آپلود فایل</h1>
                                <input   type="file" accept=".png,.jpg,.jpeg"
                                    onChange={this._uploadPicture}
                                    name="cover"
                                    id="cover"
                                    value="" />
                                <div className="SDC-img" >
                                    <img src={this.state.cover.length === 0 ? gallery : this.state.cover} alt="کاربر" />
                                </div>
                                <p className="SDC-text" >
                                    برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                </p>

                            </label>
                        </div>
                        <div className="SD-upload-files" >
                            <div className="SDUF-up" >
                                <div className="SDUF-left" >
                                    <h1>آپلود فایل</h1>
                                    <p>لطفا فایل های خود را با پسند های خواسته شده بارگذاری نمایید</p>
                                </div>
                            
                            </div>
                            <div className="SDUF-down" >
                                <label htmlFor="psd" className="SDUF-upload" >
                                    <h1>آپلود عکس</h1>
                                    <input   type="file" accept=".psd"
                                    onChange={this._uploadPicture}
                                    name="psd"
                                    id="psd"
                                    value="" />
                                    <div className="SDUF-img" >
                                        <img src={psd} alt="کاربر" />
                                    </div>
                                    <p className="SDUF-text" >
                                        برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                    </p>
                                </label>

                                <label htmlFor="tiff" className="SDUF-upload" >
                                    <h1>آپلود عکس</h1>
                                    <input   type="file" accept=".tif,.tiff"
                                    onChange={this._uploadPicture}
                                    name="tiff"
                                    id="tiff"
                                    value="" />

                                    <div className="SDUF-img" >
                                        <img src={tiff} alt="کاربر" />
                                    </div>
                                    <p className="SDUF-text" >
                                        برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="SD-desc" >
                            <h1>توضیحات</h1>
                            <p>در صورتی که نیاز به توضیحات برای ارائه طرح خود به مشتری می باشد، در این قسمت وارد نمایید</p>
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