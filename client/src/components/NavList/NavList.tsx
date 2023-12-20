import NavItem from "../NavItem/NavItem";
import { NavItemLink } from "../constants";

interface NavListProps {
  navList: NavItemLink[];
}

const NavList: React.FC<NavListProps> = ({ navList }) => (
  <ul>
    {navList.map((item) => (
      <NavItem navItem={item} />
    ))}
  </ul>
);

export default NavList;
