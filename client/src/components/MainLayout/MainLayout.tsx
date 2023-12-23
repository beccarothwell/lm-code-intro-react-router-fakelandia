import "./MainLayout.scss";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer.tsx/Footer";

const MainLayout = () => (
  <>
    <Header />
    <main className="page__content">
      <Outlet />
    </main>
    <Footer />
  </>
);
export default MainLayout;
