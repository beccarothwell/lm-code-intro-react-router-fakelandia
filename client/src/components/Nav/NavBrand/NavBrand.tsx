import "./NavBrand.scss";
import { NavLink } from "react-router-dom";

interface NavBrandProps {
  text: string;
  slug?: string;
}

const NavBrand: React.FC<NavBrandProps> = ({ text, slug }) => {
  const splitText = text.split(" ");

  return slug !== undefined ? (
    <NavLink className={"nav__brand nav__brand--stacked"} to={`/${slug}`}>
      {splitText.map((word, i) => (
        <span key={i}>{word}</span>
      ))}
    </NavLink>
  ) : (
    <div className={"nav__brand nav__brand--stacked"}>
      {splitText.map((word) => (
        <span>{word}</span>
      ))}
    </div>
  );
};

export default NavBrand;
