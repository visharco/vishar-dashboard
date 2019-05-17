import React, { Component } from 'react';

//
//
//

import GetApi from '../../controler/getToApi';

//
//compoents
//


import './style.css';
import NoPaymentBox from '../noPaymentBox/noPaymentBox';


class Payments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invoice:[]
        }
    }

    componentWillMount = async() => {
        const res = await GetApi('invoice');

        console.log(res.data)

        await this.setState({
            invoice: res.data
        })
    }

    render() {

        const renderInvoice = (
            this.state.invoice.length > 0 ? this.state.invoice.map((data,index) => {
                return <tr className="PSB-body">
                <td className="body-child1" >{index + 1}</td>
                <td className="body-child2" >{data.project.title}</td>
                <td className="body-child" >{data.updated_at}</td>
                <td className="body-child" >{data.price_all}</td>
                <td className="body-child" >{data.market}</td>
                <td className="body-child" >{data.payment_token ? data.payment_token : '---'}</td>
                <td className={"body-child " + "payment"+data.status}  >{data.status}</td>
            </tr>
            }) :  <NoPaymentBox />
        )

        return (
            <div className="Payments">
                <div className="PS-title" >
                    تراکنشها
                </div>

                <div className="PS-box" >
                    <table  >
                        <tbody>

                            <tr className="PSB-title">
                                <th className="title-child1" >ردیف</th>
                                <th className="title-child2" >عنوان</th>
                                <th className="title-child" >تاریخ</th>
                                <th className="title-child" >قیمت</th>
                                <th className="title-child" >درگاه</th>
                                <th className="title-child" >شماره پرداخت</th>
                                <th className="title-child" >وضعیت</th>
                            </tr>
                            {renderInvoice}
                        </tbody>
                    </table>
                </div>



               



            </div>
        );
    }
}

export default Payments;