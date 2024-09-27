import { Inter } from "next/font/google";
import '@styles/normalize.scss';
import '@styles/global.scss';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gravitoskop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
        </body>
    </html>
  );
}
