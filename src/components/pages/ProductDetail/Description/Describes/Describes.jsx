import "./Describes.scss";

function Describes({ data }) {
  return (
    <>
      <div className="describe">
        <i className="describeIcon fa-solid fa-snowflake"></i>
        <h3 className="describeText">{data}</h3>
      </div>
    </>
  );
}

export default Describes;
