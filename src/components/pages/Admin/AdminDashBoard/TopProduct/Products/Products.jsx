import "./Products.scss";
import {
  ProcessLongText,
  TextToCurrency,
} from "../../../../../global/ProcessText/ProcessText";

export default function Product({ data }) {
  return (
    <div className="productLine">
      <img src={data.img} alt="San pham cua ban" className="productItemImg" />
      <h3 className="productItemTitle">
        {<ProcessLongText string={data.name} limit={30} />}
        <br />
        <p>
          {data.color} - {data.orders} order(s)
        </p>
      </h3>
      {Object.entries(data.columns)?.map(([key, val], index) => {
        let result;
        if (key === "Pricing" || key === "Today") {
          if (key === "Today")
            result = (
              <TextToCurrency
                number={data.columns.Pricing * data.columns.Sold}
              />
            );
          else result = <TextToCurrency number={val} />;
        } else {
          result = val;
        }
        return (
          <div className="productItemOthers" key={index}>
            <h3>{key}</h3>
            <p>{result}</p>
          </div>
        );
      })}
    </div>
  );
}
