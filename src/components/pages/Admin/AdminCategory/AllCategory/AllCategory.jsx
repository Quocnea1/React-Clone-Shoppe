import React, { useState } from "react";
import "./AllCategory.scss";

export default function AllCategory({ data }) {
  return (
    <div className="allCategory">
      <div className="adminContainer">
        <div className="wrapper">
          <div className="title">Tất cả danh mục</div>
          <div className="categoryItems">
            {data.map((_data, index) => (
              <div key={index}>
                <div className="categoryItem">
                  <div className="categoryName">
                    <span>{_data.name}</span>
                  </div>
                  <span className="subButton">-</span>
                </div>
                <div className="subCategoryItems">
                  {_data.subCategory.map((__data, _index) => (
                    <div className="subCategoryItem" key={_index}>
                      {__data.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
