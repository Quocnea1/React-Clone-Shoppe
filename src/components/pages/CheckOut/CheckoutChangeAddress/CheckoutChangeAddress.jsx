import React from 'react'
import AddressModal from './AddressModal/AddressModal';
import "./CheckoutChangeAddress.scss"
import CheckoutInfo from "./CheckoutInfo/CheckoutInfo";
function CheckoutChangeAddress({ data }) {

    const [toggle, setToggle] = React.useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <React.Fragment>
            <div className="checkout-change">
                <div className="container">
                    <div className="checkout-titles">
                        <i className="fa-solid fa-location-dot"></i>
                        <b> Địa chỉ nhận hàng</b>
                    </div>
                    <div className="checkout-data">
                        <CheckoutInfo data={data[0]} />
                        <button className="btn-change" onClick={setToggle}><b>THAY ĐỔI</b></button>
                    </div>
                </div>
            </div>
            {toggle && <AddressModal onToggle={handleToggle} />}
        </React.Fragment>
    )
}

export default CheckoutChangeAddress