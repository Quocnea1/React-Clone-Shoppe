import "./LoggedIn.scss";
import { dataLoginUser } from "../../../../utils/dataConfig";
import { useNavigate } from "react-router-dom";

function LoggedIn() {
  const { userName, image } = dataLoginUser;
  const navigate = useNavigate();
  
  return (
    <li className="header__nav__item header__nav-user">
      <img src={image} alt="Avatar" className="header__nav-user-img" />
      <span className="header__nav-user-name">{userName}</span>

      <ul className="header__nav-user-menu">
        <li className="header__nav-user-item">
          <span onClick={() => navigate('/customer')}>Tài khoản của tôi</span>
        </li>
        <li className="header__nav-user-item">
          <span onClick={() => navigate("/login")}>Đăng xuất</span>
        </li>
      </ul>
    </li>
  );
}

export default LoggedIn;
