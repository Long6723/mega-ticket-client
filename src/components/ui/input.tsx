import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

interface MyInputProps extends Omit<TextFieldProps, "children"> {}

const MyInput: FC<MyInputProps> = ({
  variant = "outlined",
  fullWidth = true,
  size = "medium",
  ...props
}) => {
  return (
    <TextField variant={variant} fullWidth={fullWidth} size={size} {...props} />
  );
};

export default MyInput;
