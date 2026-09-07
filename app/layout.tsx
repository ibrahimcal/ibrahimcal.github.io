import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: "Ibrahim Abdul Majeed, PhD — Agentic AI & Enterprise AI Delivery",
  description:
    "Senior AI leader in Riyadh. Nine years taking AI research to production at SDAIA (ALLaM), Humain, Amazon and Samsung. PhD from IISc Bangalore, six US patents.",
  keywords: [
    "Agentic AI",
    "LLM",
    "RAG",
    "LangGraph",
    "vLLM",
    "ALLaM",
    "Arabic LLM",
    "SDAIA",
    "Humain",
    "AI leadership",
    "Riyadh",
    "Saudi Arabia",
  ],
  authors: [{ name: "Ibrahim Abdul Majeed" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: DATA.url,
    title: "Ibrahim Abdul Majeed, PhD",
    description:
      "Agentic AI and enterprise AI delivery. ALLaM, SDAIA, Humain, Amazon, Samsung. Riyadh.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Abdul Majeed, PhD",
    description: "Agentic AI and enterprise AI delivery. Riyadh, Saudi Arabia.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D1315" },
    { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="font-sans"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[400] focus:rounded-sm focus:bg-brass focus:px-4 focus:py-2 focus:text-[14px] focus:font-semibold focus:text-on-brass"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(DATA.jsonLd) }}
        />
      </body>
    </html>
  );
}
