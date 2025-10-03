import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Busy Making Media",
  description: "Busymakingmedia is a creative production studio specializing in audio/video content for social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
