import type { Metadata } from "next";
import RegisterTheme from "@/component/RegisterTheme";

export const metadata: Metadata = {
  title: "Company Name",
  description: "Description of your company here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RegisterTheme>
          {children}
        </RegisterTheme>
      </body>
    </html>
  );
}
