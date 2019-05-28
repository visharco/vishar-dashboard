import React, { Component } from 'react';
import Button from '../../component/common/Button/Button';
import {browserHistory } from 'react-router'



import './style.css'


class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    callSubmit = () => {
        browserHistory.push('/createNewProject')
    }


    render() {
        return (
            <div className="SingleProject">
                <div className="SP-title" >
                    داشبورد
                </div>
                     <div className="welcome-message">
                        <h2>
                            به حساب کاربری خود در ویشار خوش آمدید.
                        </h2>
                        <p>
                            جهت ثبت پروژه جدید، بر روی لینک زیر کلیک نمایید.
                        </p>
                        <Button                                                                  
                            isLoading={this.state.isLoading}                                    
                            title={'ایجاد پروژه جدید'}                                                      
                            bgcolor={'#0080FF'}                                                 
                            hoverbgcolor={'#1fc056cc'}                                          
                            click={this.callSubmit}
                            borderRadius="10px"
                            color="#fff"
                            id={'1'}
                            />  


                     </div>


               
            </div>
        );
    }
}

export default DashboardComponent;