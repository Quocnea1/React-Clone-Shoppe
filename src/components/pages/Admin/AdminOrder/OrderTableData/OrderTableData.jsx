import React, { useState } from 'react'
import "./OrderTableData.scss"


const OrderTableData = (data) => {
    const {
        orderID,
        date,
        orderStatus,
        customerInfo,
        amount,
    } = data;
    const { state, useState } = state;

    const viewOrderHanlder = () => {
        
    }
    return (
        <tr>
            <td className='td-info'>{orderID}</td>
            <td className='td-info'>{date}</td>
            <td className='td-info'>{orderStatus}</td>
            <td className='td-info'>{customerInfo}</td>
            <td className='td-info'>{amount}</td>
            <td><button onClick={viewOrderHanlder()}>View Order</button></td>
        </tr>
    )
}

export default OrderTableData