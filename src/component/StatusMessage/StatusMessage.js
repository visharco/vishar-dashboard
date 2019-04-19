import React, { Component } from 'react';


import close from '../../assets/icons/close.svg'



import './style.css';


class StatusMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }

    closeStatus = () => {
        this.setState({
            status : false
        })
    }


    render() {
        return (
            <div>

            {
                this.state.status ? 
                <div className="StatusMessage"
                style={{ backgroundColor: this.props.bgColor }}>
                    <img src={close} alt="بستن" className="StatusClose" onClick={this.closeStatus} />
                    <p style={{ color: this.props.color }}>
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

{/* <StatusMessage 
    bgColor=" rgba(242, 201, 76, 0.7);"
    color="#A88823"
    text="" /> */}



///////////////////////////////////


