import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <>
      <Login />
      <Logout />
      <Outlet />
      <Products />
    </>
  );
}

export default App;
