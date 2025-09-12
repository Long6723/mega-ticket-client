"use server";

import * as React from "react";
import ProfileContainer from "./components/container";

export default async function ProfilePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <ProfileContainer />;
}
