import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import defualtImage from '../../../assets/images/defualtProjectImage.png'
 

import './style.css';


class DesignerProject extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

  

    goToDesignerProjectDetail (id) {
        browserHistory.push('/DesignerProjectDetail/' + id);
    }
    render() {
        return (
            <div className="DesignerProject" onClick={() => this.goToDesignerProjectDetail(this.props.data.id)} >
                <div className="DPT-left" >


                </div>
                <div className="DPT-right" >
                    <img src={defualtImage} alt="طرح" />
                    <div className="DPT-right-title" >
                        <div className="DPT-right-text" >
                            <div className="DPT-status-box" >
                                <h1>{this.props.data.title}</h1>
                                <p className={this.props.status} >{this.props.status}</p>
                            </div>
                            <p>
                            {this.props.data.desc}
                            </p>
                        </div>
                        <div className="DPT-right-tags" >
                            <p> {this.props.data.category.title}</p>
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