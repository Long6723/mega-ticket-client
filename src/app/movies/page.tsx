import * as React from "react";
import MovieContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch chiếu",
  description: "...",
};

export default async function MoviePage() {
  return <MovieContainer />;
}
