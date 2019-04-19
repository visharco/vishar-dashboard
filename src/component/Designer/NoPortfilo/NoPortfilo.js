import React, { Component } from 'react';
import { browserHistory } from 'react-router';


//
//
//


import layerempty from './../../../assets/icons/layerempty.svg'


//
//compoents
//


import './style.css';



class NoPortfilo extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject = () => {
        // browserHistory.push('/createNewProject');

    }


    render() {
        return (
            <div className="NoPortfilo">
                <div className="NoPortfiloBox" >
                    <img src={layerempty} alt="لایه ها" />
                    <h1>به نمونه کار جدید خودت خوش اومدی </h1>
                    <p>


                        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                    <button onClick={this.createNewProject}>
                        جستجوی محتوا
                    </button>
                </div>
            </div>
        );
    }
}

export default NoPortfilo;