import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import km from "./locales/km.json";

const STORAGE_KEY = "resiliencenet-language";
const savedLanguage = localStorage.getItem(STORAGE_KEY);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    km: { translation: km },
  },
  lng: savedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;