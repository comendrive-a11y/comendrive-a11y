import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buggy Safari & Kids Quad Fethiye | Come & Drive Official",
  description:
    "Buggy safari Fethiye and kids quad tours. Official TÜRSAB travel agency. Off-road adventure, beach stop, easy booking via WhatsApp.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Come & Drive",
    url: "https://buggyfethiye.com",
    description:
      "Official TÜRSAB travel agency in Fethiye offering buggy safari and kids quad tours.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "556",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fethiye",
      addressRegion: "Muğla",
      addressCountry: "TR",
    },
  };

  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </body>
    </html>
  );
}
