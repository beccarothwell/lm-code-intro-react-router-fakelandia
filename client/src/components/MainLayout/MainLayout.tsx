import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer.tsx/Footer";

const MainLayout = () => (
  <>
    <Header />
    <main className="p-6" style={{ flex: "1" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);
export default MainLayout;
