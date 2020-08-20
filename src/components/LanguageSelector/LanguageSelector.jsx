import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector({ mainClass }) {
  const [, i18n] = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    const htmlEl = document.getElementsByTagName('html');
    if (htmlEl && htmlEl.length > 0) {
      htmlEl[0].setAttribute('lang', i18n.language);
    }
  }

  return (
    <select className="custom-select" defaultValue={i18n.language} onChange={changeLanguage}>
      <option value="zh-CN">简体中文</option>
      <option value="zh-TW">正體中文</option>
      <option value="en-US">English</option>
    </select>
  );
}

export default LanguageSelector;