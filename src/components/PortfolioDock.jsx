"use client";

import { FR, GB, SA } from "country-flag-icons/react/3x2";
import {
  House,
  Mail,
  Moon,
  Phone,
  Sun,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { useColorMode } from "@/components/ThemeRegistry";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const flags = { fr: FR, en: GB, ar: SA };

export default function PortfolioDock({ locale, messages }) {
  const { mode, setMode } = useColorMode();
  const pathname = usePathname();
  const ThemeIcon = mode === "dark" ? Sun : Moon;
  const currentPath = pathname?.replace(/\/$/, "") || `/${locale}`;
  const isCurrent = (path) => {
    const normalizedPath = path.replace(/\/$/, "");
    return normalizedPath === `/${locale}`
      ? currentPath === normalizedPath
      : currentPath === normalizedPath || currentPath.startsWith(`${normalizedPath}/`);
  };

  const languageItems = routing.locales.map((targetLocale) => {
    const Flag = flags[targetLocale];
    return {
      title: messages.languages[targetLocale],
      icon: <Flag aria-hidden="true" width={24} height={16} />,
      href: `/${targetLocale}`,
    };
  });

  const navigationItems = [
    {
      title: messages.nav.home,
      icon: <House aria-hidden="true" size={20} />,
      href: `/${locale}`,
      active: isCurrent(`/${locale}`),
    },
    {
      title: messages.nav.about,
      icon: <UserRound aria-hidden="true" size={20} />,
      href: `/${locale}/about`,
      active: isCurrent(`/${locale}/about`),
    },
    {
      title: messages.nav.contact,
      icon: <Mail aria-hidden="true" size={20} />,
      href: `/${locale}/contact`,
      active: isCurrent(`/${locale}/contact`),
    },
    {
      title: messages.nav.call,
      icon: <Phone aria-hidden="true" size={20} />,
      href: "tel:+212612865681",
    },
    {
      title: messages.nav.theme,
      icon: <ThemeIcon aria-hidden="true" size={20} />,
      href: "#theme",
      onClick: (event) => {
        event.preventDefault();
        setMode(mode === "dark" ? "light" : "dark");
      },
    },
  ];

  const whatsappHref = `https://wa.me/212612865681?text=${encodeURIComponent(
    messages.nav.whatsapp,
  )}`;

  return (
    <>
      <div aria-hidden="true" className="h-[76px] w-full md:h-24" />
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-40 h-[76px] border-b border-white/10 bg-black/30 backdrop-blur-xl md:h-24 dark:bg-zinc-950/50"
      />
      <Link
        href="/"
        locale={locale}
        aria-label="Yelmouss"
        title="Yelmouss"
        className="fixed top-3 left-4 z-50 flex h-14 items-center md:top-4 md:h-16"
      >
        <Image
          src={mode === "dark" ? "/Mascotte B.png" : "/Mascotte Noir.png"}
          alt="Yelmouss"
          width={120}
          height={120}
          priority
          style={{ width: "auto", height: "100%", objectFit: "contain" }}
        />
      </Link>
      <nav
        aria-label="Language selection"
        className="fixed top-3.5 right-4 z-50 flex items-center gap-1 rounded-xl border border-white/15 bg-white/10 p-1.5 shadow-lg backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-zinc-900/60"
      >
        {routing.locales.map((targetLocale) => {
          const Flag = flags[targetLocale];
          return (
            <Link
              key={targetLocale}
              href="/"
              locale={targetLocale}
              aria-label={messages.languages[targetLocale]}
              title={messages.languages[targetLocale]}
              className="flex h-7 w-8 shrink-0 items-center justify-center rounded-md p-1 transition hover:bg-lime-400/20"
            >
              <Flag
                aria-hidden="true"
                width={24}
                height={16}
                style={{ display: "block", width: 24, height: 16, flexShrink: 0 }}
              />
              <span className="sr-only">{messages.languages[targetLocale]}</span>
            </Link>
          );
        })}
      </nav>
      <FloatingDock
        items={[...navigationItems, ...languageItems]}
        mobileItems={navigationItems}
        desktopClassName="fixed top-4 right-4 z-50 mx-0 h-16 rounded-2xl border border-white/15 bg-white/10 px-4 pb-3 shadow-2xl shadow-black/20 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60"
        mobileClassName="bottom-4 right-4"
      />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={messages.nav.whatsapp}
        title={messages.nav.whatsapp}
        className="fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center transition-transform hover:scale-110 md:bottom-6 md:left-auto md:right-6"
      >
        <Image
          src="/whatsapp.svg"
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
        <span className="sr-only">{messages.nav.whatsapp}</span>
      </a>
    </>
  );
}
