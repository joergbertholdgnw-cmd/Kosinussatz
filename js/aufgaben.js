/*
 * Aufgabensammlung „Kosinussatz mit Sternen“ (Jahrgang 9/10)
 *
 * Jede Aufgabe hat ein Niveau (1 = ★ Basis, 2 = ★★ Standard, 3 = ★★★ Expert),
 * jede Teilaufgabe zusätzlich ein eigenes Niveau.
 * satz: Welches Wissen die Teilaufgabe hauptsächlich prüft. Daraus entstehen
 * die Wiederholungshinweise (siehe WIEDERHOLUNG unten).
 * typ: "zahl" (Standard) oder "auswahl" (Antwortmöglichkeiten, ein Versuch).
 * wert: exakter Sollwert (aus den Angaben berechnet, nicht gerundet).
 * weg: Lösungsweg. Die App zeigt ihn nur auf Wunsch („Zeige mir den Lösungsweg“);
 * die Teilaufgabe zählt dann als nicht gelöst.
 * skizze: Planfigur zur Aufgabe (siehe skizzen.js), Teilaufgaben können eine eigene haben.
 */
(function () {
  const wurzel = Math.sqrt;
  const rad = (g) => (g * Math.PI) / 180;
  const grad = (b) => (b * 180) / Math.PI;
  const sin = (g) => Math.sin(rad(g));
  const cos = (g) => Math.cos(rad(g));
  const acos = (x) => grad(Math.acos(x));
  const asin = (x) => grad(Math.asin(x));
  // Zahl für Lösungswege: Komma, schmales Leerzeichen als Tausendertrennung, echtes Minuszeichen
  const z = (x, n = 2) => x.toLocaleString("de-DE", { minimumFractionDigits: n, maximumFractionDigits: n }).replace(/\./g, " ").replace("-", "−");

  // Seite aus SWS und Winkel aus SSS
  const seite = (x, y, w) => wurzel(x * x + y * y - 2 * x * y * cos(w));
  const winkel = (x, y, gegen) => acos((x * x + y * y - gegen * gegen) / (2 * x * y));

  // Zwischengrößen, die in mehreren Teilaufgaben gebraucht werden
  const t2_c2 = 4 ** 2 + 6 ** 2 - 2 * 4 * 6 * cos(40);
  const t4_cg = (5 ** 2 + 6 ** 2 - 7 ** 2) / (2 * 5 * 6);
  const t4_g = acos(t4_cg), t4_a = winkel(6, 7, 5);
  const t5_ab = seite(120, 150, 65);
  const t6_b = seite(7, 5, 48);
  const t6_ca = (t6_b ** 2 + 5 ** 2 - 7 ** 2) / (2 * t6_b * 5);
  const t6_a = acos(t6_ca);
  const t7_cb = (4 ** 2 + 7 ** 2 - 9 ** 2) / (2 * 4 * 7);
  const t7_b = acos(t7_cb), t7_a = winkel(9, 7, 4);
  const t8_d = seite(27, 36, 72);
  const t9_g = winkel(6, 8, 11);
  const t10_f = seite(8, 5, 55), t10_e = seite(8, 5, 125);
  const t11_a = seite(4, 7, 40);
  const t11_falsch = asin((7 * sin(40)) / t11_a);
  const t11_g = winkel(t11_a, 4, 7);
  const t12_ab = seite(850, 1240, 58);
  const t12_A = winkel(850, t12_ab, 1240);
  const t12_treff = (t12_ab * 6) / 14;
  const t13_B = winkel(40, 25, 45), t13_D = winkel(30, 35, 45);
  const t13_F1 = 0.5 * 40 * 25 * sin(t13_B), t13_F2 = 0.5 * 30 * 35 * sin(t13_D);
  const t14_p = -2 * 8 * cos(35), t14_q = 8 ** 2 - 6 ** 2;
  const t14_D = (t14_p / 2) ** 2 - t14_q;
  const t14_c1 = -t14_p / 2 + wurzel(t14_D), t14_c2 = -t14_p / 2 - wurzel(t14_D);
  const t15_tor = 7.32;
  const t15_s = winkel(16, 19, t15_tor);
  const t15_L = winkel(16, t15_tor, 19);
  const t15_m = seite(16, t15_tor / 2, t15_L);

  const AUFGABEN = [
    // ───────────── ★ Basis ─────────────
    {
      id: 1, niveau: 1, titel: "Die dritte Seite", themen: ["SWS"],
      einleitung: "Im Dreieck ABC sind b = 5 cm, c = 7 cm und der Winkel α = 60° gegeben. Der Winkel α liegt zwischen den beiden Seiten b und c, er wird von ihnen <b>eingeschlossen</b>.",
      skizze: { seiten: [6.24, 5, 7], text: { a: "a = ?", b: "b = 5 cm", c: "c = 7 cm" }, winkel: { A: "60°" }, hervor: ["a"] },
      teile: [
        { id: "a", niveau: 1, satz: "aufbau", typ: "auswahl",
          text: "Welche Seite kannst du mit dem Kosinussatz aus b, c und α direkt berechnen?",
          optionen: ["die Seite a, denn sie liegt dem Winkel α gegenüber", "die Seite b, denn sie liegt am Winkel α an", "keine, dafür braucht man den Sinussatz"],
          richtig: 0,
          hilfen: ["Der Kosinussatz verbindet zwei Seiten, den Winkel zwischen ihnen und die dritte Seite.", "Schau in die Skizze: Welche Seite berührt den Punkt A nicht?"],
          weg: "Der Winkel α wird von b und c eingeschlossen. Die Seite, die ihm gegenüberliegt, ist a.<br>Deshalb gilt a² = b² + c² − 2bc · cos α, und a ist die gesuchte Seite." },
        { id: "b", niveau: 1, satz: "seite", einheit: "cm²",
          text: "Berechne zuerst a² mit dem Kosinussatz a² = b² + c² − 2bc · cos α.",
          wert: 5 ** 2 + 7 ** 2 - 2 * 5 * 7 * cos(60),
          hilfen: ["Setze ein: a² = 5² + 7² − 2 · 5 · 7 · cos 60°.", "cos 60° = 0,5. Rechne zuerst 2 · 5 · 7 · 0,5 und ziehe das Ergebnis von 5² + 7² ab."],
          weg: "a² = 5² + 7² − 2 · 5 · 7 · cos 60°<br>= 25 + 49 − 70 · 0,5<br>= 74 − 35 = 39 (cm²)" },
        { id: "c", niveau: 1, satz: "seite", einheit: "cm",
          text: "Berechne jetzt die Seite a.",
          wert: wurzel(39),
          hilfen: ["Der Kosinussatz liefert a², nicht a.", "Ziehe die Wurzel aus deinem Ergebnis von Teilaufgabe b."],
          weg: "a = √39 ≈ 6,24 cm<br>Probe: a ist kleiner als b + c = 12 cm. ✔" }
      ]
    },
    {
      id: 2, niveau: 1, titel: "Welche Formel passt?", themen: ["SWS", "Formel"],
      einleitung: "Im Dreieck ABC sind a = 4 cm, b = 6 cm und der eingeschlossene Winkel γ = 40° bekannt. Gesucht ist die Seite c.",
      skizze: { seiten: [4, 6, 3.9], text: { a: "a = 4 cm", b: "b = 6 cm", c: "c = ?" }, winkel: { C: "40°" }, hervor: ["c"] },
      teile: [
        { id: "a", niveau: 1, satz: "aufbau", typ: "auswahl",
          text: "Welche Gleichung beschreibt die gesuchte Seite c richtig?",
          optionen: ["c² = a² + b² − 2ab · cos γ", "c² = a² + b² − 2ab · cos α", "c = a + b − 2ab · cos γ", "c² = a² + c² − 2ac · cos γ"],
          richtig: 0,
          hilfen: ["Links steht das Quadrat der gesuchten Seite. Rechts stehen die Quadrate der beiden anderen Seiten.", "Der Winkel im Kosinussatz liegt immer der Seite links gegenüber, hier also γ."],
          weg: "Gesucht ist c, gegeben sind die beiden anderen Seiten a und b und der Winkel γ zwischen ihnen.<br>Also: c² = a² + b² − 2ab · cos γ.<br>Die anderen Gleichungen enthalten den falschen Winkel, keine Quadrate oder die gesuchte Seite auf beiden Seiten." },
        { id: "b", niveau: 1, satz: "seite", einheit: "cm²",
          text: "Berechne c².",
          wert: t2_c2,
          hilfen: ["Setze ein: c² = 4² + 6² − 2 · 4 · 6 · cos 40°.", "Achte im Taschenrechner auf die Reihenfolge: Erst 2 · 4 · 6 · cos 40° berechnen, dann von 16 + 36 abziehen. Modus DEG!"],
          weg: `c² = 4² + 6² − 2 · 4 · 6 · cos 40°<br>= 52 − 48 · ${z(cos(40), 4)}<br>≈ 52 − ${z(48 * cos(40))} ≈ ${z(t2_c2)} (cm²)` },
        { id: "c", niveau: 1, satz: "seite", einheit: "cm",
          text: "Berechne die Seite c.",
          wert: wurzel(t2_c2),
          hilfen: ["Wurzel ziehen nicht vergessen.", "Rechne mit dem ungerundeten Wert aus b weiter."],
          weg: `c = √${z(t2_c2)} ≈ ${z(wurzel(t2_c2))} cm` },
        { id: "d", niveau: 2, satz: "seite", einheit: "cm",
          text: "Der Winkel wird verdoppelt: γ = 80°. Berechne c für diesen Fall.",
          wert: seite(4, 6, 80),
          hilfen: ["Rechne genauso wie in b und c, nur mit cos 80°.", "c² = 4² + 6² − 2 · 4 · 6 · cos 80°, danach die Wurzel ziehen."],
          weg: `c² = 16 + 36 − 48 · cos 80° ≈ 52 − ${z(48 * cos(80))} ≈ ${z(seite(4, 6, 80) ** 2)}<br>c ≈ ${z(seite(4, 6, 80))} cm` },
        { id: "e", niveau: 2, satz: "aufbau", typ: "auswahl",
          text: "Vergleiche die Ergebnisse aus c und d. Wähle die zutreffende Aussage.",
          optionen: ["c wird länger, aber nicht doppelt so lang", "c wird genau doppelt so lang wie bei 40°", "c wird mehr als doppelt so lang wie bei 40°"],
          richtig: 0,
          hilfen: ["Verdopple dein Ergebnis aus c und vergleiche mit d.", "Im Kosinussatz steht cos γ, nicht γ selbst. Der Kosinus wächst nicht gleichmäßig mit dem Winkel."],
          weg: `Bei 40° ist c ≈ ${z(wurzel(t2_c2))} cm, das Doppelte wären ${z(2 * wurzel(t2_c2))} cm. Bei 80° ist c ≈ ${z(seite(4, 6, 80))} cm.<br>c wird also länger, aber nicht doppelt so lang: Seite und Winkel sind nicht proportional.` }
      ]
    },
    {
      id: 3, niveau: 1, titel: "Der Winkel öffnet sich", themen: ["SWS", "stumpfer Winkel"],
      einleitung: "Zwei Stäbe mit den Längen a = 3 cm und b = 5 cm sind im Punkt C mit einem Gelenk verbunden. Öffnet man das Gelenk weiter, wird der Winkel γ größer. Wie verändert sich der Abstand c der beiden Stabenden?",
      skizze: { seiten: [3, 5, 7], text: { a: "a = 3 cm", b: "b = 5 cm", c: "c = ?" }, winkel: { C: "γ" }, hervor: ["c"] },
      teile: [
        { id: "a", niveau: 1, satz: "seite", einheit: "cm",
          text: "Berechne c für γ = 60°.",
          wert: seite(3, 5, 60),
          hilfen: ["c² = a² + b² − 2ab · cos γ", "cos 60° = 0,5"],
          weg: "c² = 9 + 25 − 2 · 3 · 5 · 0,5 = 34 − 15 = 19<br>c = √19 ≈ 4,36 cm" },
        { id: "b", niveau: 1, satz: "pythagoras", einheit: "cm",
          text: "Berechne c für γ = 90°.",
          wert: wurzel(34),
          hilfen: ["cos 90° = 0. Was bleibt dann vom Kosinussatz übrig?", "Bei γ = 90° ist das Dreieck rechtwinklig: c² = a² + b²."],
          weg: "cos 90° = 0, der hintere Term fällt weg: c² = 9 + 25 = 34 (Satz des Pythagoras!)<br>c = √34 ≈ 5,83 cm" },
        { id: "c", niveau: 1, satz: "stumpf", einheit: "",
          text: "Für γ = 120° brauchst du den Kosinus eines stumpfen Winkels. Bestimme cos 120° mit dem Taschenrechner.",
          wert: cos(120),
          hilfen: ["Taschenrechner auf DEG stellen und cos 120 eingeben.", "Der Kosinus eines stumpfen Winkels ist negativ. Das ist richtig so!"],
          weg: "cos 120° = −0,5<br>Am Einheitskreis ist der Kosinus die x-Koordinate. Für Winkel zwischen 90° und 180° liegt der Punkt links von der y-Achse, deshalb ist der Wert negativ." },
        { id: "d", niveau: 1, satz: "stumpf", einheit: "cm",
          text: "Berechne c für γ = 120°.",
          wert: seite(3, 5, 120),
          hilfen: ["Setze cos 120° in den Kosinussatz ein. Achte auf das Vorzeichen!", "Minus mal minus ergibt plus: Der Term 2ab · cos γ wird hier addiert."],
          weg: "c² = 9 + 25 − 2 · 3 · 5 · (−0,5) = 34 + 15 = 49<br>c = √49 = 7 cm" },
        { id: "e", niveau: 2, satz: "stumpf", typ: "auswahl",
          text: "Bei 120° ist c länger als bei 90°. Wähle die zutreffende Begründung.",
          optionen: ["Weil cos γ für stumpfe Winkel negativ ist: Der Term 2ab · cos γ wird dann nicht abgezogen, sondern addiert.", "Weil der Kosinussatz für stumpfe Winkel nicht gilt und man Pythagoras nehmen muss.", "Weil man bei stumpfen Winkeln den Taschenrechner auf RAD stellen muss."],
          richtig: 0,
          hilfen: ["Vergleiche deine Rechnungen in a, b und d: Was passiert jeweils mit dem Term 2ab · cos γ?", "Bei 60° wird etwas abgezogen, bei 90° nichts. Und bei 120°?"],
          weg: "γ = 60°: cos γ > 0, es wird etwas abgezogen, c ist kleiner als beim rechten Winkel.<br>γ = 90°: cos γ = 0, es bleibt der Satz des Pythagoras.<br>γ = 120°: cos γ < 0, „minus mal minus“ – es wird addiert, c wird größer." }
      ]
    },
    {
      id: 4, niveau: 1, titel: "Winkel aus drei Seiten", themen: ["SSS"],
      einleitung: "Von einem Dreieck kennt man nur die drei Seiten: a = 5 cm, b = 6 cm und c = 7 cm. Mit dem nach cos γ umgestellten Kosinussatz kannst du jetzt die Winkel berechnen.",
      skizze: { seiten: [5, 6, 7], text: { a: "a = 5 cm", b: "b = 6 cm", c: "c = 7 cm" }, winkel: { A: "α", B: "β", C: "γ = ?" }, winkelHervor: ["C"] },
      teile: [
        { id: "a", niveau: 1, satz: "aufbau", typ: "auswahl",
          text: "Mit welcher Gleichung berechnest du cos γ?",
          optionen: ["cos γ = (a² + b² − c²) / (2ab)", "cos γ = (a² + c² − b²) / (2ac)", "cos γ = (c² − a² − b²) / (2ab)"],
          richtig: 0,
          hilfen: ["Starte mit c² = a² + b² − 2ab · cos γ und stelle nach cos γ um.", "Im Zähler stehen die Quadrate der beiden Seiten, die γ einschließen, minus das Quadrat der gegenüberliegenden Seite."],
          weg: "c² = a² + b² − 2ab · cos γ   | + 2ab · cos γ − c²<br>2ab · cos γ = a² + b² − c²   | : (2ab)<br>cos γ = (a² + b² − c²) / (2ab)" },
        { id: "b", niveau: 1, satz: "winkel", einheit: "",
          text: "Berechne den Wert von cos γ. Runde auf zwei Nachkommastellen.",
          wert: t4_cg,
          hilfen: ["Setze ein: cos γ = (5² + 6² − 7²) / (2 · 5 · 6).", "Setze den Zähler und den Nenner jeweils in Klammern, wenn du alles auf einmal eintippst."],
          weg: "cos γ = (25 + 36 − 49) / 60 = 12 / 60 = 0,2" },
        { id: "c", niveau: 1, satz: "winkel", einheit: "°",
          text: "Berechne den Winkel γ.",
          wert: t4_g,
          hilfen: ["Du kennst cos γ und suchst γ. Welche Taste macht den Kosinus „rückgängig“?", "γ = cos⁻¹(0,2), Taschenrechner im Modus DEG."],
          weg: `γ = cos⁻¹(0,2) ≈ ${z(t4_g)}°` },
        { id: "d", niveau: 2, satz: "winkel", einheit: "°",
          text: "Berechne den Winkel α auf dieselbe Weise.",
          wert: t4_a,
          hilfen: ["Vertausche zyklisch: Jetzt schließen b und c den Winkel α ein, a liegt gegenüber.", "cos α = (b² + c² − a²) / (2bc)"],
          weg: `cos α = (36 + 49 − 25) / (2 · 6 · 7) = 60 / 84 ≈ ${z(60 / 84, 4)}<br>α ≈ ${z(t4_a)}°` },
        { id: "e", niveau: 1, satz: "winkelsumme", einheit: "°",
          text: "Bestimme den dritten Winkel β.",
          wert: 180 - t4_g - t4_a,
          hilfen: ["Für den letzten Winkel brauchst du keinen Kosinussatz mehr.", "Die Innenwinkel eines Dreiecks ergeben zusammen 180°."],
          weg: `β = 180° − ${z(t4_g)}° − ${z(t4_a)}° ≈ ${z(180 - t4_g - t4_a)}°<br>Probe: Der größte Winkel γ liegt der längsten Seite c gegenüber. ✔` }
      ]
    },
    {
      id: 5, niveau: 1, titel: "Der Teich im Park", themen: ["Anwendung", "SWS"],
      einleitung: "Die Länge eines Teiches soll bestimmt werden. Man kann nicht direkt von A nach B messen. Deshalb misst man von einem Punkt P am Ufer aus: PA = 120 m, PB = 150 m, und der Winkel ∠APB beträgt 65°.",
      skizze: "teich",
      teile: [
        { id: "a", niveau: 1, satz: "satzwahl", typ: "auswahl",
          text: "Welcher Fall liegt im Dreieck APB vor?",
          optionen: ["SWS: zwei Seiten und der eingeschlossene Winkel", "SSS: drei Seiten", "WSW: eine Seite und zwei Winkel", "SsW: zwei Seiten und ein nicht eingeschlossener Winkel"],
          richtig: 0,
          hilfen: ["Wo liegt der gemessene Winkel? Zwischen welchen Strecken?", "Der Winkel bei P liegt genau zwischen PA und PB."],
          weg: "Gegeben sind PA, PB und der Winkel bei P. Er liegt zwischen den beiden Seiten. Das ist der Fall SWS, also hilft der Kosinussatz." },
        { id: "b", niveau: 1, satz: "seite", einheit: "m",
          text: "Berechne die Länge des Teiches AB.",
          wert: t5_ab,
          hilfen: ["Die gesuchte Strecke AB liegt dem Winkel bei P gegenüber.", "AB² = PA² + PB² − 2 · PA · PB · cos 65°"],
          weg: `AB² = 120² + 150² − 2 · 120 · 150 · cos 65°<br>= 14 400 + 22 500 − 36 000 · ${z(cos(65), 4)}<br>≈ ${z(t5_ab ** 2, 0)}<br>AB ≈ ${z(t5_ab)} m` },
        { id: "c", niveau: 2, satz: "winkel", einheit: "°",
          text: "Wer am Punkt A steht und zum Punkt B schaut, muss wissen, in welchem Winkel zur Strecke AP er peilen muss. Berechne den Winkel bei A im Dreieck APB.",
          wert: winkel(120, t5_ab, 150),
          hilfen: ["Jetzt kennst du alle drei Seiten. Welche Seite liegt dem Winkel bei A gegenüber?", "cos A = (PA² + AB² − PB²) / (2 · PA · AB)"],
          weg: `cos A = (120² + ${z(t5_ab)}² − 150²) / (2 · 120 · ${z(t5_ab)}) ≈ ${z((120 ** 2 + t5_ab ** 2 - 150 ** 2) / (240 * t5_ab), 4)}<br>Winkel bei A ≈ ${z(winkel(120, t5_ab, 150))}°` }
      ]
    },

    // ───────────── ★★ Standard ─────────────
    {
      id: 6, niveau: 2, titel: "Ein Dreieck komplett berechnen", themen: ["SWS", "Lösungsschema"],
      einleitung: "Gegeben ist ein Dreieck mit a = 7 cm, c = 5 cm und β = 48°. Berechne alle fehlenden Stücke nach dem Lösungsschema: dritte Seite, zweiter Winkel, dritter Winkel.",
      skizze: { seiten: [7, t6_b, 5], text: { a: "a = 7 cm", b: "b = ?", c: "c = 5 cm" }, winkel: { B: "48°" }, hervor: ["b"] },
      teile: [
        { id: "a", niveau: 1, satz: "seite", einheit: "cm",
          text: "Berechne die Seite b.",
          wert: t6_b,
          hilfen: ["β wird von a und c eingeschlossen. Gesucht ist die Seite gegenüber von β.", "b² = a² + c² − 2ac · cos β"],
          weg: `b² = 7² + 5² − 2 · 7 · 5 · cos 48°<br>= 74 − 70 · ${z(cos(48), 4)} ≈ ${z(t6_b ** 2)}<br>b ≈ ${z(t6_b)} cm` },
        { id: "b", niveau: 2, satz: "satzwahl", typ: "auswahl",
          text: "Welches Vorgehen ist für den nächsten Schritt am sichersten?",
          optionen: ["α mit dem Kosinussatz berechnen, denn α liegt der längsten Seite gegenüber und könnte stumpf sein", "α mit dem Sinussatz berechnen, denn der Taschenrechner liefert immer den richtigen Winkel", "γ mit dem Kosinussatz berechnen, denn γ liegt der längsten Seite gegenüber"],
          richtig: 0,
          hilfen: ["Welche Seite ist jetzt die längste: a, b oder c?", "Nur der Winkel gegenüber der längsten Seite kann stumpf sein. Die Taste sin⁻¹ liefert aber nur Winkel bis 90°."],
          weg: `Die längste Seite ist a = 7 cm (b ≈ ${z(t6_b)} cm, c = 5 cm). Nur α kann stumpf sein.<br>Der Kosinussatz liefert auch stumpfe Winkel eindeutig, deshalb berechnet man α am sichersten damit.` },
        { id: "c", niveau: 2, satz: "winkel", einheit: "°",
          text: "Berechne den Winkel α.",
          wert: t6_a,
          hilfen: ["cos α = (b² + c² − a²) / (2bc)", "Rechne mit dem ungerundeten Wert von b aus Teilaufgabe a."],
          weg: `cos α = (b² + 5² − 7²) / (2 · b · 5) ≈ (${z(t6_b ** 2)} + 25 − 49) / (10 · ${z(t6_b, 4)}) ≈ ${z(t6_ca, 4)}<br>α ≈ ${z(t6_a)}° (knapp spitz)` },
        { id: "d", niveau: 1, satz: "winkelsumme", einheit: "°",
          text: "Berechne den Winkel γ.",
          wert: 180 - 48 - t6_a,
          hilfen: ["Zwei Winkel kennst du schon.", "Winkelsumme: α + β + γ = 180°"],
          weg: `γ = 180° − 48° − ${z(t6_a)}° ≈ ${z(180 - 48 - t6_a)}°<br>Probe: Der kürzesten Seite c = 5 cm liegt der kleinste Winkel γ gegenüber, der längsten Seite a der größte Winkel α. ✔` },
        { id: "e", niveau: 2, satz: "seite", typ: "auswahl",
          text: `Jonas hat für b ungefähr ${z(wurzel(4 * cos(48)))} cm herausbekommen. Er hat (7² + 5² − 2 · 7 · 5) · cos 48° gerechnet und daraus die Wurzel gezogen. Wähle die zutreffende Beschreibung seines Fehlers.`,
          optionen: ["Er hat die Klammer falsch gesetzt: Nur 2 · 7 · 5 · cos 48° wird von 7² + 5² abgezogen.", "Er hat vergessen, die Wurzel zu ziehen.", "Er hätte cos 48° durch sin 48° ersetzen müssen."],
          richtig: 0,
          hilfen: ["Vergleiche Jonas' Eingabe genau mit dem Kosinussatz b² = a² + c² − 2ac · cos β.", "Im Kosinussatz ist 2ac · cos β ein Produkt, das als Ganzes abgezogen wird."],
          weg: `Jonas: (49 + 25 − 70) · cos 48° = 4 · ${z(cos(48), 4)} ≈ ${z(4 * cos(48))}, Wurzel ≈ ${z(wurzel(4 * cos(48)))}. Das ist zu klein.<br>Richtig: b² = 49 + 25 − (70 · cos 48°). Das Produkt 2 · 7 · 5 · cos 48° wird als Ganzes abgezogen, deshalb gehören 7² + 5² nicht mit in die Klammer.` }
      ]
    },
    {
      id: 7, niveau: 2, titel: "Der stumpfe Winkel versteckt sich", themen: ["SSS", "stumpfer Winkel"],
      einleitung: "Ein Dreieck hat die Seiten a = 4 cm, b = 9 cm und c = 7 cm. Berechne alle drei Winkel.",
      skizze: { seiten: [4, 9, 7], text: { a: "a = 4 cm", b: "b = 9 cm", c: "c = 7 cm" }, winkel: { A: "α", B: "β", C: "γ" } },
      teile: [
        { id: "a", niveau: 2, satz: "satzwahl", typ: "auswahl",
          text: "Mit welchem Winkel fängst du am besten an?",
          optionen: ["mit β, denn er liegt der längsten Seite b gegenüber", "mit α, denn er liegt der kürzesten Seite gegenüber", "egal, alle drei sind sicher spitz"],
          richtig: 0,
          hilfen: ["Welcher Winkel könnte stumpf sein?", "Der größte Winkel liegt der längsten Seite gegenüber. Bestimmt man ihn zuerst, sind die beiden anderen sicher spitz."],
          weg: "Die längste Seite ist b = 9 cm. Ihr gegenüber liegt der größte Winkel β. Nur er kann stumpf sein, deshalb beginnt man mit ihm." },
        { id: "b", niveau: 2, satz: "winkel", einheit: "",
          text: "Berechne cos β. Runde auf zwei Nachkommastellen.",
          wert: t7_cb,
          hilfen: ["β wird von a und c eingeschlossen.", "cos β = (a² + c² − b²) / (2ac)"],
          weg: `cos β = (16 + 49 − 81) / (2 · 4 · 7) = −16 / 56 ≈ ${z(t7_cb, 4)}<br>Der Wert ist negativ: β ist stumpf.` },
        { id: "c", niveau: 2, satz: "stumpf", einheit: "°",
          text: "Berechne β.",
          wert: t7_b,
          hilfen: ["β = cos⁻¹(Ergebnis aus b)", "Ein negativer Kosinus gehört zu einem Winkel zwischen 90° und 180°. Der Taschenrechner liefert ihn direkt."],
          weg: `β = cos⁻¹(${z(t7_cb, 4)}) ≈ ${z(t7_b)}°` },
        { id: "d", niveau: 2, satz: "stumpf", typ: "auswahl",
          text: "Mia hat so gerechnet: 81 = 16 + 49 − 56 · cos β ⇒ 81 − 65 = 56 · cos β ⇒ cos β ≈ 0,29 ⇒ β ≈ 73,4°. Wähle die zutreffende Beschreibung ihres Fehlers.",
          optionen: ["Vorzeichenfehler: Aus 81 = 65 − 56 · cos β folgt 16 = −56 · cos β, also ist cos β negativ.", "Mia hätte zuerst die Wurzel aus 81 ziehen müssen.", "Mia hat richtig gerechnet, der Taschenrechner stand auf RAD."],
          richtig: 0,
          hilfen: ["Prüfe den zweiten Umformungsschritt: Was passiert mit dem Minuszeichen vor 56 · cos β?", "Schon vorher erkennbar: 9² = 81 ist größer als 4² + 7² = 65. Was bedeutet das für β?"],
          weg: "Aus 81 = 65 − 56 · cos β folgt 81 − 65 = −56 · cos β, also cos β = −16/56 ≈ −0,29. Mia hat das Minuszeichen verloren.<br>Schon vor dem Rechnen erkennbar: 81 > 65, also ist β stumpf und cos β muss negativ sein." },
        { id: "e", niveau: 2, satz: "winkel", einheit: "°",
          text: "Berechne α.",
          wert: t7_a,
          hilfen: ["α wird von b und c eingeschlossen.", "cos α = (b² + c² − a²) / (2bc)"],
          weg: `cos α = (81 + 49 − 16) / (2 · 9 · 7) = 114 / 126 ≈ ${z(114 / 126, 4)}<br>α ≈ ${z(t7_a)}°` },
        { id: "f", niveau: 1, satz: "winkelsumme", einheit: "°",
          text: "Bestimme γ.",
          wert: 180 - t7_b - t7_a,
          hilfen: ["Den letzten Winkel bekommst du ohne Kosinussatz.", "γ = 180° − α − β"],
          weg: `γ = 180° − ${z(t7_b)}° − ${z(t7_a)}° ≈ ${z(180 - t7_b - t7_a)}°` }
      ]
    },
    {
      id: 8, niveau: 2, titel: "Zwei Schiffe verlassen den Hafen", themen: ["Anwendung", "SWS"],
      einleitung: "Zwei Schiffe verlassen gleichzeitig denselben Hafen H auf geradem Kurs. Ihre Kurse schließen einen Winkel von 72° ein. Die Fähre fährt mit 24 km/h, das Segelboot mit 18 km/h.",
      skizze: "schiffe",
      teile: [
        { id: "a", niveau: 1, satz: "sachrechnen", einheit: "km",
          text: "Berechne die Strecke, die die Fähre nach 1,5 Stunden zurückgelegt hat.",
          wert: 36,
          hilfen: ["Weg = Geschwindigkeit · Zeit", "24 km/h · 1,5 h"],
          weg: "s = 24 km/h · 1,5 h = 36 km" },
        { id: "b", niveau: 1, satz: "sachrechnen", einheit: "km",
          text: "Berechne die Strecke, die das Segelboot nach 1,5 Stunden zurückgelegt hat.",
          wert: 27,
          hilfen: ["Wie in a, nur mit der anderen Geschwindigkeit.", "18 km/h · 1,5 h"],
          weg: "s = 18 km/h · 1,5 h = 27 km" },
        { id: "c", niveau: 2, satz: "seite", einheit: "km",
          text: "Berechne die Entfernung der beiden Schiffe nach 1,5 Stunden.",
          wert: t8_d,
          hilfen: ["Zeichne das Dreieck aus Hafen und den beiden Schiffen. Welcher Fall liegt vor?", "Der Winkel von 72° liegt zwischen den beiden Strecken aus a und b. Die Entfernung liegt ihm gegenüber."],
          weg: `d² = 27² + 36² − 2 · 27 · 36 · cos 72°<br>= 2025 − 1944 · ${z(cos(72), 4)} ≈ ${z(t8_d ** 2)}<br>d ≈ ${z(t8_d)} km` },
        { id: "d", niveau: 2, satz: "seite", einheit: "km",
          text: "Berechne die Entfernung nach 3 Stunden. Überlege zuerst, ob du überhaupt neu rechnen musst.",
          wert: 2 * t8_d,
          hilfen: ["Nach doppelter Zeit sind beide Strecken doppelt so lang, der Winkel bleibt gleich.", "Das neue Dreieck ist eine Vergrößerung des alten mit dem Faktor 2."],
          weg: `Nach 3 h: 54 km und 72 km, Winkel weiterhin 72°. Das Dreieck ist mit dem Faktor 2 vergrößert, also auch die Entfernung:<br>d ≈ 2 · ${z(t8_d)} ≈ ${z(2 * t8_d)} km<br>(Probe mit dem Kosinussatz: d² = 54² + 72² − 2 · 54 · 72 · cos 72° liefert denselben Wert.)` }
      ]
    },
    {
      id: 9, niveau: 2, titel: "Spitz, recht, stumpf – oder gar kein Dreieck?", themen: ["SSS", "Dreiecksart", "Dreiecksungleichung"],
      einleitung: "Ein Dreieck hat die Seiten 6 cm, 8 cm und 11 cm. Du sollst herausfinden, ob es spitz-, recht- oder stumpfwinklig ist, und zwar zunächst ohne einen Winkel auszurechnen.",
      skizze: { seiten: [6, 8, 11], text: { a: "6 cm", b: "8 cm", c: "11 cm" }, winkel: { C: "γ" } },
      teile: [
        { id: "a", niveau: 1, satz: "stumpf", einheit: "cm²",
          text: "Berechne die Differenz: Quadrat der längsten Seite minus die Summe der Quadrate der beiden kürzeren Seiten.",
          wert: 11 ** 2 - 6 ** 2 - 8 ** 2,
          hilfen: ["Die längste Seite ist 11 cm, die beiden kürzeren sind 6 cm und 8 cm.", "Rechne 11² − (6² + 8²)."],
          weg: "11² − (6² + 8²) = 121 − 100 = 21 (cm²)" },
        { id: "b", niveau: 2, satz: "stumpf", typ: "auswahl",
          text: "Entscheide mithilfe von a, welche Art von Dreieck vorliegt.",
          optionen: ["stumpfwinklig, denn 11² ist größer als 6² + 8²", "spitzwinklig, denn 11² ist größer als 6² + 8²", "rechtwinklig, denn 6 + 8 ist größer als 11"],
          richtig: 0,
          hilfen: ["Im Kosinussatz c² = a² + b² − 2ab · cos γ entscheidet cos γ, ob c² größer oder kleiner als a² + b² ist.", "Ist c² größer als a² + b², dann muss 2ab · cos γ negativ sein. Wann ist der Kosinus negativ?"],
          weg: "121 > 100, also c² > a² + b².<br>Dann muss −2ab · cos γ positiv sein, also cos γ < 0. Ein negativer Kosinus gehört zu einem stumpfen Winkel: Das Dreieck ist stumpfwinklig." },
        { id: "c", niveau: 2, satz: "winkel", einheit: "°",
          text: "Bestätige dein Ergebnis: Berechne den Winkel γ gegenüber der 11-cm-Seite.",
          wert: t9_g,
          hilfen: ["Stelle den Kosinussatz nach cos γ um. Welche Seite steht im Zähler mit Minus?", "Den Zähler kennst du schon aus a (Vorzeichen beachten), im Nenner steht 2 · 6 · 8."],
          weg: `cos γ = (6² + 8² − 11²) / (2 · 6 · 8) = −21 / 96 ≈ ${z(-21 / 96, 4)}<br>γ ≈ ${z(t9_g)}° (stumpf ✔)` },
        { id: "d", niveau: 3, satz: "pythagoras", einheit: "cm",
          text: "Die Seiten 6 cm und 8 cm bleiben. Berechne, wie lang die dritte Seite höchstens sein darf, damit das Dreieck nicht stumpfwinklig ist.",
          wert: 10,
          hilfen: ["Der Grenzfall zwischen spitz und stumpf ist der rechte Winkel.", "Was wird aus dem Kosinussatz, wenn γ = 90° ist?"],
          weg: "Grenzfall γ = 90°: c² = 6² + 8² = 100, also c = 10 cm.<br>Ist die dritte Seite höchstens 10 cm lang (und die längste Seite), ist das Dreieck nicht stumpfwinklig." },
        { id: "e", niveau: 2, satz: "winkel", einheit: "",
          text: "Lea will ein Dreieck mit den Seiten 8 cm, 3 cm und 4 cm berechnen. Berechne den Kosinus des Winkels gegenüber der 8-cm-Seite. Runde auf zwei Nachkommastellen.",
          wert: (3 ** 2 + 4 ** 2 - 8 ** 2) / (2 * 3 * 4),
          hilfen: ["Der Winkel gegenüber 8 cm wird von den Seiten 3 cm und 4 cm eingeschlossen.", "cos = (3² + 4² − 8²) / (2 · 3 · 4). Erschrick nicht über das Ergebnis!"],
          weg: "cos = (9 + 16 − 64) / 24 = −39 / 24 = −1,625 ≈ −1,63" },
        { id: "f", niveau: 2, satz: "winkel", typ: "auswahl",
          text: "Der Taschenrechner meldet bei cos⁻¹(−1,625) einen Fehler. Wähle die zutreffende Erklärung.",
          optionen: ["Es gibt kein solches Dreieck, denn 3 cm + 4 cm ist kürzer als 8 cm.", "Der Winkel ist größer als 180°, das Dreieck ist überstumpf.", "Lea muss den Taschenrechner auf RAD stellen."],
          richtig: 0,
          hilfen: ["Der Kosinus liegt immer zwischen −1 und 1. Was bedeutet ein Wert außerhalb?", "Versuche, das Dreieck mit Zirkel und Lineal zu zeichnen: Reichen 3 cm und 4 cm, um die Enden der 8-cm-Strecke zu verbinden?"],
          weg: "Ein Kosinuswert kleiner als −1 ist unmöglich. Geometrisch: 3 cm + 4 cm = 7 cm < 8 cm, die beiden kurzen Seiten treffen sich nicht. Die Dreiecksungleichung ist verletzt: Jede Seite muss kürzer sein als die Summe der beiden anderen." }
      ]
    },
    {
      id: 10, niveau: 2, titel: "Diagonalen im Parallelogramm", themen: ["Parallelogramm", "SWS"],
      einleitung: "Ein Parallelogramm ABCD hat die Seiten AB = 8 cm und AD = 5 cm. Der Winkel bei A beträgt 55°. Gesucht sind die beiden Diagonalen f = BD und e = AC.",
      skizze: "parallelogramm",
      teile: [
        { id: "a", niveau: 1, satz: "winkelsumme", einheit: "°",
          text: "Bestimme den Innenwinkel des Parallelogramms bei B.",
          wert: 125,
          hilfen: ["Im Parallelogramm ergeben zwei benachbarte Winkel zusammen 180°.", "Winkel bei B = 180° − Winkel bei A"],
          weg: "Benachbarte Winkel im Parallelogramm ergänzen sich zu 180°: 180° − 55° = 125°." },
        { id: "b", niveau: 2, satz: "seite", einheit: "cm",
          text: "Berechne die kurze Diagonale f = BD.",
          wert: t10_f,
          hilfen: ["Betrachte das Dreieck ABD. Welcher Winkel liegt zwischen AB und AD?", "f² = 8² + 5² − 2 · 8 · 5 · cos 55°"],
          weg: `Dreieck ABD: f² = 8² + 5² − 2 · 8 · 5 · cos 55°<br>= 89 − 80 · ${z(cos(55), 4)} ≈ ${z(t10_f ** 2)}<br>f ≈ ${z(t10_f)} cm`,
          skizze: "parallelogramm_f" },
        { id: "c", niveau: 2, satz: "stumpf", einheit: "cm",
          text: "Berechne die lange Diagonale e = AC.",
          wert: t10_e,
          hilfen: ["Betrachte das Dreieck ABC. Die Seite BC ist so lang wie AD.", "Im Dreieck ABC liegt der Winkel aus Teilaufgabe a zwischen AB und BC."],
          weg: `Dreieck ABC mit BC = 5 cm und dem Winkel 125° bei B:<br>e² = 8² + 5² − 2 · 8 · 5 · cos 125°<br>= 89 − 80 · (${z(cos(125), 4)}) ≈ ${z(t10_e ** 2)}<br>e ≈ ${z(t10_e)} cm`,
          skizze: "parallelogramm_e" },
        { id: "d", niveau: 2, satz: "stumpf", einheit: "cm²",
          text: "Berechne e² + f².",
          wert: t10_e ** 2 + t10_f ** 2,
          hilfen: ["Nimm die ungerundeten Werte aus b und c.", "Quadriere e und f und addiere. Oder schau dir die Zeilen e² = … und f² = … aus b und c an."],
          weg: `e² + f² ≈ ${z(t10_e ** 2)} + ${z(t10_f ** 2)} = 178` },
        { id: "e", niveau: 3, satz: "stumpf", typ: "auswahl",
          text: "Es fällt auf: e² + f² = 178 = 2 · (8² + 5²). Wähle die zutreffende Aussage.",
          optionen: ["Das gilt in jedem Parallelogramm, weil cos(180° − α) = −cos α ist und sich die Kosinus-Terme beim Addieren aufheben.", "Das gilt nur bei diesem Parallelogramm, weil 55° ein besonderer Winkel ist.", "Das gilt nur in Rechtecken, weil dort e = f ist."],
          richtig: 0,
          hilfen: ["Die beiden Winkel im Parallelogramm sind α und 180° − α. Wie hängen ihre Kosinuswerte zusammen?", "Schreibe allgemein e² = a² + b² − 2ab · cos(180° − α) und f² = a² + b² − 2ab · cos α und addiere."],
          weg: "f² = a² + b² − 2ab · cos α und e² = a² + b² − 2ab · cos(180° − α) = a² + b² + 2ab · cos α.<br>Beim Addieren heben sich die Kosinus-Terme auf: e² + f² = 2 · (a² + b²). Das gilt für jedes Parallelogramm (Parallelogrammgleichung)." }
      ]
    },

    // ───────────── ★★★ Expert ─────────────
    {
      id: 11, niveau: 3, titel: "Die Taschenrechner-Falle", themen: ["Fehlersuche", "Sinussatz"],
      einleitung: "Im Dreieck ABC sind b = 4 cm, c = 7 cm und α = 40° gegeben. Tom berechnet zuerst a mit dem Kosinussatz und danach den Winkel γ mit dem Sinussatz. Sein Ergebnis für γ passt aber nicht zum Dreieck.",
      skizze: { seiten: [t11_a, 4, 7], text: { a: "a = ?", b: "b = 4 cm", c: "c = 7 cm" }, winkel: { A: "40°", C: "γ" }, hervor: ["a"] },
      teile: [
        { id: "a", niveau: 2, satz: "seite", einheit: "cm",
          text: "Berechne die Seite a.",
          wert: t11_a,
          hilfen: ["α wird von b und c eingeschlossen.", "a² = b² + c² − 2bc · cos α"],
          weg: `a² = 16 + 49 − 2 · 4 · 7 · cos 40° = 65 − 56 · ${z(cos(40), 4)} ≈ ${z(t11_a ** 2)}<br>a ≈ ${z(t11_a)} cm` },
        { id: "b", niveau: 2, satz: "sinussatz", einheit: "°",
          text: "Rechne Toms Weg nach: sin γ = c · sin α / a. Welchen Winkel zeigt der Taschenrechner für γ an?",
          wert: t11_falsch,
          hilfen: ["Setze c = 7 cm, α = 40° und dein ungerundetes a ein.", "Mit sin⁻¹ bekommst du einen Winkel. Das ist Toms Ergebnis."],
          weg: `sin γ = 7 · sin 40° / ${z(t11_a)} ≈ ${z((7 * sin(40)) / t11_a, 4)}<br>Taschenrechner: γ ≈ ${z(t11_falsch)}°` },
        { id: "c", niveau: 3, satz: "stumpf", einheit: "°",
          text: "Berechne γ richtig mit dem Kosinussatz.",
          wert: t11_g,
          hilfen: ["γ liegt der Seite c gegenüber und wird von a und b eingeschlossen.", "cos γ = (a² + b² − c²) / (2ab). Achte auf das Vorzeichen des Ergebnisses."],
          weg: `cos γ = (${z(t11_a ** 2)} + 16 − 49) / (2 · ${z(t11_a)} · 4) ≈ ${z((t11_a ** 2 + 16 - 49) / (8 * t11_a), 4)}<br>γ ≈ ${z(t11_g)}°<br>Toms Fehler: Zu sin γ ≈ ${z((7 * sin(40)) / t11_a, 3)} gehören zwei Winkel, ${z(t11_falsch)}° und 180° − ${z(t11_falsch)}° ≈ ${z(180 - t11_falsch)}°. Der Taschenrechner zeigt nur den spitzen. Weil c die längste Seite ist und c² > a² + b² gilt, ist γ stumpf.` },
        { id: "d", niveau: 2, satz: "winkelsumme", einheit: "°",
          text: "Berechne den Winkel β.",
          wert: 180 - 40 - t11_g,
          hilfen: ["Nimm den richtigen Wert für γ.", "β = 180° − α − γ"],
          weg: `β = 180° − 40° − ${z(t11_g)}° ≈ ${z(180 - 40 - t11_g)}°<br>Mit Toms falschem γ wäre β ≈ ${z(180 - 40 - t11_falsch)}° größer als α = 40°, obwohl b = 4 cm kürzer ist als a ≈ ${z(t11_a)} cm. Der größere Winkel muss aber der längeren Seite gegenüberliegen – ein Widerspruch.` },
        { id: "e", niveau: 3, satz: "satzwahl", typ: "auswahl",
          text: "Wähle die Faustregel, die Tom vor dem Fehler bewahrt hätte.",
          optionen: ["Den Winkel gegenüber der längsten Seite immer mit dem Kosinussatz berechnen", "Immer auf eine Nachkommastelle runden, bevor man weiterrechnet", "Nach dem Kosinussatz nie wieder den Kosinussatz verwenden"],
          richtig: 0,
          hilfen: ["Die Taste sin⁻¹ liefert nur Winkel bis 90°. Welcher Winkel im Dreieck kann stumpf sein?", "cos⁻¹ liefert Winkel zwischen 0° und 180° eindeutig."],
          weg: "Nur der Winkel gegenüber der längsten Seite kann stumpf sein. Berechnet man ihn mit dem Kosinussatz, ist das Ergebnis eindeutig. Die übrigen Winkel sind dann sicher spitz, für sie darf man auch den Sinussatz nehmen." }
      ]
    },
    {
      id: 12, niveau: 3, titel: "Der Tunnel durch den Berg", themen: ["Anwendung", "SWS", "SSS"],
      einleitung: "Durch einen Berg soll ein gerader Tunnel von A nach B gebaut werden. Von einem Vermessungspunkt C aus, von dem man beide Tunneleingänge sieht, misst man CA = 850 m, CB = 1240 m und den Winkel ∠ACB = 58°.",
      skizze: "tunnel",
      teile: [
        { id: "a", niveau: 2, satz: "seite", einheit: "m",
          text: "Berechne die Länge des Tunnels.",
          wert: t12_ab,
          hilfen: ["Der Tunnel AB liegt dem gemessenen Winkel bei C gegenüber.", "AB² = CA² + CB² − 2 · CA · CB · cos 58°"],
          weg: `AB² = 850² + 1240² − 2 · 850 · 1240 · cos 58°<br>= 2 260 100 − 2 108 000 · ${z(cos(58), 4)} ≈ ${z(t12_ab ** 2, 0)}<br>AB ≈ ${z(t12_ab)} m` },
        { id: "b", niveau: 3, satz: "winkel", einheit: "°",
          text: "Damit sich die beiden Bautrupps treffen, muss bei A in die richtige Richtung gebohrt werden. Berechne den Winkel ∠CAB zwischen der Richtung zum Vermessungspunkt C und der Tunnelrichtung.",
          wert: t12_A,
          hilfen: ["Welche Seite liegt dem Winkel bei A gegenüber?", "cos(∠CAB) = (CA² + AB² − CB²) / (2 · CA · AB). Prüfe zuerst: Kann der Winkel stumpf sein?"],
          weg: `Gegenüber von A liegt CB = 1240 m, die längste Seite.<br>cos(∠CAB) = (850² + ${z(t12_ab)}² − 1240²) / (2 · 850 · ${z(t12_ab)}) ≈ ${z((850 ** 2 + t12_ab ** 2 - 1240 ** 2) / (1700 * t12_ab), 4)}<br>∠CAB ≈ ${z(t12_A)}°` },
        { id: "c", niveau: 3, satz: "satzwahl", typ: "auswahl",
          text: "Für den Winkel ∠CBA schlägt Ali den Sinussatz vor: sin(∠CBA) = 850 · sin 58° / AB. Entscheide, ob das sicher ist.",
          optionen: ["Ja: Mit AB und 58° gibt es ein vollständiges Paar, und ∠CBA liegt nicht der längsten Seite gegenüber, ist also sicher spitz.", "Nein: Der Sinussatz gilt nur für SsW, hier braucht man den Kosinussatz.", "Nein: Der Sinussatz braucht immer drei bekannte Winkel."],
          richtig: 0,
          hilfen: ["Leitfrage: Kennst du jetzt eine Seite und ihren Gegenwinkel?", "Gefährlich ist sin⁻¹ nur für einen stumpfen Winkel. Welcher Winkel könnte hier stumpf sein?"],
          weg: "AB liegt dem Winkel 58° gegenüber: ein vollständiges Paar, also ist der Sinussatz anwendbar.<br>∠CBA liegt CA = 850 m gegenüber, nicht der längsten Seite CB. Er ist deshalb sicher spitz, und sin⁻¹ liefert den richtigen Wert." },
        { id: "d", niveau: 2, satz: "sinussatz", einheit: "°",
          text: "Berechne den Winkel ∠CBA.",
          wert: 180 - 58 - t12_A,
          hilfen: ["Du kannst Alis Weg nehmen oder die Winkelsumme nutzen.", "Kontrolliere: Beide Wege müssen dasselbe Ergebnis liefern."],
          weg: `Sinussatz: sin(∠CBA) = 850 · sin 58° / ${z(t12_ab)} ≈ ${z((850 * sin(58)) / t12_ab, 4)} ⇒ ∠CBA ≈ ${z(180 - 58 - t12_A)}°<br>Kontrolle mit der Winkelsumme: 180° − 58° − ${z(t12_A)}° ≈ ${z(180 - 58 - t12_A)}° ✔` },
        { id: "e", niveau: 3, satz: "sachrechnen", einheit: "m",
          text: "Beide Trupps beginnen am selben Tag. Der Trupp in A schafft 6 m pro Tag, der Trupp in B wegen weicheren Gesteins 8 m pro Tag. Berechne, wie weit vom Eingang A entfernt sich die Trupps treffen.",
          wert: t12_treff,
          hilfen: ["Zusammen schaffen die Trupps 14 m pro Tag. Wie viele Tage dauert es bis zum Treffen?", "Der Trupp aus A bohrt 6 von je 14 Metern, also den Anteil 6/14 des Tunnels."],
          weg: `Zusammen 14 m pro Tag: ${z(t12_ab)} m : 14 m ≈ ${z(t12_ab / 14)} Tage.<br>Trupp A: 6 m · ${z(t12_ab / 14)} ≈ ${z(t12_treff)} m vom Eingang A entfernt.` }
      ]
    },
    {
      id: 13, niveau: 3, titel: "Das Grundstück", themen: ["Viereck", "Flächeninhalt", "SSS"],
      einleitung: "Ein viereckiges Grundstück ABCD wurde vermessen: AB = 40 m, BC = 25 m, CD = 30 m, DA = 35 m. Zusätzlich hat man die Diagonale AC = 45 m gemessen. Sie teilt das Grundstück in zwei Dreiecke.<br>Für den Flächeninhalt eines Dreiecks aus zwei Seiten und dem eingeschlossenen Winkel gilt: <b>A = ½ · a · b · sin γ</b>.",
      skizze: "grundstueck",
      teile: [
        { id: "a", niveau: 2, satz: "winkel", einheit: "°",
          text: "Berechne den Innenwinkel bei B im Dreieck ABC.",
          wert: t13_B,
          hilfen: ["Im Dreieck ABC kennst du alle drei Seiten. Welche liegt dem Winkel bei B gegenüber?", "cos B = (AB² + BC² − AC²) / (2 · AB · BC)"],
          weg: `cos B = (40² + 25² − 45²) / (2 · 40 · 25) = (1600 + 625 − 2025) / 2000 = 0,1<br>Winkel bei B ≈ ${z(t13_B)}°` },
        { id: "b", niveau: 2, satz: "flaeche", einheit: "m²",
          text: "Berechne den Flächeninhalt des Dreiecks ABC.",
          wert: t13_F1,
          hilfen: ["Für die Fläche brauchst du zwei Seiten und den Winkel, den sie einschließen.", "A = ½ · AB · BC · sin B"],
          weg: `A₁ = ½ · 40 · 25 · sin ${z(t13_B)}° ≈ 500 · ${z(sin(t13_B), 4)} ≈ ${z(t13_F1)} m²` },
        { id: "c", niveau: 2, satz: "winkel", einheit: "°",
          text: "Berechne den Innenwinkel bei D im Dreieck ACD.",
          wert: t13_D,
          hilfen: ["Dem Winkel bei D liegt die Diagonale AC gegenüber.", "cos D = (CD² + DA² − AC²) / (2 · CD · DA)"],
          weg: `cos D = (900 + 1225 − 2025) / (2 · 30 · 35) = 100 / 2100 ≈ ${z(100 / 2100, 4)}<br>Winkel bei D ≈ ${z(t13_D)}°` },
        { id: "d", niveau: 3, satz: "flaeche", einheit: "m²",
          text: "Berechne den Flächeninhalt des ganzen Grundstücks.",
          wert: t13_F1 + t13_F2,
          hilfen: ["Berechne zuerst die Fläche des Dreiecks ACD wie in b.", "A₂ = ½ · CD · DA · sin D, dann A₁ + A₂."],
          weg: `A₂ = ½ · 30 · 35 · sin ${z(t13_D)}° ≈ ${z(t13_F2)} m²<br>A = A₁ + A₂ ≈ ${z(t13_F1)} + ${z(t13_F2)} ≈ ${z(t13_F1 + t13_F2)} m²` }
      ]
    },
    {
      id: 14, niveau: 3, titel: "Zwei Dreiecke auf einmal", themen: ["SsW", "quadratische Gleichung"],
      einleitung: "Gegeben sind a = 6 cm, b = 8 cm und α = 35°. Der Winkel α liegt nicht zwischen a und b (Fall SsW). Trotzdem kannst du den Kosinussatz a² = b² + c² − 2bc · cos α ansetzen. Er wird zu einer quadratischen Gleichung für die unbekannte Seite c.",
      skizze: "ssw",
      teile: [
        { id: "a", niveau: 3, satz: "quadratisch", einheit: "",
          text: "Setze die Werte ein und bringe die Gleichung auf die Normalform c² + p · c + q = 0. Gib p an (auf zwei Nachkommastellen gerundet).",
          wert: t14_p,
          hilfen: ["36 = 64 + c² − 2 · 8 · c · cos 35°. Bringe alles auf eine Seite, sodass links c² steht.", "p ist der ganze Faktor vor c, mit seinem Vorzeichen."],
          weg: `36 = 64 + c² − 16 · cos 35° · c   | − 36<br>0 = c² − 16 · cos 35° · c + 28<br>p = −16 · cos 35° ≈ ${z(t14_p, 4)}` },
        { id: "b", niveau: 2, satz: "quadratisch", einheit: "",
          text: "Gib q an.",
          wert: t14_q,
          hilfen: ["q ist die Zahl ohne c, nachdem alles auf einer Seite steht.", "Welche Zahlen bleiben übrig, wenn du a² auf die rechte Seite bringst?"],
          weg: "q = 64 − 36 = 28" },
        { id: "c", niveau: 3, satz: "quadratisch", einheit: "cm",
          text: "Löse die Gleichung mit der p-q-Formel. Gib die größere Lösung c₁ an.",
          wert: t14_c1,
          hilfen: ["p-q-Formel: c = −p/2 ± √((p/2)² − q).", "Rechne −p/2 und (p/2)² − q mit ungerundeten Werten."],
          weg: `−p/2 ≈ ${z(-t14_p / 2, 4)}, (p/2)² − q ≈ ${z(t14_D, 4)}<br>c₁ = ${z(-t14_p / 2, 4)} + √${z(t14_D, 4)} ≈ ${z(t14_c1)} cm` },
        { id: "d", niveau: 3, satz: "quadratisch", einheit: "cm",
          text: "Gib die kleinere Lösung c₂ an.",
          wert: t14_c2,
          hilfen: ["Jetzt das Minuszeichen vor der Wurzel in der p-q-Formel.", "c₂ = −p/2 − √((p/2)² − q)"],
          weg: `c₂ = ${z(-t14_p / 2, 4)} − √${z(t14_D, 4)} ≈ ${z(t14_c2)} cm` },
        { id: "e", niveau: 3, satz: "quadratisch", typ: "auswahl",
          text: "Gib an, wie viele Dreiecke es mit diesen Angaben gibt.",
          optionen: ["zwei, denn beide Lösungen sind positiv", "eines, denn eine Seite kann nur eine Länge haben", "keines, denn bei SsW hilft der Kosinussatz nicht"],
          richtig: 0,
          hilfen: ["Eine Seitenlänge muss positiv sein. Sind beide Lösungen positiv?", "Am Sinussatz hast du gesehen: Bei SsW kann es zwei Dreiecke geben, wenn die Seite gegenüber dem gegebenen Winkel die kürzere ist."],
          weg: `Beide Lösungen sind positiv (${z(t14_c1)} cm und ${z(t14_c2)} cm). Es gibt also zwei verschiedene Dreiecke.<br>Die Diskriminante entscheidet: positiv → zwei Lösungen, null → eine, negativ → kein Dreieck. Das passt zur Mehrdeutigkeit beim Sinussatz, weil hier a < b gilt.` }
      ]
    },
    {
      id: 15, niveau: 3, titel: "Der Schusswinkel", themen: ["Anwendung", "SSS", "SWS"],
      einleitung: "Eine Fußballspielerin steht im Punkt S. Ihr Abstand zum linken Torpfosten L beträgt 16 m, zum rechten Torpfosten R 19 m. Das Tor ist 7,32 m breit. Unter welchem Winkel sieht sie das Tor?",
      skizze: "fussball",
      teile: [
        { id: "a", niveau: 2, satz: "winkel", einheit: "°",
          text: "Berechne den Schusswinkel ∠LSR.",
          wert: t15_s,
          hilfen: ["Im Dreieck LSR kennst du alle drei Seiten. Die Torbreite liegt dem Schusswinkel gegenüber.", "cos(∠LSR) = (16² + 19² − 7,32²) / (2 · 16 · 19)"],
          weg: `cos(∠LSR) = (256 + 361 − 7,32²) / (2 · 16 · 19) ≈ ${z((256 + 361 - t15_tor ** 2) / 608, 4)}<br>∠LSR ≈ ${z(t15_s)}°` },
        { id: "b", niveau: 3, satz: "stumpf", einheit: "°",
          text: "Berechne den Winkel ∠SLR am linken Pfosten zwischen Torlinie und der Linie zur Spielerin.",
          wert: t15_L,
          hilfen: ["Dem Winkel bei L liegt die Strecke SR = 19 m gegenüber.", "cos(∠SLR) = (16² + 7,32² − 19²) / (2 · 16 · 7,32). Achte auf das Vorzeichen!"],
          weg: `cos(∠SLR) = (256 + 7,32² − 361) / (2 · 16 · 7,32) ≈ ${z((256 + t15_tor ** 2 - 361) / (32 * t15_tor), 4)}<br>∠SLR ≈ ${z(t15_L)}° (stumpf: Die Spielerin steht seitlich versetzt, ihr Lotfußpunkt auf der Torlinie liegt links außerhalb des Tores)` },
        { id: "c", niveau: 3, satz: "seite", einheit: "m",
          text: "Berechne die Entfernung der Spielerin von der Tormitte M.",
          wert: t15_m,
          hilfen: ["Betrachte das Dreieck SLM. LM ist die halbe Torbreite, den Winkel bei L kennst du aus b.", "SM² = 16² + 3,66² − 2 · 16 · 3,66 · cos(∠SLR)"],
          weg: `LM = 7,32 m : 2 = 3,66 m<br>SM² = 16² + 3,66² − 2 · 16 · 3,66 · cos ${z(t15_L)}° ≈ ${z(t15_m ** 2)}<br>SM ≈ ${z(t15_m)} m`,
          skizze: "fussball_m" }
      ]
    }
  ];

  // Wiederholungskarten. Die Karten mit istSatz lösen nach zwei verfehlten Teilaufgaben einen Hinweis aus.
  const WIEDERHOLUNG = {
    aufbau: {
      name: "Aufbau des Kosinussatzes", istSatz: true,
      merke: "a² = b² + c² − 2bc · cos α<br>b² = a² + c² − 2ac · cos β<br>c² = a² + b² − 2ab · cos γ<br>Links steht das Quadrat einer Seite, rechts die Quadrate der beiden anderen. Der Winkel ist der, den diese beiden einschließen. Er liegt der Seite links gegenüber.",
      tipps: ["Seite und Winkel mit demselben Buchstaben liegen sich gegenüber: a und α, b und β, c und γ.", "Du musst dir nur eine Gleichung merken. Die anderen entstehen durch zyklisches Vertauschen a → b → c → a.", "Die Quadrate nicht vergessen: c = a + b − … ist falsch."],
      buch: "Schreibe die drei Formen des Kosinussatzes auf eine Karteikarte und markiere in einer Planfigur farbig, welche Seite zu welchem Winkel gehört."
    },
    seite: {
      name: "Kosinussatz: dritte Seite (SWS)", istSatz: true,
      merke: "Gegeben: zwei Seiten und der eingeschlossene Winkel. Die dritte Seite liegt diesem Winkel gegenüber: c² = a² + b² − 2ab · cos γ.",
      tipps: ["Wurzel ziehen nicht vergessen: Der Kosinussatz liefert zuerst c².", "Taschenrechner: 2 · a · b · cos γ ist ein Produkt, das als Ganzes abgezogen wird. (a² + b² − 2ab) · cos γ ist falsch.", "Probe: Die dritte Seite muss kürzer sein als die Summe der beiden anderen.", "Modus DEG!"],
      buch: "Wiederhole das Lösungsschema SWS aus der Stationsarbeit (Station 4) und rechne ein Beispiel ohne Hilfe."
    },
    winkel: {
      name: "Kosinussatz: Winkel (SSS)", istSatz: true,
      merke: "Umgestellt nach dem Kosinus: cos γ = (a² + b² − c²) / (2ab). Im Zähler stehen die Quadrate der beiden Seiten, die den Winkel einschließen, minus das Quadrat der gegenüberliegenden Seite. Dann γ = cos⁻¹(…).",
      tipps: ["Beginne mit dem größten Winkel. Er liegt der längsten Seite gegenüber.", "Zähler und Nenner im Taschenrechner jeweils in Klammern setzen.", "Kommt ein Wert kleiner als −1 oder größer als 1 heraus, gibt es kein solches Dreieck (Dreiecksungleichung verletzt)."],
      buch: "Wiederhole Station 5 der Stationsarbeit (Rechnen mit SSS)."
    },
    stumpf: {
      name: "Kosinus stumpfer Winkel", istSatz: true,
      merke: "Für spitze Winkel ist cos positiv, für 90° ist cos = 0, für stumpfe Winkel ist cos negativ. Es gilt cos(180° − φ) = −cos φ. Zu jedem Kosinuswert gibt es zwischen 0° und 180° genau einen Winkel.",
      tipps: ["Minus mal minus ergibt plus: Bei stumpfem γ wird 2ab · |cos γ| addiert.", "Ist c² > a² + b², dann ist γ stumpf. Ist c² = a² + b², dann ist γ = 90°.", "Ein negatives Ergebnis für cos γ ist kein Rechenfehler!"],
      buch: "Wiederhole Station 3 der Stationsarbeit (Kosinus am Einheitskreis)."
    },
    satzwahl: {
      name: "Welcher Satz passt?", istSatz: true,
      merke: "Leitfrage: Kenne ich ein vollständiges Paar aus Seite und Gegenwinkel? Ja → Sinussatz. Nein (SWS oder SSS) → Kosinussatz.",
      tipps: ["SWS: Kosinussatz für die dritte Seite.", "SSS: Kosinussatz für den größten Winkel.", "Den Winkel gegenüber der längsten Seite nie mit dem Sinussatz berechnen: Der Taschenrechner zeigt nur den spitzen Winkel."],
      buch: "Wiederhole die Entscheidungshilfe aus Station 6 der Stationsarbeit."
    },
    sinussatz: {
      name: "Sinussatz", istSatz: true,
      merke: "a / sin α = b / sin β = c / sin γ. Achtung: sin⁻¹ liefert nur Winkel bis 90°. Zu einem Sinuswert gehören zwei Winkel: φ und 180° − φ.",
      tipps: ["Prüfe nach dem Sinussatz, ob der Winkel auch stumpf sein könnte.", "Der Sinussatz ist sicher für Winkel, die nicht der längsten Seite gegenüberliegen."],
      buch: "Wiederhole die Taschenrechnerfalle aus der Stationsarbeit zum Sinussatz."
    },
    pythagoras: {
      name: "Satz des Pythagoras", istSatz: true,
      merke: "Im rechtwinkligen Dreieck gilt c² = a² + b² (c ist die Hypotenuse). Das ist der Kosinussatz für γ = 90°, denn cos 90° = 0.",
      tipps: ["Die Hypotenuse liegt dem rechten Winkel gegenüber und ist die längste Seite."],
      buch: "Leite aus dem Kosinussatz den Satz des Pythagoras her, indem du γ = 90° einsetzt."
    },
    flaeche: {
      name: "Flächeninhalt mit dem Sinus", istSatz: true,
      merke: "A = ½ · a · b · sin γ. Man braucht zwei Seiten und den Winkel, den sie einschließen.",
      tipps: ["Die Höhe auf a ist h = b · sin γ. Daraus folgt die Formel A = ½ · a · h.", "Bei SSS zuerst einen Winkel mit dem Kosinussatz berechnen."],
      buch: "Begründe die Flächenformel mit einer Skizze der Höhe (Stationsarbeit, Aufgabe 7.3)."
    },
    quadratisch: {
      name: "SsW mit dem Kosinussatz", istSatz: true,
      merke: "Bei SsW wird der Kosinussatz zu einer quadratischen Gleichung für die unbekannte Seite. Die Anzahl der positiven Lösungen ist die Anzahl der Dreiecke.",
      tipps: ["Alles auf eine Seite bringen: c² − p · c + q = 0.", "p-q-Formel: c = p/2 ± √((p/2)² − q)."],
      buch: "Wiederhole die p-q-Formel und Aufgabe 7.2 der Stationsarbeit."
    },
    winkelsumme: { name: "Winkelsumme", istSatz: false,
      merke: "α + β + γ = 180°. Im Parallelogramm ergänzen sich benachbarte Winkel zu 180°.", tipps: [], buch: "" },
    sachrechnen: { name: "Sachrechnen", istSatz: false,
      merke: "Weg = Geschwindigkeit · Zeit. Auf passende Einheiten achten.", tipps: [], buch: "" }
  };

  const NIVEAUS = { 1: "Basis", 2: "Standard", 3: "Expert" };

  const ziel = typeof window !== "undefined" ? window : globalThis;
  ziel.AUFGABEN = AUFGABEN;
  ziel.WIEDERHOLUNG = WIEDERHOLUNG;
  ziel.NIVEAUS = NIVEAUS;
  if (typeof module !== "undefined") module.exports = { AUFGABEN, WIEDERHOLUNG, NIVEAUS };
})();
