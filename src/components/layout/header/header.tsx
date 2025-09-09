"use client";
import MyButton from "@/components/ui/button";
import "./header.scss";
import { Container, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import AuthForms from "../form/authforms";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);
  return (
    <>
      <header className="header">
        <Container>
          <div className="header__container">
            <Link href="/">
              <img
                src="https://chieuphimquocgia.com.vn/images/logo-text-new.svg"
                alt="Ticket Hub"
                className="header__logo"
              />
            </Link>
            <div>
              <ul className="header__nav-list">
                <li>
                  <Link href="/" className="header__nav-link">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link href="/movies" className="header__nav-link">
                    Lịch chiếu
                  </Link>
                </li>
                <li>
                  <Link href="/promotions" className="header__nav-link">
                    Khuyến mãi
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="header__nav-link">
                    Hỏi đáp
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__buttons">
              <AuthForms />
            </div>
          </div>
        </Container>
      </header>
      <header className="header1">
        <Container>
          <div className="header1__container">
            <Link href="/" className="header1__logo">
              <img
                src="https://chieuphimquocgia.com.vn/images/logo-text-new.svg"
                alt="Ticket Hub"
              />
              <h1 className="header1__text">Ticket Hub</h1>
            </Link>

            <div className="header1__iconContainer">
              <MyButton ref={menuButtonRef} onClick={handleOpenMenu}>
                <img src="./ic_menu.svg" alt="a" />
              </MyButton>
              <Menu
                anchorEl={menuButtonRef.current}
                open={isMenuOpen}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                className="header1__menuContainer"
              >
                <div className="header1__popupContainer">
                  <MenuItem>
                    <Link href="/" className="header__nav-link">
                      Trang chủ
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/movies" className="header__nav-link">
                      Lịch chiếu
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/promotions" className="header__nav-link">
                      Khuyến mãi
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/faqs" className="header__nav-link">
                      Hỏi đáp
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <div className="header__buttons">
                      <AuthForms />
                    </div>
                  </MenuItem>
                </div>
              </Menu>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
