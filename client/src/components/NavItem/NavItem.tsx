import "./NavItem.scss";

import { NavLink } from "react-router-dom";

export interface NavItemProps {
  text: string;
  slug: string;
}

export const NavItem: React.FC<NavItemProps> = ({ text, slug }) => (
  <li className={"nav__item"}>
    <NavLink className={"nav__link"} to={`/${slug}`}>
      {text}
    </NavLink>
  </li>
);
