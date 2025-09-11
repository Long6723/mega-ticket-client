"use client";

import "../profile.scss";
import * as React from "react";
import ChangePasswordForm from "./change-password";
import MyButton from "@/components/ui/button";
import { Grid } from "@mui/material";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { TextField, Typography, Box, Link } from "@mui/material";

// const updateSchema = yup.object({
//   surname: yup.string().required("Họ tối thiểu 1 ký tự"),
//   name: yup.string().required("Tên tối thiểu 1 ký tự"),
//   phone: yup
//     .string()
//     .matches(
//       /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/,
//       "Số điện thoại không hợp lệ",
//     )
//     .required("Vui lòng nhập số điện thoại"),
//   address: yup.string().required("Vui lòng nhập địa chỉ"),
//   email: yup
//     .string()
//     .email("Email không hợp lệ")
//     .required("Vui lòng nhập email"),
// });

// type UpdateFormData = yup.InferType<typeof updateSchema>;

// type UpdateFormProps = {
//   open: boolean;
// };

export default function InfoForm() {
  const [changeOpen, setChangeOpen] = React.useState(false);

  return (
    <div className="">
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <div className="info-user-container"></div>
      </Grid>
      <MyButton
        onClick={() => setChangeOpen(true)}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#FFD700",
          color: "black",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#FFC000",
          },
        }}
      >
        Đổi mật khẩu
      </MyButton>
      <ChangePasswordForm
        open={changeOpen}
        onClose={() => setChangeOpen(false)}
      />
    </div>
  );
}
