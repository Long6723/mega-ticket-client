import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface MyButtonProps extends ButtonProps {
  children: ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  );
};

export default MyButton;
