import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import EditIcon from "@mui/icons-material/Edit";
import "./single.scss";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <EditIcon className="icon" />
              Edit
            </div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img
                src="https://i.pinimg.com/originals/85/47/65/854765d4d1f32abf2dfe043cfc57cca3.jpg"
                alt="Erdin avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Bio Dev</h1>
                <div className="itemDetail">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">example@email.com</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+212 662-586932</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Tasnu St. 264 Yanil Watilo</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Morocco (MA)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title={"User transactions ( Last 6 months )"}
            />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Last Transactions</h2>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
