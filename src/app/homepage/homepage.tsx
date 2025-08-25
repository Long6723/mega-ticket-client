"use client";
import Banner from "@/components/core/banner";
import "./homepage.scss";
import { Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function HomePage() {
  const data = [
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018864_0.jpg&w=256&q=75",
      genre: "Hành động",
      date: "11/07/2025",
      name: "SUPERMAN",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018758_0.jpg&w=384&q=75",
      genre: "Hài, Hành động, Hoạt hình, Phiêu lưu, Thần thoại",
      date: "13/06/2025",
      name: "BÍ KÍP LUYỆN RỒNG",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018733_0.jpg&w=384&q=75",
      genre: "Hành động",
      date: "04/07/2025",
      name: "THẾ GIỚI KHỦNG LONG: TÁI SINH",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018730_0.jpg&w=256&q=75",
      genre: "Hài, Hoạt hình, Phiêu lưu",
      date: "18/07/2025",
      name: "PHIM XÌ TRUM-P ( Lồng tiếng )",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018978_0.jpg&w=256&q=75",
      genre: "Hài, Tâm lý, tình cảm",
      date: "08/08/2025",
      name: "CHỐT ĐƠN",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018625_0.jpg&w=256&q=75",
      genre: "Hành động, Khoa học viễn tưởng, Phiêu lưu",
      date: "25/07/2025",
      name: "BỘ TỨ SIÊU ĐẲNG: BƯỚC ĐI ĐẦU TIÊN",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018696_0.jpg&w=1920&q=75",
      genre: "Tâm lý, tình cảm",
      date: "01/08/2025",
      name: "MANG MẸ ĐI BỎ",
    },
  ];
  return (
    <div className="page">
      <div className="page__container">
        <Banner />
        <Container>
          <h1 className="page__title">Phim đang chiếu</h1>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
                <div className="movie-card">
                  <a href={item.link}>
                    <img src={item.img} alt="" className="movie-card__img" />
                    <p className="movie-card__info">
                      <span>{item.genre}</span>
                      <span>{item.date}</span>
                    </p>
                    <h2 className="movie-card__name">{item.name}</h2>
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>

          <h1 className="page__title">Phim sắp chiếu</h1>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
                <div className="movie-card">
                  <a href={item.link}>
                    <img src={item.img} alt="" className="movie-card__img" />
                    <p className="movie-card__info">
                      <span>{item.genre}</span>
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
      <div>
        <Banner />
        <Container>
          <h1 className="page__title">Phim đang chiếu</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <div>
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="movie-card">
                    <a href={item.link}>
                      <img src={item.img} alt="" className="movie-card__img" />
                      <p className="movie-card__info">
                        <span>{item.genre}</span>
                        <span>{item.date}</span>
                      </p>
                      <h2 className="movie-card__name">{item.name}</h2>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </Container>
      </div>
    </div>
  );
}
