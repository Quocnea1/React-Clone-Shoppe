import "./Detail.scss";
import React from "react";

export default function Detail({ data }) {

  const {label, content} = data

  return (
    <div className="detail">
      <div className="label">{label}</div>
      <div className="content">{content}</div>
    </div>
  );
}
