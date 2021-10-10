import React from "react";
import styles from "./appLayout.module.css";
import SearchHeader from "../search_header/search_header";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: pink;
  width: ${({ isDetailView }) => (isDetailView ? "0%" : "20%")};
  display: ${({ isDetailView }) => (isDetailView ? "none" : "block")};
`;

const Contents = styled.div`
  width: ${({ isDetailView }) => (isDetailView ? "100%" : "80%")};
  background-color: #f9f9f9;
  padding: 2rem 4.4rem;
`;

const AppLayout = ({ children, onSearch, isDetailView }) => {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <SearchHeader onSearch={onSearch} />
      </header>
      <div className={styles.contents_wrap}>
        <Nav isDetailView={isDetailView}>menus</Nav>
        <Contents isDetailView={isDetailView}>{children}</Contents>
      </div>
    </div>
  );
};

export default AppLayout;
