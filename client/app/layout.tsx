import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/redux/provider";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Setup from "./components/utils/Setup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Full Authentication in Django and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup/>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
