import React from 'react'
import { registerData } from "../../../../utils/dataConfig";
import './RegisterHeader.scss'
import { useNavigate } from 'react-router-dom'

function RegisterHeader() {
    const { logoShopeePrimary } = registerData.logo;
    const navigate = useNavigate();
    return (
        <div className="registerHeader">
            <div className="container">
                <div className="wrapper">
                    <figure className="logoShopee">
                        <img
                            src={logoShopeePrimary}
                            alt="logoShopee"
                            className="logoShopeeImg"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </figure>
                    <p className="title">Đăng Kí</p>
                </div>
                <a href="/help" className="helpAnchor">Bạn cần giúp đỡ</a>
            </div>
        </div>
    )
}

export default RegisterHeader