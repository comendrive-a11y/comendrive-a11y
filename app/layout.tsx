import "./globals.css";

export const metadata = {
  title: "Buggy Safari & Kids Quad Fethiye | Come & Drive Official",
  description:
    "Buggy safari Fethiye and kids quad tours. Official travel agency. Off-road adventure, beach stop, easy booking via WhatsApp.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
