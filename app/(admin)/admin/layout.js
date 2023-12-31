import { Inter } from "next/font/google";
import Link from "next/link";
import StoreProvider from "@/components/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "admin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div className="">
      <h2 className="px-10 bg-indigo-300 py-3 text-2xl font-semibold text-white">
        Admin panel
      </h2>
      <ul className="px-10 flex gap-2 my-2">
        <Link href={"/"}>
          <li className="bg-indigo-400 text-white px-2 rounded-md w-fit ">
            Home
          </li>
        </Link>
        <Link href={"/admin"}>
          <li className="bg-indigo-400 text-white px-2 rounded-md w-fit ">
            Admin
          </li>
        </Link>
        <Link href={"/admin/product/add"}>
          <li className="bg-indigo-400 text-white px-2 rounded-md w-fit ">
            Add
          </li>
        </Link>
        <Link href={"/admin/user"}>
          <li className="bg-indigo-400 text-white px-2 rounded-md w-fit ">
            users
          </li>
        </Link>
      </ul>

      <div className="px-10">{children}</div>
    </div>
  );
}
