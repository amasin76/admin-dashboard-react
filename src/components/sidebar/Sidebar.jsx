import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import StoreIcon from "@mui/icons-material/StoreOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NoteAltIcon from "@mui/icons-material/NoteAltOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">BioAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">MONITORING</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <FavoriteIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <NoteAltIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
}

export default Sidebar;
