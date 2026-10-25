// Erzeugt die Aufgabenübersicht mit Lösungen für die Durchsicht durch die Lehrkraft (Markdown).
// Aufruf: node tools/durchsicht.js [niveau]
const { AUFGABEN, WIEDERHOLUNG } = require("../js/aufgaben.js");
const nur = Number(process.argv[2]) || 0;
const zahl = (x) => x.toLocaleString("de-DE", { maximumFractionDigits: 2 });
// Zeilenumbrüche der Lösungswege bleiben als <br> erhalten (GitHub zeigt sie an), übrige Auszeichnungen entfallen
const text = (s) => s.replace(/<sub>(.*?)<\/sub>/g, "_$1").replace(/<(?!br>)[^>]+>/g, "");
let md = "# Kosinussatz mit Sternen – Aufgaben mit Lösungen\n\nErzeugt mit `node tools/durchsicht.js`. Die Reihenfolge der Antwortmöglichkeiten wird in der App gemischt.\n\n";
for (const a of AUFGABEN.filter((x) => !nur || x.niveau === nur)) {
  md += `### ${a.id}. ${a.titel} ${"★".repeat(a.niveau)}\n\n${text(a.einleitung)}\n\n`;
  for (const t of a.teile) {
    md += `**${t.id}) ${"★".repeat(t.niveau)}** ${text(t.text)}\n\n`;
    if (t.typ === "auswahl") {
      md += t.optionen.map((o, i) => `- ${i === t.richtig ? "**[richtig]** " : ""}${text(o)}\n`).join("");
      md += `- Thema: ${WIEDERHOLUNG[t.satz].name}\n`;
    } else md += `- Lösung: **${zahl(t.wert)} ${t.einheit}** (${WIEDERHOLUNG[t.satz].name})\n`;
    md += `- Lösungsweg: ${text(t.weg)}\n`;
    md += `- Hilfe 1: ${text(t.hilfen[0])}\n- Hilfe 2: ${text(t.hilfen[1])}\n\n`;
  }
}
process.stdout.write(md);
