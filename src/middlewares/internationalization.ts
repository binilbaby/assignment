import i18next, { InitOptions } from "i18next";
import i18nextMiddleware from "i18next-express-middleware";

import resources from "./locales";

const options: InitOptions = {
  lng: "en",
  ns: ["errors"],
  defaultNS: "errors",
  fallbackLng: ["en"],
  preload: ["en", "my"],
  debug: false,
  // tslint:disable-next-line: object-shorthand-properties-first
  resources
};

const i18n = i18next.createInstance().use(i18nextMiddleware.LanguageDetector);
// .use(FilesystemBackend);

i18n.init(options);

export default i18n;
