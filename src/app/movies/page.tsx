"use client";
import { Container, Grid } from "@mui/material";
import "./movie.scss";
import MyButton from "@/components/ui/button";
import * as React from "react";
import { useRouter } from "next/navigation";
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

interface Movie {
  id: number;
  slug: string;
  link: string;
  img: string;
  genre: string;
  time: string;
  date: string;
  name: string;
  nation: string;
  ageRating: string;
  showtime: string;
  type: string;
}

const MoviePage = () => {
  const router = useRouter();
  const data: Movie[] = [
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
      id: 2,
      slug: "lam-giau-voi-ma-2",
      link: "/movies/lam-giau-voi-ma-2",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018921_0.jpg&w=256&q=75",
      genre: "Tâm lý, tình cảm",
      time: "113",
      date: "13/06/2025",
      name: "LÀM GIÀU VỚI MA 2: CUỘC CHIẾN HỘT XOÀN - T16",
      nation: "Việt Nam",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      id: 3,
      slug: "xin-chao-jadoo-lac-vao-vuong-quoc-phep-thuat",
      link: "/movies/xin-chao-jadoo-lac-vao-vuong-quoc-phep-thuat",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018968_0.png&w=256&q=75",
      genre: "Hoạt hình, Tâm lý, tình cảm",
      time: "62",
      date: "04/07/2025",
      name: "XIN CHÀO JADOO: LẠC VÀO VƯƠNG QUỐC PHÉP THUẬT-P (Lồng Tiếng)",
      nation: "Hàn Quốc",
      ageRating: "Phim phổ biến mọi lứa tuổi.",
      showtime: "18:05",
      type: "2D",
    },
    {
      id: 4,
      slug: "phim-xi-trum",
      link: "/movies/phim-xi-trum",
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
      id: 5,
      slug: "chot-don",
      link: "/movies/chot-don",
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
      id: 6,
      slug: "bo-tu-sieu-dang",
      link: "/movies/bo-tu-sieu-dang",
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
      id: 7,
      slug: "mang-me-di-bo",
      link: "/movies/mang-me-di-bo",
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
  const [selectedShowtimes, setSelectedShowtimes] = React.useState<
    Record<number, string>
  >({});

  const showtimesByDate: Record<string, string[]> = {
    "29/08/2025": ["10:00", "11:00", "12:00", "13:00", "14:00"],
    "30/08/2025": ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    "31/08/2025": ["10:00", "11:00", "12:00", "13:00", "14:00", "17:00"],
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectShowtime = (movieId: number, showtime: string) => {
    setSelectedShowtimes((prev) => ({
      ...prev,
      [movieId]: showtime,
    }));
  };

  const getCurrentDate = () => {
    const dates = Object.keys(showtimesByDate);
    return dates[value] || dates[0];
  };

  const handleNavigateToDetail = (
    movieSlug: string,
    date: string,
    time: string,
  ) => {
    const params = new URLSearchParams({
      date: date,
      time: time,
    });
    router.push(`/movies/${movieSlug}?${params.toString()}`);
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
          centered
        >
          {Object.keys(showtimesByDate).map((date, index) => (
            <Tab
              key={index}
              label={date}
              {...a11yProps(index)}
              className="name-tab"
            />
          ))}
        </Tabs>

        {Object.keys(showtimesByDate).map((date, tabIndex) => (
          <CustomTabPanel key={tabIndex} value={value} index={tabIndex}>
            <Grid container spacing={3}>
              {data.map((item) => {
                const selectedShowtime = selectedShowtimes[item.id] || "";

                return (
                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={item.id}>
                    <div
                      onClick={() => router.push(item.link)}
                      className="movie-card"
                    >
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

                          <h3 className="movie-card__showtime-title">
                            Lịch chiếu
                          </h3>

                          <div className="movie-card__showtime-container">
                            {showtimesByDate[getCurrentDate()].map(
                              (time, index) => (
                                <MyButton
                                  key={index}
                                  className={`movie-card__showtime ${selectedShowtime === time ? "selected" : ""}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSelectShowtime(item.id, time);
                                    handleNavigateToDetail(
                                      item.slug,
                                      getCurrentDate(),
                                      time,
                                    );
                                  }}
                                >
                                  {time}
                                </MyButton>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </CustomTabPanel>
        ))}
      </Container>
    </div>
  );
};

export default MoviePage;
