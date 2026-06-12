import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flynncoutts.com"),
  title: "David Flynn-Coutts | Senior Product Manager",
  description:
    "Senior Product Manager with eight years in NHS health tech and telecoms, most recently leading integration and AI products at Consultant Connect.",
  keywords: [
    "Product Manager",
    "Senior Product Manager",
    "Health Tech",
    "Telecommunications",
    "London",
    "David Flynn-Coutts",
  ],
  authors: [{ name: "David Flynn-Coutts" }],
  creator: "David Flynn-Coutts",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://flynncoutts.com",
    title: "David Flynn-Coutts | Senior Product Manager",
    description:
      "Senior Product Manager with eight years in NHS health tech and telecoms, most recently leading integration and AI products at Consultant Connect.",
    siteName: "David Flynn-Coutts Portfolio",
    images: [
      {
        url: "/7819-0750.jpg",
        width: 400,
        height: 400,
        alt: "David Flynn-Coutts",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Flynn-Coutts | Senior Product Manager",
    description:
      "Senior Product Manager with eight years in NHS health tech and telecoms.",
    images: ["/7819-0750.jpg"],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${schibsted.variable} ${splineMono.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
