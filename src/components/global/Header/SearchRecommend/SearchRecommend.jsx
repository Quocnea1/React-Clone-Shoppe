import "./SearchRecommend.scss";

export const SearchRecommend = ({ data }) => {
  return (
    <a href="/" className="header__search__recom-item">
      {data}
    </a>
  );
};
