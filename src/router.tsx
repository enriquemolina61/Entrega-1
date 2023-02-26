import { Routes, Route } from "react-router-dom";
import { RoutesPath } from "./types/routes";

import Login from "./pages/Login";

import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import UserUpdate from "./pages/UserUpdate";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutesPath.LOGIN} element={<Login />} />
      <Route path={RoutesPath.USER} element={<UserPage />} />
      <Route path={RoutesPath.REGISTER} element={<RegisterPage />} />
      <Route path={RoutesPath.UPDATEUSER} element={<UserUpdate />} />
    </Routes>
  );
};
export default Router;
