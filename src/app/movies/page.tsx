"use client";
import { Container, Grid } from "@mui/material";
import "./movie.scss";
import MyButton from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Movie = () => {
  const data = [
    {
      id: 1,
      slug: "bang-dang-quai-kiet-2",
      link: "/movies/bang-dang-quai-kiet-2",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018694_0.jpg&w=256&q=75",
      genre: "Hoạt hình",
      time: "102",
      date: "11/07/2025",
      name: "BĂNG ĐẢNG QUÁI KIỆT 2 - P ( Lồng Tiếng )",
      nation: "Mỹ",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018921_0.jpg&w=256&q=75",
      genre: "Tâm lý, tình cảm",
      time: "113",
      date: "13/06/2025",
      name: "BÍ KÍP LUYỆN RỒNG",
      nation: "Việt Nam",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018968_0.png&w=256&q=75",
      genre: "Hoạt hình, Tâm lý, tình cảm",
      time: "62",
      date: "04/07/2025",
      name: "THẾ GIỚI KHỦNG LONG: TÁI SINH",
      nation: "Hàn Quốc",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018735_0.jpg&w=256&q=75",
      genre: "Hành động",
      time: "124",
      date: "18/07/2025",
      name: "PHIM XÌ TRUM-P ( Lồng tiếng )",
      nation: "Việt Nam",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018981_0.jpg&w=256&q=75",
      genre: "Hoạt hình",
      time: "105",
      date: "08/08/2025",
      name: "CHỐT ĐƠN",
      nation: "Nhật Bản",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0019022_0.jpg&w=256&q=75",
      genre: "Hoạt hình",
      time: "155",
      date: "25/07/2025",
      name: "BỘ TỨ SIÊU ĐẲNG: BƯỚC ĐI ĐẦU TIÊN",
      nation: "Nhật Bản",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018696_0.jpg&w=1920&q=75",
      genre: "Tâm lý, tình cảm",
      time: "113",
      date: "01/08/2025",
      name: "MANG MẸ ĐI BỎ",
      nation: "Việt Nam",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="movie-page">
      <Container>
        <div className="movie-page__title">
          <div className="movie-page__title-dot"></div>
          <h1>Phim đang chiếu</h1>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tab-container"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab label="29/08/2025" {...a11yProps(0)} className="name-tab" />
          <Tab label="30/08/2025" {...a11yProps(1)} className="name-tab" />
          <Tab label="31/08/2025" {...a11yProps(2)} className="name-tab" />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={3}>
            {data.map((item, index) => {
              return (
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={index}>
                  <Link href={item.link} className="movie-card">
                    <div className="movie-card__image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="movie-card__content">
                      <div className="movie-card__type">
                        <span>{item.type}</span>
                      </div>
                      <div className="movie-card__info">
                        <span className="movie-card__genre-time">
                          <span className="movie-card__genre">
                            {item.genre}
                          </span>
                          <span className="movie-card__time">{`${item.time} phút`}</span>
                        </span>
                        <h2 className="movie-card__name">{item.name}</h2>
                        <span className="movie-card__nation">{`Xuất xứ: ${item.nation}`}</span>
                        <span className="movie-card__date">{`Khởi chiếu: ${item.date}`}</span>
                        <span className="movie-card__age-rating">
                          {item.ageRating}
                        </span>

                        <h1
                          style={{
                            fontWeight: "bold",
                            fontSize: "1rem",
                          }}
                        >
                          Lịch chiếu
                        </h1>
                        <div className="movie-card__showtime-container">
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid container spacing={3}>
            {data.map((item, index) => {
              return (
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={index}>
                  <Link href={item.link} className="movie-card">
                    <div className="movie-card__image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="movie-card__content">
                      <div className="movie-card__type">
                        <span>{item.type}</span>
                      </div>
                      <div className="movie-card__info">
                        <span className="movie-card__genre-time">
                          <span className="movie-card__genre">
                            {item.genre}
                          </span>
                          <span className="movie-card__time">{`${item.time} phút`}</span>
                        </span>
                        <h2 className="movie-card__name">{item.name}</h2>
                        <span className="movie-card__nation">{`Xuất xứ: ${item.nation}`}</span>
                        <span className="movie-card__date">{`Khởi chiếu: ${item.date}`}</span>
                        <span className="movie-card__age-rating">
                          {item.ageRating}
                        </span>

                        <h1
                          style={{
                            fontWeight: "bold",
                            fontSize: "1rem",
                          }}
                        >
                          Lịch chiếu
                        </h1>
                        <div className="movie-card__showtime-container">
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                          <MyButton className="movie-card__showtime">
                            {item.showtime}
                          </MyButton>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </CustomTabPanel>
      </Container>
    </div>
  );
};

export default Movie;
