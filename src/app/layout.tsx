import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wemark | We Mark The Difference",
  description: "Wemark xSchool Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
