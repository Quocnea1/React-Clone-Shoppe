import {
  ProcessLongText,
} from "../ProcessText/ProcessText";
import "./CategoryGrid.scss";
import { useNavigate } from "react-router-dom";

export const CategoryGrid = ({ data }) => {
  const navigate = useNavigate()
  const handleClick = (event) => {
    navigate("/collection")
  }
  return (
    <div className="categoryFrame" onClick={() => handleClick()}>
      <figure className="categoryImg">
        <img src={data.img} alt={data.title}></img>
      </figure>
      <div className="categoryInfo">
        <div className="categoryTitle">
          <ProcessLongText string={data.title} />
        </div>
      </div>
    </div>
  );
};
