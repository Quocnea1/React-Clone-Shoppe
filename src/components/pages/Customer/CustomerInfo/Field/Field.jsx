import "./Field.scss";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Field() {
  const formik = useFormik({
    initialValues: {
      nameShop: "",
      gender: "",
      dateBirth: "",
    },
    validationSchema: Yup.object({
      nameShop: Yup.string()
        .max(30, "Tối đa 30 kí tự")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="customerInfofield">
      <form onSubmit={formik.handleSubmit}>
        <div className="border-right">
          <div className="form-group row">
            <label
              htmlFor="staticText"
              className="col-sm-5 col-form-label title"
            >
              Tên đăng nhập
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control-plaintext myFieldReadOnly"
                name="nameAccount"
                id="staticText"
                value="Nhom6"
                readonly
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="staticName"
              className="col-sm-5 col-form-label title"
            >
              Tên
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control-plaintext myField"
                id="staticName"
                name="nameShop"
                defaultValue={formik.values.nameShop}
                onChange={formik.handleChange}
              />
              {formik.errors.nameShop && formik.touched.nameShop && (
                <p className="error">{formik.errors.nameShop}</p>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="staticEmail"
              className="col-sm-5 col-form-label title"
            >
              Email
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control-plaintext myFieldReadOnly"
                id="staticEmail"
                name="email"
                value="nhom6intern@gmail.com"
                readonly
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="staticPhoneNumber"
              className="col-sm-5 col-form-label title"
            >
              Số điện thoại
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control-plaintext myFieldReadOnly"
                name="phone"
                id="staticPhoneNumber"
                value="0900999777"
                readonly
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-5 col-form-label title">Giới tính</label>
            <div className="col-sm-6">
              <div className="form-check form-check-inline checkRadio">
                <div className="gender">
                  <input
                    className="form-check-input"
                    id="male"
                    type="radio"
                    value="Nam"
                    name="gender"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.gender === "male"}
                  />
                  <label className="form-check-label label" htmlFor="male">
                    Nam
                  </label>
                </div>
                <div className="gender">
                  <input
                    className="form-check-input"
                    id="female"
                    type="radio"
                    value="Nữ"
                    name="gender"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.gender === "female"}
                  />
                  <label className="form-check-label label" htmlFor="female">
                    Nữ
                  </label>
                </div>
                <div className="gender">
                  <input
                    className="form-check-input"
                    id="other"
                    type="radio"
                    value="Khác"
                    name="gender"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.gender === "other"}
                  />
                  <label className="form-check-label label" htmlFor="other">
                    Khác
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="staticDateBirth"
              className="col-sm-5 col-form-label title"
            >
              Ngày sinh
            </label>
            <div className="col-sm-3">
              <input
                type="date"
                name="dateBirth"
                className="form-control-plaintext"
                id="dateBirth"
                defaultValue="dateBirth"
                onChange={formik.handleChange}
                defaultChecked={formik.values.dateBirth === "dateBirth"}
              />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-5" />
          <div className="col-sm-7">
            <input className="btn buttonSave" type="submit" value="Lưu" />
          </div>
        </div>
      </form>
    </div>
  );
}
