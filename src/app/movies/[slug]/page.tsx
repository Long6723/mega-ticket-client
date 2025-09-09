"use client";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";
import "./movie-detail.scss";
import MyButton from "@/components/ui/button";
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
    director: "Pierre Perifel, JP Sans",
    cast: ".",
    description:
      "Biệt đội Bad Guys đang cố gắng lấy lại sự tin tưởng của mọi người sau khi hoàn lương, nhưng mọi nỗ lực sụp đổ khi họ bị kéo vào phi vụ cuối cùng do nhóm Bad Girls cầm đầu. Liệu họ sẽ giữ vững lý tưởng chính nghĩa, hay lại bị cuốn vào con đường tội phạm đã từng cố gắng rời bỏ?",
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
    director: "Pierre Perifel, JP Sans",
    cast: ".",
    description:
      "Biệt đội Bad Guys đang cố gắng lấy lại sự tin tưởng của mọi người sau khi hoàn lương, nhưng mọi nỗ lực sụp đổ khi họ bị kéo vào phi vụ cuối cùng do nhóm Bad Girls cầm đầu. Liệu họ sẽ giữ vững lý tưởng chính nghĩa, hay lại bị cuốn vào con đường tội phạm đã từng cố gắng rời bỏ?",
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
    director: "Pierre Perifel, JP Sans",
    cast: ".",
    description:
      "Biệt đội Bad Guys đang cố gắng lấy lại sự tin tưởng của mọi người sau khi hoàn lương, nhưng mọi nỗ lực sụp đổ khi họ bị kéo vào phi vụ cuối cùng do nhóm Bad Girls cầm đầu. Liệu họ sẽ giữ vững lý tưởng chính nghĩa, hay lại bị cuốn vào con đường tội phạm đã từng cố gắng rời bỏ?",
  },
];

interface MovieDetailPageProps {
  params: {
    slug: string;
  };
}

const room = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
];

const showtimes = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

export default function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { slug } = params;
  const movie = data.find((m) => m.slug === slug);

  const [selectedShowtime, setSelectedShowtime] = React.useState<string | null>(
    null,
  );
  const [selectedSeats, setSelectedSeats] = React.useState<string[]>([]);

  if (!movie) {
    notFound();
  }

  const pageStyle = {
    backgroundImage: `url(${movie.img.replace("w=256", "w=1920")})`,
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectSeat = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };
  return (
    <div className="movie-detail-page-container">
      <div className="movie-detail-page" style={pageStyle}>
        <Container className="movie-detail-content-container">
          <div className="movie-detail-content">
            <div className="movie-detail-content__img">
              <img src={movie.img} alt={movie.name} />
            </div>
            <div className="movie-detail-content__info">
              <span className="movie-detail-content__name">{movie.name}</span>
              <span className="movie-detail-content__type">{movie.type}</span>
              <div>
                <span className="movie-detail-content__genre">
                  {movie.genre}
                </span>
                <span className="movie-detail-content__nation">
                  {movie.nation}
                </span>
                <span className="movie-detail-content__time">
                  {movie.time} phút
                </span>
                <span className="movie-detail-content__director">
                  Đạo diễn: {movie.director}
                </span>
              </div>
              <span className="movie-detail-content__cast">
                Diễn viên: {movie.cast}
              </span>
              <div className="movie-detail-content__date">
                Khởi chiếu: {movie.date}
              </div>
              <div className="movie-detail-content__description">
                {movie.description}
              </div>
              <div className="movie-detail-content__ageRating">
                Kiểm duyệt: {movie.ageRating}
              </div>
              <MyButton className="movie-detail-content__button">
                Xem trailer
              </MyButton>
            </div>
          </div>
        </Container>
      </div>

      <div className="tab-section">
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
        <div className="tab-panel">
          <CustomTabPanel value={value} index={0}>
            <p className="note">
              Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước
              22h và Khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước
              23h.
            </p>
            <div className="showtime-buttons">
              {showtimes.map((time) => (
                <MyButton
                  className="button"
                  key={time}
                  onClick={() => setSelectedShowtime(time)}
                >
                  {time}
                </MyButton>
              ))}
            </div>
            {selectedShowtime && (
              <>
                <div className="selected-showtime">
                  Suất chiếu đã chọn: {selectedShowtime}
                </div>
                {room.map((row, rowIndex) => (
                  <div className="seat-row" key={rowIndex}>
                    {row.map((seat) => (
                      <div
                        key={seat}
                        onClick={() => handleSelectSeat(seat)}
                        className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                      >
                        {seat}
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <p className="note">
              Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước
              22h và Khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước
              23h.
            </p>
            <div className="showtime-buttons">
              {showtimes.map((time) => (
                <MyButton
                  className="button"
                  key={time}
                  onClick={() => setSelectedShowtime(time)}
                >
                  {time}
                </MyButton>
              ))}
            </div>
            {selectedShowtime && (
              <>
                <div className="selected-showtime">
                  Suất chiếu đã chọn: {selectedShowtime}
                </div>
                {room.map((row, rowIndex) => (
                  <div className="seat-row" key={rowIndex}>
                    {row.map((seat) => (
                      <div
                        key={seat}
                        onClick={() => handleSelectSeat(seat)}
                        className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                      >
                        {seat}
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}
