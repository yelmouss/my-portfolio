import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    icons: { apple: "/apple-icon.png" },
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
          <SmoothScrollProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </SmoothScrollProvider>
        </ThemeRegistry>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
