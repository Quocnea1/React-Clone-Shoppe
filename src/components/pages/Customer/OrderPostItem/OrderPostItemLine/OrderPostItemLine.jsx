import "./OrderPostItemLine.scss";
import {
  ProcessLongText,
  TextToCurrency,
} from "../../../../global/ProcessText/ProcessText";
import React, { useState } from 'react';
import RatingFormModal from "./RatingFormModal/RatingFormModal";


function OrderPostItemLine({ data }) {

  const [modal, setModal] = useState(false)

  return (
    <div className="orderPostItemLine">
      <img src={data.image} alt="San pham cua ban" className="orderItemImg" />
      <h3 className="orderItemTitle">
        {<ProcessLongText string={data.title} limit={30} />}
      </h3>
      <h3 className="orderItemType">Phân loại: {data.type}</h3>
      <h3 className="orderItemQuantity">x{data.quantity}</h3>
      <h3 className="orderItemPrice">
        {<TextToCurrency number={data.price} />}
      </h3>
      <h3 className="orderItemRating" onClick={() => setModal(true)}>{data.ratingText}</h3>
      {modal && <RatingFormModal name={data.title} setModal={setModal} />}
    </div>
  );
}

export default OrderPostItemLine;
