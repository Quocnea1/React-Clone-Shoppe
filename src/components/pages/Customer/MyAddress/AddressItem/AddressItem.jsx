import "./AddressItem.scss";
function AddressItem({ data, isDefault, setDefaultAddressIndex, index }) {
  return (
    <>
      <div className="form-group row border-customer">
        <div className="col-md-6 p-0">
          <label className="col-sm-4 col-form-label text-sm-right">
            Họ và tên
          </label>
          <label className="col-sm-8 font-weight-bold">
            {data?.fullname}
            {isDefault && (
              <span className="badge badge-info ml-4">Mặc định</span>
            )}
          </label>
          <label className="col-sm-4 col-form-label text-sm-right">
            Số điện thoại
          </label>
          <label className="col-sm-8 font-weight-bold">
            {data?.phone_number}
          </label>
          <label className="col-sm-4 col-form-label text-sm-right">
            Địa chỉ
          </label>
          <label className="col-sm-8 font-weight-bold">{data?.address}</label>
        </div>
        <div className="col-md-4 p-0">
          <div className="text-center text-md-right">
            <span className="text-underline text-secondary my-pointer">
              Sửa
            </span>
            {!isDefault && (
              <span className="text-underline ml-3 text-secondary my-pointer">
                Xoá
              </span>
            )}
          </div>
          <div className="text-center my-pointer">
            <span
              className={
                isDefault
                  ? "d-inline-block float-none float-md-right border text-center mt-4 pt-1 pb-1 pl-4 pr-4 text-secondary"
                  : "float-right d-inline-block border text-center mt-4 pt-1 pb-1 pl-4 pr-4"
              }
              onClick={() => {
                setDefaultAddressIndex(index);
              }}
            >
              Thiết lập mặc định
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddressItem;
