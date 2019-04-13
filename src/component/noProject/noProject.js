import React, { Component } from 'react';
import { browserHistory } from 'react-router';


//
//
//


import layerempty from './../../assets/icons/layerempty.svg'


//
//compoents
//


import './style.css';



class NoProject extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject = () => {
        browserHistory.push('/createNewProject');

    }


    render() {
        return (
            <div className="noProject">
                <div className="noProjectBox" >
                    <img src={layerempty} alt="لایه ها" />
                    <h1>به حساب کاربریت خوش اومدی</h1>
                    <p>


                        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                    <button onClick={this.createNewProject}>
                        ایجاد پروژه جدید
                    </button>
                </div>
            </div>
        );
    }
}

export default NoProject;