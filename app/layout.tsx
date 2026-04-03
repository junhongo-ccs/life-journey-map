import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "ホンゴウ引っ越しマップ",
  description: "生まれた街から現在まで、引越し遍歴を3Dマップでたどる自己紹介サイト",
  metadataBase: new URL("https://junhongo-ccs.github.io/life-journey-map/"),
  openGraph: {
    title: "ホンゴウ引っ越しマップ",
    description: "生まれた街から現在まで、引越し遍歴を3Dマップでたどる自己紹介サイト",
    url: "https://junhongo-ccs.github.io/life-journey-map/",
    siteName: "ホンゴウ引っ越しマップ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-image.png",
        width: 1200,
        height: 630,
        alt: "ホンゴウ引っ越しマップの紹介画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ホンゴウ引っ越しマップ",
    description: "生まれた街から現在まで、引越し遍歴を3Dマップでたどる自己紹介サイト",
    images: ["/ogp-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
