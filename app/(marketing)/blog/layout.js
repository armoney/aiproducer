import { StrictMode } from "react";

export default function RootLayout({ children }) {
  return (
    <StrictMode>
      <body>{children}</body>
    </StrictMode>
  );
}
