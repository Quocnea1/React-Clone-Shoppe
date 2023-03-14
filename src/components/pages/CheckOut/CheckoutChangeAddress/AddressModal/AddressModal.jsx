import React from "react";
import "./AddressModal.scss";
const AddressModal = (props) => {
  const { onToggle } = props;

  return (
    <div className="address-modal">
      <div className="modal">
        <div className="modalOverlay" onClick={() => onToggle(false)}></div>
        <div className="modalBody">
          <div className="modalHeader">
            <div className="form-group row border-customer">
              <div className="col-md-8">
                <label className="col-sm-4 col-form-label text-sm-right">
                  Họ và tên
                </label>
                <label className="col-sm-8 font-weight-bold">
                  Nguyễn Văn A
                  <span className="badge badge-info ml-4">Mặc định</span>
                </label>
                <label className="col-sm-4 col-form-label text-sm-right">
                  Số điện thoại
                </label>
                <label className="col-sm-8 font-weight-bold">0123123123</label>
                <label className="col-sm-4 col-form-label text-sm-right">
                  Địa chỉ
                </label>
                <label className="col-sm-8 font-weight-bold">
                  TPHCM, Viet Nam
                </label>
              </div>
              <div className="col-md-4">
                <div className="text-center text-md-right">
                  <span className="text-underline text-secondary">Sửa</span>
                  <span className="text-underline ml-3 text-secondary">
                    Xoá
                  </span>
                </div>
                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
