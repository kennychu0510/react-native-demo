import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

export type Languages = 'en' | 'ch'

export const resources = {
  en: {
    translation: {
      'Login Page': 'Login Page',
      'Username': 'Username',
      'Password': 'Password',
      'Change Language': '中文',
      'Login Button': 'Login',
      'Logout Button': 'Logout',
      'Categories': 'Categories',
    },
  },
  ch: {
    translation: {
      'Login Page': '登入頁面',
      'Username': '用戶名',
      'Password': '密碼',
      'Change Language': 'English',
      'Login Button': '登入',
      'Logout Button': '登出',
      'Categories': '種類',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

export const changeLanguage = () => {
  switch (i18n.language) {
    case 'en':
      i18n.changeLanguage('ch');
      break;
    case 'ch':
      i18n.changeLanguage('en');
      break;
  }
};
