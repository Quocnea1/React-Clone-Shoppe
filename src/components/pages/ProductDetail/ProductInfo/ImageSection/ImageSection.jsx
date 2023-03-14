import "./ImageSection.scss";
import React, { useState } from "react";
import ImageModal from "./ImageModal/ImageModal";

function ImageSection({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setModal(true);
  };

  return (
    <div className="imageSection">
      <figure className="thumbnail" onClick={() => setModal(true)}>
        <img src={images[currentIndex]} alt="thumbnail" />
      </figure>
      <div className="imageNav">
        {images.map((data, index) => (
          <figure
            className="image"
            key={index}
            onClick={() => handleImageClick(index)}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            <img src={data} alt="product" />
          </figure>
        ))}
      </div>
      {modal && (
        <ImageModal
          setModal={setModal}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          images={images}
          title={title}
        />
      )}
    </div>
  );
}

export default ImageSection;
