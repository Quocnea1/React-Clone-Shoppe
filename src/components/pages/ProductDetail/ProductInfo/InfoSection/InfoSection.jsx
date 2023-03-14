import React, { useState } from "react";
import "./InfoSection.scss";
import ReactStars from "react-rating-stars-component";
import Type from "./Type/Type";
import Price from "./Price/Price";
import Quantity from "./Quantity/Quantity";

export default function InfoSection({ title, info }) {
  const { type } = info;
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div className="InfoSection">
      <div className="details">
        <h1 className="product-title">{title}</h1>
        <div className="rating">
          <div className="stars">
            <ReactStars
              count={5}
              size={20}
              color="#ebebeb"
              value={4}
              edit={false}
              activeColor="#ee4d2d"
              classNames="star"
            />
          </div>
          <div className="reviews">
            <span className="review-no">{info.ratingNumber} Đánh Giá</span>
          </div>
          <div className="votes">{info.soldNumber} Đã Bán</div>
        </div>
        <h3 className="price">
          {type.map(
            (_data, index) =>
              currentTypeIndex === index && <Price data={_data} key={index} />
          )}
        </h3>
        <h6 className="types">
          Loại:
          {type.map((_data, index) => (
            <Type
              index={index}
              data={_data}
              key={index}
              setCurrentTypeIndex={setCurrentTypeIndex}
              selected={index === currentTypeIndex}
            />
          ))}
        </h6>
        <div className="quantities">
          <h6 className="quantityTitle">Số lượng: </h6>
          {type.map(
            (_data, index) =>
              currentTypeIndex === index && (
                <span className="quantityInner" key={index}>
                  <Quantity number={number} setNumber={setNumber} limit={_data.inventory} />
                  <span className="inventory">
                    Còn {_data.inventory} sản phẩm
                  </span>
                </span>
              )
          )}
        </div>
        <div className="action">
          <button className="addToCart" type="button">
            Thêm vào giỏ hàng
          </button>
          <button className="buyNow" type="button">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}
