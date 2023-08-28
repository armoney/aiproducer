import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SeeV",
  description: "Bring your resume to life!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Script src="https://js.stripe.com/v3/" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
