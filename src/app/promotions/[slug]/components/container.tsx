"use client";

import { Container } from "@mui/material";
import { notFound } from "next/navigation";
import "../promotion-detail.scss";

const data = [
  {
    id: 1,
    slug: "bang-gia-bong-nuoc-moi-nhat-2025",
    title: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2025",
  },
  {
    id: 2,
    slug: "uu-dai-gia-ve-55k-ve-2d-cho-thanh-vien-u22",
    title: "ƯU ĐÃI GIÁ VÉ 55.000Đ/VÉ 2D CHO THÀNH VIÊN U22",
  },
  {
    id: 3,
    slug: "chuong-trinh-tang-qua-mung-8-3",
    title: "Chương trình tặng quà nhân dịp mùng 8 tháng 3 !!!",
  },
  {
    id: 4,
    slug: "ga-ran-dong-gia-79k-set-ga-ran",
    title: "GÀ RÁN SIÊU MÊ LY ĐỒNG GIÁ CHỈ 79K CÁC SET GÀ RÁN",
  },
  {
    id: 5,
    slug: "uu-dai-sinh-nhat-2025-trung-tam-chieu-phim-quoc-gia",
    title: "TƯNG BỪNG ƯU ĐÃI năm 2025 tại Trung tâm Chiếu phim Quốc gia",
  },
  {
    id: 6,
    slug: "special-monday-dong-gia-50k-ve-2d-thu-2-cuoi-thang-2025",
    title:
      "SPECIAL MONDAY - ĐỒNG GIÁ 50.000Đ/VÉ 2D THỨ 2 CUỐI THÁNG (TỪ 01/01/2025)",
  },
];

interface PromotionDetailPageProps {
  params: {
    slug: string;
  };
}

const PromotionDetailContainer = ({ params }: PromotionDetailPageProps) => {
  const { slug } = params;
  const promotion = data.find((p) => p.slug === slug);

  if (!promotion) {
    notFound();
  }

  return (
    <div className="promotion-detail-page">
      <Container>
        <div className="promotion-detail-content">
          <h1 className="promotion-detail-title">{promotion.title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default PromotionDetailContainer;
