import "./CategoryList.scss";

export const CategoryList = ({
  data,
  index,
  setCurrentChooseIndex,
  className,
}) => {
  return (
    <li className={className} onClick={() => setCurrentChooseIndex(index)}>
      <a href="/" className="category-item__link">
        {data}
      </a>
    </li>
  );
};
