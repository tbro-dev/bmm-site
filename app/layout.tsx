import type { Metadata } from "next";
import RegisterTheme from "@/component/styles/RegisterTheme";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Raleway } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"


const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Busy Making Media",
  description: "Audio and video content for digital platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>      
      <body>
        <RegisterTheme>
          {children}
          <SpeedInsights />
          <Analytics />
        </RegisterTheme>
      </body>
    </html>
  );
}
