import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidflynncoutts.com"),
  title: "David Flynn-Coutts | Senior Product Manager",
  description: "Senior Product Manager with 6 years of experience in health tech and telecommunications. Track record of driving revenue growth, streamlining operations and building products people like to use.",
  keywords: ["Product Manager", "Senior Product Manager", "Health Tech", "Telecommunications", "London", "David Flynn-Coutts"],
  authors: [{ name: "David Flynn-Coutts" }],
  creator: "David Flynn-Coutts",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://davidflynncoutts.com",
    title: "David Flynn-Coutts | Senior Product Manager",
    description: "Senior Product Manager with 6 years of experience in health tech and telecommunications. Track record of driving revenue growth, streamlining operations and building products people like to use.",
    siteName: "David Flynn-Coutts Portfolio",
    images: [
      {
        url: "/headshot.jpeg",
        width: 400,
        height: 400,
        alt: "David Flynn-Coutts",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Flynn-Coutts | Senior Product Manager",
    description: "Senior Product Manager with 6 years of experience in health tech and telecommunications.",
    images: ["/headshot.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
