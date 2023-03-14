import "./ProductSection.scss";
import { useState } from "react";
import { Filter } from "./Filter/Filter";
import { Navigate } from "./Navigate/Navigate";
import { ProductFrame } from "../../../global/ProductFrame/ProductFrame";

export const ProductSection = ({ data }) => {
  const [_listProducts, setListProducts] = useState(data.listProducts)

  return (
    <div className="productSection">
      <div className="container">
        <div className="wrapper">
          <Filter />
          <div className="products">
            <div className="title">
              <div>Các mặt hàng</div>
            </div>
            <div className="items">
              {_listProducts.map((data, index) => (
                <ProductFrame data={data} key={index} />
              ))}
            </div>
            <Navigate totalPage={data.totalPage} setListProducts={setListProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
