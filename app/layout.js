import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { StrictMode } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SeeV Video Resumes",
  description: "Video resumes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://js.stripe.com/v3/" />
      <StrictMode>
        <body className={inter.className}>{children}</body>
      </StrictMode>
    </html>
  );
}
