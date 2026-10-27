/* Passatempos PT – the ONE file to edit for the paid unlock (deployed next to index.html as config.js).
   After creating the Gumroad product (see /workspace/pwa/gumroad/passatempos.md):
   1) GUMROAD_PRODUCT_ID: Gumroad > product > Content > License key block shows the product_id.
   2) BUY_URL: the product's public link (https://portugaldiary.gumroad.com/l/...).
   While either value is empty or still a placeholder, the whole game stays open (no broken paywall). */
window.GAME_CONFIG = {
  GAME: "passatempos",
  MODE: "gumroad",                 // "gumroad" = free part + key unlock · "free" = everything open
  GUMROAD_PRODUCT_ID: "n-w29z50TJTIDh6esn8eEg==",          // e.g. "AbCdEf123456==" (fill in)
  BUY_URL: "https://portugaldiary.gumroad.com/l/passatempos-completo",
  PRICE_LABEL: "2,99 €",
  INK: "#1f4fa0",
  MAX_USES: 5,
  RECHECK_DAYS: 14,
  API_URL: "https://api.gumroad.com/v2/licenses/verify",
  TEXT: {
    pt: { title: "Passatempos PT completo",
          free: "Grátis: o nível Fácil das palavras cruzadas, da sopa de letras e do sudoku, e o desafio diário.",
          gets: ["Níveis Médio e Difícil: mais 480 palavras cruzadas e 480 sudokus, e sopas de letras maiores",
                 "Pagamento único, sem subscrição e sem anúncios",
                 "Funciona sem internet depois de ativado"] },
    en: { title: "Passatempos PT full game",
          free: "Free: the Easy level of crosswords, word search and sudoku, plus the daily challenge.",
          gets: ["Medium and Hard levels: 480 more crosswords and 480 more sudokus, and bigger word searches",
                 "One-time payment, no subscription, no ads",
                 "Works offline once activated"] }
  }
};
