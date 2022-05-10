import Datatable from "../components/datatable/Datatable";
import { useQuery } from "react-query";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Full Name",
    minWidth: 200,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.image} alt="avatar" />
    //       <div className="cellText">{params.row.title}</div>
    //     </div>
    //   );
    // },
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 150,
  //   renderCell: (params) => {
  //     const { rate } = params.row;
  //     let status = "";
  //     if (rate >= 4) {
  //       status = "active";
  //     } else if (rate >= 3) {
  //       status = "pending";
  //     } else if (rate >= 0) {
  //       status = "passive";
  //     }

  //     return <div className={`cellWithStatus ${status}`}>{rate}</div>;
  //   },
  // },
];

const RQusers = ({ title }) => {
  const { isLoading, data, isError, error } = useQuery(
    "users",
    () => {
      console.log("Fetching Users");
      return axios.get("https://fakestoreapi.com/users");
    },
    {
      staleTime: 10 * 60 * 1000,
    }
  );

  if (isLoading) {
    return <Datatable status={"isLoading"} />;
  }
  if (isError) {
    return <Datatable status={"isError"} error={error.message} />;
  }

  let rows = [];

  data?.data.map((item) => {
    return rows.push({
      id: item.id,
      fullName: `${item.name.firstname.toUpperCase()} ${item.name.lastname.toUpperCase()}`,
      address: `${item.address.city.toUpperCase()}, ${item.address.street}, (${
        item.address.number
      })`,
      phone: item.phone,
      email: item.email,
    });
  });

  return (
    <>
      <Datatable
        title={title}
        columns={columns}
        rows={rows}
        status={"success"}
      />
    </>
  );
};

export default RQusers;
