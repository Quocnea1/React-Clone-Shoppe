import React from "react";
import { useFormik } from "formik";
import "./RegisterBody.scss";
import { registerData } from "../../../../utils/dataConfig";
import RegisterWithThirdParty from "../RegisterWithThirdParty/RegisterWithThirdParty";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function RegisterBody() {
  const navigate = useNavigate();
  const { mainImage } = registerData.bodyImage;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      username: "",
      phone: "",
      email: "",
      password: "",
      retypepassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(50, "Tối đa 50 kí tự")
        .required("Thông tin trống"),
      phone: Yup.string()
        .matches(phoneRegExp, "Số điện thoại không hợp lệ")
        .required("Thông tin trống")
        .max(10, "Tối đa 10 kí tự"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Thông tin trống"),
      password: Yup.string().required("Thông tin trống"),
      retypepassword: Yup.string()
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Mật khẩu không trùng khớp"
          ),
        })
        .required("Thông tin trống"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="registerBody">
      <div className="container">
        <div className="wrapper">
          <img src={mainImage} alt="mainImage" className="mainImg" />
          <form className="register" onSubmit={formik.handleSubmit}>
            <p className="title">Đăng Kí</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Tên Người Dùng"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.errors.username && formik.touched.username && (
                <p className="error">{formik.errors.username}</p>
              )}
            </div>
            <div className="form-group">
              <input
                name="phone"
                type="text"
                className="form-control"
                id="phone"
                placeholder="Số Điện Thoại"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              <span class="error">
                {formik.errors.phone && formik.touched.phone && (
                  <p className="error">{formik.errors.phone}</p>
                )}
              </span>
            </div>
            <div className="form-group">
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <span class="error">
                {formik.errors.email && formik.touched.email && (
                  <div>{formik.errors.email}</div>
                )}
              </span>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Mật Khẩu"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <span class="error">{formik.errors.password}</span>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="retypepassword"
                placeholder="Nhập lại mật khẩu"
                onBlur={formik.handleBlur}
                value={formik.values.retypepassword}
                onChange={formik.handleChange}
              />
              <span class="error">{formik.errors.retypepassword}</span>
            </div>
            <input type="submit" value="Đăng Kí" className="submit" />

            {/* Cut Section*/}

            <div className="middle">
              <div className="cutSection" />
              <span className="or">Hoặc</span>
              <div className="cutSection" />
            </div>
            <RegisterWithThirdParty />
            <div className="textDiv">
              <div className="termAndConditions">
                Bằng việc đăng kí, bạn đã đồng ý với Shopee về
              </div>
              <a href="/" className="termAndCond">
                Điều khoản dịch vụ
              </a>
              và
              <a href="/" className="termAndCond">
                Chính sách bảo mật
              </a>
            </div>
            <div className="alreadyUser">
              Bạn đã có tài khoản?
              <span
                className="anchorHandler"
                onClick={() => navigate("/login")}
              >
                Đăng Nhập
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterBody;
