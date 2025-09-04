"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyButton from "@/components/ui/button";
import MyModal from "../../ui/modal";
import { TextField, Typography, Box } from "@mui/material";

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
});

type ForgotPasswordFormData = yup.InferType<typeof forgotPasswordSchema>;

type ForgotPasswordFormProps = {
  open: boolean;
  onClose: () => void;
};

const ForgotPasswordForm = ({ open, onClose }: ForgotPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
  };

  return (
    <MyModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "#fff",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          fontWeight="bold"
          color="#000"
        >
          Quên mật khẩu
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            placeholder="Email"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ccc",
                },
              },
              "& .MuiFormHelperText-root": {
                marginLeft: 0,
                marginRight: 0,
              },
            }}
          />
          <MyButton
            type="submit"
            fullWidth
            sx={{
              borderRadius: "20px",
              backgroundColor: "#FFD700",
              color: "black",
              fontWeight: "bold",
              py: 1.5,
              "&:hover": {
                backgroundColor: "#FFC000",
              },
              mb: 2,
            }}
          >
            Xác nhận
          </MyButton>
        </form>
      </Box>
    </MyModal>
  );
};

export default ForgotPasswordForm;
