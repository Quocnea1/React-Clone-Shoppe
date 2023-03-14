import "./MyAddress.scss";
import React, { useState, useEffect, memo } from "react";
import AddressItem from "./AddressItem/AddressItem";
import AddressAdd from "./AddressAdd/AddressAdd";

const MyAddress = ({ data }) => {
  const { listAddress } = data;
  const [defaultAddressIndex, setDefaultAddressIndex] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    for (let i = 0; i < listAddress.length; i++) {
      if (listAddress[i].default) setDefaultAddressIndex(i);
    }
  }, [listAddress]);

  return (
    <div className="MyAddress">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1 className="namehead">Địa Chỉ Của Tôi</h1>
            <h2 className="namehead2" onClick={() => setModal(true)}>
              <span className="btn1 btn btn--primary">+ Thêm Địa Chỉ Mới</span>
            </h2>
          </div>
          <div className="addressItem">
            {listAddress?.map((data, index) => (
              <AddressItem
                data={data}
                key={index}
                isDefault={index === defaultAddressIndex ? true : false}
                setDefaultAddressIndex={setDefaultAddressIndex}
                index={index}
              />
            ))}
          </div>
          {modal && <AddressAdd setModal={setModal} />}
        </div>
      </div>
    </div>
  );
};

export default memo(MyAddress);
