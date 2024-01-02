import "./NavList.scss";
import { NavItem, NavItemProps } from "../NavItem/NavItem";

interface NavListProps {
  navList: NavItemProps[];
}

const NavList: React.FC<NavListProps> = ({ navList }) => (
  <ul className={"nav__list"}>
    {navList.map(({ text, slug }) => (
      <NavItem key={slug} text={text} slug={slug} />
    ))}
  </ul>
);

export default NavList;
