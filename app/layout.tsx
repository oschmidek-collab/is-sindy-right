import React from "react";
import "./globals.css";

export const metadata = {
  title: "האם סינדי צודקת",
  description: "מכשיר רשמי לאימות עובדות במשפחה",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
