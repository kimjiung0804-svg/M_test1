import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enabledesign.io"),
  title: {
    default: "Enable Design — AI Product Design Partner",
    template: "%s | Enable Design",
  },
  description:
    "Enable Design turns complex AI concepts into clear, trusted product experiences — AI product framing, rapid UX validation, and design-to-delivery alignment for teams that ship with confidence.",
  keywords: [
    "Enable Design",
    "AI product design",
    "UX validation",
    "AI product strategy",
    "design partner",
    "enabledesign.io",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://enabledesign.io",
    siteName: "Enable Design",
    title: "Enable Design — AI Product Design Partner",
    description:
      "From idea to validated AI product design — faster, and with confidence. Enable Design helps teams ship AI product experiences users trust.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Enable Design — AI product design partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enable Design — AI Product Design Partner",
    description:
      "From idea to validated AI product design — faster, and with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 font-body">
        {children}
      </body>
    </html>
  );
}
