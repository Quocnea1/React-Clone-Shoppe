import React from 'react'
import { adminOrderData } from "../../../../utils/dataConfig"
import OrderTableData from './OrderTableData/OrderTableData';
import './AdminOrder.scss'
import OrderDetailData from './OrderDetailData/OrderDetailData';
export default function AdminOrder() {
  const {
    field,
    customer,
  } = adminOrderData;
  return (
    <div className="mainDiv">
      <div className="adminOrder">
        <div className="adminContainer">
          <table className="table table-striped">
            <thead>
              <tr>
                {field.map((data, index) => (
                  <th className="field" key={index}>{data}</th>
                ))}
              </tr>
            </thead>
            <tbody className='table-body'>
              {adminOrderData.customer && adminOrderData.customer.map((data, index) => (
                <OrderTableData
                  orderID={data.orderID}
                  date={data.date}
                  orderStatus={data.orderStatus}
                  customerInfo={data.customerInfo}
                  amount={data.amount}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="orderDetail">
          <OrderTableData />

          <OrderDetailData />
        </div>
    </div>
  )
}
