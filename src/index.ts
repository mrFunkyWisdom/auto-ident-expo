import IdNowAutoIdentModule from "./IdNowAutoIdentModule";

export enum IdNowLanguage {
  bg = "bg", // Bulgarian
  cs = "cs", // Czech
  da = "da", // Danish
  de = "de", // German
  el = "el", // Greek
  en = "en", // English
  es = "es", // Spanish
  et = "et", // Estonian
  fi = "fi", // Finnish
  fr = "fr", // French
  hr = "hr", // Croatian
  hu = "hu", // Hungarian
  it = "it", // Italian
  ja = "ja", // Japanese
  ka = "ka", // Georgian
  ko = "ko", // Korean
  lt = "lt", // Lithuanian
  lv = "lv", // Latvian
  nb = "nb", // Norwegian
  nl = "nl", // Dutch
  pl = "pl", // Polish
  pt = "pt", // Portuguese
  ro = "ro", // Romanian
  ru = "ru", // Russian
  sk = "sk", // Slovak
  sl = "sl", // Slovenian
  sr = "sr", // Serbian
  sv = "sv", // Swedish
  tr = "tr", // Turkish
  zh = "zh", // Chinese
}

export async function startAutoIdent(token: string, language: IdNowLanguage = IdNowLanguage.en) {
  return await IdNowAutoIdentModule.start(token, language);
}
