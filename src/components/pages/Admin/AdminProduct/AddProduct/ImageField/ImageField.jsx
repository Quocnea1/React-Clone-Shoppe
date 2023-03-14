import React from "react";
import { Field } from "formik";

export default function ImageField({
  index,
  setFieldValue,
  className = "imgItem",
  imgPreview,
  id = 'images.',
  imgChoosen,
}) {
  return (
    <>
      <label htmlFor={id+index} className={className}>
        {imgPreview[index] !== undefined ? (
          <img src={imgPreview[index]} alt="" />
        ) : (
          "+"
        )}
      </label>
      <Field
        type="file"
        name={id+index}
        id={id+index}
        className="hidden"
        onChange={(e) => imgChoosen(e, setFieldValue, index)}
      />
    </>
  );
}
