import Link from "next/link";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__links">
          <li className="footer__link-item">
            <Link href="/policy" className="footer__link">
              Chính sách
            </Link>
          </li>
          <li className="footer__link-item">
            <Link href="/movies" className="footer__link">
              Lịch chiếu
            </Link>
          </li>
          <li className="footer__link-item">
            <Link href="/promotions" className="footer__link">
              Khuyến mãi
            </Link>
          </li>
          <li className="footer__link-item">
            <Link href="/faqs" className="footer__link">
              Hỏi đáp
            </Link>
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
