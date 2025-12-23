import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "האם סינדי צודקת?",
  description: "RightBot™ — מערכת רטנית לאימות עובדות במשפחה",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
