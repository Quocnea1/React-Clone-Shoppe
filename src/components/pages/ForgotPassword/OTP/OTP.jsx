import React from "react";
import "../ForgotPassword.scss";
import { useNavigate } from "react-router-dom";

export default function OTP() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../reset`;
    navigate(path);
  };
  return (
    <div className="OTP">
      <div className="forgotPassword">
        <div className="card fillForm">
          <div className="card-body">
            <div className="cardTitle text-center">
              <span onClick={() => navigate(-1)} className="icon">
                <i className="fa-solid fa-arrow-left" />
              </span>
              <h3 className="title">Nhập mã OTP</h3>
            </div>
            <div className="card-text">
              <form className="formText">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="OTP gồm 6 số"
                  />
                </div>
                <button
                  onClick={routeChange}
                  type="submit"
                  className="btn btn-block"
                >
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
