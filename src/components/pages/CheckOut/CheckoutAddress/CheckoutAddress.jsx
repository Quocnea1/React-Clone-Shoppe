import React from 'react'
import "./CheckoutAddress.scss";
import { checkout } from "../../../../utils/dataConfig"



function CheckoutAddress() {
    const { shopeecheckout } = checkout.img;

    return (
        <div className="checkout-address">
            <div className="container" >
                <div className="checkout-heading">
                    <div className="checkout-logo">
                        <figure>
                            <img className="checkout-image" src={shopeecheckout} alt="Logo"></img>
                        </figure>
                    </div>
                    <div className="checkout-title">
                        <b>Thanh Toán</b>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CheckoutAddress