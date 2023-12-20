import { NavItemLink } from "../constants";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  navItem: NavItemLink;
}

const NavItem: React.FC<NavItemProps> = ({ navItem }) => (
  <li>
    <NavLink to={`/${navItem.slug}`}>{navItem.text}</NavLink>
  </li>
);

export default NavItem;
