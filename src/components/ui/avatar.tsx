import { Avatar, AvatarProps } from "@mui/material";

interface MyAvatarProps extends AvatarProps {}

const MyAvatar: React.FC<MyAvatarProps> = (props) => {
  return <Avatar {...props} />;
};

export default MyAvatar;
