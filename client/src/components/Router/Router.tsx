import { Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../HomePage/HomePage";
import ConfessionPage from "../ConfessionPage/ConfessionPage";
import MisdemeanourPage from "../MisdemeanourPage/MisdemeanourPage";
import NotFound from "../NotFound/NotFound";

const Router = () => (
  <Routes>
    <Route path={"/"} element={<MainLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path={"confession"} element={<ConfessionPage />} />
      <Route path={"misdemeanour"} element={<MisdemeanourPage />} />
      <Route path={"*"} element={<NotFound />} />
    </Route>
  </Routes>
);
export default Router;
