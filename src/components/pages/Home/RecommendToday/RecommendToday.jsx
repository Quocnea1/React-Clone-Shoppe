import "./RecommendToday.scss";
import { ProductFrame } from "../../../global/ProductFrame/ProductFrame";
import { Link } from "react-router-dom";

export const RecommendToday = ({data}) => {
  const { title, items } = data;

  return (
    <div className="recommendToday">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <div>{title}</div>
          </div>
          <div className="items">
            {items.map((_data, index) => (
              <ProductFrame data={_data} key={index} />
            ))}
          </div>
          <Link className="showMore" to="/collection">Xem Thêm</Link>
        </div>
      </div>
    </div>
  );
};
