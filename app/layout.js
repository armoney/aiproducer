import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Script from "next/script";
import { StrictMode } from "react";
import Footer from "../app/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SeeV Video Resumes",
  description: "Video resumes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://js.stripe.com/v3/" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N49WGS9W');
        `}
      </Script>

      <StrictMode>
        <body className={inter.className}>
          {children}
          <Analytics />
          <Footer />
        </body>
        <Script id="google-tag-manager-2">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N49WGS9W"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
        </Script>
      </StrictMode>
    </html>
  );
}
