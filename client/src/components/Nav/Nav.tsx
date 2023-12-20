import NavList from "../NavList/NavList";
import { MAIN_NAV_LINKS } from "../constants";

const Nav: React.FC = () => (
  <nav>
    <NavList navList={MAIN_NAV_LINKS} />
  </nav>
);

export default Nav;
