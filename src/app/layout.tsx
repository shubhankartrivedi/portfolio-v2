import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";
import "./globals.css";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Be Right Back",
  description: "Under Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
