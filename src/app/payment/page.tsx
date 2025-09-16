import * as React from "react";
import PaymentContainer from "./components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanh toán",
  description: "...",
};

export default async function PaymentPage() {
  return <PaymentContainer />;
}
