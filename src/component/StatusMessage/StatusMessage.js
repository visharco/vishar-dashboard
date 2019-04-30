import React, { Component } from 'react';


import close from '../../assets/icons/close.svg'



import './style.css';


class StatusMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            backgroundColor:'',
            color:'',

        }
    }

    closeStatus = () => {
        this.setState({
            status : false
        })
    }
    componentDidMount(){
        if(this.props.type ==='success'){
            this.setState({
                backgroundColor:'#6FCF97',
                color:'#308051'
            })
        }
        else if (this.props.type ==='waning'){
            this.setState({
                backgroundColor:'#EED27A',
                color:'#A88823'
            }) 
        }
        else if (this.props.type ==='error'){
            this.setState({
                backgroundColor:'#D15353',
                color:'#333333'
            }) 
        }

    }


    render() {
        return (
            <div>

            {
                this.state.status ? 
                <div className="StatusMessage"
                style={{ backgroundColor: this.state.backgroundColor }}>
                    <img src={close} alt="بستن" className="StatusClose" onClick={this.closeStatus} />
                    <p style={{ color: this.state.color }}>
                        {this.props.text}
                    </p>
                </div> : ''
            }
            </div>
        );
    }
}

export default StatusMessage;


////////////////////////////

/* <StatusMessage 
    bgColor=" rgba(242, 201, 76, 0.7);"
    color="#A88823"
    text="" />
    
    green 
    #6FCF97  bgcolor
    #308051  color

    red
     bgcolor #D15353
    */



///////////////////////////////////


