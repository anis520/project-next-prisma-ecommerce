import "./globals.css";
import Link from "next/link";
import Shopheader from "@/components/shopheader";

import { Inter } from "next/font/google";
import HeroDiv from "@/components/HeroDiv";
import Category from "@/components/Category";
import AllProduct from "@/components/AllProduct";
import Fotter from "@/components/Fotter";
import StoreProvider from "@/components/storeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "home items",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  ${inter.className}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}