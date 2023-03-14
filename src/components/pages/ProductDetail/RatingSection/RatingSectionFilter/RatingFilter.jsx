import "./RatingFilter.scss";
function RatingFilter({ data, index, rateState, onChangeFilter }) {
  return (
    <div
      className={`btn-filter ${rateState === index ? "active" : "not-active"}`}
      onClick={() => onChangeFilter(index)}
    >
      <div className={"data"}>{data}</div>
    </div>
  );
}

export default RatingFilter;
