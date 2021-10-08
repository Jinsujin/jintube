import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  return (
    <div className={styles.search_head}>
      <div className={styles.start}>
        <img src="/images/logo.png" alt="logo" />
        <h1>JinTube</h1>
      </div>
      <div className={styles.center}>
        <input type="search" placeholder="검색" />
        <button type="submit">
          <img src="/images/icon_search.svg" alt="검색버튼" />
        </button>
      </div>
      <div className={styles.end}>아이콘들</div>
    </div>
  );
};

export default SearchHeader;
