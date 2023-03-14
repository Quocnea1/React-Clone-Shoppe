import "./MyAddress.scss";
import React, { useContext, useState, useEffect, memo } from "react";

const MyAddress = () => {
    const [visibleSubMenu1, setVisibleSubMenu1] = useState(false);
    const [visibleSubMenu2, setVisibleSubMenu2] = useState(false);
    const [visibleSubMenu3, setVisibleSubMenu3] = useState(false);

    const onToogleSubMenu1 = () => {
        setVisibleSubMenu1(!visibleSubMenu1);
        setVisibleSubMenu2(false);
        setVisibleSubMenu3(false);
    };

    const onToogleSubMenu2 = () => {
        setVisibleSubMenu1(false);
        setVisibleSubMenu2(!visibleSubMenu2);
        setVisibleSubMenu3(false);
    };

    const onToogleSubMenu3 = () => {
        setVisibleSubMenu1(false);
        setVisibleSubMenu2(false);
        setVisibleSubMenu3(!visibleSubMenu3);
    };
    return (
        <div className="MyAddress">
            <div className="container">
                <div className="wrapper">
                    <h1 className="namehead">
                        Địa Chỉ Của Tôi
                    </h1>
                    <h2 className="namehead2">
                        <a className="btn" href=".">
                            <span className="btn1 btn btn--primary"> + Thêm Địa Chỉ Mới </span>
                        </a>
                    </h2>
                </div>

                <div className="form-group row border-customer">
                    <div class="col-md-8">
                        <label className="col-sm-4 col-form-label text-sm-right">Họ và tên</label>
                        <label className="col-sm-8 font-weight-bold">Nguyễn Văn A
                            {visibleSubMenu1 == true && (
                                <span className="badge badge-info ml-4">Mặc định</span>
                            )}
                        </label>
                        <label className="col-sm-4 col-form-label text-sm-right">Số điện thoại</label>
                        <label className="col-sm-8 font-weight-bold">0123123123</label>
                        <label className="col-sm-4 col-form-label text-sm-right">Địa chỉ</label>
                        <label className="col-sm-8 font-weight-bold">TPHCM, Viet Nam</label>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center text-md-right">
                            <span className="text-underline text-secondary">Sửa</span>
                            <span className="text-underline ml-3 text-secondary">Xoá</span>
                        </div>
                        <div class="text-center">
                            <span className={`${!visibleSubMenu1 ? "d-inline-block float-none float-md-right border text-center mt-4 pt-1 pb-1 pl-4 pr-4 text-secondary" : "float-right d-inline-block border text-center mt-4 pt-1 pb-1 pl-4 pr-4"}`} onClick={(e) => {
                                onToogleSubMenu1();
                            }}>Thiết lập mặc định</span>
                        </div>
                    </div>
                </div>

                <div className="form-group row border-customer">
                    <div class="col-md-8">
                        <label className="col-sm-4 col-form-label text-sm-right">Họ và tên</label>
                        <label className="col-sm-8 font-weight-bold">Nguyễn Văn A
                            {visibleSubMenu2 == true && (
                                <span className="badge badge-info ml-4">Mặc định</span>
                            )}
                        </label>
                        <label className="col-sm-4 col-form-label text-sm-right">Số điện thoại</label>
                        <label className="col-sm-8 font-weight-bold">0123123123</label>
                        <label className="col-sm-4 col-form-label text-sm-right">Địa chỉ</label>
                        <label className="col-sm-8 font-weight-bold">TPHCM, Viet Nam</label>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center text-md-right">
                            <span className="text-underline text-secondary">Sửa</span>
                            <span className="text-underline ml-3 text-secondary">Xoá</span>
                        </div>
                        <div class="text-center">
                            <span className={`${!visibleSubMenu2 ? "d-inline-block float-none float-md-right border text-center mt-4 pt-1 pb-1 pl-4 pr-4 text-secondary" : "float-right d-inline-block border text-center mt-4 pt-1 pb-1 pl-4 pr-4"}`} onClick={(e) => {
                                onToogleSubMenu2();
                            }}>Thiết lập mặc định</span>
                        </div>
                    </div>
                </div>

                <div className="form-group row border-customer">
                    <div class="col-md-8">
                        <label className="col-sm-4 col-form-label text-sm-right">Họ và tên</label>
                        <label className="col-sm-8 font-weight-bold">Nguyễn Văn A
                            {visibleSubMenu3 == true && (
                                <span className="badge badge-info ml-4">Mặc định</span>
                            )}
                        </label>
                        <label className="col-sm-4 col-form-label text-sm-right">Số điện thoại</label>
                        <label className="col-sm-8 font-weight-bold">0123123123</label>
                        <label className="col-sm-4 col-form-label text-sm-right">Địa chỉ</label>
                        <label className="col-sm-8 font-weight-bold">TPHCM, Viet Nam</label>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center text-md-right">
                            <span className="text-underline text-secondary">Sửa</span>
                            <span className="text-underline ml-3 text-secondary">Xoá</span>
                        </div>
                        <div class="text-center">
                            <span className={`${!visibleSubMenu3 ? "d-inline-block float-none float-md-right border text-center mt-4 pt-1 pb-1 pl-4 pr-4 text-secondary" : "float-right d-inline-block border text-center mt-4 pt-1 pb-1 pl-4 pr-4"}`} onClick={(e) => {
                                onToogleSubMenu3();
                            }}>Thiết lập mặc định</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(MyAddress);