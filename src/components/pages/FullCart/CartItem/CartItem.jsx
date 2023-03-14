import "./../FullCart.scss";
import QuantityCart from "../QuantityCart/QuantityCart";
import { TextToCurrency } from "../../../global/ProcessText/ProcessText";
import React, { useState } from "react";

function CheckOutOrder({
  data,
  setTotalMoney,
  totalMoney,
  setChecked,
  checked,
}) {
  const [number, setNumber] = useState(data?.amount);
  const [total, setTotal] = useState(data?.price * number);

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  return (
    <tr className="cartItem">
      <td>
        <input
          type="checkbox"
          name={"checkbox[" + data?.id + "]"}
          className="mr-md-3 checkbox"
          onChange={() => toggleCheck(data?.id)}
          checked={checked[data?.id]}
        />
        <img className="img-thumbnail" src={data?.img} alt="" />
        <div className="d-inline-block align-top">
          <span className="ml-md-3 d-md-inline-block d-block">
            {data?.name}
          </span>
          <img
            src="https://cf.shopee.vn/file/78824b3edddb74e4669260ed8e8f471c"
            alt=""
            className="ml-md-3 d-block img-ads mt-3"
          />
        </div>
      </td>
      <td className="text-secondary align-middle">Phân loại {data?.type}</td>
      <td className="align-middle text-center">
        <TextToCurrency number={data?.price} />
      </td>
      <td className="font-weight-bold align-middle text-center">
        <QuantityCart
          number={number}
          setNumber={setNumber}
          setTotal={setTotal}
          price={data?.price}
          setTotalMoney={setTotalMoney}
          totalMoney={totalMoney}
        />
      </td>
      <td className="align-middle text-center">
        <TextToCurrency number={total} />
      </td>
      <td className="font-weight-bold align-middle text-center">
        <span className="text-danger">Xoá</span>
      </td>
    </tr>
  );
}

export default CheckOutOrder;
