import "./about.scss";

export const About = ({ data }) => {
  console.log(data)
  return (
    <li className="footer-items-shopee">
      <a href="/">{data}</a>
    </li>
  );
};
