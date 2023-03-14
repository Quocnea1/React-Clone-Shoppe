import ImageSection from "./ImageSection/ImageSection";
import InfoSection from "./InfoSection/InfoSection";
import "./ProductInfo.scss";

function ProductInfo({ info, title, prices }) {
  return (
    <div className="productInfo">
      <div className="container">
        <div className="wrapper">
          <ImageSection images={info.images} title={title} />
          <InfoSection title={title} info={info} />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
