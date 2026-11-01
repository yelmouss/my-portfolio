"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

import { useColorMode } from "@/components/ThemeRegistry";

import "./CookieConsentBanner.css";

const texts = {
  fr: {
    title: "Nous respectons votre vie privée",
    description:
      "Nous utilisons des cookies de mesure d'audience (Google Analytics) pour améliorer le site. Ils ne sont déposés qu'avec votre accord.",
    acceptAll: "Tout accepter",
    rejectAll: "Tout refuser",
    manage: "Personnaliser",
    modalTitle: "Préférences de cookies",
    save: "Enregistrer mes choix",
    necessaryTitle: "Cookies strictement nécessaires",
    necessaryDesc: "Indispensables au fonctionnement du site (langue, thème). Ils ne peuvent pas être désactivés.",
    analyticsTitle: "Mesure d'audience",
    analyticsDesc: "Google Analytics nous aide à comprendre comment le site est utilisé, de manière agrégée.",
    moreTitle: "Plus d'informations",
    moreDesc: "Pour toute question sur cette politique, contactez-nous via la page contact.",
  },
  en: {
    title: "We respect your privacy",
    description:
      "We use analytics cookies (Google Analytics) to improve the website. They are only set with your consent.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    manage: "Customize",
    modalTitle: "Cookie preferences",
    save: "Save my choices",
    necessaryTitle: "Strictly necessary cookies",
    necessaryDesc: "Required for the site to work (language, theme). They cannot be disabled.",
    analyticsTitle: "Analytics",
    analyticsDesc: "Google Analytics helps us understand, in aggregate, how the site is used.",
    moreTitle: "More information",
    moreDesc: "For any question about this policy, contact us through the contact page.",
  },
  ar: {
    title: "نحترم خصوصيتك",
    description:
      "نستخدم ملفات تعريف الارتباط التحليلية (Google Analytics) لتحسين الموقع، ولا يتم تفعيلها إلا بموافقتك.",
    acceptAll: "قبول الكل",
    rejectAll: "رفض الكل",
    manage: "تخصيص",
    modalTitle: "تفضيلات ملفات تعريف الارتباط",
    save: "حفظ اختياراتي",
    necessaryTitle: "ملفات ضرورية للغاية",
    necessaryDesc: "لازمة لعمل الموقع (اللغة، المظهر) ولا يمكن تعطيلها.",
    analyticsTitle: "التحليلات",
    analyticsDesc: "تساعدنا Google Analytics على فهم كيفية استخدام الموقع بشكل مجمّع.",
    moreTitle: "مزيد من المعلومات",
    moreDesc: "لأي استفسار حول هذه السياسة، تواصل معنا عبر صفحة الاتصال.",
  },
};

const buildTranslation = (c) => ({
  consentModal: {
    title: c.title,
    description: c.description,
    acceptAllBtn: c.acceptAll,
    acceptNecessaryBtn: c.rejectAll,
    showPreferencesBtn: c.manage,
  },
  preferencesModal: {
    title: c.modalTitle,
    acceptAllBtn: c.acceptAll,
    acceptNecessaryBtn: c.rejectAll,
    savePreferencesBtn: c.save,
    sections: [
      { title: c.necessaryTitle, description: c.necessaryDesc, linkedCategory: "necessary" },
      { title: c.analyticsTitle, description: c.analyticsDesc, linkedCategory: "analytics" },
      { title: c.moreTitle, description: c.moreDesc },
    ],
  },
});

export default function CookieConsentBanner({ locale, gaId }) {
  const { mode } = useColorMode();
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("cc--darkmode", mode === "dark");
  }, [mode]);

  useEffect(() => {
    const sync = () => setAnalyticsAllowed(CookieConsent.acceptedCategory("analytics"));

    CookieConsent.run({
      revision: 1,
      guiOptions: {
        consentModal: { layout: "box inline", position: "bottom left", equalWeightButtons: true, flipButtons: false },
        preferencesModal: { layout: "box", equalWeightButtons: true, flipButtons: false },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          autoClear: {
            cookies: [{ name: /^(_ga|_gid)/ }],
          },
        },
      },
      language: {
        default: locale in texts ? locale : "fr",
        rtl: "ar",
        autoDetect: "document",
        translations: {
          fr: buildTranslation(texts.fr),
          en: buildTranslation(texts.en),
          ar: buildTranslation(texts.ar),
        },
      },
      onConsent: sync,
      onChange: sync,
    });
  }, [locale]);

  useEffect(() => {
    if (CookieConsent.validConsent()) CookieConsent.setLanguage(locale in texts ? locale : "fr");
  }, [locale]);

  return analyticsAllowed && gaId ? <GoogleAnalytics gaId={gaId} /> : null;
}
