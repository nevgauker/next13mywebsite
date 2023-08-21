import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Stack Developer",
  description: "Rotem Nevgauker - Experienced IOS and Full  Stack Developer. Here you find  all the information about me and how to reach me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
