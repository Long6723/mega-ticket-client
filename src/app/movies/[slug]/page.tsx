"use client";
import { Container } from "@mui/material";
import { notFound, useSearchParams, useRouter } from "next/navigation";
import "./movie-detail.scss";
import MyButton from "@/components/ui/button";
import * as React from "react";
import { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ROOM1, ROOM2 } from "@/constants/seat.cont";
import Link from "next/link";

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

const bookedSeats = ["C3", "C4", "C5", "C6"];

const showtimes: Record<string, string[]> = {
  "29/08/2025": ["10:00", "11:00", "12:00", "13:00", "14:00"],
  "30/08/2025": ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
  "31/08/2025": ["10:00", "11:00", "12:00", "13:00", "14:00", "17:00"],
};

interface SeatDetail {
  name: string;
  type: string;
}

const seatPrices: Record<string, number> = {
  NORMAL: 70000,
  VIP: 100000,
  DOUBLE: 140000,
};

export default function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { slug } = params;
  const searchParams = useSearchParams();
  const movie = data.find((m) => m.slug === slug);
  const router = useRouter();

  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = React.useState<SeatDetail[]>([]);
  const [value, setValue] = React.useState(0);

  if (!movie) {
    notFound();
  }

  const dateFromParams = searchParams.get("date");
  const timeFromParams = searchParams.get("time");

  useEffect(() => {
    if (dateFromParams && timeFromParams) {
      const dates = Object.keys(showtimes);
      const dateIndex = dates.findIndex((date) => date === dateFromParams);

      if (dateIndex !== -1) {
        setValue(dateIndex);
        setSelectedTime(timeFromParams);
      }
    }
  }, [dateFromParams, timeFromParams]);

  const pageStyle = {
    backgroundImage: `url(${movie.img.replace("w=256", "w=1920")})`,
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSelectedTime(null);
    setSelectedSeats([]);
    router.push(`/movies/${slug}`);
  };

  const handleSelectSeat = (seat: SeatDetail) => {
    if (bookedSeats.includes(seat.name)) {
      return;
    }
    if (emptySeat(seat.name)) {
      setSelectedSeats((prev) => [...prev, seat]);
    } else {
      setSelectedSeats((prev) => prev.filter((s) => s.name !== seat.name));
    }
  };

  const emptySeat = (name: string) => {
    for (const element of selectedSeats) {
      if (element.name === name) {
        return false;
      }
    }
    return true;
  };

  const totalPrice = React.useMemo(() => {
    let total = 0;
    for (const element of selectedSeats) {
      if (element.type === "VIP") {
        total += seatPrices.VIP;
      }
      if (element.type === "NORMAL") {
        total += seatPrices.NORMAL;
      }
      if (element.type === "DOUBLE") {
        total += seatPrices.DOUBLE;
      }
    }
    return total;
  }, [selectedSeats]);

  const dates = Object.keys(showtimes);

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
              <a href="https://youtu.be/dABxcj2xGys">
                <MyButton className="movie-detail-content__button">
                  Xem trailer
                </MyButton>
              </a>
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
          {dates.map((date, index) => (
            <Tab
              key={index}
              label={date}
              {...a11yProps(index)}
              className="name-tab"
              onClick={() => {
                setSelectedTime(null);
                setSelectedSeats([]);
              }}
            />
          ))}
        </Tabs>
        <div className="tab-panel">
          {dates.map((date, tabIndex) => (
            <CustomTabPanel key={tabIndex} value={value} index={tabIndex}>
              <p className="note">
                Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước
                22h và Khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước
                23h.
              </p>
              <div className="showtime-buttons">
                {showtimes[date].map((time, index) => (
                  <MyButton
                    className={`button ${selectedTime === time ? "Mui-selected" : ""}`}
                    key={index}
                    onClick={() => {
                      setSelectedTime(time);
                      setSelectedSeats([]);
                      router.push(`/movies/${slug}`);
                    }}
                  >
                    {time}
                  </MyButton>
                ))}
              </div>
              {selectedTime && (
                <>
                  <div className="selected-time">
                    Suất chiếu đã chọn: {selectedTime} - Ngày: {date}
                  </div>
                  {(tabIndex === 0 ? ROOM2 : ROOM1).map((row, rowIndex) => (
                    <div className="seat-row" key={rowIndex}>
                      {row.map((seat) => (
                        <div
                          key={seat.name}
                          onClick={() => handleSelectSeat(seat)}
                          className={`seat ${seat.type.toLowerCase()} ${bookedSeats.includes(seat.name) ? "booked" : ""}  ${selectedSeats.includes(seat) ? "selected" : ""} `}
                        >
                          {seat.name}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="category-seat-container">
                    <div className="category-seat-booked">
                      <div className="category-seat-dot"></div>
                      <h1>Ghế đã đặt</h1>
                    </div>
                    <div className="category-seat-selected">
                      <div className="category-seat-dot"></div>
                      <h1>Ghế bạn chọn</h1>
                    </div>
                    <div className="category-seat-normal">
                      <div className="category-seat-dot"></div>
                      <h1>Ghế thường</h1>
                    </div>
                    <div className="category-seat-vip">
                      <div className="category-seat-dot"></div>
                      <h1>Ghế VIP</h1>
                    </div>
                    <div className="category-seat-double">
                      <div className="category-seat-dot"></div>
                      <h1>Ghế đôi</h1>
                    </div>
                  </div>
                  <div className="info-seat-selected">
                    <div>
                      <p>
                        Ghế đã chọn:
                        {selectedSeats.map((seat) => seat.name).join(", ")}
                      </p>
                      <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")}đ</p>
                    </div>
                    <Link href="/payment">
                      <MyButton className="button-payment">Thanh toán</MyButton>
                    </Link>
                  </div>
                </>
              )}
            </CustomTabPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
