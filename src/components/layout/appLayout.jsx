import React from "react";
import styles from "./appLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <nav className={styles.menus_wrap}>nav</nav>
      <main className={styles.constents_wrap}>
        <div className={styles.header}>header</div>
        <div className={styles.constents}>{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
