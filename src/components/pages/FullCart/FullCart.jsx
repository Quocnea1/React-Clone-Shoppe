import "./FullCart.scss";
import "../../global/Layout/Layout";
import CartItem from "./CartItem/CartItem";
import "../../global/Layout/Layout";
import { Layout } from "../../global/Layout/Layout";
import { fullCartData } from "../../../utils/dataConfig";
import React, { useEffect, useState } from "react";
import { TextToCurrency } from '../../global/ProcessText/ProcessText'

function FullCart() {
  const data = fullCartData.fullCartData;
  const [totalMoney, setTotalMoney] = useState(fullCartData?.total);

  const [checkedAll, setCheckedAll] = useState(false);

  const newState = {};
  data?.forEach(function (data, index) {
    newState[data.id] = false;
  });

  const [checked, setChecked] = useState(newState);

  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  useEffect(() => {
    document.title = "Giỏ hàng";
    window.scrollTo(0, 0);
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return (
    <Layout>
      <div className="container full-cart-table mt-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="label">
                <th className="border-0 text-secondary full-cart-col-product">
                  Sản phẩm
                </th>
                <th className="border-0"></th>
                <th className="border-0 text-center text-secondary">Đơn giá</th>
                <th className="border-0 text-center text-secondary">
                  Số lượng
                </th>
                <th className="border-0 text-center text-secondary">
                  Thành tiền
                </th>
                <th className="border-0 text-center text-secondary">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data, index) => (
                <CartItem
                  data={data}
                  key={Number(index)}
                  setTotalMoney={setTotalMoney}
                  totalMoney={totalMoney}
                  setChecked={setChecked}
                  checked={checked}
                />
              ))}
            </tbody>
            <tfoot className="tfoot">
              <tr>
                <td className="border-0">
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={(event) => selectAll(event.target.checked)}
                    checked={checkedAll}
                  />
                  <label className="ml-3">
                    Chọn tất cả ({fullCartData.fullCartData.length})
                  </label>
                </td>
                <td
                  colSpan="2"
                  className="border-0 font-weight-bold text-right"
                >
                  Tổng số tiền:
                </td>
                <td colSpan="3" className="border-0 h2 total-money">
                  <span><TextToCurrency number={totalMoney} /></span>
                  <button
                    type="button"
                    className="text-white btn btn-order ml-3"
                  >
                    Đặt hàng
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default FullCart;
