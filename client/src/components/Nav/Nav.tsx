import "./Nav.scss";

import NavList from "../NavList/NavList";
import NavBrand from "../NavBrand/NavBrand";
import { NavItemProps } from "../NavItem/NavItem";

const MAIN_NAV_LINKS: Array<NavItemProps> = [
  { text: "Home", slug: "" },
  { text: "Misdemeanour", slug: "misdemeanour" },
  { text: "Confess To Us", slug: "confession" },
];

const Nav: React.FC = () => (
  <nav className="nav">
    <NavBrand text={"Fakelandia Justice Deptartment"} slug={""} />
    <NavList navList={MAIN_NAV_LINKS} />
  </nav>
);

export default Nav;
