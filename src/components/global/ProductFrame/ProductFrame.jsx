import { ProcessLongText, TextToCurrency } from "../ProcessText/ProcessText";
import { useNavigate } from "react-router-dom";
import "./ProductFrame.scss";
import ReactStars from "react-rating-stars-component";
import { ShortNumFormatter } from "../ProcessText/ProcessText";

export const ProductFrame = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };
  // console.log(data);

  return (
    <div className="productFrame" onClick={() => handleClick()}>
      <figure className="productImg">
        <img src={data.img} alt={data.title}></img>
      </figure>
      <div className="productInfo">
        <div className="productTitle">
          <ProcessLongText string={data.title} />
        </div>
        <div className="productStar">
          <ReactStars
            value={data.star}
            edit={false}
            isHalf={true}
            size={20}
            color="#ebebeb"
            activeColor="#ffce3d"
            className="star"
          />
          <div className="sold">
            Đã bán {<ShortNumFormatter number={data.sold} />}
          </div>
        </div>
        <div className="productPrice">
          <TextToCurrency number={data.price} />
        </div>
      </div>
    </div>
  );
};
