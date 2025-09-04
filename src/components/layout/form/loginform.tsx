"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyButton from "@/components/ui/button";
import MyModal from "../../ui/modal";
import { TextField, Typography, Box, Link } from "@mui/material";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

type LoginFormProps = {
  open: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onOpenForgotPassword: () => void;
};

const LoginForm = ({
  open,
  onClose,
  onOpenRegister,
  onOpenForgotPassword,
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
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
          Đăng nhập
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
            >
              Email
            </Typography>
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
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
            >
              Mật khẩu
            </Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="Mật khẩu"
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                mb: 1,
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
          </Box>

          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Link
              component="button"
              type="button"
              variant="body2"
              onClick={onOpenForgotPassword}
              sx={{
                textDecoration: "none",
                color: "#FFC000",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Quên mật khẩu
            </Link>
          </Box>

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
            Đăng nhập
          </MyButton>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "#000" }}>
              Bạn chưa có tài khoản?{" "}
              <Link
                component="button"
                type="button"
                variant="body2"
                onClick={onOpenRegister}
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#FFC000",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Đăng ký
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </MyModal>
  );
};

export default LoginForm;
