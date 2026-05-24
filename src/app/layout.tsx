import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ferar — Ride with Confidence",
  description:
    "Ferar connects riders and drivers for safe, fast, and affordable rides. Download the app today.",
  openGraph: {
    title: "Ferar — Ride with Confidence",
    description: "Safe, fast, and affordable rides at your fingertips.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
