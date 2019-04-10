import React, { Component } from 'react';

import facebook from './../../assets/icons/facebook.svg'
import twitter from './../../assets/icons/twitter.svg'
import instagram from './../../assets/icons/instagram.svg'
import telegram from './../../assets/icons/telegram.svg'

import './style.css';


class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="cover">
                    <div className="cover-text">
                       <p className="cover-text1"> بیشتر از <span> 200 </span></p>
                        <p className="cover-text2" > پروژه موفق</p>
                        <p className="per-month" >در ماه</p>
                    </div>
            </div>
        );
    }
}

export default Cover;