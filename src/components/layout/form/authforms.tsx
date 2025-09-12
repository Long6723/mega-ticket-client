"use client";
import { useState } from "react";
import MyButton from "@/components/ui/button";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";
import ForgotPasswordForm from "./forgot-password";

const AuthForms = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);

  return (
    <>
      <MyButton
        onClick={() => setRegisterOpen(true)}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#10141b",
          border: "1px solid #fff",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          padding: "6px 25px",
          "&:hover": {
            backgroundColor: "#9ca3af",
          },
          textTransform: "none",
          "&::first-letter": {
            textTransform: "uppercase",
          },
        }}
      >
        Đăng ký
      </MyButton>

      <MyButton
        onClick={() => setLoginOpen(true)}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#FFD700",
          color: "black",
          fontWeight: "bold",
          fontSize: "16px",
          padding: "6px 20px",
          "&:hover": {
            backgroundColor: "#FFC000",
          },
          textTransform: "none",
          "&::first-letter": {
            textTransform: "uppercase",
          },
        }}
      >
        Đăng nhập
      </MyButton>

      <LoginForm
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onOpenRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
        onOpenForgotPassword={() => {
          setLoginOpen(false);
          setForgotOpen(true);
        }}
      />

      <RegisterForm
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onOpenLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />

      <ForgotPasswordForm
        open={forgotOpen}
        onClose={() => setForgotOpen(false)}
      />
    </>
  );
};

export default AuthForms;
