"use client";

import { Container } from "@mui/material";
import "../profile.scss";
import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InfoForm from "./info-form";

export default function ProfileContainer() {
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
          <InfoForm />
        </CustomTabPanel>
      </Container>
    </div>
  );
}
