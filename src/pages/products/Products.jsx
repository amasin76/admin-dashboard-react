import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./products.scss";
import RQproducts from "../../services/RQproducts";

function Products() {
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <RQproducts title={"Add New Products"} />
      </div>
    </div>
  );
}

export default Products;
