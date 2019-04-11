import React, { Component } from 'react';

//
//
//


import search from './../../assets/icons/search.svg'
import plus from './../../assets/icons/plus.svg'

//
//compoents
//


import './style.css';
import Project from '../project/project';


class CollaborateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="CollaborateProject">
                <div className="CP-title" >
                    پروژه های همکاری
                </div>
                <div className="CP-body" >
                    <div className="CP-up" >

                        <div className="CP-search-box " >
                            <input type="text" />
                            <img src={search} alt="جستجو" />
                        </div>
                        <div className="CP-create-project-btn" >
                            <p>ایجاد پروژه جدید</p>
                            <img src={plus} alt="افزودن" />
                        </div>
                    </div>
                    <div className="CP-down" >
                        <Project status={'Completed'} statusText={'کامل شده'} />
                        <Project status={'Working'} statusText={'در حال انجام '} />
                        <Project status={'Pending'} statusText={' در صف انجام'} />
                    </div>



                </div>
            </div>
        );
    }
}

export default CollaborateProject;