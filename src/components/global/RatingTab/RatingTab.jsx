import React from 'react'
import ReactStars from 'react-rating-stars-component';
import "./RatingTab.scss"
const RatingTab = (data) => {
    const {
        avatar,
        username,
        time,
        comments,
        feedbackImg,
        star,
    } = data;
    return (
        <div className="shopee-product-rating">
            <div className="rating-avatar">
                <div className="placeholder">
                    <img src={avatar} alt={username} className="avatar-img" />
                </div>
            </div>
            <div className="rating-main">
                <div className="author-name">
                    <p className="authorName">{username}</p>
                </div>
                <div className="rating-star">{
                    <ReactStars
                        count={5}
                        size={20}
                        color="#ebebeb"
                        activeColor="#ee4d2d"
                        classNames="star"
                        edit={false}
                        value={star}
                        isHalf={true}
                    />
                }</div>
                <div className="rating-time">{time}</div>
                <div className="comment">{comments}</div>
                <div className="img-wrapper">
                    <div className="imgs">
                        {feedbackImg && feedbackImg.map((data, index) => (
                            <img key={index} src={data} alt="" className="image" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingTab