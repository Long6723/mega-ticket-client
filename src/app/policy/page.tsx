import * as React from "react";
import PolicyContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách",
  description: "...",
};

export default async function PolicyPage() {
  return <PolicyContainer />;
}
