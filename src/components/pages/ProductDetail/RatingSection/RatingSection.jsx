import React from "react";
import "./RatingSection.scss";
import RatingFilter from "./RatingSectionFilter/RatingFilter";
import ReactStars from "react-rating-stars-component";
import {
  averageStarRating,
  commentSectionFullData,
  rating,
} from "../../../../utils/dataConfig";
import RatingTab from "../../../global/RatingTab/RatingTab";

function RatingSection() {
  const { count } = averageStarRating;
  const { rate } = rating;
  const [rateState, setRateState] = React.useState(0);

  const handleFilter = (index) => {
    setRateState(index);
  };

  return (
    <div className="RatingSection">
      <div className="container">
        <div className="wrapper">
          <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
          <div className="rating-box">
            <div className="rating-box-star">
              <p className="avg">{count} trên 5 </p>
              <ReactStars
                count={5}
                size={20}
                color="#ebebeb"
                activeColor="#ee4d2d"
                classNames="star"
                edit={false}
                value={count}
                isHalf={true}
              />
            </div>
            <div className="rating-box-btn">
              {rate &&
                rate.map((data, index) => (
                  <RatingFilter
                    key={index}
                    data={data}
                    index={index}
                    rateState={rateState}
                    onChangeFilter={handleFilter}
                  />
                ))}
            </div>
          </div>
          <div className="rating-tab">
            {commentSectionFullData.map((data, index) => (
              <RatingTab
                key={index}
                avatar={data.avatar}
                username={data.username}
                time={data.time}
                comments={data.comments}
                feedbackImg={data.feedbackImg}
                star={data.star}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingSection;
