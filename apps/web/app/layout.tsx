import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ole Herland - Full Stack Developer",
  description: "I’m Ole Herland, a Full Stack Developer based in Norway 🇧🇻 I love my family, technology, science, philosophy and investing. I’m here to make an impact 💥",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SpeedInsights />
    </html>
  );
}
