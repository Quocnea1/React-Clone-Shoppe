import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
