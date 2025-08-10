"use client";
import { useState } from "react";
import MyButton from "@/components/ui/button";
import MyCheckbox from "@/components/ui/checkbox";
import MyInput from "@/components/ui/input";
import MyModal from "@/components/ui/modal";
import MyAvatar from "@/components/ui/avatar";
import MyTable from "@/components/ui/table";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const tableData = [
    { id: 1, name: "Nguyễn Văn A", email: "a.nguyen@example.com", age: 25 },
    { id: 2, name: "Trần Thị B", email: "b.tran@example.com", age: 30 },
    { id: 3, name: "Lê Văn C", email: "c.le@example.com", age: 28 },
    { id: 4, name: "Phạm Thị D", email: "d.pham@example.com", age: 22 },
  ];

  const tableColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Họ tên", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "age", headerName: "Tuổi", width: 90 },
  ];

  return (
    <>
      <MyButton>Đăng ký</MyButton>
      <MyButton
        onClick={handleOpenModal}
        style={{ margin: "0px 0px 0px 50px" }}
      >
        Mở Modal
      </MyButton>

      <MyInput style={{ width: "200px", margin: "0px 0px 0px 50px" }} />
      <MyCheckbox />

      <MyModal open={isModalOpen} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "40%",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            minWidth: "300px",
          }}
        >
          <p>Hello</p>
          <MyButton onClick={handleCloseModal}>Đóng</MyButton>
        </div>
      </MyModal>

      <MyAvatar />

      <MyTable
        rows={tableData}
        columns={tableColumns}
        style={{ marginTop: "20px" }}
      />
    </>
  );
}
