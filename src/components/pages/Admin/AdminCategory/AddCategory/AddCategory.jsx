import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddCategory.scss";

export default function AddCategory() {
  const initialValues = {
    name: "",
    sub_category: [""],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Tên danh mục trống"),
    sub_category: Yup.array().of(
      Yup.string().required("Tên danh mục con trống")
    ),
  });

  const onSubmit = (fields) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  };

  return (
    <div className="addCategory">
      <div className="adminContainer">
        <div className="wrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="adminCategoryForm">
                <div className="title">Thêm danh mục</div>
                <div className="addNameCategory">
                  <label htmlFor="categoryName" className="label">
                    Tên danh mục
                  </label>
                  <Field name="name" id="categoryName" className="input" />
                  <ErrorMessage component="div" className="error" name="name" />
                </div>
                <div className="addSubCategory">
                  <FieldArray name="sub_category">
                    {({ remove, push }) => (
                      <>
                        <div className="moreSubCategory">
                          <span className="label">Danh mục con</span>
                          <span className="subButton" onClick={() => push("")}>
                            +
                          </span>
                        </div>
                        <label className="label">Tên danh mục con</label>
                        {values.sub_category.length > 0 &&
                          values.sub_category.map((data, index) => (
                            <div className="subCategory" key={index}>
                              <Field
                                name={`sub_category.${index}`}
                                className="input"
                              />
                              <ErrorMessage
                                component="div"
                                className="error"
                                name={`sub_category.${index}`}
                              />
                              <span
                                className="subButton"
                                onClick={() => remove(index)}
                              >
                                -
                              </span>
                            </div>
                          ))}
                      </>
                    )}
                  </FieldArray>
                </div>
                <button type="submit" className="btn saveButton">
                  Lưu
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
