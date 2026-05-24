import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ferar — City Delivery Platform",
  description:
    "Ferar connects customers, riders, and operators for fast city delivery, live tracking, wallet payments, and safer logistics.",
  openGraph: {
    title: "Ferar — City Delivery Platform",
    description: "Fast city delivery, live tracking, and connected rider operations.",
    type: "website",
  },
  icons: { icon: "/ferar-logo.png" },
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
