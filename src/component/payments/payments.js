import React, { Component } from 'react';

//
//
//

import usergrey from '../../assets/icons/usergrey.svg';
import Input from '../common/input/Input';
import Button from '../common/Button/Button';

//
//compoents
//


import './style.css';
import NoPaymentBox from '../noPaymentBox/noPaymentBox';


class Payments extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Payments">
                <div className="PS-title" >
                    تراکنشها
                </div>
                
                <div className="PS-box" >
                    <table  >
                        <tr className="PSB-title">
                            <th className="title-child1" >ردیف</th>
                            <th className="title-child2" >عنوان</th>
                            <th className="title-child" >تاریخ</th>
                            <th className="title-child" >قیمت</th>
                            <th className="title-child" >درگاه</th>
                            <th className="title-child" >شماره پرداخت</th>
                            <th className="title-child" >وضعیت</th>
                        </tr>
                        <tr className="PSB-body">
                            <td className="body-child1" >1</td>
                            <td className="body-child2" >طراحی لوگو برای شرکت من</td>
                            <td className="body-child" >10/10/1398</td>
                            <td className="body-child" >50,000 ت</td>
                            <td className="body-child" >زرین پال</td>
                            <td className="body-child" >زرین 123</td>
                            <td className="body-child paymentSuccess"  >موفق</td>
                        </tr>
                        <tr className="PSB-body">
                            <td className="body-child1" >1</td>
                            <td className="body-child2" >طراحی لوگو برای شرکت من</td>
                            <td className="body-child" >10/10/1398</td>
                            <td className="body-child" >50,000 ت</td>
                            <td className="body-child" >زرین پال</td>
                            <td className="body-child" >زرین 123</td>
                            <td className="body-child paymentFail"  >ناموفق</td>
                        </tr>
                        <tr className="PSB-body">
                            <td className="body-child1" >1</td>
                            <td className="body-child2" >طراحی لوگو برای شرکت من</td>
                            <td className="body-child" >10/10/1398</td>
                            <td className="body-child" >50,000 ت</td>
                            <td className="body-child" >زرین پال</td>
                            <td className="body-child" >زرین 123</td>
                            <td className="body-child paymentSuccess"  >موفق</td>
                        </tr>
                    </table>
                </div>
                


                <NoPaymentBox />



            </div>
        );
    }
}

export default Payments;