import "./Filter.scss";
import { Collection__filter } from "../../../../../utils/dataConfig";
import { CategoryList } from "./CategoryList/CategoryList";
import { useState } from "react";

export const Filter = () => {
  const { collection_name } = Collection__filter.heading_title;
  const { Search__filter } = Collection__filter;
  const [currentChooseIndex, setCurrentChooseIndex] = useState(-1);

  return (
    <div className="filter">
      <div className="category">
        <h3 className="category__heading">
          <i className="category__heading-icon fa-solid fa-list"></i>
          Tất Cả Danh Mục
        </h3>
        <ul className="category-list category-list--active">
          <span className="category-list__link">
            {collection_name}
          </span>
          {/* Search filter */}
          {Search__filter.map((data, index) => (
            <CategoryList
              data={data}
              key={index}
              index={index}
              setCurrentChooseIndex={setCurrentChooseIndex}
              className={
                index === currentChooseIndex
                  ? "category-item category-item--active"
                  : "category-item"
              }
            />
          ))}
        </ul>
        <div className="category__price">
          <input
            className="category__price-input category__price-from"
            type="number"
            placeholder="Từ"
            min={0}
          />
          <input
            className="category__price-input category__price-to"
            type="number"
            placeholder="Đến"
            min={0}
          />
        </div>
        <button className="category__search-button btn btn--primary">
          Áp dụng
        </button>
      </div>
    </div>
  );
};
