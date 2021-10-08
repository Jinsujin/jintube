import React from "react";
import styles from "./appLayout.module.css";
import SearchHeader from "../search_header/search_header";

const AppLayout = ({ children, onSearch, isDetailView }) => {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <SearchHeader onSearch={onSearch} />
      </header>
      <div className={styles.contents_wrap}>
        {!isDetailView && <nav className={styles.menus}>menus</nav>}
        <div className={styles.constents}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
