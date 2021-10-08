import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles.search_head}>
      <div className={styles.start}>
        <img src="/images/logo.png" alt="logo" />
        <h1>JinTube</h1>
      </div>
      <div className={styles.center}>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          <img src="/images/icon_search.svg" alt="검색버튼" />
        </button>
      </div>
      <div className={styles.end}>아이콘들</div>
    </div>
  );
};

export default SearchHeader;
