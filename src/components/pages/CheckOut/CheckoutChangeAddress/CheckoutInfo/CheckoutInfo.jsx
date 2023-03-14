import React from 'react'
import "./CheckoutInfo.scss"
function CheckoutInfo({ data }) {
    return (
        <div className="checkout-info">
            <p>{data.fullname}</p>
            <p>{data.phone_number}</p>
            <p>{data.address}</p>
        </div>
    )
}

export default CheckoutInfo