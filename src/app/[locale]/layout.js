import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import "../globals.css";

import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";
import ThemeRegistry from "@/components/ThemeRegistry";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();

  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeRegistry>
          <CookieConsentBanner
            locale={locale}
            gaId={process.env.NEXT_PUBLIC_GA_ID}
            gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-NQ835PCS"}
          />
          <SmoothScrollProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </SmoothScrollProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
