"use client";

import "../profile.scss";
import * as React from "react";
import MyButton from "@/components/ui/button";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Typography } from "@mui/material";

const updateSchema = yup.object({
  surname: yup.string().required("Họ tối thiểu 1 ký tự"),
  name: yup.string().required("Tên tối thiểu 1 ký tự"),
  phone: yup
    .string()
    .matches(
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/,
      "Số điện thoại không hợp lệ",
    )
    .required("Vui lòng nhập số điện thoại"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
});

type UpdateFormData = yup.InferType<typeof updateSchema>;

type UpdateFormProps = {};

const UpdateInfoForm = ({}: UpdateFormProps) => {
  const data = {
    surname: "Lưu",
    name: "Long",
    phone: "0329039324",
    address: "Thuận Thành - Bắc Ninh",
    email: "long06072003@gmail.com",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: yupResolver(updateSchema),
  });

  const onSubmit = (data: UpdateFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography sx={{ mb: 1, fontWeight: "bold", color: "#fff" }}>
            Họ
          </Typography>
          <TextField
            fullWidth
            placeholder="Họ"
            {...register("surname")}
            error={!!errors.surname}
            helperText={errors.surname?.message}
            className="input-field"
            defaultValue={data.surname}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography sx={{ mb: 1, fontWeight: "bold", color: "#fff" }}>
            Tên
          </Typography>
          <TextField
            fullWidth
            placeholder="Tên"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            className="input-field"
            defaultValue={data.name}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography sx={{ mb: 1, fontWeight: "bold", color: "#fff" }}>
            Số điện thoại
          </Typography>
          <TextField
            fullWidth
            placeholder="Số điện thoại"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            className="input-field"
            defaultValue={data.phone}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography sx={{ mb: 1, fontWeight: "bold", color: "#fff" }}>
            Địa chỉ
          </Typography>
          <TextField
            fullWidth
            placeholder="Địa chỉ"
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
            className="input-field"
            defaultValue={data.address}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography sx={{ mb: 1, fontWeight: "bold", color: "#fff" }}>
            Email
          </Typography>
          <TextField
            fullWidth
            defaultValue={data.email}
            sx={{
              backgroundColor: "#020817",
              borderRadius: "8px",
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#fff",
                color: "#fff",
              },

              "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
            }}
            disabled={true}
          />
        </Grid>
      </Grid>
      <MyButton
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#FFD700",
          color: "#000",
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#FFC000",
          },
          justifySelf: "end",
          alignItems: "center",
          display: "flex",
          textTransform: "none",
          "&::first-letter": {
            textTransform: "uppercase",
          },
        }}
      >
        Lưu thông tin
      </MyButton>
    </form>
  );
};

export default UpdateInfoForm;
