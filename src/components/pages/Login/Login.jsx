import "./Login.scss";
import React from "react";
import { imageDataLogin } from "../../../utils/dataConfig";
import { Layout } from "../../global/Layout/Layout";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [facebookIcon, googleIcon, backgroundLogin] = imageDataLogin.images;
  return (
    <Layout>
      <div className="login">
        <div className="container">
          <div
            className="backgroundImg"
            style={{ backgroundImage: `url(${backgroundLogin})` }}
          >
            <div className="authFormLogin">
              <div className="wrap">
                <div className="loginTitle">Đăng nhập</div>
                <div className="loginInput">
                  <input
                    type="text"
                    className="loginInputUser"
                    placeholder="Email / Tên đăng nhập"
                  />
                  <input
                    type="password"
                    className="loginInputPassword"
                    placeholder="Mật khẩu"
                  />
                </div>
                <button className="loginBtn">Đăng Nhập</button>
                <span
                  className="linkForgotPassWord"
                  onClick={() => navigate("/forgot-password")}
                >
                  Quên mật khẩu
                </span>

                <div className="otherLogin">
                  <span className="line line1"></span>
                  <span className="otherLoginText">HOẶC</span>
                  <span className="line line2"></span>
                </div>

                <div className="otherLoginBtn">
                  <button className="otherLoginbutton btn">
                    <img
                      src={facebookIcon}
                      alt=""
                      className="otherLoginFaIcon"
                    />
                    <span className="otherLoginTitle">Facebook</span>
                  </button>
                  <button className="otherLoginbutton btn">
                    <img src={googleIcon} alt="" className="otherLoginGoIcon" />
                    <span className="otherLoginTitle">Google</span>
                  </button>
                </div>
                <div className="gotoRegister">
                  <h5 className="recomendText">Bạn chưa biết đến shopee?</h5>
                  <span
                    className="linkRegister"
                    onClick={() => navigate("/register")}
                  >
                    Đăng ký
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
