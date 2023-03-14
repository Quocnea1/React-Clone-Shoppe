import React from "react";
import "../ForgotPassword.scss";
import { useNavigate } from "react-router-dom";

export default function FillEmail() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `otp`;
    navigate(path);
  };

  return (
    <div className="forgotPassword">
      <div className="card fillForm">
        <div className="card-body">
          <div className="cardTitle text-center">
            <span onClick={() => navigate(-1)} className="icon">
              <i className="fa-solid fa-arrow-left" />
            </span>
            <h3 className="title">Đặt lại mật khẩu</h3>
          </div>
          <div className="card-text">
            <form className="formText">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control text-center"
                  placeholder="Email hoặc số điện thoại"
                />
              </div>
              <button
                onClick={routeChange}
                type="submit"
                className="btn btn-block "
              >
                TIẾP THEO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
