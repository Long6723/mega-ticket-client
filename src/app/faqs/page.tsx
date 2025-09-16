import * as React from "react";
import FaqContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q&A",
  description: "...",
};

export default async function FaqPage() {
  return <FaqContainer />;
}
