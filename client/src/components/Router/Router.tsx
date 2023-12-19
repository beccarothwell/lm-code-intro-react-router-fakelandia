import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Confession from "../Confession/Confession";
import Misdemeanour from "../Misdemeanour/Misdemeanour";
import NotFound from "../NotFound/NotFound";

const Router = () => (
  <Routes>
    <Route path={"/"} element={<MainLayout />}>
      <Route index element={<Home />}></Route>
      <Route path={"confession"} element={<Confession />} />
      <Route path={"misdemeanour"} element={<Misdemeanour />} />
      <Route path={"*"} element={<NotFound />} />
    </Route>
  </Routes>
);
export default Router;
