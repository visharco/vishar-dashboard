import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//
//
//


import search from './../../../assets/icons/search.svg'
import plus from './../../../assets/icons/plus.svg'

//
//compoents
//
// import NoProject from '../../../component/noProject/noProject'



import './style.css';
import DesignerProject from '../DesignerProject/DesignerProject';


class DesignerSingleProject extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject =() =>{
        browserHistory.push('/createNewProject');

    }


    render() {
        return (
            <div className="DesignerSingleProject">
                <div className="DSP-title" >
                    پروژه های فردی
                </div>
                <div className="DSP-body" >
                    <div className="DSP-up" >

                        <div className="DSP-search-box " >
                            <input type="text" />
                            <img src={search} alt="جستجو" />
                        </div>
                        <div className="DSP-create-project-btn" onClick={this.createNewProject} >
                            <p>ایجاد پروژه جدید</p>
                            <img src={plus} alt="افزودن" />
                        </div>
                    </div>
                    <div className="DSP-down" >
                        <DesignerProject status={'Completed'} statusText={'کامل شده'} />
                        <DesignerProject status={'Working'} statusText={'در حال انجام '} />
                        <DesignerProject status={'Pending'} statusText={' در صف انجام'} />
                    </div>
                    
                        {/* <NoProject /> */}


                </div>
            </div>
        );
    }
}

export default DesignerSingleProject;