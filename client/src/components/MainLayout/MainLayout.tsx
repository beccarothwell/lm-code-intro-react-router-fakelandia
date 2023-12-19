import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <header />
    <main className="p-6" style={{ flex: "1" }}>
      <Outlet />
    </main>
    <footer />
  </>
);
export default MainLayout;
