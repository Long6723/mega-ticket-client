import * as React from "react";
import MovieDetailContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết phim",
  description: "...",
};

export default function MovieDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <MovieDetailContainer
      params={{
        slug: slug,
      }}
    />
  );
}
