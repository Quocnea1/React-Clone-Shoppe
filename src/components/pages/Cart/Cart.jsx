import React from "react";
import CartBanner from "./CartBanner/CartBanner";
import { useEffect } from "react";
import { Layout } from "../../global/Layout/Layout";
import EmptyCart from "./EmptyCart/EmptyCart";

export default function Cart() {
  useEffect(() => {
    document.title = "Giỏ hàng";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <Layout>
        <CartBanner />
        <EmptyCart />
      </Layout>
    </div>
  );
}
