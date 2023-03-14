import Field from "./Field/Field";
import ImageUploaderForm from "./ImageUploaderForm/ImageUploaderForm";
import "./CustomerInfo.scss";
import BannerInfo from "./BannerInfo/BannerInfo";

function CustomerInfo() {
  return (
    <div className="customerInfo">
      <div className="container">
        <BannerInfo />
        <div className="wrapper">
          <Field />
          <ImageUploaderForm />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
