import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cusCursive = DM_Serif_Display({
  variable: "--font-custom-cursive",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zettawise - Studio Bizkit",
  description:
    "A project by Studio Bizkit. Visit www.studiobizkit.com to learn more.",
  keywords: [
    "Zettawise",
    "Studio Bizkit",
    "Web Development",
    "Design Agency",
    "Tech Project",
  ],
  authors: [{ name: "Studio Bizkit", url: "https://www.studiobizkit.com" }],
  creator: "Studio Bizkit",
  publisher: "Studio Bizkit",
  metadataBase: new URL("https://www.studiobizkit.com"),
  openGraph: {
    title: "Zettawise - Studio Bizkit",
    description:
      "A project by Studio Bizkit. Visit www.studiobizkit.com to learn more.",
    url: "https://www.studiobizkit.com",
    siteName: "Studio Bizkit",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://i.ibb.co/x8gTV9B8/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Zettawise - Studio Bizkit",
        type: "image/jpeg",
        secureUrl: "https://i.ibb.co/x8gTV9B8/thumbnail.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zettawise - Studio Bizkit",
    description:
      "A project by Studio Bizkit. Visit www.studiobizkit.com to learn more.",
    site: "@StudioBizkit",
    images: ["https://i.ibb.co/x8gTV9B8/thumbnail.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cusCursive.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
