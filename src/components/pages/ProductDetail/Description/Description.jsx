import "./Description.scss";
import Describes from "./Describes/Describes";
import Detail from "./Detail/Detail";

function Description({ describe, detail }) {
  return (
    <div className="description">
      <div className="container">
        <div className="wrapper">
          <h2 className="descriptionTitle">CHI TIẾT SẢN PHẨM</h2>
          <div className="detailOutter">
            {detail.map((data, index) => (
              <Detail data={data} key={index} />
            ))}
          </div>
          <h2 className="descriptionTitle">MÔ TẢ SẢN PHẨM</h2>
          <div className="describeOutter">
            {describe.map((data, index) => (
              <Describes key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
