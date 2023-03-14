import React from "react";
import "./QuantityCart.scss";

export default function QuantityCart({
  borderR = 0,
  limit = 99999,
  setNumber,
  setTotal,
  number,
  price,
  setTotalMoney,
  totalMoney,
}) {
  const handleChange = (isUp) => {
    if (isUp && number < limit) {
      setNumber(number + 1);
      setTotal((number + 1) * price);
      setTotalMoney(totalMoney + price);
    } else if (!isUp && number > 0) {
      setNumber(number - 1);
      setTotal((number - 1) * price);
      setTotalMoney(totalMoney - price);
    }
  };

  return (
    <div className="quantityCart">
      <div className="counter" style={{ borderRadius: borderR + "px" }}>
        <span onClick={() => handleChange(false)} className="down">
          -
        </span>
        <span className="number">{number}</span>
        <span onClick={() => handleChange(true)} className="up">
          +
        </span>
      </div>
    </div>
  );
}
