import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__links">
          <li className="footer__link-item">
            <a href="/policy" className="footer__link">
              Chính sách
            </a>
          </li>
          <li className="footer__link-item">
            <a href="/movies" className="footer__link">
              Lịch chiếu
            </a>
          </li>
          <li className="footer__link-item">
            <a href="/promotions" className="footer__link">
              Khuyến mãi
            </a>
          </li>
          <li className="footer__link-item">
            <a href="/faqs" className="footer__link">
              Hỏi đáp
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          Copyright 2025. LPL All Rights Reservered. Dev by LuuLong
        </p>
      </div>
    </footer>
  );
};

export default Footer;
