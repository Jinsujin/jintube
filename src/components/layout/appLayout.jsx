import React from "react";
import styles from "./appLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}> header</header>
      <div className={styles.contents_wrap}>
        <nav className={styles.menus}>menus</nav>
        <div className={styles.constents}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
