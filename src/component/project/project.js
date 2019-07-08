import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import defualtDesing from '../../assets/images/defualtProjectImage.png'

import './style.css';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToProjectDetail(id)  {
        browserHistory.push('/projectDetail/' + id);
        // browserHistory.push({ pathname: '/projectDetail', state: this.props.id });
    }

    getStatus = (key) => { 
        switch (key) {
            case 'active':
                return 'تایید شده' 
    
            default:
                return null 
        }
    }
    render() {
        return (
            <div key={this.props.id} className="project" onClick={() => this.goToProjectDetail(this.props.data.id)} >
                <div className="p-left" >


                </div>
                <div className="p-right" >
                    <img src={defualtDesing} alt="طرح"  />
                    <div className="p-right-title" >
                        <div className="p-right-text" >
                            <div className="p-status-box" >
                                <h1>{this.props.data.title}</h1>
                                <p className={this.props.data.status} >{this.getStatus(this.props.data.status)}</p>
                            </div>
                            <p>
                                {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است */}
                                {this.props.data.desc}
                            </p>
                        </div>
                        <div className="p-right-tags" >
                            <p>{this.props.data.invoice.category}</p>
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