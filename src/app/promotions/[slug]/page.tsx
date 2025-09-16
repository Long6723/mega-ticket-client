import * as React from "react";
import PromotionDetailContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết khuyến mãi",
  description: "...",
};

export default function PromotionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <PromotionDetailContainer
      params={{
        slug: slug,
      }}
    />
  );
}
