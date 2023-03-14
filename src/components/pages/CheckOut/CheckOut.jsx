import React, { useEffect } from "react";
import "./CheckOut.scss";
import CheckoutAddress from "./CheckoutAddress/CheckoutAddress";
import CheckoutChangeAddress from "./CheckoutChangeAddress/CheckoutChangeAddress";
import { Layout } from "../../global/Layout/Layout";
import CheckOutOrder from "./CheckOutOrder/CheckOutOrder";
import { checkOutData } from "../../../utils/dataConfig";
import { listAddressData } from "../../../utils/dataConfig";
import { TextToCurrency } from '../../global/ProcessText/ProcessText'

function CheckOut() {
  const { listAddress } = listAddressData;
  const data = checkOutData.checkOutData;

  const calculateTotal = () => {
    let total = 0;

    data.forEach((item, i) => {
      total += (item.price * item.amount)
    })

    return total;
  }

  useEffect(() => {
    document.title = "Thanh toán";
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="checkout">
      <Layout>
        <CheckoutAddress />
        <CheckoutChangeAddress data={listAddress} />
        <div className="container checkout-table mt-5">
          <table className="table">
            <tbody>
              <tr>
                <th className="border-0">Sản phẩm</th>
                <th className="border-0 text-center text-secondary">Đơn giá</th>
                <th className="border-0 text-center text-secondary">
                  Số lượng
                </th>
                <th className="border-0 text-center text-secondary">
                  Thành tiền
                </th>
              </tr>
              {data?.map((data, index) => (
                <CheckOutOrder data={data} key={Number(index)} />
              ))}
              <tr className="message">
                <td colSpan="4">
                  <label htmlFor="" className="font-weight-bold">
                    Lời nhắn:
                  </label>
                  <input
                    type="text"
                    className="form-control d-inline-block ml-5"
                    placeholder="Lưu ý người bán..."
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan="3"
                  className="border-0 font-weight-bold text-right"
                >
                  Tổng số tiền:
                </td>
                <td colSpan="3" className="border-0 text-center h2 total-money">
                  <TextToCurrency number={calculateTotal()} />
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="font-weight-bold text-right">
                  <button
                    type="button"
                    className="text-white btn btn-order mr-5"
                  >
                    Đặt hàng
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}

export default CheckOut;
