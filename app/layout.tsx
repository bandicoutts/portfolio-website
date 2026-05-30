import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidflynncoutts.com"),
  title: "David Flynn-Coutts | Senior Product Manager",
  description:
    "Senior Product Manager with 6 years of experience in health tech and telecommunications. Track record of driving revenue growth, streamlining operations and building products people like to use.",
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
    url: "https://davidflynncoutts.com",
    title: "David Flynn-Coutts | Senior Product Manager",
    description:
      "Senior Product Manager with 6 years of experience in health tech and telecommunications. Track record of driving revenue growth, streamlining operations and building products people like to use.",
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
    description:
      "Senior Product Manager with 6 years of experience in health tech and telecommunications.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
