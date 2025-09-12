"use client";

import { Container } from "@mui/material";
import * as React from "react";
import "./payment.scss";
import MyTable from "@/components/ui/table";
import MyButton from "@/components/ui/button";
import Link from "next/link";
import MyCheckbox from "@/components/ui/checkbox";

export default function PaymentPage() {
  const infomovies = [
    {
      name: "BĂNG ĐẢNG QUÁI KIỆT 2 - P ( Lồng Tiếng )",
      date: "11/07/2025",
      showtime: "10.00",
      seat: "A1",
      type: "2D",
      room: "8",
    },
  ];

  return (
    <div className="payment-page">
      <Container>
        <div className="payment-page__left">
          <div className="payment-page__box">
            <div className="payment-page__title">
              <h1>Thông tin phim</h1>
            </div>
            <div className="payment-page__content">
              {infomovies.map((item, index) => {
                return (
                  <div className="payment-page__content--container" key={index}>
                    <div className="payment-page__content--name">
                      <h2>Phim</h2>
                      <span className="data">{item.name}</span>
                    </div>
                    <div className="payment-page__content2">
                      <div className="payment-page__content2--time">
                        <h2>Ngày giờ chiếu</h2>
                        <span className="data">
                          {item.showtime} - {item.date}
                        </span>
                      </div>
                      <div className="payment-page__content2--seat">
                        <h2>Ghế</h2>
                        <span className="data">{item.seat}</span>
                      </div>
                    </div>
                    <div className="payment-page__content3">
                      <div className="payment-page__content3--type">
                        <h2>Định dạng</h2>
                        <span className="data">{item.type}</span>
                      </div>
                      <div className="payment-page__content3--room">
                        <h2>Phòng chiếu</h2>
                        <span className="data">{item.room}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="payment-page__box">
            <div className="payment-page__title">
              <h1>Thông tin thanh toán</h1>
            </div>
            <MyTable
              columns={[
                { field: "category", headerName: "Danh mục" },
                { field: "quantity", headerName: "Số lượng" },
                { field: "total", headerName: "Tổng tiền" },
              ]}
              rows={[
                {
                  id: 1,
                  category: "Ghế (A1)",
                  quantity: "1",
                  total: "70.000 VNĐ",
                },
              ]}
              className="table"
            />
          </div>
        </div>

        <div className="payment-page__right">
          <div className="payment-page__box">
            <div className="payment-page__title">
              <h1>Phương thức thanh toán</h1>
            </div>
            <div className="payment-page__content">
              <label htmlFor="agree" className="checkbox">
                <MyCheckbox id="agree" />
                <img
                  src="https://chieuphimquocgia.com.vn/images/vnpay.svg"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <p style={{ marginTop: "12px", marginLeft: "10px" }}>VNPAY</p>
              </label>

              <div className="payment-page__title">
                <h1>Chi phí</h1>
              </div>

              <div className="payment">
                <p>Thanh toán</p>
                <p>70.000 đ</p>
              </div>
              <div className="payment">
                <p>Phí</p>
                <p>0 đ</p>
              </div>
              <div className="payment">
                <p>Tổng cộng</p>
                <p>70.000 đ</p>
              </div>

              <MyButton className="button-pay">Thanh toán</MyButton>

              <Link href="/movies/bang-dang-quai-kiet-2">
                <MyButton className="button-back">Quay lại</MyButton>
              </Link>
              <p className="note">
                Lưu ý: Không mua vé cho trẻ em dưới 13 tuổi đối với các suất
                chiếu phim kết thúc sau 22h00 và không mua vé cho trẻ em dưới 16
                tuổi đối với các suất chiếu phim kết thúc sau 23h00.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
