import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import AppLayout from "@/components/AppLayout";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solution Architect | Secure Integration for Banking & Regulated Enterprise",
  description: "Portfolio of a Solution Architect specialising in secure integration, identity and network-aware architectures for banking and regulated enterprise environments.",
  keywords: ["Solution Architect", "Integration Architecture", "Security Architecture", "Banking", "OIDC", "API Design", "OpenAPI", "Identity Flows", "Regulated Environments"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <AppLayout>{children}</AppLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
