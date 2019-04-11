import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import design1 from '../../assets/images/design1.png'

import './style.css';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToProjectDetail= () => {
        browserHistory.push('/projectDetail');
    }
    render() {
        return (
            <div className="project" onClick={this.goToProjectDetail} >
                <div className="p-left" >


                </div>
                <div className="p-right" >
                    <img src={design1} alt="طرح" />
                    <div className="p-right-title" >
                        <div className="p-right-text" >
                            <div className="p-status-box" >
                                <h1>طراحی لوگو عنوان پروژه</h1>
                                <p className={this.props.status} >{this.props.statusText}</p>
                            </div>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                        </div>
                        <div className="p-right-tags" >
                            <p>لوگو</p>
                        </div>
                    </div>



                </div>

            </div>
        );
    }
}

export default Project;




/*
=====================================================================================
How can use this button : ------->


           <Project status={'completed'} statusText={'کامل شده'} />


=====================================================================================

*/