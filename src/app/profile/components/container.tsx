"use client";

import { Container } from "@mui/material";
import "../profile.scss";
import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import MyButton from "@/components/ui/button";
import ChangePasswordForm from "./change-password";
import UpdateInfoForm from "./info-form";
import MyTable from "@/components/ui/table";

export default function ProfileContainer() {
  const [changeOpen, setChangeOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab = parseInt(searchParams.get("tab") || "0");
  const [value, setValue] = React.useState(initialTab);

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", newValue.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="profile-page">
      <Container>
        <div className="profile-page__title">
          <h1>Thông tin cá nhân</h1>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tab-container"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab
            label="Tài khoản của tôi"
            {...a11yProps(0)}
            className="name-tab"
          />
          <Tab label="Lịch sử mua vé" {...a11yProps(1)} className="name-tab" />
          <Tab
            label="Lịch sử điểm thưởng"
            {...a11yProps(2)}
            className="name-tab"
          />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <UpdateInfoForm />
          <MyButton
            onClick={() => setChangeOpen(true)}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#10141b",
              border: "1px solid #fff",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              "&::first-letter": {
                textTransform: "uppercase",
              },
              mt: -7.15,
              mb: 10,
              ml: 80,
              "&:hover": {
                backgroundColor: "#9ca3af",
              },
            }}
          >
            Đổi mật khẩu
          </MyButton>
          <ChangePasswordForm
            open={changeOpen}
            onClose={() => setChangeOpen(false)}
          />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <MyTable
            columns={[
              { field: "date", headerName: "Ngày giao dịch" },
              { field: "name", headerName: "Tên phim" },
              { field: "ticket-number", headerName: "Số vé" },
              { field: "amount", headerName: "Số tiền" },
            ]}
            rows={[
              {
                id: 1,
                date: "2025-09-12",
                name: "BĂNG ĐẢNG QUÁI KIỆT 2 - P ( Lồng Tiếng )",
                "ticket-number": 2,
                amount: "100.000 VND",
              },
              {
                id: 2,
                date: "2025-09-13",
                name: "LÀM GIÀU VỚI MA 2: CUỘC CHIẾN HỘT XOÀN - T16",
                "ticket-number": 1,
                amount: "50.000 VND",
              },
            ]}
            className="table"
          />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <MyTable
            columns={[
              { field: "date", headerName: "Ngày giao dịch" },
              { field: "type", headerName: "Loại giao dịch" },
              { field: "name", headerName: "Tên giao dịch" },
              { field: "points", headerName: "Số điểm" },
            ]}
            rows={[
              {
                id: 1,
                date: "2025-09-12",
                type: "Tích điểm",
                name: "Giao dịch 1",
                points: 10,
              },
              {
                id: 2,
                date: "2025-09-13",
                type: "Sử dụng điểm",
                name: "Giao dịch 2",
                points: -5,
              },
            ]}
            className="table"
          />
        </CustomTabPanel>
      </Container>
    </div>
  );
}
