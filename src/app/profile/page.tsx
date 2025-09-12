import * as React from "react";
import ProfileContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "...",
};

export default async function ProfilePage() {
  return <ProfileContainer />;
}
