import { NavLink } from "react-router-dom";
import { ReactComponent as DarkModeIcon } from "../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as LightModeIcon } from "../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz24.svg";

const NavBar = ({ theme, updateTheme }) => {
  const handleClick = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };

  const themeIcon = theme === "light" ? <DarkModeIcon style={{fill: "#212121"}}/> : <LightModeIcon style={{fill: "#fff"}} />

  return (
    <header>
      <p className="logo">BLOG</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div onClick={handleClick}>
        {themeIcon}
      </div>
    </header>
  );
};
export default NavBar;
