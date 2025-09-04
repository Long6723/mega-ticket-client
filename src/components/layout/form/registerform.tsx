"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyButton from "@/components/ui/button";
import MyModal from "../../ui/modal";
import { TextField, Typography, Box, Link } from "@mui/material";

const registerSchema = yup.object({
  surname: yup.string().required("Vui lòng nhập họ"),
  name: yup.string().required("Vui lòng nhập tên"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  phone: yup
    .string()
    .matches(
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/,
      "Số điện thoại không hợp lệ",
    )
    .required("Vui lòng nhập số điện thoại"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp")
    .required("Vui lòng xác nhận mật khẩu"),
});

type RegisterFormData = yup.InferType<typeof registerSchema>;

type RegisterFormProps = {
  open: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
};

const RegisterForm = ({ open, onClose, onOpenLogin }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
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
          Đăng ký
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
              >
                Họ
              </Typography>
              <TextField
                fullWidth
                placeholder="Họ"
                variant="outlined"
                {...register("surname")}
                error={!!errors.surname}
                helperText={errors.surname?.message}
                sx={{
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
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
              >
                Tên
              </Typography>
              <TextField
                fullWidth
                placeholder="Tên"
                variant="outlined"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{
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
          </Box>

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
              Số điện thoại
            </Typography>
            <TextField
              fullWidth
              placeholder="Số điện thoại"
              variant="outlined"
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={{
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

          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Box sx={{ flex: 1 }}>
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
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
              >
                Xác nhận mật khẩu
              </Typography>
              <TextField
                fullWidth
                type="password"
                placeholder="Xác nhận mật khẩu"
                variant="outlined"
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                sx={{
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
            Đăng ký
          </MyButton>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "#000" }}>
              Bạn đã có tài khoản?{" "}
              <Link
                component="button"
                type="button"
                variant="body2"
                onClick={onOpenLogin}
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#FFC000",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Đăng nhập
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </MyModal>
  );
};

export default RegisterForm;
