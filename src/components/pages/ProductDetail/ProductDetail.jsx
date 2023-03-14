import { Layout } from "../../global/Layout/Layout";
import React, { useEffect } from "react";
import "./ProductDetail.scss";
import ProductInfo from "./ProductInfo/ProductInfo";
import Description from "./Description/Description";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import {
  productDetailData,
  productCategory,
  productDetailDescriptionData,
} from "../../../utils/dataConfig";
import RatingSection from "./RatingSection/RatingSection";

function ProductDetail() {
  const { info, title } = productDetailData;
  const { category, subCategory, item } = productCategory;
  const { describe, detail } = productDetailDescriptionData;

  useEffect(() => {
    document.title = "Chi tiết sản phẩm";
    window.scrollTo(0, 0);
  });

  return (
    <div className="productDetail">
      <Layout>
        <Breadcrumbs
          category={category}
          subCategory={subCategory}
          item={item}
        />
        <ProductInfo info={info} title={title} />
        <Description describe={describe} detail={detail} />
        <RatingSection />
      </Layout>
    </div>
  );
}

export default ProductDetail;
