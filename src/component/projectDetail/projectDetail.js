import React, { Component } from 'react';

import color1 from '../../assets/images/color1.png'
import color2 from '../../assets/images/color2.png'
import color3 from '../../assets/images/color3.png'
import color4 from '../../assets/images/color4.png'
import color5 from '../../assets/images/color5.png'
import color6 from '../../assets/images/color6.png'
import color7 from '../../assets/images/color7.png'
import color8 from '../../assets/images/color8.png'
import font from '../../assets/icons/font.svg'
import download from '../../assets/icons/download.svg';
import deleted from '../../assets/icons/delete.svg';
import slide2 from '../../assets/images/slide2.png'
import passport from '../../assets/images/passport.png'

import './style.css';
import ViewProjects from '../viewProjects/viewProjects';



class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerComments: 20,
            designerLikes: 10,
            viewProject: false
        }
    }

    briefText = React.createRef();
    designText = React.createRef();
    messagesText = React.createRef();

    messages = React.createRef();
    brief = React.createRef();
    design = React.createRef();


    descriptionHandler = (e) => {

        if (e.target.id === 'brief') {
            this.briefText.current.style.display = 'block'
            this.designText.current.style.display = 'none'
            this.messagesText.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.messages.current.style.backgroundColor = "#f1f1f1"
            this.design.current.style.backgroundColor = "#f1f1f1"
        }
        else if (e.target.id === 'design') {
            this.briefText.current.style.display = 'none'
            this.designText.current.style.display = 'block'
            this.messagesText.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.messages.current.style.backgroundColor = "#f1f1f1"
            this.brief.current.style.backgroundColor = "#f1f1f1"
        }
        else if (e.target.id === 'messages') {
            this.briefText.current.style.display = 'none'
            this.designText.current.style.display = 'none'
            this.messagesText.current.style.display = 'block'

            e.target.style.backgroundColor = "#D8D8D8"
            this.design.current.style.backgroundColor = "#f1f1f1"
            this.brief.current.style.backgroundColor = "#f1f1f1"
        }
    }

    all = React.createRef();
    rated = React.createRef();
    final = React.createRef();


    openModalProject = () => {
        this.setState({ viewProject: true })

    }

    closeModalProject = () => {
        this.setState({ viewProject: false })
    }



    render() {
        return (


            <div className="ProjectDetail" >
                 
                 {this.state.viewProject ? <ViewProjects closeProject={this.closeModalProject} /> : '' }
                 
                <div className="PD-title" >
                    عنوان پروژه - طراحی لوگو
                </div>

                <div className="PD-desc-up" >


                    <div className="PD-desc-box">
                        <div className="PD-desc-title" onClick={this.descriptionHandler} id="messages" ref={this.messages} >پیامها
                            <span className="PD-desc-number" >4</span>
                        </div>
                        <div className="PD-desc-title" onClick={this.descriptionHandler} id="design" ref={this.design} >طراحی
                            <span className="PD-desc-number" >4</span>
                        </div>
                        <div className="PD-desc-title" onClick={this.descriptionHandler} id="brief" ref={this.brief}>توضیحات
                        </div>
                    </div>

                </div>
                <div className="PD-desc-down" >
                    <div className="PD-desc-box2" >
                        <div className="PD-desc-texts" ref={this.briefText}>
                            <div className="PD-desc-text" >
                                <h1>توضیحات</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>

                            </div>
                            <div className="PD-desc-text" >
                                <h1>استایل ظاهری</h1>
                                <h2>رنگها را پیدا کن</h2>
                                <div className="PD-check-color PD-check">
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="colors1" />
                                            <label htmlFor="colors1"><img src={color1} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors2" />
                                            <label htmlFor="colors2"><img src={color2} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors3" />
                                            <label htmlFor="colors3"><img src={color3} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors4" />
                                            <label htmlFor="colors4"><img src={color4} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors5" />
                                            <label htmlFor="colors5"><img src={color5} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors6" />
                                            <label htmlFor="colors6"><img src={color6} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors7" />
                                            <label htmlFor="colors7"><img src={color7} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors8" />
                                            <label htmlFor="colors8"><img src={color8} alt="رنگها" /></label>
                                        </li>


                                    </ul>

                                </div>
                                <h2>قلم ها را پیدا کن</h2>
                                {/* <div className="PD-fonts" > */}
                                <div className="PD-check-color PD-check">
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="font1" />
                                            <label htmlFor="font1"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font2" />
                                            <label htmlFor="font2"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font3" />
                                            <label htmlFor="font3"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font4" />
                                            <label htmlFor="font4"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font5" />
                                            <label htmlFor="font5"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font6" />
                                            <label htmlFor="font6"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font7" />
                                            <label htmlFor="font7"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font8" />
                                            <label htmlFor="font8"><img className="font-padding" src={font} alt="رنگها" /></label>
                                        </li>


                                    </ul>

                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="PD-desc-text" >
                                <h1>منابع</h1>
                                <h2>ضمیمه ها</h2>
                                <div className="PD-attachs" >
                                    <div className="PD-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                                        <img className="attach-delete" src={deleted} alt="حذف" />
                                    </div>
                                    <div className="PD-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                                        <img className="attach-delete" src={deleted} alt="حذف" />
                                    </div>
                                    <div className="PD-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                                        <img className="attach-delete" src={deleted} alt="حذف" />
                                    </div>
                                </div>
                                <h2>توضیحات دیگر</h2>
                                <p>
                                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>

                            </div>
                            <div className="PD-desc-text" >
                                <h1>نتایج بررسیها</h1>
                                <div className="contest" >
                                    <p className="contest-DL" >
                                        <img src={download} alt="دانلود" />
                                        دانلود قالب
                                    </p>
                                    <h1>طراحی لوگو</h1>
                                </div>

                            </div>
                        </div>

                        <div className="PD-desc-texts " ref={this.designText} >
                            <div className="PD-desc-text" >

                                <h1>طرح منتخب </h1>
                                <div className="PD-design">
                                    <div className="PDD-box">
                                        <p> توسط <span>امید آرمانی</span></p>
                                        <img src={passport} alt="طرحها" onClick={this.openModalProject} />
                                    </div>

                                </div>
                            </div>
                            <div className="PD-desc-text" >

                                <h1>همه طرح ها </h1>
                                <div className="PD-design">
                                    <div className="PDD-box">
                                        <p> توسط <span>امید آرمانی</span></p>
                                        <img src={passport} alt="طرحها" onClick={this.openModalProject} />
                                    </div>
                                    <div className="PDD-box">
                                        <p> توسط <span>امید آرمانی</span></p>
                                        <img src={passport} alt="طرحها" onClick={this.openModalProject} />
                                    </div>
                                    <div className="PDD-box">
                                        <p> توسط <span>امید آرمانی</span></p>
                                        <img src={passport} alt="طرحها" onClick={this.openModalProject} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="PD-desc-texts" ref={this.messagesText}>

                            پیامها
                        </div>
                    </div>


                </div>

            </div>

        );
    }
}

export default ProjectDetail;