import { Modal, ModalProps } from "@mui/material";

interface MyModalProps extends ModalProps {}

const MyModal: React.FC<MyModalProps> = (props) => {
  return <Modal {...props}></Modal>;
};

export default MyModal;
