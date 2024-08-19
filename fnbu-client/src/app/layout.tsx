import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  applicationName: 'Brian Uchiha FNBU',
  title: {
    default: 'FNBU',
    template: '%s | FNBU'
  },
  description: "Campeonato sazonal de Fortnite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`main-content`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
