import React, { Component } from 'react';
import Button from '../../component/common/Button/Button';
import {browserHistory } from 'react-router'
import GetApi from '../../controler/getToApi';



import './style.css'


class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    componentDidMount = async () => {
        const  res = await GetApi('profile/init');
        console.log(res)
        if(res.status === 200){
            await this.setState({
                type:res.data.type, 
                name: res.data.name
            })
        } else if(res.status === 401) {

            localStorage.removeItem('@authorization_vishar');   // remove local storage.
            //  browserHistory.push('/login');      
            window.location.reload();

        }
        


    }



    callSubmit = () => {
        browserHistory.push('/createNewProject')
    }

    callProject = () => {
        browserHistory.push('/DesignerSingleProject')
    }


    render() {

        const renderCustomer = (
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
                hoverbgcolor={'#0080FF'}                                          
                click={this.callSubmit}
                borderRadius="10px"
                color="#fff"
                id={'1'}
                />  


         </div>
        )


        const renderDesginer = (
            <div className="welcome-message">
            <h3>{this.state.name}</h3>
            <h2>
                به حساب کاربری خود در ویشار خوش آمدید.
            </h2>
            <p>
                جهت مشاهده پروژه های موجود در ویشار، بر روی لینک زیر کلیک نمایید
            </p>
            <Button                                                                  
                isLoading={this.state.isLoading}                                    
                title={'مشاهده پروژه ها'}                                                      
                bgcolor={'#0080FF'}                                                 
                hoverbgcolor={'#0080FF'}                                          
                click={this.callProject}
                borderRadius="10px"
                color="#fff"
                id={'1'}
                />  


         </div>
        )


        return (
            <div className="SingleProject">
                <div className="SP-title" >
                    داشبورد
                </div>
                {this.state.type === 'customer' ? renderCustomer :renderDesginer}
              


               
            </div>
        );
    }
}

export default DashboardComponent;