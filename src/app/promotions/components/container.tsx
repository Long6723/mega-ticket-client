"use client";

import "../promotion.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Grid } from "@mui/material";
import Link from "next/link";

const PromotionContainer = () => {
  const data = [
    {
      id: 1,
      slug: "bang-gia-bong-nuoc-moi-nhat-2025",
      link: "/promotions/bang-gia-bong-nuoc-moi-nhat-2025",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=384&q=75",
      date: "11/07/2025",
      name: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
    },
    {
      id: 2,
      slug: "uu-dai-gia-ve-55k-ve-2d-cho-thanh-vien-u22",
      link: "/promotions/uu-dai-gia-ve-55k-ve-2d-cho-thanh-vien-u22",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=384&q=75",
      date: "13/06/2025",
      name: "ƯU ĐÃI GIÁ VÉ 55.000Đ/VÉ 2D CHO THÀNH VIÊN U22",
    },
    {
      id: 3,
      slug: "chuong-trinh-tang-qua-mung-8-3",
      link: "/promotions/chuong-trinh-tang-qua-mung-8-3",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018403.jpg&w=384&q=75",
      date: "04/07/2025",
      name: "Chương trình tặng quà nhân dịp mùng 8 tháng 3 !!!",
    },
    {
      id: 4,
      slug: "ga-ran-dong-gia-79k-set-ga-ran",
      link: "/promotions/ga-ran-dong-gia-79k-set-ga-ran",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=384&q=75",
      date: "18/07/2025",
      name: "GÀ RÁN SIÊU MÊ LY ĐỒNG GIÁ CHỈ 79K CÁC SET GÀ RÁN",
    },
    {
      id: 5,
      slug: "uu-dai-sinh-nhat-2025-trung-tam-chieu-phim-quoc-gia",
      link: "/promotions/uu-dai-sinh-nhat-2025-trung-tam-chieu-phim-quoc-gia",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=384&q=75",
      date: "08/08/2025",
      name: "TƯNG BỪNG ƯU ĐÃI năm 2025 tại Trung tâm Chiếu phim Quốc gia",
    },
    {
      id: 6,
      slug: "special-monday-dong-gia-50k-ve-2d-thu-2-cuoi-thang-2025",
      link: "/promotions/special-monday-dong-gia-50k-ve-2d-thu-2-cuoi-thang-2025",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=384&q=75",
      date: "25/07/2025",
      name: "SPECIAL MONDAY - ĐỒNG GIÁ 50.000Đ/VÉ 2D THỨ 2 CUỐI THÁNG (TỪ 01/01/2025)",
    },
  ];

  return (
    <div className="page">
      <div className="page__container">
        <Container>
          <div className="page__title">
            <h1>Khuyến mãi</h1>
          </div>

          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 3 }} key={index}>
                <div className="promotion-card">
                  <Link href={item.link}>
                    <img
                      src={item.img}
                      alt=""
                      className="promotion-card__img"
                    />
                    <p className="promotion-card__info">
                      <span>{item.date}</span>
                    </p>
                    <h2 className="promotion-card__name">{item.name}</h2>
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default PromotionContainer;
