import { useTranslation } from "react-i18next"; // Hook do react-i18next para traduções
import { CustomSwitch } from "./MUI_components/CustomSwitch";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-end mr-8 mt-8">
      <CustomSwitch
        checked={i18n.language === "en"} // Define o estado do switch com base no idioma atual
        onChange={toggleLanguage}
      />
    </div>
  );
};
