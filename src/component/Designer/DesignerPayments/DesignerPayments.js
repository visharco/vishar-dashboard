import React, { Component } from 'react';
import GetToApi from '../../../controler/getToApi';

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
        this.state = {
            data:[]
        }
    }

    componentWillMount =async () => {

        const res = await GetToApi('profile/wallet/invoice');
        console.log(res)
        this.setState({
            data : res.data
        })
    }

    
    render() {

        const _renderInvoice = (
            this.state.data ? this.state.data.map((data,index) => {
                return    <tr className="DPB-body">
                            <td className="body-child1" >1</td>
                            <td className="body-child" >150,000 ت</td>
                            <td className="body-child" > 10:20 ب.ظ  10/10/1398</td>
                            <td className="body-child paymentSuccess"  >موفق</td>
                            <td className="body-child" >برای پروژه لوگو</td>
                        </tr> 
            }) :    <NoPaymentBox />
        )
        return (
            <div className="DesignerPayments">
                <div className="DP-title" >
                    تراکنشها
                </div>
                
                <div className="DP-box" >
                    <table  >
                        <tbody>
                            
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
                        </tbody>
                       
                    </table>
                </div>
                


             



            </div>
        );
    }
}

export default DesignerPayments;