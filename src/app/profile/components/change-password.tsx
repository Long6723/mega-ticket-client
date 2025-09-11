"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyButton from "@/components/ui/button";
import MyModal from "@/components/ui/modal";
import { TextField, Typography, Box } from "@mui/material";

const changePasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

type ChangePasswordFormData = yup.InferType<typeof changePasswordSchema>;

type ChangePasswordFormProps = {
  open: boolean;
  onClose: () => void;
};

const ChangePasswordForm = ({ open, onClose }: ChangePasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordFormData) => {
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
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
            >
              Mật khẩu hiện tại
            </Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="Mật khẩu hiện tại"
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
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
            >
              Mật khẩu mới
            </Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="Mật khẩu mới"
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
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontWeight: "bold", color: "#000" }}
            >
              Xác nhận mật khẩu mới
            </Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="Xác nhận mật khẩu mới"
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

export default ChangePasswordForm;
