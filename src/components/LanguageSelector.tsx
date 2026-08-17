import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "km", label: "ខ្មែរ" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      className="language-selector"
      value={i18n.language}
      onChange={handleChange}
      aria-label="Select language"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}