import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./users.scss";
import RQusers from "../../services/RQusers";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <RQusers title={"Add New Users"} />
      </div>
    </div>
  );
}

export default List;
