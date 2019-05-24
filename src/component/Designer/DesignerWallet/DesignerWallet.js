import React, { Component } from 'react';
import GetToApi from '../../../controler/getToApi';

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
            statusYellow:true,
            data:[],
            wallet:{}
        }
    }
    componentWillMount =async () => {

        const res = await GetToApi('wallet/invoice');
        console.log(res)
        this.setState({
            data : res.data.invoice,
            wallet:res.data.wallet
        })
    }



    render() {

        const _renderInvoice = (
            this.state.data ? this.state.data.map((data,index) => {
                return        <tr className="DW-table-body" key={index}>
                                <td className="DWT-child1" >{index+1}</td>
                                <td className="DWT-child" >{data.price} تومان</td>
                                {/* <td className="DWT-child" >{data.created_at}</td> */}
                                <td className="DWT-child" >{data.created_at_persian}</td>
                                <td className="DWT-child" >{data.invoice_status} </td>
                                <td className={" DWT-child " + data.status  } >{data.status} </td>
                            </tr>
            }) :    <DesignerNoWallet />
        )


        return (

            <div className="DesignerWallet">
                <div className="DW-title" >
                    کیف پول
            </div>

            <StatusMessage  
                type="warning"
                text='کاربر گرامی، شما زمانی می توانید از کیف پول خود برداشت کنید که موجودی شما بیش تر از 50،000 تومان باشد.' 
            />
                <div className="DW-table" >
                    <table  >
                        <tbody>
                            <tr className="DW-table-title">
                                <th className="DWT-child1" >ردیف</th>
                                <th className="DWT-child" >مبلغ </th>
                                <th className="DWT-child" >تاریخ</th>
                                <th className="DWT-child" >توضیحات</th>
                                <th className="DWT-child" >وضعیت</th>
                            </tr>
                      
                            {_renderInvoice}
                        </tbody>
                    </table>

                </div>
                <div className="DW-request-box" >
                    <div className="DW-money" >
                        <span>موجودی کیف پول</span>
                        <span>{this.state.wallet.price} تومان</span>
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



                



            </div>
        );
    }
}

export default DesignerWallet;