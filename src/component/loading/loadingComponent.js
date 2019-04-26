import React , {Component} from 'react';
import './style.css';
import loadingimg from '../../assets/images/loading.gif'


class LoadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="loading-full-screen">
                    <div className="loading-container">
                        <img src={loadingimg} className="loading-image" />
                    </div>
            </div>
         );
    }
}
 
export default LoadingComponent;