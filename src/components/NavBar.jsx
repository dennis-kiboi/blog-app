import { NavLink } from "react-router-dom";
import darkModeIcon from "../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz24.svg";
import lightModeIcon from "../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz24.svg";

const NavBar = ({theme}) => {
  return (
    <header>
      <p className="logo">BLOG</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div><img src={theme === "light" ? darkModeIcon : lightModeIcon} alt="" /></div>
    </header>
  );
};
export default NavBar;
