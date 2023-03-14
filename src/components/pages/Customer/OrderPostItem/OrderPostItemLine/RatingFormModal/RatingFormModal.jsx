import "./RatingFormModal.scss";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function RatingFormModal({ name, setModal }) {
  const [img, setImg] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [star, setStar] = useState();

  const imgChoosen = (e) => {
    if (e.target.files[0]) {
      setImg((arr) => [...arr, e.target.files[0]]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgPreview((arr) => [...arr, reader.result]);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const clearImg = () => {
    setImg([]);
    setImgPreview([]);
  };

  return (
    <div className="ratingFormModal">
      <div className="modal">
        <div
          className="modalOverlay"
          onClick={() => {
            setModal(false);
          }}
        ></div>
        <div className="modalBody">
          <div className="title">{name}</div>
          <div className="ratingStar">
            <p>Đánh giá</p>
            <ReactStars
              count={5}
              size={50}
              color="#ebebeb"
              activeColor="#ee4d2d"
              classNames="star"
              onChange={(e) => setStar(e)}
            />
          </div>
          <textarea
            type="textarea"
            placeholder="Để lại lời đánh giá tại đây"
            className="comment"
          />
          <div className="ratingImage">
            <span>Hình ảnh feedback cho sản phẩm</span>
            <input
              type="file"
              accept="image/*"
              id="addButton"
              onChange={imgChoosen}
            />
            <div className="inner">
              {imgPreview.map((data, index) => (
                <figure className="images" key={index}>
                  <img src={data} alt="preview" />
                </figure>
              ))}
              {img.length < 5 && (
                <figure className="images imageAdd">
                  <label htmlFor="addButton">+</label>
                </figure>
              )}
            </div>
            <div className="clearImg" onClick={() => clearImg()}>
              xóa
            </div>
          </div>
          <div className="submit">gửi</div>
        </div>
      </div>
    </div>
  );
}

export default RatingFormModal;
