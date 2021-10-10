import React from "react";
import styles from "./appLayout.module.css";
import SearchHeader from "../search_header/search_header";
import styled from "styled-components";
import MenuItem from "../menu_item/menu_item";

const Nav = styled.nav`
  width: ${({ isDetailView }) => (isDetailView ? "0%" : "20%")};
  display: ${({ isDetailView }) => (isDetailView ? "none" : "block")};
`;

const Contents = styled.div`
  width: ${({ isDetailView }) => (isDetailView ? "100%" : "80%")};
  background-color: #f9f9f9;
  padding: 2rem 4.4rem;
`;

const menus = [
  { title: "홈", image: "home" },
  { title: "검색", image: "search" },
  { title: "구독", image: "subscribe" },
];

const AppLayout = ({ children, onSearch, isDetailView, selectMenu }) => {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <SearchHeader onSearch={onSearch} />
      </header>
      <div className={styles.contents_wrap}>
        <Nav isDetailView={isDetailView}>
          <ul>
            {menus.map((menu, index) => (
              <MenuItem key={index} selectMenu={selectMenu} menu={menu} />
            ))}
          </ul>
        </Nav>
        <Contents isDetailView={isDetailView}>{children}</Contents>
      </div>
    </div>
  );
};

export default AppLayout;
