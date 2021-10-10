import React from "react";
import styles from "./menu_item.module.css";

const MenuItem = ({ menu, selectMenu }) => (
  <li className={styles.menu} onClick={() => selectMenu(menu)}>
    <img src={`/images/icon_${menu.image}.svg`} alt={menu.title} />
    <span>{menu.title}</span>
  </li>
);

export default MenuItem;
