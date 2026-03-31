import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Ryan Sim — Software Engineer",
  description:
    "Personal portfolio of Ryan Sim — Associate System Engineer at Visa. Building robust systems across software, infrastructure, and finance.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ryan Sim — Software Engineer",
    description:
      "Personal portfolio of Ryan Sim — Associate System Engineer at Visa. Building robust systems across software, infrastructure, and finance.",
    siteName: "Ryan Sim",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ryan Sim — Software Engineer",
    description:
      "Personal portfolio of Ryan Sim — Associate System Engineer at Visa.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
