import React, { Component } from 'react';

import comment from '../../../assets/icons/comment.svg'
import like from '../../../assets/icons/like.svg'
import tikgreen from '../../../assets/icons/tikgreen.svg'


import logoo1 from './../../../assets/images/logoo1.png'

import './style.css';


class DesignerLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    render() {
        return (
            <div className="DesignerLogo"
                style={{ backgroundImage: 'url(' + logoo1 + ')' }}
                onClick={this.props.goToDesigns}
            >
                <div className="DL-status" >
                    {this.props.designerLogoStatus ?
                        <img className="DL-verify" src={tikgreen} alt="تایید شد" /> :
                        <div className="DL-pending" >pending ...</div>
                    }
                </div>

                <div className="DesignerLogo-CL" >
                    <div className="DesignerLogo-II" >
                        <span>
                            لوگو
                        </span>
                    </div>

                </div>
                <div className="DesignerLogo-CL" >
                    <div className="DesignerLogo-II">
                        <span>12</span>
                        <img src={comment} alt="لوگو" />
                    </div>
                    <div className="DesignerLogo-II" >
                        <span>23</span>
                        <img src={like} alt="لایک" />
                    </div>

                </div>


            </div>
        );
    }
}

export default DesignerLogo;




/*
=====================================================================================
How can use this button : ------->


           <DesignerLogo
                goToDesigns={this.goToDesigns}
                logoFilter={this.logoFilter}
                />


=====================================================================================

*/