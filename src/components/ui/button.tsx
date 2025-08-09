import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

const BaseButton: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

const MyButton = Object.assign(Button, BaseButton);

export default MyButton;
