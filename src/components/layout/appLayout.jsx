import React from "react";
import styles from "./appLayout.module.css";
import SearchHeader from "../search_header/search_header";
import styled, { ThemeProvider } from "styled-components";
import MenuItem from "../menu_item/menu_item";
import theme from "../../common/theme";

const Nav = styled.nav`
  @media ${({ theme }) => theme.device.mobile} {
    // todo: 햄버거 메뉴 달기
    display: none;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 90px;
    font-size: 0.6rem;
  }

  display: ${({ isDetailView }) => (isDetailView ? "none" : "block")};
  width: 300px;
  flex: 0 0 auto;
`;

const Contents = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0.3rem 0.5rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 1rem 1.2rem;
  }

  flex-grow: 1;
  background-color: #f9f9f9;
  padding: 2rem 4rem;
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
        <Nav isDetailView={isDetailView} theme={theme}>
          <ul>
            {menus.map((menu, index) => (
              <MenuItem key={index} selectMenu={selectMenu} menu={menu} />
            ))}
          </ul>
        </Nav>
        <Contents isDetailView={isDetailView} theme={theme}>
          {children}
        </Contents>
      </div>
    </div>
  );
};

export default AppLayout;
