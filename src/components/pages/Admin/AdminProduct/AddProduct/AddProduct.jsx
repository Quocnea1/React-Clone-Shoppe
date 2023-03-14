import "./AddProduct.scss";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import AddProductQuantity from "./AddProductQuantity/AddProductQuantity";
import FormField from "./FormField/FormField";
import ImageField from "./ImageField/ImageField";

export default function AddProduct({ subCategoryList }) {
  const initialValues = {
    name: "",
    types: [
      {
        name: "",
        price: 0,
        quantity: 1,
      },
    ],
    images: ["", "", "", "", ""],
    description: "",
    subCategory: 0,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Tên trống"),
    types: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Tên loại trống"),
        price: Yup.number()
          .min(1, "Giá tiền lớn hơn 0")
          .required("Giá tiền trống"),
        quantity: Yup.number()
          .min(1, "Số lượng lớn hơn 0")
          .required("Số lượng lớn hơn 0"),
      })
    ),
    images: Yup.array().of(Yup.mixed().required("Hình ảnh trống")),
    description: Yup.string().required("Mô tả trống"),
    subCategory: Yup.number(),
  });

  const [imgPreview, setImgPreview] = useState([]);
  const [imgValid, setImgValid] = useState(false);
  const FILE_SIZE = 500 * 1024; //Byte
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const imgChoosen = (e, setFieldValue, index) => {
    let file = e.target.files[0];
    if (file && imgPreview.length < 5) {
      console.log(file.type);
      if (!SUPPORTED_FORMATS.includes(file.type))
        setImgValid("Định dạng ảnh không hợp lệ");
      else if (file.size > FILE_SIZE) setImgValid("Dung lượng ảnh vượt 500KB");

      setFieldValue(`images.${index}`, e.target.value);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgPreview((arr) => [...arr, reader.result]);
      });
      reader.readAsDataURL(file);
    }
  };

  const handleError = (images) => {
    let haveEmpty = false;
    for (let i = 0; i < images.length; i++) {
      if (images[i] !== undefined) {
        haveEmpty = true;
      }
    }

    return (
      <div className="error">
        {haveEmpty && <div>Hãy tải đủ 5 hình ảnh</div>}
        {imgValid && <div>{imgValid}</div>}
      </div>
    );
  };

  const resetProductImage = (setFieldValue) => {
    setImgPreview([]);
    setFieldValue("images", ["", "", "", "", ""]);
  };

  const onSubmit = (fields) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  };

  return (
    <div className="addProduct">
      <div className="wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <>
              <Form className="adminProductForm">
                <div className="infoProduct">
                  <div className="title">Thêm sản phẩm</div>
                  <div className="addName">
                    <label htmlFor="productName" className="label">
                      Tên sản phẩm
                    </label>
                    <FormField
                      name="name"
                      placeholder="Áo thun"
                      id="productName"
                    />
                  </div>
                  <div className="addCategory">
                    <label htmlFor="productSubCategory" className="label">
                      Tên danh mục
                    </label>
                    <Field
                      name="subCategory"
                      placeholder="Áo thun"
                      id="productSubCategory"
                      as="select"
                      className="input select"
                    >
                      {subCategoryList.map((data, index) => (
                        <option value={data.id} key={index}>
                          {data.name}
                        </option>
                      ))}
                    </Field>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div className="addType">
                    <FieldArray name="types">
                      {({ remove, push }) => (
                        <>
                          <div className="moreType">
                            <span className="content">Phân loại</span>
                            <span
                              className="typeButton"
                              onClick={() =>
                                push({ name: "", price: 0, quantity: 1 })
                              }
                            >
                              +
                            </span>
                          </div>
                          <div className="type">
                            <div className="typeLabel">
                              <span className="label">Tên loại</span>
                              <span className="label margin-left">
                                Giá (VND)
                              </span>
                              <span className="label margin-left">
                                Số lượng
                              </span>
                            </div>
                            {values.types.length > 0 &&
                              values.types.map((data, index) => (
                                <div className="subType" key={index}>
                                  <FormField
                                    name={`types.${index}.name`}
                                    placeholder="Màu - Size"
                                  />
                                  <FormField
                                    name={`types.${index}.price`}
                                    type="number"
                                  />
                                  <AddProductQuantity
                                    index={index}
                                    values={values}
                                    setFieldValue={setFieldValue}
                                  />
                                  <span
                                    className="typeButton"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </span>
                                </div>
                              ))}
                          </div>
                        </>
                      )}
                    </FieldArray>
                  </div>
                  <div className="addDescription">
                    <span className="label">Mô tả sản phẩm</span>
                    <FormField
                      name="description"
                      className="input big"
                      as="textarea"
                    />
                  </div>
                  <button type="submit" className="btn saveButton">
                    Lưu
                  </button>
                </div>
                <div className="imageProduct">
                  <div className="imgContainer">
                    <ImageField
                      index={0}
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                    />
                    <ImageField
                      index={1}
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                    />
                    <ImageField
                      index={2}
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                    />
                    <ImageField
                      index={3}
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                    />
                    <ImageField
                      index={4}
                      setFieldValue={setFieldValue}
                      imgPreview={imgPreview}
                      imgChoosen={imgChoosen}
                    />
                    <div
                      className="deleteBtn"
                      onClick={() => resetProductImage(setFieldValue)}
                    >
                      Xóa
                    </div>
                    {errors.images && touched.images
                      ? handleError(errors.images)
                      : null}
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}
