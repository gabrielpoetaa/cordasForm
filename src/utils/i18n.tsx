import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBRTranslation from "./locales/ptBR-translation.json"; // Arquivo de tradução em português
import enTranslation from "./locales/en-translation.json"; // Arquivo de tradução em inglês

export const I18n = () => {
  i18n.use(initReactI18next).init({
    resources: {
      pt: {
        translation: ptBRTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18n;
