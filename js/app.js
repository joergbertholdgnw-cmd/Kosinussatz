// Lernapp für Schülerinnen und Schüler: Name, Aufgabenübersicht, Aufgaben bearbeiten, Ergebnisse senden.
(function () {
  const STAND = "ks_stand";
  const K = window.KONFIG;
  const app = document.getElementById("app");
  const ANZAHL = AUFGABEN.length;

  const sterne = (n) => "★".repeat(n) + '<span class="stern-leer">' + "★".repeat(3 - n) + "</span>";
  const esc = (s) => String(s).replace(/[&<>"']/g, (z) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[z]));
  const zahl = (x) => x.toLocaleString("de-DE", { maximumFractionDigits: Math.abs(x) < 1 ? 4 : 2 }).replace(/\./g, " ").replace("-", "−");
  const zufall = (liste) => liste[Math.floor(Math.random() * liste.length)];
  const istAuswahl = (t) => t.typ === "auswahl";
  const mitEinheit = (x, e) => (e === "°" ? `${x}°` : e ? `${x} ${e}` : `${x}`);

  const LOB = ["Stark gerechnet!", "Richtig, weiter so!", "Genau!", "Sauber gelöst!", "Treffer!", "Das sitzt!"];
  const NOCHMAL = ["Noch nicht ganz. Prüfe, ob Seite und Winkel richtig zusammengehören.", "Fast? Hast du am Ende die Wurzel gezogen?", "Noch nicht richtig. Steht dein Taschenrechner auf DEG?", "Noch nicht richtig. Ein Blick in die Hilfe kann sich lohnen.", "Hast du ungerundet weitergerechnet? Versuch es noch einmal."];

  // ───────────── Zustand ─────────────
  let stand = Speicher.lies(STAND, null);
  const speichern = () => Speicher.schreib(STAND, stand);

  function neuerStand(name) {
    const id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()).slice(0, 8);
    return { name, id, aufgaben: {}, satzFehler: {}, karten: [], meilensteine: [] };
  }

  function aufgabenStand(aid) {
    if (!stand.aufgaben[aid]) stand.aufgaben[aid] = { teile: {}, abgeschlossen: false, durchgang: 1 };
    return stand.aufgaben[aid];
  }
  function teilStand(aid, tid) {
    const a = aufgabenStand(aid);
    if (!a.teile[tid]) a.teile[tid] = { versuche: 0, richtig: false, fertig: false, hilfen: 0, eingaben: [], lw: false };
    return a.teile[tid];
  }

  const punkteVon = (t) => (t.richtig && !t.lw ? (t.versuche === 1 ? 2 : 1) : 0);
  function auswertung(aufgabe) {
    const a = stand.aufgaben[aufgabe.id];
    let punkte = 0, lw = 0;
    for (const t of aufgabe.teile) if (a && a.teile[t.id]) { punkte += punkteVon(a.teile[t.id]); if (a.teile[t.id].lw) lw++; }
    return { punkte, lw, max: aufgabe.teile.length * 2, prozent: Math.round((100 * punkte) / (aufgabe.teile.length * 2)) };
  }
  const erledigt = () => AUFGABEN.filter((a) => stand.aufgaben[a.id]?.abgeschlossen);

  // Antwortmöglichkeiten fest, aber je Teilaufgabe verschieden gemischt
  function reihenfolge(a, t) {
    let s = a.id * 31 + t.id.charCodeAt(0);
    const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    return t.optionen.map((_, i) => [i, r()]).sort((x, y) => x[1] - y[1]).map(([i]) => i);
  }

  // Lernstand je Thema aus allen bearbeiteten Teilaufgaben
  function lernstand() {
    const s = {};
    for (const a of AUFGABEN) for (const t of a.teile) {
      const ts = stand.aufgaben[a.id]?.teile[t.id];
      if (!ts || !ts.fertig || !WIEDERHOLUNG[t.satz].istSatz) continue;
      s[t.satz] = s[t.satz] || { richtig: 0, gesamt: 0 };
      s[t.satz].gesamt++;
      if (ts.richtig && !ts.lw) s[t.satz].richtig++;
    }
    return s;
  }

  function vorschlag() {
    const offen = AUFGABEN.filter((a) => !stand.aufgaben[a.id]?.abgeschlossen);
    if (!offen.length) return null;
    const fertig = erledigt();
    if (!fertig.length) return offen.find((a) => a.niveau === 1) || offen[0];
    // Die Aufgaben bauen aufeinander auf: Standard ist die nächste offene Aufgabe in der Reihenfolge
    const letzte = fertig.reduce((m, a) => ((stand.aufgaben[a.id].zeit || 0) > (stand.aufgaben[m.id].zeit || 0) ? a : m));
    const p = auswertung(letzte).prozent;
    if (p < 50) return offen.find((a) => a.niveau <= letzte.niveau) || offen[0];
    return offen.find((a) => a.id > letzte.id) || offen[0];
  }

  // ───────────── Ansichten ─────────────
  function zeigeStart() {
    app.innerHTML = `
      <section class="karte start">
        <h1>Kosinussatz <span class="sterne-gross">★★★</span></h1>
        <p class="lead">${ANZAHL} Aufgaben, die Schritt für Schritt aufeinander aufbauen: von der ersten Rechnung mit dem Kosinussatz über stumpfe Winkel und die Frage „Sinus- oder Kosinussatz?“ bis zu Vermessungsaufgaben.</p>
        <ul class="legende">
          <li><b>★</b> Basis: den Kosinussatz kennenlernen und sicher anwenden</li>
          <li><b>★★</b> Standard: Dreiecke vollständig berechnen, Sachaufgaben</li>
          <li><b>★★★</b> Expert: Fallen erkennen und Zusammenhänge entdecken</li>
        </ul>
        <form id="nameForm" class="formular" autocomplete="off">
          <label>Vorname <input id="vorname" required maxlength="30" placeholder="z. B. Lena"></label>
          <label>Erster Buchstabe deines Nachnamens <input id="kuerzel" required maxlength="2" placeholder="z. B. M" class="kurz"></label>
          <p class="klein">Deine Ergebnisse werden unter diesem Namen für deine Lehrkraft gespeichert. Bitte trage dich jedes Mal genau gleich ein. Dein Name wird beim ersten Mal mit diesem Gerät verbunden; arbeite deshalb immer am selben Gerät und im selben Browser.</p>
          <p class="fehler" id="anmeldeFehler" role="alert"></p>
          <button class="knopf haupt" type="submit">Los geht's</button>
        </form>
      </section>`;
    document.getElementById("nameForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const v = document.getElementById("vorname").value.trim().replace(/\s+/g, " ");
      const k = document.getElementById("kuerzel").value.trim().replace(/\.$/, "").toUpperCase();
      if (!v || !k) return;
      const name = `${v.charAt(0).toUpperCase() + v.slice(1)} ${k}.`;
      if (stand && stand.name === name) { zeigeUebersicht(); return; }
      const knopf = e.target.querySelector("button[type=submit]");
      knopf.disabled = true;
      knopf.textContent = "Anmelden …";
      anmelden(name).then((ok) => {
        if (ok) return zeigeUebersicht();
        knopf.disabled = false;
        knopf.textContent = "Los geht's";
      });
    });
  }

  // Name prüfen bzw. an dieses Gerät binden und bisherige Ergebnisse übernehmen
  async function anmelden(name) {
    const fehlerFeld = document.getElementById("anmeldeFehler");
    let liste;
    try {
      const a = await Speicher.anmelden(name);
      if (a.gebunden) { fehlerFeld.textContent = a.fehler; return false; }
      liste = a.ergebnisse || [];
    } catch {
      // Ohne Verbindung trotzdem rechnen lassen; beim Senden prüft das Skript Name und Gerät
      stand = neuerStand(name);
      speichern();
      toast("Keine Verbindung: Dein bisheriger Stand konnte nicht geladen werden. Du kannst trotzdem rechnen.", 4000);
      return true;
    }
    stand = neuerStand(name);
    if (!liste.length) { speichern(); return true; }
    const neueste = {};
    for (const e of liste) {
      const a = AUFGABEN.find((x) => x.id === Number(e.aufgabe));
      if (!a) continue;
      for (const t of e.teile || []) {
        const satz = a.teile.find((x) => x.id === t.id)?.satz;
        if ((!t.richtig || t.lw) && satz && WIEDERHOLUNG[satz].istSatz) stand.satzFehler[satz] = (stand.satzFehler[satz] || 0) + 1;
      }
      if (!neueste[a.id] || (Number(e.durchgang) || 1) >= neueste[a.id].durchgang) neueste[a.id] = { durchgang: Number(e.durchgang) || 1, teile: e.teile || [] };
      if (e.schuelerId) stand.id = String(e.schuelerId);
    }
    for (const [aid, n] of Object.entries(neueste)) {
      const teile = {};
      for (const t of n.teile) teile[t.id] = { versuche: t.versuche, richtig: !!t.richtig, fertig: true, hilfen: t.hilfen || 0, eingaben: t.eingaben || [], lw: !!t.lw };
      stand.aufgaben[aid] = { teile, abgeschlossen: true, durchgang: n.durchgang, gesendet: true };
    }
    meilensteinePruefen(true);
    speichern();
    toast(`Willkommen zurück! ${Object.keys(neueste).length} Aufgabe(n) hast du schon bearbeitet.`, 3500);
    return true;
  }

  function zeigeUebersicht() {
    const fertig = erledigt().length;
    const ls = lernstand();
    const tipp = vorschlag();
    const schwach = Object.entries(stand.satzFehler).filter(([, n]) => n >= K.WIEDERHOLUNG_AB).map(([s]) => s);
    const offeneSendungen = Speicher.offen();

    let html = `
      <header class="kopf">
        <div><span class="klein">Angemeldet als</span><br><b>${esc(stand.name)}</b> <button class="link" id="abmelden">Abmelden</button></div>
        <button class="knopf leise" id="formeln">📐 Formeln</button>
      </header>
      ${Speicher.istDemo() ? '<p class="hinweis-demo">Demo-Modus: Die Ergebnisse werden nur auf diesem Gerät gespeichert.</p>' : ""}
      ${offeneSendungen ? `<p class="hinweis-demo">${offeneSendungen} Ergebnis(se) warten noch auf Internet und werden automatisch nachgeschickt.</p>` : ""}
      <section class="karte fortschritt">
        <div class="ring" style="--p:${(fertig / ANZAHL) * 100}"><span>${fertig}<small>/${ANZAHL}</small></span></div>
        <div>
          <h2>${fertig === 0 ? "Willkommen!" : fertig === ANZAHL ? "Alle Aufgaben geschafft!" : "Dein Fortschritt"}</h2>
          <p>${motivation(fertig)}</p>
          ${fertig ? `<p class="klein"><b>Schon bearbeitet:</b> Aufgabe ${erledigt().map((a) => a.id).sort((x, y) => x - y).join(", ")}</p>` : ""}
          ${tipp ? `<button class="knopf haupt" data-aufgabe="${tipp.id}">Vorschlag: ${tipp.id}. ${esc(tipp.titel)} ${"★".repeat(tipp.niveau)}</button>` : ""}
        </div>
      </section>`;

    if (schwach.length) {
      html += `<section class="karte wiederholen"><h3>🔁 Wiederholen lohnt sich</h3><p>Bei diesen Themen hat es mehrmals gehakt. Schau dir die Karte an, bevor du weitermachst:</p>
        <div class="chips">${schwach.map((s) => `<button class="chip" data-karte="${s}">${WIEDERHOLUNG[s].name}</button>`).join("")}</div></section>`;
    }

    for (const n of [1, 2, 3]) {
      html += `<h2 class="niveau-titel"><span class="sterne">${sterne(n)}</span> ${NIVEAUS[n]}</h2><div class="raster">`;
      for (const a of AUFGABEN.filter((x) => x.niveau === n)) {
        const st = stand.aufgaben[a.id];
        const ausw = st ? auswertung(a) : null;
        let status = '<span class="status">neu</span>';
        if (st?.abgeschlossen && ausw.lw) status = '<span class="status nicht-geloest">👁 Lösungsweg angesehen · nicht gelöst</span>';
        else if (st?.abgeschlossen) status = `<span class="status ${ausw.prozent >= 50 ? "fertig" : "begonnen"}">✓ gelöst · ${ausw.prozent} %</span>`;
        else if (st && Object.keys(st.teile).length) status = '<span class="status begonnen">begonnen</span>';
        html += `<button class="aufgabe-kachel ${st?.abgeschlossen && !ausw.lw ? "ist-fertig" : ""}" data-aufgabe="${a.id}">
          <span class="nr">Aufgabe ${a.id}</span><span class="titel">${esc(a.titel)}</span>
          <span class="tags">${a.themen.join(" · ")}</span>${status}</button>`;
      }
      html += `</div>`;
    }

    const eintraege = Object.entries(ls);
    if (eintraege.length) {
      html += `<section class="karte"><h3>Dein Lernstand</h3><div class="balken-liste">` +
        eintraege.map(([s, w]) => {
          const p = Math.round((100 * w.richtig) / w.gesamt);
          return `<button class="balken-zeile" data-karte="${s}"><span>${WIEDERHOLUNG[s].name}</span><span class="balken"><span style="width:${p}%" class="${p >= 75 ? "gut" : p >= 50 ? "mittel" : "schwach"}"></span></span><span class="klein">${w.richtig}/${w.gesamt}</span></button>`;
        }).join("") + `</div><p class="klein">Tippe auf ein Thema, um die Merkkarte zu öffnen.</p></section>`;
    }

    app.innerHTML = html;
    app.querySelectorAll("[data-aufgabe]").forEach((b) => b.addEventListener("click", () => zeigeAufgabe(+b.dataset.aufgabe)));
    app.querySelectorAll("[data-karte]").forEach((b) => b.addEventListener("click", () => zeigeKarte(b.dataset.karte)));
    document.getElementById("formeln").addEventListener("click", zeigeFormeln);
    document.getElementById("abmelden").addEventListener("click", abmelden);
    window.scrollTo(0, 0);
  }

  function motivation(fertig) {
    if (fertig === 0) return "Fang mit Aufgabe 1 an. Die Aufgaben bauen aufeinander auf.";
    if (fertig < 5) return `Schon ${fertig} geschafft. Jede Aufgabe zeigt dir eine neue Seite des Kosinussatzes.`;
    if (fertig < 10) return "Du bist richtig im Flow! Die Standard-Aufgaben verbinden alles, was du gelernt hast.";
    if (fertig < ANZAHL) return `Nur noch ${ANZAHL - fertig} Aufgaben bis zum Ziel. Die Expert-Aufgaben warten!`;
    return `Du hast alle ${ANZAHL} Aufgaben bearbeitet. Wiederhole gern die, bei denen noch Punkte fehlen.`;
  }

  function zeigeAufgabe(aid) {
    const a = AUFGABEN.find((x) => x.id === aid);
    aufgabenStand(aid);
    speichern();

    let html = `
      <header class="kopf">
        <button class="knopf leise" id="zurueck">← Übersicht</button>
        <button class="knopf leise" id="formeln">📐 Formeln</button>
      </header>
      <article class="karte aufgabe">
        <p class="sterne gross">${sterne(a.niveau)} <span class="klein">${NIVEAUS[a.niveau]}</span></p>
        <h1>${a.id}. ${esc(a.titel)}</h1>
        <div class="aufgabe-kopf">
          <p class="einleitung">${a.einleitung}</p>
          <figure class="skizze">${skizze(a.skizze)}<figcaption>Planfigur: gegeben schwarz, gesucht <span class="gesucht-farbe">farbig</span></figcaption></figure>
        </div>
        <p class="klein">Gib Zahlen ohne Einheit ein. Runde Längen und Winkel auf zwei Nachkommastellen, Kosinuswerte auf vier. Rechne mit ungerundeten Zwischenergebnissen weiter. Pro Rechenaufgabe hast du zwei Versuche, bei Auswahlfragen einen. Den Lösungsweg kannst du dir jederzeit zeigen lassen, die Teilaufgabe zählt dann aber als nicht gelöst.</p>
        <ol class="teile">`;
    for (const t of a.teile) html += `<li class="teil" id="teil-${t.id}">${teilHtml(a, t)}</li>`;
    html += `</ol><div id="abschluss"></div></article>`;
    app.innerHTML = html;
    document.getElementById("zurueck").addEventListener("click", zeigeUebersicht);
    document.getElementById("formeln").addEventListener("click", zeigeFormeln);
    for (const t of a.teile) verdrahteTeil(a, t);
    abschlussPruefen(a);
    window.scrollTo(0, 0);
  }

  function antwortText(t, eingabe) {
    return istAuswahl(t) ? t.optionen[Number(eingabe)] ?? "" : mitEinheit(eingabe, t.einheit);
  }

  function teilHtml(a, t) {
    const ts = teilStand(a.id, t.id);
    let rueck = "";
    const letzte = ts.eingaben[ts.eingaben.length - 1];
    if (ts.lw && ts.richtig) rueck = `<p class="rueck mittel">Richtig beantwortet, aber der Lösungsweg wurde angesehen. Die Teilaufgabe zählt als nicht gelöst.</p>`;
    else if (ts.lw && !ts.versuche) rueck = `<p class="rueck mittel">👁 Lösungsweg angesehen. Die Teilaufgabe zählt als nicht gelöst. Rechne sie trotzdem einmal selbst nach!</p>`;
    else if (ts.fertig && ts.richtig) rueck = `<p class="rueck gut">✓ Richtig${ts.versuche === 1 && !istAuswahl(t) ? " im ersten Versuch" : ""}: ${esc(antwortText(t, letzte))}</p>`;
    else if (ts.fertig && istAuswahl(t)) rueck = `<p class="rueck schlecht">✗ Leider nicht richtig. Richtig ist: ${t.optionen[t.richtig]}</p>`;
    else if (ts.fertig) rueck = `<p class="rueck schlecht">✗ Leider nicht richtig.${K.KONTROLLWERT_ZEIGEN ? ` Zum Weiterrechnen: Kontrollwert ≈ ${mitEinheit(zahl(t.wert), t.einheit)}. Überlege, wo dein Fehler lag.` : ""}</p>`;
    else if (ts.versuche === 1) rueck = `<p class="rueck mittel">${zufall(NOCHMAL)} Du hast noch einen Versuch.</p>`;

    const hilfen = t.hilfen.slice(0, ts.hilfen).map((h, i) => `<p class="hilfe"><b>Hilfe ${i + 1}:</b> ${h}</p>`).join("");
    const teilskizze = t.skizze ? `<figure class="teil-skizze">${skizze(t.skizze)}<figcaption>Teilfigur</figcaption></figure>` : "";
    const lwKnopf = !ts.lw && !(ts.fertig && ts.richtig) ? `<button class="knopf leise lw-knopf" type="button">🔎 Zeige mir den Lösungsweg</button>` : "";
    let eingabe = "";
    if (!ts.fertig) {
      const hilfeKnopf = ts.hilfen < t.hilfen.length ? `<button class="knopf leise hilfe-knopf" type="button">💡 Hilfe ${ts.hilfen + 1}</button>` : "";
      if (istAuswahl(t)) {
        eingabe = `<form class="eingabe auswahl">
          <fieldset><legend class="klein">Wähle eine Antwort:</legend>
          ${reihenfolge(a, t).map((i) => `<label class="option"><input type="radio" name="w-${t.id}" value="${i}"> <span>${t.optionen[i]}</span></label>`).join("")}
          </fieldset>
          <div class="knopfreihe"><button class="knopf haupt" type="submit">Prüfen</button>${hilfeKnopf}${lwKnopf}</div></form>`;
      } else {
        eingabe = `<form class="eingabe">
          <input inputmode="decimal" autocomplete="off" aria-label="Ergebnis Teilaufgabe ${t.id}" placeholder="Ergebnis">
          <span class="einheit">${t.einheit}</span>
          <button class="knopf haupt" type="submit">Prüfen</button>${hilfeKnopf}${lwKnopf}</form>`;
      }
    }
    const weg = ts.lw ? `<div class="loesungsweg"><b>Lösungsweg:</b><br>${t.weg}</div>` : "";
    return `
      <div class="teil-kopf"><b>${t.id})</b> <span class="sterne klein-sterne">${sterne(t.niveau)}</span></div>
      ${teilskizze}
      <p>${t.text}</p>
      ${hilfen}
      ${eingabe}
      ${rueck}
      ${ts.fertig && !ts.lw && lwKnopf ? `<div class="knopfreihe">${lwKnopf}</div>` : ""}
      ${weg}`;
  }

  function verdrahteTeil(a, t) {
    const li = document.getElementById("teil-" + t.id);
    li.querySelectorAll(".lw-knopf").forEach((k) => k.addEventListener("click", () => loesungswegZeigen(a, t)));
    const form = li.querySelector("form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ts = teilStand(a.id, t.id);
      if (istAuswahl(t)) {
        const gewaehlt = form.querySelector("input:checked");
        if (!gewaehlt) { toast("Bitte wähle zuerst eine Antwort aus."); return; }
        ts.versuche++;
        ts.eingaben.push(gewaehlt.value);
        ts.fertig = true;
        ts.richtig = Number(gewaehlt.value) === t.richtig;
        if (ts.richtig) toast(zufall(LOB)); else satzFehler(t.satz);
      } else {
        const feld = form.querySelector("input");
        const wert = feld.value.trim();
        if (!wert) return;
        if (!zahlenAusEingabe(wert).length) { feld.setCustomValidity("Bitte eine Zahl eingeben, z. B. 12,97"); feld.reportValidity(); return; }
        ts.versuche++;
        ts.eingaben.push(wert);
        if (istRichtig(wert, t.wert)) {
          ts.richtig = true; ts.fertig = true;
          toast(zufall(LOB));
        } else if (ts.versuche >= 2) {
          ts.fertig = true;
          satzFehler(t.satz);
        }
      }
      speichern();
      neuZeichnen(a, t);
    });
    const feld = form.querySelector("input:not([type=radio])");
    if (feld) feld.addEventListener("input", () => feld.setCustomValidity(""));
    const hk = form.querySelector(".hilfe-knopf");
    if (hk) hk.addEventListener("click", () => { teilStand(a.id, t.id).hilfen++; speichern(); neuZeichnen(a, t, true); });
  }

  // Lösungsweg zeigen: Die Teilaufgabe ist damit beendet und zählt als nicht gelöst.
  function loesungswegZeigen(a, t) {
    const ts = teilStand(a.id, t.id);
    if (!ts.fertig && !confirm("Lösungsweg anzeigen? Diese Teilaufgabe zählt dann als nicht gelöst, und deine Lehrkraft sieht, dass du den Lösungsweg angeschaut hast.")) return;
    if (!ts.fertig) satzFehler(t.satz);
    ts.lw = true;
    ts.fertig = true;
    speichern();
    neuZeichnen(a, t);
    document.querySelector(`#teil-${t.id} .loesungsweg`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function neuZeichnen(a, t, fokus) {
    const li = document.getElementById("teil-" + t.id);
    li.innerHTML = teilHtml(a, t);
    verdrahteTeil(a, t);
    const ts = teilStand(a.id, t.id);
    if (ts.fertig && !ts.lw) {
      const naechster = a.teile.find((x) => !teilStand(a.id, x.id).fertig);
      if (naechster) document.querySelector(`#teil-${naechster.id} input`)?.focus();
    } else if (fokus) li.querySelector("input")?.focus();
    abschlussPruefen(a);
  }

  function satzFehler(satz) {
    if (!WIEDERHOLUNG[satz].istSatz) return;
    stand.satzFehler[satz] = (stand.satzFehler[satz] || 0) + 1;
    if (stand.satzFehler[satz] % K.WIEDERHOLUNG_AB === 0) setTimeout(() => zeigeKarte(satz, true), 400);
  }

  function abschlussPruefen(a) {
    const st = aufgabenStand(a.id);
    const alleFertig = a.teile.every((t) => teilStand(a.id, t.id).fertig);
    const box = document.getElementById("abschluss");
    if (!alleFertig) { box.innerHTML = ""; return; }
    const ausw = auswertung(a);
    if (!st.abgeschlossen) {
      st.abgeschlossen = true;
      st.zeit = Date.now();
      speichern();
      ergebnisSenden(a, ausw);
      meilensteinePruefen();
    }
    const naechste = vorschlag();
    const satz = ausw.lw ? `Bei ${ausw.lw} Teilaufgabe(n) hast du den Lösungsweg angesehen. Die Aufgabe gilt deshalb als nicht gelöst. Rechne sie später noch einmal ganz ohne Lösungsweg!`
      : ausw.prozent === 100 ? "Perfekt! Alle Teilaufgaben richtig." : ausw.prozent >= 75 ? "Sehr gut gemacht!" : ausw.prozent >= 50 ? "Gute Arbeit, du bist auf dem richtigen Weg." : "Dranbleiben lohnt sich! Wiederhole die Merkkarten und versuch die Aufgabe später noch einmal.";
    box.innerHTML = `
      <section class="karte ergebnis ${ausw.prozent >= 75 && !ausw.lw ? "feiern" : ""}">
        <h2>Aufgabe abgeschlossen: ${ausw.punkte} von ${ausw.max} Punkten (${ausw.prozent} %)</h2>
        <p>${satz}</p>
        <p class="klein" id="sendestatus">${st.gesendet ? "✓ Ergebnis wurde eingetragen." : "Ergebnis wird eingetragen …"}</p>
        <div class="knopfreihe">
          ${naechste ? `<button class="knopf haupt" data-weiter="${naechste.id}">Weiter: ${naechste.id}. ${esc(naechste.titel)} ${"★".repeat(naechste.niveau)}</button>` : ""}
          <button class="knopf leise" id="nochmal">Aufgabe neu rechnen</button>
          <button class="knopf leise" id="zurUebersicht">Zur Übersicht</button>
        </div>
      </section>`;
    box.querySelector("[data-weiter]")?.addEventListener("click", (e) => zeigeAufgabe(+e.currentTarget.dataset.weiter));
    document.getElementById("zurUebersicht").addEventListener("click", zeigeUebersicht);
    document.getElementById("nochmal").addEventListener("click", () => {
      if (!confirm("Aufgabe noch einmal von vorn rechnen? Dein bisheriges Ergebnis bleibt bei deiner Lehrkraft gespeichert.")) return;
      const durchgang = (st.durchgang || 1) + 1;
      stand.aufgaben[a.id] = { teile: {}, abgeschlossen: false, durchgang };
      speichern();
      zeigeAufgabe(a.id);
    });
  }

  async function ergebnisSenden(a, ausw) {
    const st = stand.aufgaben[a.id];
    const ergebnis = {
      name: stand.name, schuelerId: stand.id, aufgabe: a.id, titel: a.titel, niveau: a.niveau,
      durchgang: st.durchgang || 1, punkte: ausw.punkte, max: ausw.max, loesungsweg: ausw.lw,
      teile: a.teile.map((t) => { const ts = st.teile[t.id]; return { id: t.id, satz: t.satz, richtig: ts.richtig, versuche: ts.versuche, hilfen: ts.hilfen, eingaben: ts.eingaben, lw: !!ts.lw }; }),
      wiederholen: Object.entries(stand.satzFehler).filter(([, n]) => n >= K.WIEDERHOLUNG_AB).map(([s]) => s)
    };
    const r = await Speicher.senden(ergebnis);
    const el = document.getElementById("sendestatus");
    if (r.ok) { st.gesendet = true; speichern(); if (el) el.textContent = r.demo ? "✓ Ergebnis gespeichert (Demo-Modus, nur auf diesem Gerät)." : "✓ Ergebnis wurde eingetragen."; }
    else if (r.gebunden) { if (el) el.textContent = "⚠ " + r.fehler + " Das Ergebnis wurde nicht eingetragen."; }
    else if (el) el.textContent = "Keine Verbindung. Das Ergebnis ist gemerkt und wird automatisch nachgeschickt.";
  }

  function meilensteinePruefen(still) {
    const fertig = erledigt();
    const halb = Math.ceil(ANZAHL / 2);
    const ziele = [
      ["erste", fertig.length >= 1, "Erste Aufgabe geschafft! 🎉"],
      ["basis", AUFGABEN.filter((a) => a.niveau === 1).every((a) => stand.aufgaben[a.id]?.abgeschlossen), "Alle Basis-Aufgaben erledigt! Zeit für ★★."],
      ["expert", fertig.some((a) => a.niveau === 3), "Deine erste Expert-Aufgabe! 💪"],
      ["halb", fertig.length >= halb, `Mehr als die Hälfte: ${halb} von ${ANZAHL} Aufgaben!`],
      ["alle", fertig.length === ANZAHL, `Alle ${ANZAHL} Aufgaben geschafft! Großartig! 🏆`]
    ];
    for (const [id, erreicht, text] of ziele) {
      if (erreicht && !stand.meilensteine.includes(id)) { stand.meilensteine.push(id); speichern(); if (!still) toast(text, 4000); }
    }
  }

  // ───────────── Overlays ─────────────
  function zeigeKarte(satz, automatisch) {
    const w = WIEDERHOLUNG[satz];
    overlay(`
      ${automatisch ? `<p class="klein">Bei diesem Thema hat es jetzt ${stand.satzFehler[satz]}-mal nicht geklappt. Eine kurze Wiederholung hilft!</p>` : ""}
      <h2>🔁 ${w.name}</h2>
      <p class="merke">${w.merke}</p>
      ${w.tipps.length ? `<h3>Typische Stolperstellen</h3><ul>${w.tipps.map((t) => `<li>${t}</li>`).join("")}</ul>` : ""}
      ${w.buch ? `<p><b>Auftrag:</b> ${w.buch}</p>` : ""}`);
  }

  function zeigeFormeln() {
    overlay(`<h2>📐 Formeln</h2>
      <h3>Kosinussatz</h3><p class="merke">a² = b² + c² − 2bc · cos α<br>b² = a² + c² − 2ac · cos β<br>c² = a² + b² − 2ab · cos γ</p>
      <h3>Nach dem Winkel umgestellt</h3><p class="merke">cos α = (b² + c² − a²) / (2bc)<br>cos β = (a² + c² − b²) / (2ac)<br>cos γ = (a² + b² − c²) / (2ab)</p>
      <h3>Sinussatz und Flächeninhalt</h3><p class="merke">a / sin α = b / sin β = c / sin γ<br>A = ½ · a · b · sin γ</p>
      <h3>Welcher Satz passt?</h3>
      <div class="tabelle-huelle"><table><thead><tr><th>Gegeben</th><th>Erster Schritt</th></tr></thead><tbody>
        <tr><td>SWS: zwei Seiten, eingeschlossener Winkel</td><td>Kosinussatz für die dritte Seite</td></tr>
        <tr><td>SSS: drei Seiten</td><td>Kosinussatz für den größten Winkel</td></tr>
        <tr><td>WSW / SWW: eine Seite, zwei Winkel</td><td>Winkelsumme, dann Sinussatz</td></tr>
        <tr><td>SsW: zwei Seiten, nicht eingeschlossener Winkel</td><td>Sinussatz, Mehrdeutigkeit prüfen</td></tr>
      </tbody></table></div>
      <h3>Merkkarten</h3><div class="chips">${Object.entries(WIEDERHOLUNG).filter(([, w]) => w.istSatz).map(([s, w]) => `<button class="chip" data-karte="${s}">${w.name}</button>`).join("")}</div>`);
    document.querySelectorAll(".overlay [data-karte]").forEach((b) => b.addEventListener("click", () => zeigeKarte(b.dataset.karte)));
  }

  // Leert das Gerät für die nächste Person; gesendete Ergebnisse bleiben bei der Lehrkraft.
  function abmelden() {
    document.querySelector(".overlay")?.remove();
    const wartend = Speicher.offen();
    const o = document.createElement("div");
    o.className = "overlay";
    o.innerHTML = `<div class="overlay-box" role="dialog" aria-modal="true">
      <h2>Abmelden?</h2>
      <p>Deine abgeschlossenen Aufgaben sind bei deiner Lehrkraft gespeichert. Auf diesem Gerät wird dein Fortschritt gelöscht, damit die nächste Person neu beginnen kann.</p>
      ${wartend ? `<p class="hinweis-demo">${wartend} Ergebnis(se) warten noch auf Internet. Sie bleiben auf diesem Gerät und werden automatisch nachgeschickt.</p>` : ""}
      <button class="knopf haupt" id="abmeldenJa">Ja, abmelden</button>
      <button class="knopf leise schliessen">Abbrechen</button></div>`;
    document.body.appendChild(o);
    const zu = () => o.remove();
    o.querySelector(".schliessen").addEventListener("click", zu);
    o.addEventListener("click", (e) => { if (e.target === o) zu(); });
    o.querySelector("#abmeldenJa").addEventListener("click", () => {
      stand = null;
      Speicher.schreib(STAND, null);
      zu();
      zeigeStart();
      window.scrollTo(0, 0);
      toast("Abgemeldet. Das Gerät ist frei für die nächste Person.", 2600);
    });
    o.querySelector("#abmeldenJa").focus();
  }

  function overlay(inhalt) {
    document.querySelector(".overlay")?.remove();
    const o = document.createElement("div");
    o.className = "overlay";
    o.innerHTML = `<div class="overlay-box" role="dialog" aria-modal="true">${inhalt}<button class="knopf haupt schliessen">Verstanden</button></div>`;
    document.body.appendChild(o);
    const zu = () => o.remove();
    o.querySelector(".schliessen").addEventListener("click", zu);
    o.addEventListener("click", (e) => { if (e.target === o) zu(); });
    o.querySelector(".schliessen").focus();
  }

  function toast(text, dauer = 1800) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = text;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add("weg"), dauer);
    setTimeout(() => t.remove(), dauer + 500);
  }

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.querySelector(".overlay")?.remove(); });

  // ───────────── Start ─────────────
  Speicher.nachsenden().then((n) => { if (n) toast(`${n} gemerkte(s) Ergebnis(se) nachgeschickt.`); });
  if (stand && stand.name) zeigeUebersicht(); else zeigeStart();
})();
