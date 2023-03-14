import "./OrderInfoDetail.scss";
import React from "react";

function OrderInfoDetail({ data }) {
  return (
    <div className="order-info-table">
      <div className="order-info-name">{data.orderID}</div>
      <div className="order-info-time">{data.date}</div>
      <div className="order-info-status">{data.orderStatus}</div>
      <div className="order-info-info">{data.customerInfo}</div>
      <div className="order-info-amount">{data.amount}</div>
      <button className="order-info-button">View Order</button>
    </div>
  );
}

export default OrderInfoDetail;