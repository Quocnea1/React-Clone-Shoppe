import "./OrderPostItem.scss";
import OrderPostItemLine from "./OrderPostItemLine/OrderPostItemLine";
import OrderSearchBar from "./OrderSearchBar/OrderSearchBar";

function OrderPostItem({ data }) {
  return (
    <div className="orderPostItem">
      <div className="container">
        <div className="wrapper">
          <OrderSearchBar />
          {/* OrderPostItemLine */}
          {data.map((_data, index) => (
            <OrderPostItemLine data={_data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderPostItem;
