import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Come and Drive Travel Agency",
  description: "Fethiye buggy safari, kids ATV and adventure tours.",
};
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#f7f4ee",
        }}
      >
        {children}
      </body>
    </html>
  );
}
