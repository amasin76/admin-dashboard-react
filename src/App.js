import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Products from "./pages/products/Products";
import { HashRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./services/formSource";
import "./style/dark.scss";
import "./style/black.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode === 1 ? "app dark" : darkMode === 2 ? "app black" : "app"
      }
    >
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<Products />} />
                <Route path=":productsId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
              </Route>
            </Route>
          </Routes>
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </HashRouter>
    </div>
  );
}

export default App;
