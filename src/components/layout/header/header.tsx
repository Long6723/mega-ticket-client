import MyButton from "@/components/ui/button";
import "./header.scss";

const Header = () => {
  return (
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
  );
};

export default Header;
