import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderBar from "./ui/HeaderBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geoguessr Tournament Calendar",
  description: "Overview of coming geoguessr tournaments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderBar title="Tournament Calendar" />
        <div>{children}</div>
      </body>
    </html>
  );
}
