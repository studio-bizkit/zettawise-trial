import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zettwise - Studio Bizkit",
  description: "A project by Studio Bizkit. Visit www.studiobizkit.com to learn more.",
  keywords: ["Zettwise", "Studio Bizkit", "Web Development", "Design Agency", "Tech Project"],
  authors: [{ name: "Studio Bizkit", url: "https://www.studiobizkit.com" }],
  creator: "Studio Bizkit",
  publisher: "Studio Bizkit",
  metadataBase: new URL("https://www.studiobizkit.com"),
  themeColor: "#ee3224",
  openGraph: {
    title: "Zettwise - Studio Bizkit",
    description: "A project by Studio Bizkit. Visit www.studiobizkit.com to learn more.",
    url: "https://www.studiobizkit.com",
    siteName: "Studio Bizkit",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://i.ibb.co/x8gTV9B8/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Zettwise - Studio Bizkit",
        type: "image/jpeg",
        secureUrl: "https://i.ibb.co/x8gTV9B8/thumbnail.jpg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zettwise - Studio Bizkit",
    description: "A project by Studio Bizkit. Visit www.studiobizkit.com to learn more.",
    site: "@StudioBizkit",
    images: ["https://i.ibb.co/x8gTV9B8/thumbnail.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
