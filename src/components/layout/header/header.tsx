import MyButton from "@/components/ui/button";
import "./header.scss";
import { Container, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);
  return (
    <Container>
      <header className="header">
        <div className="header__container">
          <a href="/">
            <img
              src="https://chieuphimquocgia.com.vn/images/logo-text-new.svg"
              alt="Ticket Hub"
              className="header__logo"
            />
          </a>
          <div>
            <ul className="header__nav-list">
              <li>
                <a href="/" className="header__nav-link">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/movies" className="header__nav-link">
                  Lịch chiếu
                </a>
              </li>
              <li>
                <a href="/promotions" className="header__nav-link">
                  Khuyến mãi
                </a>
              </li>
              <li>
                <a href="/faqs" className="header__nav-link">
                  Hỏi đáp
                </a>
              </li>
            </ul>
          </div>
          <div className="header__buttons">
            <MyButton
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FFD700",
                color: "black",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#FFC000",
                },
                marginRight: "35px",
              }}
            >
              Đăng nhập
            </MyButton>
            <MyButton
              variant="outlined"
              sx={{
                borderRadius: "20px",
                borderColor: "white",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                },
              }}
            >
              Đăng ký
            </MyButton>
          </div>
        </div>
      </header>
      <header className="header1">
        <div className="header1__container">
          <a href="/">
            <img
              src="https://chieuphimquocgia.com.vn/images/logo-text-new.svg"
              alt="Ticket Hub"
              className="header1__logo"
            />
          </a>
          <h1 className="header1__text">Ticket Hub</h1>
        </div>
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
                <a href="/" className="header__nav-link">
                  Trang chủ
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/movies" className="header__nav-link">
                  Lịch chiếu
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/promotions" className="header__nav-link">
                  Khuyến mãi
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/faqs" className="header__nav-link">
                  Hỏi đáp
                </a>
              </MenuItem>
              <MenuItem>
                <div className="header__buttons">
                  <MyButton
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#FFD700",
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#FFC000",
                      },
                      marginRight: "35px",
                    }}
                  >
                    Đăng nhập
                  </MyButton>
                  <MyButton
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      borderColor: "white",
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderColor: "white",
                      },
                    }}
                  >
                    Đăng ký
                  </MyButton>
                </div>
              </MenuItem>
            </div>
          </Menu>
        </div>
      </header>
    </Container>
  );
};

export default Header;
