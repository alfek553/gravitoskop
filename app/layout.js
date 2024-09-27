import localFont from "next/font/local";
import '@styles/normalize.scss';
import '@styles/global.scss';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "gravitoskop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
        </body>
    </html>
  );
}

