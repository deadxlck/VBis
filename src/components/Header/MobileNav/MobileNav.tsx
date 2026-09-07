import { slide as Menu } from "react-burger-menu";
import css from "./MobileNav.module.css";

import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <Menu
      right
      className={css["bm-menu"]}
      width={32}
      customBurgerIcon={
        <img src="../../../assets/burgerIconSVG.svg" className={css["icon"]} />
      }
    >
      <Link className={css["bm-item"]} to="/">
        Home
      </Link>
      <Link className={css["bm-item"]} to="/about">
        About
      </Link>
      <Link className={css["bm-item"]} to="/contact">
        Contact
      </Link>
    </Menu>
  );
}
