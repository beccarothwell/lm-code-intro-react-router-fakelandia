import { NavLink } from "react-router-dom";

interface NavBrandProps {
  text: string;
  slug?: string;
}

const NavBrand: React.FC<NavBrandProps> = ({ text, slug }) =>
  slug !== undefined ? (
    <NavLink className={"brand"} to={`/${slug}`}>
      {text}
    </NavLink>
  ) : (
    <div className={"brand"}>{text}</div>
  );

export default NavBrand;
