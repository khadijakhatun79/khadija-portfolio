import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khadija Khatun | Frontend Developer",
  description:
    "Frontend Developer specializing in scalable ecosystems, performance optimization, and pixel-perfect UI execution.",
  keywords: [
    "Khadija Khatun",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Rajshahi Bangladesh",
  ],
  authors: [{ name: "Khadija Khatun" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${epilogue.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 dark:bg-[#030712] dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}