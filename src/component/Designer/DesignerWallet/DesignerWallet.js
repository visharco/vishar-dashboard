import React, { Component } from 'react';

//
//
//

import DesignerNoWallet from './../DesignerNoWallet/DesignerNoWallet'
import Button from './../../common/Button/Button'
//
//compoents
//


import './style.css';
import StatusMessage from '../../StatusMessage/StatusMessage';


class DesignerWallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusYellow:true
        }
    }




    render() {
        return (

            <div className="DesignerWallet">
                <div className="DW-title" >
                    کیف پول
            </div>
                    <StatusMessage
                    bgColor="rgba(242, 201, 76, 0.7)"
                    color="#A88823"
                    text="
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.  امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    
                    " /> 
             
                <div className="DW-table" >
                    <table  >
                        <tbody>
                            <tr className="DW-table-title">
                                <th className="DWT-child1" >ردیف</th>
                                <th className="DWT-child" >قیمت</th>
                                <th className="DWT-child" >تاریخ</th>
                                <th className="DWT-child" >توضیحات</th>
                            </tr>
                            <tr className="DW-table-body">
                                <td className="DWT-child1" >1</td>
                                <td className="DWT-child" >100,000 ت</td>
                                <td className="DWT-child" >10/10/1398 10:20 PM</td>
                                <td className="DWT-child" >طراحی لوگوی محصول </td>
                            </tr>
                            <tr className="DW-table-body">
                                <td className="DWT-child1" >2</td>
                                <td className="DWT-child" >100,000 ت</td>
                                <td className="DWT-child" >10/10/1398 10:20 PM</td>
                                <td className="DWT-child" >طراحی لوگوی محصول </td>
                            </tr>
                            <tr className="DW-table-body">
                                <td className="DWT-child1" >3</td>
                                <td className="DWT-child" >100,000 ت</td>
                                <td className="DWT-child" >10/10/1398 10:20 PM</td>
                                <td className="DWT-child" >طراحی لوگوی محصول </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="DW-request-box" >
                    <div className="DW-money" >
                        <span>کیف پول</span>
                        <span>500,000 ت</span>
                    </div>
                    <Button
                        isLoading={this.state.isLoading}
                        title={'درخواست برای گرفتن پول'}
                        bgcolor={'#0090CF'}
                        hoverbgcolor={'#rgb(160, 160, 160)'}
                        click={this.callSubmit}
                        borderRadius="30px"
                        color="#fff"
                    />
                </div>



                <DesignerNoWallet />



            </div>
        );
    }
}

export default DesignerWallet;