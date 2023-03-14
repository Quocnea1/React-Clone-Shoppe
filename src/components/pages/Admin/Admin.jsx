import "./Admin.scss";
import AdminNavBar from "./AdminNavBar/AdminNavBar";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="admin">
      <AdminNavBar>
        <Outlet />
      </AdminNavBar>
    </div>
  );
}
