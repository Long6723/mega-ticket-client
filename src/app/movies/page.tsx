import { Container, Grid } from "@mui/material";

const Movie = () => {
  const data = [
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018864_0.jpg&w=256&q=75",
      date: "11/07/2025",
      name: "SUPERMAN",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018758_0.jpg&w=384&q=75",
      date: "13/06/2025",
      name: "BÍ KÍP LUYỆN RỒNG",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018733_0.jpg&w=384&q=75",
      date: "04/07/2025",
      name: "THẾ GIỚI KHỦNG LONG: TÁI SINH",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018730_0.jpg&w=256&q=75",
      date: "18/07/2025",
      name: "PHIM XÌ TRUM-P ( Lồng tiếng )",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018978_0.jpg&w=256&q=75",
      date: "08/08/2025",
      name: "CHỐT ĐƠN",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018625_0.jpg&w=256&q=75",
      date: "25/07/2025",
      name: "BỘ TỨ SIÊU ĐẲNG: BƯỚC ĐI ĐẦU TIÊN",
    },
    {
      link: "/",
      img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018696_0.jpg&w=1920&q=75",
      date: "01/08/2025",
      name: "MANG MẸ ĐI BỎ",
    },
  ];
  return (
    <div className="bg-[#000] text-white">
      <div className="w-full bg-[#10141b] pb-20">
        <Container>
          <h1 className="mt-10 mb-5 font-bold text-2xl text-center">
            Phim đang chiếu
          </h1>

          <Grid container spacing={2}>
            {data.map((item, index) => {
              return (
                <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
                  <div className="overflow-hidden">
                    <a href={item.link}>
                      <img
                        src={item.img}
                        alt=""
                        className="transition-transform duration-300 hover:scale-105 w-full h-[264px] "
                      />
                      <p className="ml-5 my-2 text-sm text-gray-400 ">
                        {item.date}
                      </p>
                      <h2 className="font-bold">{item.name}</h2>
                    </a>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Movie;
