import "./Category.scss";
import { CategoryGrid } from "../../../global/CategoryGrid/CategoryGrid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Category = (data) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, 
          // right: "0",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          border: "none",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          lineHeight: "1",
          zIndex: "5",
          transition: "all 0.2s linear",
        }}
        onClick={onClick}

      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, 
          // left: "0",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          border: "none",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          lineHeight: "1",
          zIndex: "5",
          transition: "all 0.2s linear",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 4,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { title, items } = data;
  return (
    <div className="categorySection">
      <div className="container">
        <div className="wrapper">
          <div className="title">{title}</div>
          <div className="items">
            <Slider {...settings}>
              {items.map((datas, index) => (
                <CategoryGrid data={datas} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
