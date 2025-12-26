import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "SpeakLingo",
  description: "Syping: Speak + Type. The faster way to write. Transform your voice into text instantly with zero lag.",
  keywords: ["voice typing", "speech to text", "productivity", "voice recognition", "dictation software"],
  authors: [{ name: "Syping Inc" }],
  icons: {
    icon: "/1.webp",
    apple: "/1.webp"
  },
  openGraph: {
    title: "Syping - Kill the Keyboard",
    description: "Syping: Speak + Type. The faster way to write. Transform your voice into text instantly with zero lag.",
    type: "website",
    url: "https://syping.com",
    siteName: "SpeakLingo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syping - Voice to Text"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Syping - Kill the Keyboard",
    description: "Syping: Speak + Type. The faster way to write.",
    images: ["/og-image.png"],
    creator: "@syping"
  },
  robots: {
    index: true,
    follow: true
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <ErrorBoundary>
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="20a26365-26c5-4232-b0ed-08ff9b332ab6"
          />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
