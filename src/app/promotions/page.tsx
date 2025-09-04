"use client";

import "./promotion.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Grid } from "@mui/material";

export default function PromotionPage() {
  const data = [
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019006.png&w=384&q=75",
      date: "11/07/2025",
      name: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0019012.png&w=384&q=75",

      date: "13/06/2025",
      name: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018403.jpg&w=384&q=75",

      date: "04/07/2025",
      name: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018385.jpg&w=384&q=75",

      date: "18/07/2025",
      name: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018379.png&w=384&q=75",

      date: "08/08/2025",
      name: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0018378.png&w=384&q=75",

      date: "25/07/2025",
      name: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
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
                <div className="movie-card">
                  <a href={item.link}>
                    <img src={item.img} alt="" className="movie-card__img" />
                    <p className="movie-card__info">
                      <span>{item.date}</span>
                    </p>
                    <h2 className="movie-card__name">{item.name}</h2>
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
