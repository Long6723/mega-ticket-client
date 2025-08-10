import { Checkbox, CheckboxProps } from "@mui/material";
import { FC } from "react";

interface MyCheckboxProps extends CheckboxProps {}

const MyCheckbox: FC<MyCheckboxProps> = ({
  color = "primary",
  size = "medium",
  ...props
}) => {
  return <Checkbox color={color} size={size} {...props} />;
};

export default MyCheckbox;
