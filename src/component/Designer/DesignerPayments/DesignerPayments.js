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
                            <th className="title-child" >قیمت</th>
                            <th className="title-child" >تاریخ</th>
                            <th className="title-child" >وضعیت</th>
                            <th className="title-child" >توضیحات</th>
                        </tr>
                        <tr className="DPB-body">
                            <td className="body-child1" >1</td>
                            <td className="body-child" >150,000 ت</td>
                            <td className="body-child" > 10:20 ب.ظ  10/10/1398</td>
                            <td className="body-child paymentSuccess"  >موفق</td>
                            <td className="body-child" >برای پروژه لوگو</td>
                        </tr>
                        <tr className="DPB-body">
                            <td className="body-child1" >2</td>
                            <td className="body-child" >50,000 ت</td>
                            <td className="body-child" > 10:20 ب.ظ  10/10/1398</td>
                            <td className="body-child paymentFail"  >ناموفق</td>
                            <td className="body-child" >برای پروژه لوگو</td>
                        </tr>
                        <tr className="DPB-body">
                            <td className="body-child1" >3</td>
                            <td className="body-child" >500,000 ت</td>
                            <td className="body-child" > 10:20 ب.ظ  10/10/1398</td>
                            <td className="body-child paymentSuccess"  >موفق</td>
                            <td className="body-child" >برای پروژه لوگو</td>
                        </tr>
                       
                    </table>
                </div>
                


                <NoPaymentBox />



            </div>
        );
    }
}

export default DesignerPayments;