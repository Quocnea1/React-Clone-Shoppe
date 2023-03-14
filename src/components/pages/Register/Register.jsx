import React, { useEffect } from 'react'
import { Footer } from '../../global/Footer/Footer';
import RegisterBody from './RegisterBody/RegisterBody'
import RegisterHeader from './RegisterHeader/RegisterHeader'

function Register() {
    useEffect(() => {
        document.title = "Đăng Kí";
    });
    return (
        <div>
            <RegisterHeader />
            <RegisterBody />
            <Footer />
        </div>
    )
}
export default Register;
