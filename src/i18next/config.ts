import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import INFOBAR_EN from "../locales/en/info-bar-en.json";
import INFOBAR_VI from "../locales/vi/info-bar-vi.json";
import MENUBAR_EN from "../locales/en/menu-bar-en.json";
import MENUBAR_VI from "../locales/vi/menu-bar-vi.json";
import CONTENT_EN from "../locales/en/content-en.json";
import CONTENT_VI from "../locales/vi/content-vi.json";

export const resources = {
  en: {
    infoBar: INFOBAR_EN,
    menuBar: MENUBAR_EN,
    content: CONTENT_EN,
  },
  vi: {
    infoBar: INFOBAR_VI,
    menuBar: MENUBAR_VI,
    content: CONTENT_VI,
  },
} as const;
export const defaultNS = "infoBar";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  debug: true,
  ns: ["infoBar", "menuBar", "content"],
  defaultNS,
  resources,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
