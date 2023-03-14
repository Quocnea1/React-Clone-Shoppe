import React from "react";
import "./CartBanner.scss";

export default function CartBanner() {
  return (
    <div className="cartBanner">
      <div className="container">
        <div className="wrapper">
          <div className="cartInfo">
            <div className="textSection">Giỏ hàng</div>
            <div className="searchSection">
              <input className="searchBar" type="text" placeholder="Tìm kiếm đơn hàng" />
              <button className="searchButton">
                <i className="fa fa-search searchButtonIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
