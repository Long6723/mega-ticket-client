import * as React from "react";
import ProfileContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thông tin người dùng",
  description: "...",
};

export default async function ProfilePage() {
  return <ProfileContainer />;
}
