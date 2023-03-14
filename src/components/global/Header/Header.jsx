import "./Header.scss";
import { headerData } from "../../../utils/dataConfig";
import { SearchRecommend } from "./SearchRecommend/SearchRecommend";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NotLoggedIn from "./NotLoggedIn/NotLoggedIn";
import LoggedIn from "./LoggedIn/LoggedIn";

export const Header = () => {
  const { ggPlay, appStore, qrCode, logoShopee } = headerData.images;
  const { searchRecommend } = headerData;
  const navigate = useNavigate();
  const [fixed, setFixed] = useState(false);
  const [login, setLogin] = useState(true);

  const handleClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    var body = document.body,
      html = document.documentElement;

    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    window.addEventListener("load", (e) => {
      if (window.pageYOffset <= 120) {
        setFixed(false);
      } else if (height > 1200) setFixed(true);
    });
    window.addEventListener("scroll", () => {
      if (window.pageYOffset <= 120) {
        setFixed(false);
      } else if (height > 1200) setFixed(true);
    });
  }, [fixed]);

  return (
    <div className={fixed ? "header fixed" : "header"}>
      <div className="container">
        <nav className="header__navbar">
          <ul className="header__nav__list">
            <li className="header__nav__item header__nav__item__has-qr header__nav__item--sparatest">
              Welcome to Shopee
              <div className="header__qr">
                <img src={qrCode} alt="QR Code" className="header__qr__img" />
                <div className="header__qr-apps">
                  <a href="/" className="header__qr__link">
                    <img
                      src={ggPlay}
                      alt="Googleplay"
                      className="header__qr-download-img"
                    />
                  </a>
                  <a href="/" className="header__qr__link">
                    <img
                      src={appStore}
                      alt="Appstore"
                      className="header__qr-download-img"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li className="header__nav__item">
              <span className="header__nav__title--nopoiter">Kết nối</span>
              <a href="/" className="header__navbar__icon__link">
                <i className=" header__navbar__ico fa-brands fa-facebook"></i>
              </a>
              <a href="/" className="header__navbar__icon__link">
                <i className=" header__navbar__ico fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <ul className="header__nav__list">
            <li className="header__nav__item">
              <a href="/" className="header__nav__item__link">
                <i className=" header__navbar__ico fa-solid fa-circle-question"></i>
                Hỗ trợ
              </a>
            </li>
            <li className="header__nav__item">
              <a href="/" className="header__nav__item__link">
                <i className="header__navbar__ico fa-solid fa-globe"></i>
                Tiếng Việt
                <i className="header__navbar__ico fa-solid fa-angle-down"></i>
              </a>
              <div className="header__language">
                <a href="/" className="header__language-item">
                  Tiếng Anh
                </a>
                <a href="/" className="header__language-item">
                  Tiếng Việt
                </a>
              </div>
            </li>
            {login ? <LoggedIn /> : <NotLoggedIn />}
          </ul>
        </nav>
        {/* Begin header nav search */}
        <div className="header-with-search">
          <div className="header__logo">
            <img
              src={logoShopee}
              alt="logo"
              className="header__logo-img"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="header__search">
            <div className="header__search-input-wrap">
              <input
                type="text"
                className="header__search-input"
                placeholder="Tìm kiếm sản phẩm"
              />
              <div className="header__search__recom">
                {searchRecommend.map((data, index) => (
                  <SearchRecommend data={data} key={index} />
                ))}
              </div>
            </div>
            <button className="header__search-btn">
              <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="header__cart">
            <div className="header__cart-wrap">
              <i
                className="header__cart-img fa-solid fa-cart-shopping"
                onClick={() => handleClick()}
              ></i>
            </div>
          </div>
        </div>
        {/* End header nav search */}
      </div>
    </div>
  );
};
