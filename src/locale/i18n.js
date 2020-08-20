import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import zhCN from "./zh-CN.json";
import zhTW from "./zh-TW.json";
import enUS from "./en-US.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': enUS,
      'zh-CN': zhCN,
      'zh-TW': zhTW,
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  });

const htmlEl = document.getElementsByTagName('html');
if (htmlEl && htmlEl.length > 0) {
  htmlEl[0].setAttribute('lang', i18n.language);
}
