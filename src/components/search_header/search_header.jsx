import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch, onClickLogo }) => {
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
      <div className={styles.start} onClick={onClickLogo}>
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
      <div className={styles.end}>
        <div className={styles.profile_button}>
          <a target="_blank" href="https://github.com/Jinsujin/jintube">
            <img src="/images/profile.jpeg" alt="프로필 이미지" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
