import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>(null!);
export const LanguageContext = createContext<LanguageContextType>(null!);

export const AppProvider = ({ children }: { children?: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  useEffect(() => {
    if (theme !== "dark") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};
