import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import /*userColumns, userRows*/ "../../services/datatablesource";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Datatable = ({ title, columns, rows, status, error }) => {
  console.log(status);
  console.log(error);
  const actionColumns = {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/1" style={{ textDecoration: "none" }}>
            <div className="viewButton">
              <VisibilityIcon className="icon" /> View
            </div>
          </Link>
          <div className="deleteButton">
            <DeleteIcon className="icon" /> Delete
          </div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      <div className="top container">
        <h2 className="title">{title ? title : "Add New User"}</h2>
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          <div className="newButton">
            <AddIcon className="icon" />
            <span>NEW</span>
          </div>
        </Link>
      </div>
      <div className="tableContainer container">
        {status === "isLoading" && <>Wait...</>}
        {status === "isError" && <>Error: {error}</>}
        {status === "success" && (
          <DataGrid
            className="datagrid"
            rows={rows}
            columns={columns.concat(actionColumns)}
            pageSize={6}
            rowsPerPageOptions={[6]}
            checkboxSelection
            autoHeight={true}
          />
        )}
      </div>
    </div>
  );
};

export default Datatable;
