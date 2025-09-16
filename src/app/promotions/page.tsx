import * as React from "react";
import PromotionContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khuyến mãi",
  description: "...",
};

export default async function PromotionPage() {
  return <PromotionContainer />;
}
