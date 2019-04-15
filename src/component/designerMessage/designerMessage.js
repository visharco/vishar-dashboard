import React, { Component } from 'react';
import { browserHistory } from 'react-router';




import './style.css';
import DesignMessageBox from '../designMessageBox/designMessageBox';
import MyMessageBox from '../myMessageBox/myMessageBox';
import clip from './../../assets/icons/clip.svg';
import deleted from '../../assets/icons/delete.svg'
import slide2 from './../../assets/images/slide2.png'


class DesignerMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

  

    messageInputFocus = () => {

    }


    render() {
        return (
            <div className="DesignMessage"  >
                <div className="DMX-title" >
                    پیامها
                </div>
                <div className="DMX-body" >
                    <DesignMessageBox />
                    <MyMessageBox />
                    <DesignMessageBox />
                </div>
                <div className="DMX-actions" >
                    <textarea className="DMX-textarea" placeholder="پیام خود را اینجا بنویسید ..." />
                    <div className="DMX-buttons" >
                        <img     src={clip} alt="ضمیمه" />
                        <button className="DMX-send" >
                            فرستادن پیام
                        </button>
                    </div>
                    <div className="DMX-attachs" >
                        <div className="DMX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="DMX-delete" src={deleted} alt="حذف" />
                        </div>
                        <div className="DMX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="DMX-delete" src={deleted} alt="حذف" />
                        </div>
                        <div className="DMX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="DMX-delete" src={deleted} alt="حذف" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignerMessage;


