import "./Customer.scss";
import "../../global/Layout/Layout";
import OrderPostItem from "./OrderPostItem/OrderPostItem";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import "../../global/Layout/Layout";
import { Layout } from "../../global/Layout/Layout";
import { peInfoPostItemData } from "../../../utils/dataConfig";
import React, { useEffect } from "react";
import MyAddress from "./MyAddress/MyAddress";
import { listAddressData } from "../../../utils/dataConfig";


function Customer() {
  const { item } = peInfoPostItemData;

  useEffect(() => {
    document.title = "Thông tin người dùng";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="customer">
      <Layout>
        <CustomerInfo />
        <MyAddress data={listAddressData} />
        <OrderPostItem data={item} />
      </Layout>
    </div>
  );
}

export default Customer;
