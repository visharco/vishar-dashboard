import React, { Component } from 'react';

//
//
//



//
//compoents
//


import './style.css';
import NoPaymentBox from '../../noPaymentBox/noPaymentBox';


class DesignerPayments extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="DesignerPayments">
                <div className="DP-title" >
                    تراکنشها
                </div>
                
                <div className="DP-box" >
                    <table  >
                        <tr className="DPB-title">
                            <th className="title-child1" >ردیف</th>
                            <th className="title-child2" >عنوان</th>
                            <th className="title-child" >تاریخ</th>
                            <th className="title-child" >قیمت</th>
                            <th className="title-child" >درگاه</th>
                            <th className="title-child" >شماره پرداخت</th>
                            <th className="title-child" >وضعیت</th>
                        </tr>
                        <tr className="DPB-body">
                            <td className="body-child1" >1</td>
                            <td className="body-child2" >طراحی لوگو برای شرکت من</td>
                            <td className="body-child" >10/10/1398</td>
                            <td className="body-child" >50,000 ت</td>
                            <td className="body-child" >زرین پال</td>
                            <td className="body-child" >زرین 123</td>
                            <td className="body-child paymentSuccess"  >موفق</td>
                        </tr>
                        <tr className="DPB-body">
                            <td className="body-child1" >2</td>
                            <td className="body-child2" >طراحی لوگو برای شرکت من</td>
                            <td className="body-child" >10/10/1398</td>
                            <td className="body-child" >50,000 ت</td>
                            <td className="body-child" >زرین پال</td>
                            <td className="body-child" >زرین 123</td>
                            <td className="body-child paymentFail"  >ناموفق</td>
                        </tr>
                        <tr className="DPB-body">
                            <td className="body-child1" >3</td>
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

export default DesignerPayments;