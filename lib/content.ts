export const instagramUrl = "https://www.instagram.com/freshko.pg/";

export const brand = {
  name: "FRESHKO",
  city: "Podgorica",
  area: "Podgorica i okolina",
};

const mediaBase = "https://raw.githubusercontent.com/chaser-22/white-velvet/main/public/media";

export const services = [
  {
    id: "namjestaj",
    number: "01",
    eyebrow: "Dubinsko pranje",
    title: "Namještaj",
    short: "Sofe, fotelje, stolice i tekstilni elementi tretirani pažljivo, dubinski i bez improvizacije.",
    body: "Pristup prilagođavamo materijalu, vrsti zaprljanja i stanju površine — sa fokusom na fleke, prašinu, mirise i ujednačen završni rezultat.",
    image: `${mediaBase}/service-mobeltvatt-2026.jpg`,
  },
  {
    id: "tepisi",
    number: "02",
    eyebrow: "Tekstilna njega",
    title: "Tepisi",
    short: "Kontrolisano dubinsko čišćenje tepiha koje vraća uredan izgled i osjećaj svježine.",
    body: "Metod biramo prema sastavu, konstrukciji i stanju tepiha. Cilj je temeljno čišćenje uz pažljiv odnos prema vlaknima i boji.",
    image: `${mediaBase}/service-mattvatt-2026.jpg`,
  },
  {
    id: "madraci",
    number: "03",
    eyebrow: "Higijena doma",
    title: "Madraci",
    short: "Dubinsko osvježenje površine na kojoj provodite trećinu dana.",
    body: "Pažljivo tretiramo prašinu, mrlje i tragove svakodnevne upotrebe, uz proces osmišljen za tekstilne površine i brzo vraćanje u upotrebu.",
    image: `${mediaBase}/service-golvpolering-2026.jpg`,
  },
  {
    id: "vozila",
    number: "04",
    eyebrow: "Enterijer",
    title: "Vozila",
    short: "Sjedišta, patosnice i tekstilni djelovi enterijera — čisto, precizno i detaljno.",
    body: "Tretman enterijera prilagođavamo materijalu i intenzitetu korišćenja, sa fokusom na vizuelnu urednost i prijatniji osjećaj u kabini.",
    image: `${mediaBase}/service-bat-husbil-2026.jpg`,
  },
];

export const comparisonWork = [
  {
    title: "Namještaj",
    before: `${mediaBase}/before-mobeltvatt.webp`,
    after: `${mediaBase}/after-mobeltvatt.webp`,
  },
  {
    title: "Tepisi",
    before: `${mediaBase}/before-mattvatt.webp`,
    after: `${mediaBase}/after-mattvatt.webp`,
  },
];

export const bookingServices = [
  "Dubinsko pranje namještaja",
  "Pranje tepiha",
  "Pranje madraca",
  "Dubinsko pranje enterijera vozila",
  "Više usluga",
  "Nisam siguran / treba mi preporuka",
];

export const faqs = [
  {
    q: "Koliko traje sušenje?",
    a: "Vrijeme sušenja zavisi od materijala, debljine tekstila, ventilacije i uslova u prostoru. Nakon pregleda možemo dati realniju procjenu za konkretan predmet.",
  },
  {
    q: "Da li dolazite na adresu?",
    a: "Upit možete poslati sa adresom i željenim terminom. Dostupnost i uslovi izlaska na teren potvrđuju se prije rezervacije.",
  },
  {
    q: "Kako formirate cijenu?",
    a: "Cijena zavisi od vrste predmeta, dimenzije, materijala i stanja. Prije rada dobijate jasnu procjenu, bez skrivenih stavki.",
  },
  {
    q: "Da li uklanjate svaku fleku?",
    a: "Različite fleke i materijali reaguju različito. Cilj je maksimalno poboljšanje uz bezbjedan tretman materijala, bez obećanja koja se ne mogu profesionalno garantovati.",
  },
  {
    q: "Kako da se pripremim prije dolaska?",
    a: "Dovoljno je da obezbijedite pristup predmetima koje treba tretirati. Ako je potreban dodatni korak pripreme, dobićete instrukciju prilikom potvrde termina.",
  },
];
