import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//
//
//


import search from './../../../assets/icons/search.svg'

//
//compoents
//
// import NoProject from '../../../component/noProject/noProject'



import './style.css';
import DesignerLogo from '../DesignerLogo/DesignerLogo';
import StatusMessage from '../../StatusMessage/StatusMessage';
import NoPortfilo from '../NoPortfilo/NoPortfilo';
 
class DesignerPorfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            designerLogoStatus:true
        }
    }


    createNewProject = () => {
        browserHistory.push('/createNewProject');

    }

    goToDesignerLogoes = () => {
        browserHistory.push('/DesignerLogoes');
    }


    render() {
        return (
            <div className="DesignerPorfolio">
                <div className="DPO-title" >
                    نمونه کارهای من
                </div>
                <div className="DPO-body" >
                <StatusMessage
                        bgColor=" rgba(242, 201, 76, 0.7)"
                        color="#A88823"
                        text="
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        " />
                    <div className="DPO-up" >

                        <div className="DPO-search-box " >
                            <input type="text" />
                            <img src={search} alt="جستجو" />
                        </div>

                    </div>

                    <div className="DPO-select-logo" >
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                    </div>

                    <div className="pagination" >
                        <p className="pagination-number">1</p>
                        <p className="pagination-number">2</p>
                        <p className="pagination-number pagination-number-selected">3</p>
                        <p className="pagination-number">4</p>
                        <p className="pagination-number">5</p>
                    </div>

                    <NoPortfilo />

                </div>
            </div>
        );
    }
}

export default DesignerPorfolio;