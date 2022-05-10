import Datatable from "../components/datatable/Datatable";
import { useQuery } from "react-query";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    minWidth: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          <div className="cellText">{params.row.title}</div>
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },

  {
    field: "count",
    headerName: "Count",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      const { rate } = params.row;
      let status = "";
      if (rate >= 4) {
        status = "active";
      } else if (rate >= 3) {
        status = "pending";
      } else if (rate >= 0) {
        status = "passive";
      }

      return <div className={`cellWithStatus ${status}`}>{rate}</div>;
    },
  },
];

const RQproducts = ({ title }) => {
  const { isLoading, data, isError, error } = useQuery(
    "products",
    () => {
      console.log("Fired");
      return axios.get("https://fakestoreapi.com/products?limit=20");
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
      title: item.title,
      image: item.image,
      price: item.price,
      count: item.rating.count,
      rate: item.rating.rate,
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

export default RQproducts;
