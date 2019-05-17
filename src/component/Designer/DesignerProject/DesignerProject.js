import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import design1 from '../../../assets/images/design1.png'

import './style.css';


class DesignerProject extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

  

    goToDesignerProjectDetail= () => {
        browserHistory.push('/DesignerProjectDetail');
    }
    render() {
        return (
            <div className="DesignerProject" onClick={this.goToDesignerProjectDetail} >
                <div className="DPT-left" >


                </div>
                <div className="DPT-right" >
                    <img src={design1} alt="طرح" />
                    <div className="DPT-right-title" >
                        <div className="DPT-right-text" >
                            <div className="DPT-status-box" >
                                <h1>wطراحی لوگو عنوان پروژه</h1>
                                <p className={this.props.status} >{this.props.statusText}</p>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                        </div>
                        <div className="DPT-right-tags" >
                            <p>لوگو</p>
                        </div>
                    </div>



                </div>

            </div>
        );
    }
}

export default DesignerProject;




/*
=====================================================================================
How can use this button : ------->


           <DesignerProject status={'completed'} statusText={'کامل شده'} />


=====================================================================================

*/