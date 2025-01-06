import { Routes, Route } from "react-router";
import Login from "../Pages/Login";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Router;
