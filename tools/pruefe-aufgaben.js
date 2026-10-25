// Prüft die Aufgabensammlung: Aufbau, Verteilung der Niveaus, Rundung und Eingabe-Erkennung.
// Die Sollwerte selbst rechnet tools/nachrechnen.py unabhängig mit sympy nach.
// Aufruf: node tools/pruefe-aufgaben.js
const { AUFGABEN, WIEDERHOLUNG } = require("../js/aufgaben.js");
const { zahlenAusEingabe, istRichtig } = require("../js/pruefen.js");

let fehler = 0;
const melde = (text) => { fehler++; console.log("FEHLER: " + text); };
const deutsch = (x, n) => x.toFixed(n).replace(".", ",");

const anzahl = { 1: 0, 2: 0, 3: 0 };
AUFGABEN.forEach((a, i) => {
  anzahl[a.niveau]++;
  if (a.id !== i + 1) melde(`Aufgabe an Stelle ${i + 1} hat die Nummer ${a.id}`);
  if (a.teile.length < 3) melde(`Aufgabe ${a.id}: weniger als 3 Teilaufgaben`);
  if (!a.skizze) melde(`Aufgabe ${a.id}: keine Skizze`);
  const ids = a.teile.map((t) => t.id).join("");
  if (ids !== "abcdefgh".slice(0, a.teile.length)) melde(`Aufgabe ${a.id}: Teilaufgaben heißen ${ids}`);
  for (const t of a.teile) {
    const name = `Aufgabe ${a.id}${t.id}`;
    if (!WIEDERHOLUNG[t.satz]) melde(`${name}: unbekanntes Thema „${t.satz}“`);
    if (!t.hilfen || t.hilfen.length < 2) melde(`${name}: weniger als zwei Hilfen`);
    if (![1, 2, 3].includes(t.niveau)) melde(`${name}: Niveau fehlt`);
    if (!t.weg) melde(`${name}: Lösungsweg fehlt`);
    if (t.typ === "auswahl") {
      if (!Array.isArray(t.optionen) || t.optionen.length < 3) melde(`${name}: weniger als drei Antwortmöglichkeiten`);
      if (!Number.isInteger(t.richtig) || !t.optionen[t.richtig]) melde(`${name}: richtige Antwort fehlt`);
      continue;
    }
    if (!Number.isFinite(t.wert)) { melde(`${name}: Wert ist keine Zahl`); continue; }
    // Auf zwei Nachkommastellen gerundete Eingaben müssen als richtig gelten
    if (!istRichtig(deutsch(t.wert, 2), t.wert)) melde(`${name}: gerundete Eingabe ${deutsch(t.wert, 2)} wird abgelehnt`);
    // Hilfen dürfen das Ergebnis nicht verraten
    for (const h of t.hilfen) for (const g of [deutsch(t.wert, 2), deutsch(t.wert, 1)])
      if (Math.abs(t.wert) >= 10 && h.includes(g)) melde(`${name}: Hilfe enthält das Ergebnis ${g}`);
  }
});
for (const n of [1, 2, 3]) if (anzahl[n] !== 5) melde(`Niveau ${n}: ${anzahl[n]} statt 5 Aufgaben`);
if (AUFGABEN.length !== 15) melde(`${AUFGABEN.length} statt 15 Aufgaben`);

// Eingabe-Erkennung
const faelle = [["6,24", 6.24], ["6.24", 6.24], ["1.069,13", 1069.13], ["1 069,13", 1069.13], ["−0,29", -0.29], ["-0,5", -0.5], ["78,46°", 78.46]];
for (const [ein, soll] of faelle) {
  const z = zahlenAusEingabe(ein);
  if (!z.some((x) => Math.abs(x - soll) < 1e-9)) melde(`Eingabe „${ein}“ wird nicht als ${soll} erkannt (${z})`);
}

console.log(fehler ? `\n${fehler} Fehler gefunden.` : `Alles in Ordnung: ${AUFGABEN.length} Aufgaben, ${AUFGABEN.reduce((s, a) => s + a.teile.length, 0)} Teilaufgaben.`);
process.exit(fehler ? 1 : 0);
