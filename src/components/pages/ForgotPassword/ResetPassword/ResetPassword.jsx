import React from "react";
import "../ForgotPassword.scss";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  let navigate = useNavigate();
  return (
    <div className="ResetPassword">
      <div className="forgotPassword">
        <div className="card fillForm">
          <div className="card-body">
            <div className="cardTitle text-center">
              <span onClick={() => navigate(-1)} className="icon">
                <i className="fa-solid fa-arrow-left" />
              </span>
              <h3 className="title">Đặt lại mật khẩu mới</h3>
            </div>
            <div className="card-text">
              <form className="formText">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control text-center"
                    placeholder="Mật khẩu mới"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control text-center"
                    placeholder="Nhập lại mật khẩu mới"
                  />
                </div>
                <button type="submit" className="btn btn-block">
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
