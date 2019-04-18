import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import search from './../../assets/icons/search.svg'
import plus from './../../assets/icons/plus.svg'


import './style.css';
import DesignMessageBox from '../designMessageBox/designMessageBox';
import NoMessageBox from '../noMessageBox/NoMessageBox';


class DesignMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject = () => {
        browserHistory.push('/createNewProject');

    }

    render() {
        return (
            <div className="DesignMessage" >
                <div className="DMX-title" >
                    پیامها
                </div>
                <div className="DMX-body" >
                    <div className="CP-up" >
                        <div className="CP-search-box " >
                            <input type="text" />
                            <img src={search} alt="جستجو" />
                        </div>
                        <div className="CP-create-project-btn" onClick={this.createNewProject}>
                            <p>ایجاد پروژه جدید</p>
                            <img src={plus} alt="افزودن" />
                        </div>
                    </div>
                    <div>
                        <DesignMessageBox />
                        <DesignMessageBox />
                        <DesignMessageBox />
                        <NoMessageBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignMessage;


