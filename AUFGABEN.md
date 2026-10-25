# Kosinussatz mit Sternen – Aufgaben mit Lösungen

Erzeugt mit `node tools/durchsicht.js`. Die Reihenfolge der Antwortmöglichkeiten wird in der App gemischt.

### 1. Die dritte Seite ★

Im Dreieck ABC sind b = 5 cm, c = 7 cm und der Winkel α = 60° gegeben. Der Winkel α liegt zwischen den beiden Seiten b und c, er wird von ihnen eingeschlossen.

**a) ★** Welche Seite kannst du mit dem Kosinussatz aus b, c und α direkt berechnen?

- **[richtig]** die Seite a, denn sie liegt dem Winkel α gegenüber
- die Seite b, denn sie liegt am Winkel α an
- keine, dafür braucht man den Sinussatz
- Thema: Aufbau des Kosinussatzes
- Lösungsweg: Der Winkel α wird von b und c eingeschlossen. Die Seite, die ihm gegenüberliegt, ist a.<br>Deshalb gilt a² = b² + c² − 2bc · cos α, und a ist die gesuchte Seite.
- Hilfe 1: Der Kosinussatz verbindet zwei Seiten, den Winkel zwischen ihnen und die dritte Seite.
- Hilfe 2: Schau in die Skizze: Welche Seite berührt den Punkt A nicht?

**b) ★** Berechne zuerst a² mit dem Kosinussatz a² = b² + c² − 2bc · cos α.

- Lösung: **39 cm²** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: a² = 5² + 7² − 2 · 5 · 7 · cos 60°<br>= 25 + 49 − 70 · 0,5<br>= 74 − 35 = 39 (cm²)
- Hilfe 1: Setze ein: a² = 5² + 7² − 2 · 5 · 7 · cos 60°.
- Hilfe 2: cos 60° = 0,5. Rechne zuerst 2 · 5 · 7 · 0,5 und ziehe das Ergebnis von 5² + 7² ab.

**c) ★** Berechne jetzt die Seite a.

- Lösung: **6,24 cm** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: a = √39 ≈ 6,24 cm<br>Probe: a ist kleiner als b + c = 12 cm. ✔
- Hilfe 1: Der Kosinussatz liefert a², nicht a.
- Hilfe 2: Ziehe die Wurzel aus deinem Ergebnis von Teilaufgabe b.

### 2. Welche Formel passt? ★

Im Dreieck ABC sind a = 4 cm, b = 6 cm und der eingeschlossene Winkel γ = 40° bekannt. Gesucht ist die Seite c.

**a) ★** Welche Gleichung beschreibt die gesuchte Seite c richtig?

- **[richtig]** c² = a² + b² − 2ab · cos γ
- c² = a² + b² − 2ab · cos α
- c = a + b − 2ab · cos γ
- c² = a² + c² − 2ac · cos γ
- Thema: Aufbau des Kosinussatzes
- Lösungsweg: Gesucht ist c, gegeben sind die beiden anderen Seiten a und b und der Winkel γ zwischen ihnen.<br>Also: c² = a² + b² − 2ab · cos γ.<br>Die anderen Gleichungen enthalten den falschen Winkel, keine Quadrate oder die gesuchte Seite auf beiden Seiten.
- Hilfe 1: Links steht das Quadrat der gesuchten Seite. Rechts stehen die Quadrate der beiden anderen Seiten.
- Hilfe 2: Der Winkel im Kosinussatz liegt immer der Seite links gegenüber, hier also γ.

**b) ★** Berechne c².

- Lösung: **15,23 cm²** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: c² = 4² + 6² − 2 · 4 · 6 · cos 40°<br>= 52 − 48 · 0,7660<br>≈ 52 − 36,77 ≈ 15,23 (cm²)
- Hilfe 1: Setze ein: c² = 4² + 6² − 2 · 4 · 6 · cos 40°.
- Hilfe 2: Achte im Taschenrechner auf die Reihenfolge: Erst 2 · 4 · 6 · cos 40° berechnen, dann von 16 + 36 abziehen. Modus DEG!

**c) ★** Berechne die Seite c.

- Lösung: **3,9 cm** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: c = √15,23 ≈ 3,90 cm
- Hilfe 1: Wurzel ziehen nicht vergessen.
- Hilfe 2: Rechne mit dem ungerundeten Wert aus b weiter.

**d) ★★** Der Winkel wird verdoppelt: γ = 80°. Berechne c für diesen Fall.

- Lösung: **6,61 cm** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: c² = 16 + 36 − 48 · cos 80° ≈ 52 − 8,34 ≈ 43,66<br>c ≈ 6,61 cm
- Hilfe 1: Rechne genauso wie in b und c, nur mit cos 80°.
- Hilfe 2: c² = 4² + 6² − 2 · 4 · 6 · cos 80°, danach die Wurzel ziehen.

**e) ★★** Vergleiche die Ergebnisse aus c und d. Wähle die zutreffende Aussage.

- **[richtig]** c wird länger, aber nicht doppelt so lang
- c wird genau doppelt so lang wie bei 40°
- c wird mehr als doppelt so lang wie bei 40°
- Thema: Aufbau des Kosinussatzes
- Lösungsweg: Bei 40° ist c ≈ 3,90 cm, das Doppelte wären 7,81 cm. Bei 80° ist c ≈ 6,61 cm.<br>c wird also länger, aber nicht doppelt so lang: Seite und Winkel sind nicht proportional.
- Hilfe 1: Verdopple dein Ergebnis aus c und vergleiche mit d.
- Hilfe 2: Im Kosinussatz steht cos γ, nicht γ selbst. Der Kosinus wächst nicht gleichmäßig mit dem Winkel.

### 3. Der Winkel öffnet sich ★

Zwei Stäbe mit den Längen a = 3 cm und b = 5 cm sind im Punkt C mit einem Gelenk verbunden. Öffnet man das Gelenk weiter, wird der Winkel γ größer. Wie verändert sich der Abstand c der beiden Stabenden?

**a) ★** Berechne c für γ = 60°.

- Lösung: **4,36 cm** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: c² = 9 + 25 − 2 · 3 · 5 · 0,5 = 34 − 15 = 19<br>c = √19 ≈ 4,36 cm
- Hilfe 1: c² = a² + b² − 2ab · cos γ
- Hilfe 2: cos 60° = 0,5

**b) ★** Berechne c für γ = 90°.

- Lösung: **5,83 cm** (Satz des Pythagoras)
- Lösungsweg: cos 90° = 0, der hintere Term fällt weg: c² = 9 + 25 = 34 (Satz des Pythagoras!)<br>c = √34 ≈ 5,83 cm
- Hilfe 1: cos 90° = 0. Was bleibt dann vom Kosinussatz übrig?
- Hilfe 2: Bei γ = 90° ist das Dreieck rechtwinklig: c² = a² + b².

**c) ★** Für γ = 120° brauchst du den Kosinus eines stumpfen Winkels. Bestimme cos 120° mit dem Taschenrechner.

- Lösung: **-0,5 ** (Kosinus stumpfer Winkel)
- Lösungsweg: cos 120° = −0,5<br>Am Einheitskreis ist der Kosinus die x-Koordinate. Für Winkel zwischen 90° und 180° liegt der Punkt links von der y-Achse, deshalb ist der Wert negativ.
- Hilfe 1: Taschenrechner auf DEG stellen und cos 120 eingeben.
- Hilfe 2: Der Kosinus eines stumpfen Winkels ist negativ. Das ist richtig so!

**d) ★** Berechne c für γ = 120°.

- Lösung: **7 cm** (Kosinus stumpfer Winkel)
- Lösungsweg: c² = 9 + 25 − 2 · 3 · 5 · (−0,5) = 34 + 15 = 49<br>c = √49 = 7 cm
- Hilfe 1: Setze cos 120° in den Kosinussatz ein. Achte auf das Vorzeichen!
- Hilfe 2: Minus mal minus ergibt plus: Der Term 2ab · cos γ wird hier addiert.

**e) ★★** Bei 120° ist c länger als bei 90°. Wähle die zutreffende Begründung.

- **[richtig]** Weil cos γ für stumpfe Winkel negativ ist: Der Term 2ab · cos γ wird dann nicht abgezogen, sondern addiert.
- Weil der Kosinussatz für stumpfe Winkel nicht gilt und man Pythagoras nehmen muss.
- Weil man bei stumpfen Winkeln den Taschenrechner auf RAD stellen muss.
- Thema: Kosinus stumpfer Winkel
- Lösungsweg: γ = 60°: cos γ > 0, es wird etwas abgezogen, c ist kleiner als beim rechten Winkel.<br>γ = 90°: cos γ = 0, es bleibt der Satz des Pythagoras.<br>γ = 120°: cos γ < 0, „minus mal minus“ – es wird addiert, c wird größer.
- Hilfe 1: Vergleiche deine Rechnungen in a, b und d: Was passiert jeweils mit dem Term 2ab · cos γ?
- Hilfe 2: Bei 60° wird etwas abgezogen, bei 90° nichts. Und bei 120°?

### 4. Winkel aus drei Seiten ★

Von einem Dreieck kennt man nur die drei Seiten: a = 5 cm, b = 6 cm und c = 7 cm. Mit dem nach cos γ umgestellten Kosinussatz kannst du jetzt die Winkel berechnen.

**a) ★** Mit welcher Gleichung berechnest du cos γ?

- **[richtig]** cos γ = (a² + b² − c²) / (2ab)
- cos γ = (a² + c² − b²) / (2ac)
- cos γ = (c² − a² − b²) / (2ab)
- Thema: Aufbau des Kosinussatzes
- Lösungsweg: c² = a² + b² − 2ab · cos γ   | + 2ab · cos γ − c²<br>2ab · cos γ = a² + b² − c²   | : (2ab)<br>cos γ = (a² + b² − c²) / (2ab)
- Hilfe 1: Starte mit c² = a² + b² − 2ab · cos γ und stelle nach cos γ um.
- Hilfe 2: Im Zähler stehen die Quadrate der beiden Seiten, die γ einschließen, minus das Quadrat der gegenüberliegenden Seite.

**b) ★** Berechne den Wert von cos γ. Runde auf zwei Nachkommastellen.

- Lösung: **0,2 ** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos γ = (25 + 36 − 49) / 60 = 12 / 60 = 0,2
- Hilfe 1: Setze ein: cos γ = (5² + 6² − 7²) / (2 · 5 · 6).
- Hilfe 2: Setze den Zähler und den Nenner jeweils in Klammern, wenn du alles auf einmal eintippst.

**c) ★** Berechne den Winkel γ.

- Lösung: **78,46 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: γ = cos⁻¹(0,2) ≈ 78,46°
- Hilfe 1: Du kennst cos γ und suchst γ. Welche Taste macht den Kosinus „rückgängig“?
- Hilfe 2: γ = cos⁻¹(0,2), Taschenrechner im Modus DEG.

**d) ★★** Berechne den Winkel α auf dieselbe Weise.

- Lösung: **44,42 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos α = (36 + 49 − 25) / (2 · 6 · 7) = 60 / 84 ≈ 0,7143<br>α ≈ 44,42°
- Hilfe 1: Vertausche zyklisch: Jetzt schließen b und c den Winkel α ein, a liegt gegenüber.
- Hilfe 2: cos α = (b² + c² − a²) / (2bc)

**e) ★** Bestimme den dritten Winkel β.

- Lösung: **57,12 °** (Winkelsumme)
- Lösungsweg: β = 180° − 78,46° − 44,42° ≈ 57,12°<br>Probe: Der größte Winkel γ liegt der längsten Seite c gegenüber. ✔
- Hilfe 1: Für den letzten Winkel brauchst du keinen Kosinussatz mehr.
- Hilfe 2: Die Innenwinkel eines Dreiecks ergeben zusammen 180°.

### 5. Der Teich im Park ★

Die Länge eines Teiches soll bestimmt werden. Man kann nicht direkt von A nach B messen. Deshalb misst man von einem Punkt P am Ufer aus: PA = 120 m, PB = 150 m, und der Winkel ∠APB beträgt 65°.

**a) ★** Welcher Fall liegt im Dreieck APB vor?

- **[richtig]** SWS: zwei Seiten und der eingeschlossene Winkel
- SSS: drei Seiten
- WSW: eine Seite und zwei Winkel
- SsW: zwei Seiten und ein nicht eingeschlossener Winkel
- Thema: Welcher Satz passt?
- Lösungsweg: Gegeben sind PA, PB und der Winkel bei P. Er liegt zwischen den beiden Seiten. Das ist der Fall SWS, also hilft der Kosinussatz.
- Hilfe 1: Wo liegt der gemessene Winkel? Zwischen welchen Strecken?
- Hilfe 2: Der Winkel bei P liegt genau zwischen PA und PB.

**b) ★** Berechne die Länge des Teiches AB.

- Lösung: **147,26 m** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: AB² = 120² + 150² − 2 · 120 · 150 · cos 65°<br>= 14 400 + 22 500 − 36 000 · 0,4226<br>≈ 21 686<br>AB ≈ 147,26 m
- Hilfe 1: Die gesuchte Strecke AB liegt dem Winkel bei P gegenüber.
- Hilfe 2: AB² = PA² + PB² − 2 · PA · PB · cos 65°

**c) ★★** Wer am Punkt A steht und zum Punkt B schaut, muss wissen, in welchem Winkel zur Strecke AP er peilen muss. Berechne den Winkel bei A im Dreieck APB.

- Lösung: **67,39 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos A = (120² + 147,26² − 150²) / (2 · 120 · 147,26) ≈ 0,3844<br>Winkel bei A ≈ 67,39°
- Hilfe 1: Jetzt kennst du alle drei Seiten. Welche Seite liegt dem Winkel bei A gegenüber?
- Hilfe 2: cos A = (PA² + AB² − PB²) / (2 · PA · AB)

### 6. Ein Dreieck komplett berechnen ★★

Gegeben ist ein Dreieck mit a = 7 cm, c = 5 cm und β = 48°. Berechne alle fehlenden Stücke nach dem Lösungsschema: dritte Seite, zweiter Winkel, dritter Winkel.

**a) ★** Berechne die Seite b.

- Lösung: **5,21 cm** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: b² = 7² + 5² − 2 · 7 · 5 · cos 48°<br>= 74 − 70 · 0,6691 ≈ 27,16<br>b ≈ 5,21 cm
- Hilfe 1: β wird von a und c eingeschlossen. Gesucht ist die Seite gegenüber von β.
- Hilfe 2: b² = a² + c² − 2ac · cos β

**b) ★★** Welches Vorgehen ist für den nächsten Schritt am sichersten?

- **[richtig]** α mit dem Kosinussatz berechnen, denn α liegt der längsten Seite gegenüber und könnte stumpf sein
- α mit dem Sinussatz berechnen, denn der Taschenrechner liefert immer den richtigen Winkel
- γ mit dem Kosinussatz berechnen, denn γ liegt der längsten Seite gegenüber
- Thema: Welcher Satz passt?
- Lösungsweg: Die längste Seite ist a = 7 cm (b ≈ 5,21 cm, c = 5 cm). Nur α kann stumpf sein.<br>Der Kosinussatz liefert auch stumpfe Winkel eindeutig, deshalb berechnet man α am sichersten damit.
- Hilfe 1: Welche Seite ist jetzt die längste: a, b oder c?
- Hilfe 2: Nur der Winkel gegenüber der längsten Seite kann stumpf sein. Die Taste sin⁻¹ liefert aber nur Winkel bis 90°.

**c) ★★** Berechne den Winkel α.

- Lösung: **86,52 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos α = (b² + 5² − 7²) / (2 · b · 5) ≈ (27,16 + 25 − 49) / (10 · 5,2116) ≈ 0,0607<br>α ≈ 86,52° (knapp spitz)
- Hilfe 1: cos α = (b² + c² − a²) / (2bc)
- Hilfe 2: Rechne mit dem ungerundeten Wert von b aus Teilaufgabe a.

**d) ★** Berechne den Winkel γ.

- Lösung: **45,48 °** (Winkelsumme)
- Lösungsweg: γ = 180° − 48° − 86,52° ≈ 45,48°<br>Probe: Der kürzesten Seite c = 5 cm liegt der kleinste Winkel γ gegenüber, der längsten Seite a der größte Winkel α. ✔
- Hilfe 1: Zwei Winkel kennst du schon.
- Hilfe 2: Winkelsumme: α + β + γ = 180°

**e) ★★** Jonas hat für b ungefähr 1,64 cm herausbekommen. Er hat (7² + 5² − 2 · 7 · 5) · cos 48° gerechnet und daraus die Wurzel gezogen. Wähle die zutreffende Beschreibung seines Fehlers.

- **[richtig]** Er hat die Klammer falsch gesetzt: Nur 2 · 7 · 5 · cos 48° wird von 7² + 5² abgezogen.
- Er hat vergessen, die Wurzel zu ziehen.
- Er hätte cos 48° durch sin 48° ersetzen müssen.
- Thema: Kosinussatz: dritte Seite (SWS)
- Lösungsweg: Jonas: (49 + 25 − 70) · cos 48° = 4 · 0,6691 ≈ 2,68, Wurzel ≈ 1,64. Das ist zu klein.<br>Richtig: b² = 49 + 25 − (70 · cos 48°). Das Produkt 2 · 7 · 5 · cos 48° wird als Ganzes abgezogen, deshalb gehören 7² + 5² nicht mit in die Klammer.
- Hilfe 1: Vergleiche Jonas' Eingabe genau mit dem Kosinussatz b² = a² + c² − 2ac · cos β.
- Hilfe 2: Im Kosinussatz ist 2ac · cos β ein Produkt, das als Ganzes abgezogen wird.

### 7. Der stumpfe Winkel versteckt sich ★★

Ein Dreieck hat die Seiten a = 4 cm, b = 9 cm und c = 7 cm. Berechne alle drei Winkel.

**a) ★★** Mit welchem Winkel fängst du am besten an?

- **[richtig]** mit β, denn er liegt der längsten Seite b gegenüber
- mit α, denn er liegt der kürzesten Seite gegenüber
- egal, alle drei sind sicher spitz
- Thema: Welcher Satz passt?
- Lösungsweg: Die längste Seite ist b = 9 cm. Ihr gegenüber liegt der größte Winkel β. Nur er kann stumpf sein, deshalb beginnt man mit ihm.
- Hilfe 1: Welcher Winkel könnte stumpf sein?
- Hilfe 2: Der größte Winkel liegt der längsten Seite gegenüber. Bestimmt man ihn zuerst, sind die beiden anderen sicher spitz.

**b) ★★** Berechne cos β. Runde auf zwei Nachkommastellen.

- Lösung: **-0,29 ** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos β = (16 + 49 − 81) / (2 · 4 · 7) = −16 / 56 ≈ −0,2857<br>Der Wert ist negativ: β ist stumpf.
- Hilfe 1: β wird von a und c eingeschlossen.
- Hilfe 2: cos β = (a² + c² − b²) / (2ac)

**c) ★★** Berechne β.

- Lösung: **106,6 °** (Kosinus stumpfer Winkel)
- Lösungsweg: β = cos⁻¹(−0,2857) ≈ 106,60°
- Hilfe 1: β = cos⁻¹(Ergebnis aus b)
- Hilfe 2: Ein negativer Kosinus gehört zu einem Winkel zwischen 90° und 180°. Der Taschenrechner liefert ihn direkt.

**d) ★★** Mia hat so gerechnet: 81 = 16 + 49 − 56 · cos β ⇒ 81 − 65 = 56 · cos β ⇒ cos β ≈ 0,29 ⇒ β ≈ 73,4°. Wähle die zutreffende Beschreibung ihres Fehlers.

- **[richtig]** Vorzeichenfehler: Aus 81 = 65 − 56 · cos β folgt 16 = −56 · cos β, also ist cos β negativ.
- Mia hätte zuerst die Wurzel aus 81 ziehen müssen.
- Mia hat richtig gerechnet, der Taschenrechner stand auf RAD.
- Thema: Kosinus stumpfer Winkel
- Lösungsweg: Aus 81 = 65 − 56 · cos β folgt 81 − 65 = −56 · cos β, also cos β = −16/56 ≈ −0,29. Mia hat das Minuszeichen verloren.<br>Schon vor dem Rechnen erkennbar: 81 > 65, also ist β stumpf und cos β muss negativ sein.
- Hilfe 1: Prüfe den zweiten Umformungsschritt: Was passiert mit dem Minuszeichen vor 56 · cos β?
- Hilfe 2: Schon vorher erkennbar: 9² = 81 ist größer als 4² + 7² = 65. Was bedeutet das für β?

**e) ★★** Berechne α.

- Lösung: **25,21 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos α = (81 + 49 − 16) / (2 · 9 · 7) = 114 / 126 ≈ 0,9048<br>α ≈ 25,21°
- Hilfe 1: α wird von b und c eingeschlossen.
- Hilfe 2: cos α = (b² + c² − a²) / (2bc)

**f) ★** Bestimme γ.

- Lösung: **48,19 °** (Winkelsumme)
- Lösungsweg: γ = 180° − 106,60° − 25,21° ≈ 48,19°
- Hilfe 1: Den letzten Winkel bekommst du ohne Kosinussatz.
- Hilfe 2: γ = 180° − α − β

### 8. Zwei Schiffe verlassen den Hafen ★★

Zwei Schiffe verlassen gleichzeitig denselben Hafen H auf geradem Kurs. Ihre Kurse schließen einen Winkel von 72° ein. Die Fähre fährt mit 24 km/h, das Segelboot mit 18 km/h.

**a) ★** Berechne die Strecke, die die Fähre nach 1,5 Stunden zurückgelegt hat.

- Lösung: **36 km** (Sachrechnen)
- Lösungsweg: s = 24 km/h · 1,5 h = 36 km
- Hilfe 1: Weg = Geschwindigkeit · Zeit
- Hilfe 2: 24 km/h · 1,5 h

**b) ★** Berechne die Strecke, die das Segelboot nach 1,5 Stunden zurückgelegt hat.

- Lösung: **27 km** (Sachrechnen)
- Lösungsweg: s = 18 km/h · 1,5 h = 27 km
- Hilfe 1: Wie in a, nur mit der anderen Geschwindigkeit.
- Hilfe 2: 18 km/h · 1,5 h

**c) ★★** Berechne die Entfernung der beiden Schiffe nach 1,5 Stunden.

- Lösung: **37,74 km** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: d² = 27² + 36² − 2 · 27 · 36 · cos 72°<br>= 2025 − 1944 · 0,3090 ≈ 1 424,27<br>d ≈ 37,74 km
- Hilfe 1: Zeichne das Dreieck aus Hafen und den beiden Schiffen. Welcher Fall liegt vor?
- Hilfe 2: Der Winkel von 72° liegt zwischen den beiden Strecken aus a und b. Die Entfernung liegt ihm gegenüber.

**d) ★★** Berechne die Entfernung nach 3 Stunden. Überlege zuerst, ob du überhaupt neu rechnen musst.

- Lösung: **75,48 km** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: Nach 3 h: 54 km und 72 km, Winkel weiterhin 72°. Das Dreieck ist mit dem Faktor 2 vergrößert, also auch die Entfernung:<br>d ≈ 2 · 37,74 ≈ 75,48 km<br>(Probe mit dem Kosinussatz: d² = 54² + 72² − 2 · 54 · 72 · cos 72° liefert denselben Wert.)
- Hilfe 1: Nach doppelter Zeit sind beide Strecken doppelt so lang, der Winkel bleibt gleich.
- Hilfe 2: Das neue Dreieck ist eine Vergrößerung des alten mit dem Faktor 2.

### 9. Spitz, recht, stumpf – oder gar kein Dreieck? ★★

Ein Dreieck hat die Seiten 6 cm, 8 cm und 11 cm. Du sollst herausfinden, ob es spitz-, recht- oder stumpfwinklig ist, und zwar zunächst ohne einen Winkel auszurechnen.

**a) ★** Berechne die Differenz: Quadrat der längsten Seite minus die Summe der Quadrate der beiden kürzeren Seiten.

- Lösung: **21 cm²** (Kosinus stumpfer Winkel)
- Lösungsweg: 11² − (6² + 8²) = 121 − 100 = 21 (cm²)
- Hilfe 1: Die längste Seite ist 11 cm, die beiden kürzeren sind 6 cm und 8 cm.
- Hilfe 2: Rechne 11² − (6² + 8²).

**b) ★★** Entscheide mithilfe von a, welche Art von Dreieck vorliegt.

- **[richtig]** stumpfwinklig, denn 11² ist größer als 6² + 8²
- spitzwinklig, denn 11² ist größer als 6² + 8²
- rechtwinklig, denn 6 + 8 ist größer als 11
- Thema: Kosinus stumpfer Winkel
- Lösungsweg: 121 > 100, also c² > a² + b².<br>Dann muss −2ab · cos γ positiv sein, also cos γ < 0. Ein negativer Kosinus gehört zu einem stumpfen Winkel: Das Dreieck ist stumpfwinklig.
- Hilfe 1: Im Kosinussatz c² = a² + b² − 2ab · cos γ entscheidet cos γ, ob c² größer oder kleiner als a² + b² ist.
- Hilfe 2: Ist c² größer als a² + b², dann muss 2ab · cos γ negativ sein. Wann ist der Kosinus negativ?

**c) ★★** Bestätige dein Ergebnis: Berechne den Winkel γ gegenüber der 11-cm-Seite.

- Lösung: **102,64 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos γ = (6² + 8² − 11²) / (2 · 6 · 8) = −21 / 96 ≈ −0,2188<br>γ ≈ 102,64° (stumpf ✔)
- Hilfe 1: Stelle den Kosinussatz nach cos γ um. Welche Seite steht im Zähler mit Minus?
- Hilfe 2: Den Zähler kennst du schon aus a (Vorzeichen beachten), im Nenner steht 2 · 6 · 8.

**d) ★★★** Die Seiten 6 cm und 8 cm bleiben. Berechne, wie lang die dritte Seite höchstens sein darf, damit das Dreieck nicht stumpfwinklig ist.

- Lösung: **10 cm** (Satz des Pythagoras)
- Lösungsweg: Grenzfall γ = 90°: c² = 6² + 8² = 100, also c = 10 cm.<br>Ist die dritte Seite höchstens 10 cm lang (und die längste Seite), ist das Dreieck nicht stumpfwinklig.
- Hilfe 1: Der Grenzfall zwischen spitz und stumpf ist der rechte Winkel.
- Hilfe 2: Was wird aus dem Kosinussatz, wenn γ = 90° ist?

**e) ★★** Lea will ein Dreieck mit den Seiten 8 cm, 3 cm und 4 cm berechnen. Berechne den Kosinus des Winkels gegenüber der 8-cm-Seite. Runde auf zwei Nachkommastellen.

- Lösung: **-1,63 ** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos = (9 + 16 − 64) / 24 = −39 / 24 = −1,625 ≈ −1,63
- Hilfe 1: Der Winkel gegenüber 8 cm wird von den Seiten 3 cm und 4 cm eingeschlossen.
- Hilfe 2: cos = (3² + 4² − 8²) / (2 · 3 · 4). Erschrick nicht über das Ergebnis!

**f) ★★** Der Taschenrechner meldet bei cos⁻¹(−1,625) einen Fehler. Wähle die zutreffende Erklärung.

- **[richtig]** Es gibt kein solches Dreieck, denn 3 cm + 4 cm ist kürzer als 8 cm.
- Der Winkel ist größer als 180°, das Dreieck ist überstumpf.
- Lea muss den Taschenrechner auf RAD stellen.
- Thema: Kosinussatz: Winkel (SSS)
- Lösungsweg: Ein Kosinuswert kleiner als −1 ist unmöglich. Geometrisch: 3 cm + 4 cm = 7 cm < 8 cm, die beiden kurzen Seiten treffen sich nicht. Die Dreiecksungleichung ist verletzt: Jede Seite muss kürzer sein als die Summe der beiden anderen.
- Hilfe 1: Der Kosinus liegt immer zwischen −1 und 1. Was bedeutet ein Wert außerhalb?
- Hilfe 2: Versuche, das Dreieck mit Zirkel und Lineal zu zeichnen: Reichen 3 cm und 4 cm, um die Enden der 8-cm-Strecke zu verbinden?

### 10. Diagonalen im Parallelogramm ★★

Ein Parallelogramm ABCD hat die Seiten AB = 8 cm und AD = 5 cm. Der Winkel bei A beträgt 55°. Gesucht sind die beiden Diagonalen f = BD und e = AC.

**a) ★** Bestimme den Innenwinkel des Parallelogramms bei B.

- Lösung: **125 °** (Winkelsumme)
- Lösungsweg: Benachbarte Winkel im Parallelogramm ergänzen sich zu 180°: 180° − 55° = 125°.
- Hilfe 1: Im Parallelogramm ergeben zwei benachbarte Winkel zusammen 180°.
- Hilfe 2: Winkel bei B = 180° − Winkel bei A

**b) ★★** Berechne die kurze Diagonale f = BD.

- Lösung: **6,57 cm** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: Dreieck ABD: f² = 8² + 5² − 2 · 8 · 5 · cos 55°<br>= 89 − 80 · 0,5736 ≈ 43,11<br>f ≈ 6,57 cm
- Hilfe 1: Betrachte das Dreieck ABD. Welcher Winkel liegt zwischen AB und AD?
- Hilfe 2: f² = 8² + 5² − 2 · 8 · 5 · cos 55°

**c) ★★** Berechne die lange Diagonale e = AC.

- Lösung: **11,61 cm** (Kosinus stumpfer Winkel)
- Lösungsweg: Dreieck ABC mit BC = 5 cm und dem Winkel 125° bei B:<br>e² = 8² + 5² − 2 · 8 · 5 · cos 125°<br>= 89 − 80 · (−0,5736) ≈ 134,89<br>e ≈ 11,61 cm
- Hilfe 1: Betrachte das Dreieck ABC. Die Seite BC ist so lang wie AD.
- Hilfe 2: Im Dreieck ABC liegt der Winkel aus Teilaufgabe a zwischen AB und BC.

**d) ★★** Berechne e² + f².

- Lösung: **178 cm²** (Kosinus stumpfer Winkel)
- Lösungsweg: e² + f² ≈ 134,89 + 43,11 = 178
- Hilfe 1: Nimm die ungerundeten Werte aus b und c.
- Hilfe 2: Quadriere e und f und addiere. Oder schau dir die Zeilen e² = … und f² = … aus b und c an.

**e) ★★★** Es fällt auf: e² + f² = 178 = 2 · (8² + 5²). Wähle die zutreffende Aussage.

- **[richtig]** Das gilt in jedem Parallelogramm, weil cos(180° − α) = −cos α ist und sich die Kosinus-Terme beim Addieren aufheben.
- Das gilt nur bei diesem Parallelogramm, weil 55° ein besonderer Winkel ist.
- Das gilt nur in Rechtecken, weil dort e = f ist.
- Thema: Kosinus stumpfer Winkel
- Lösungsweg: f² = a² + b² − 2ab · cos α und e² = a² + b² − 2ab · cos(180° − α) = a² + b² + 2ab · cos α.<br>Beim Addieren heben sich die Kosinus-Terme auf: e² + f² = 2 · (a² + b²). Das gilt für jedes Parallelogramm (Parallelogrammgleichung).
- Hilfe 1: Die beiden Winkel im Parallelogramm sind α und 180° − α. Wie hängen ihre Kosinuswerte zusammen?
- Hilfe 2: Schreibe allgemein e² = a² + b² − 2ab · cos(180° − α) und f² = a² + b² − 2ab · cos α und addiere.

### 11. Die Taschenrechner-Falle ★★★

Im Dreieck ABC sind b = 4 cm, c = 7 cm und α = 40° gegeben. Tom berechnet zuerst a mit dem Kosinussatz und danach den Winkel γ mit dem Sinussatz. Sein Ergebnis für γ passt aber nicht zum Dreieck.

**a) ★★** Berechne die Seite a.

- Lösung: **4,7 cm** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: a² = 16 + 49 − 2 · 4 · 7 · cos 40° = 65 − 56 · 0,7660 ≈ 22,10<br>a ≈ 4,70 cm
- Hilfe 1: α wird von b und c eingeschlossen.
- Hilfe 2: a² = b² + c² − 2bc · cos α

**b) ★★** Rechne Toms Weg nach: sin γ = c · sin α / a. Welchen Winkel zeigt der Taschenrechner für γ an?

- Lösung: **73,16 °** (Sinussatz)
- Lösungsweg: sin γ = 7 · sin 40° / 4,70 ≈ 0,9571<br>Taschenrechner: γ ≈ 73,16°
- Hilfe 1: Setze c = 7 cm, α = 40° und dein ungerundetes a ein.
- Hilfe 2: Mit sin⁻¹ bekommst du einen Winkel. Das ist Toms Ergebnis.

**c) ★★★** Berechne γ richtig mit dem Kosinussatz.

- Lösung: **106,84 °** (Kosinus stumpfer Winkel)
- Lösungsweg: cos γ = (22,10 + 16 − 49) / (2 · 4,70 · 4) ≈ −0,2898<br>γ ≈ 106,84°<br>Toms Fehler: Zu sin γ ≈ 0,957 gehören zwei Winkel, 73,16° und 180° − 73,16° ≈ 106,84°. Der Taschenrechner zeigt nur den spitzen. Weil c die längste Seite ist und c² > a² + b² gilt, ist γ stumpf.
- Hilfe 1: γ liegt der Seite c gegenüber und wird von a und b eingeschlossen.
- Hilfe 2: cos γ = (a² + b² − c²) / (2ab). Achte auf das Vorzeichen des Ergebnisses.

**d) ★★** Berechne den Winkel β.

- Lösung: **33,16 °** (Winkelsumme)
- Lösungsweg: β = 180° − 40° − 106,84° ≈ 33,16°<br>Mit Toms falschem γ wäre β ≈ 66,84° größer als α = 40°, obwohl b = 4 cm kürzer ist als a ≈ 4,70 cm. Der größere Winkel muss aber der längeren Seite gegenüberliegen – ein Widerspruch.
- Hilfe 1: Nimm den richtigen Wert für γ.
- Hilfe 2: β = 180° − α − γ

**e) ★★★** Wähle die Faustregel, die Tom vor dem Fehler bewahrt hätte.

- **[richtig]** Den Winkel gegenüber der längsten Seite immer mit dem Kosinussatz berechnen
- Immer auf eine Nachkommastelle runden, bevor man weiterrechnet
- Nach dem Kosinussatz nie wieder den Kosinussatz verwenden
- Thema: Welcher Satz passt?
- Lösungsweg: Nur der Winkel gegenüber der längsten Seite kann stumpf sein. Berechnet man ihn mit dem Kosinussatz, ist das Ergebnis eindeutig. Die übrigen Winkel sind dann sicher spitz, für sie darf man auch den Sinussatz nehmen.
- Hilfe 1: Die Taste sin⁻¹ liefert nur Winkel bis 90°. Welcher Winkel im Dreieck kann stumpf sein?
- Hilfe 2: cos⁻¹ liefert Winkel zwischen 0° und 180° eindeutig.

### 12. Der Tunnel durch den Berg ★★★

Durch einen Berg soll ein gerader Tunnel von A nach B gebaut werden. Von einem Vermessungspunkt C aus, von dem man beide Tunneleingänge sieht, misst man CA = 850 m, CB = 1240 m und den Winkel ∠ACB = 58°.

**a) ★★** Berechne die Länge des Tunnels.

- Lösung: **1.069,13 m** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: AB² = 850² + 1240² − 2 · 850 · 1240 · cos 58°<br>= 2 260 100 − 2 108 000 · 0,5299 ≈ 1 143 030<br>AB ≈ 1 069,13 m
- Hilfe 1: Der Tunnel AB liegt dem gemessenen Winkel bei C gegenüber.
- Hilfe 2: AB² = CA² + CB² − 2 · CA · CB · cos 58°

**b) ★★★** Damit sich die beiden Bautrupps treffen, muss bei A in die richtige Richtung gebohrt werden. Berechne den Winkel ∠CAB zwischen der Richtung zum Vermessungspunkt C und der Tunnelrichtung.

- Lösung: **79,61 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: Gegenüber von A liegt CB = 1240 m, die längste Seite.<br>cos(∠CAB) = (850² + 1 069,13² − 1240²) / (2 · 850 · 1 069,13) ≈ 0,1804<br>∠CAB ≈ 79,61°
- Hilfe 1: Welche Seite liegt dem Winkel bei A gegenüber?
- Hilfe 2: cos(∠CAB) = (CA² + AB² − CB²) / (2 · CA · AB). Prüfe zuerst: Kann der Winkel stumpf sein?

**c) ★★★** Für den Winkel ∠CBA schlägt Ali den Sinussatz vor: sin(∠CBA) = 850 · sin 58° / AB. Entscheide, ob das sicher ist.

- **[richtig]** Ja: Mit AB und 58° gibt es ein vollständiges Paar, und ∠CBA liegt nicht der längsten Seite gegenüber, ist also sicher spitz.
- Nein: Der Sinussatz gilt nur für SsW, hier braucht man den Kosinussatz.
- Nein: Der Sinussatz braucht immer drei bekannte Winkel.
- Thema: Welcher Satz passt?
- Lösungsweg: AB liegt dem Winkel 58° gegenüber: ein vollständiges Paar, also ist der Sinussatz anwendbar.<br>∠CBA liegt CA = 850 m gegenüber, nicht der längsten Seite CB. Er ist deshalb sicher spitz, und sin⁻¹ liefert den richtigen Wert.
- Hilfe 1: Leitfrage: Kennst du jetzt eine Seite und ihren Gegenwinkel?
- Hilfe 2: Gefährlich ist sin⁻¹ nur für einen stumpfen Winkel. Welcher Winkel könnte hier stumpf sein?

**d) ★★** Berechne den Winkel ∠CBA.

- Lösung: **42,39 °** (Sinussatz)
- Lösungsweg: Sinussatz: sin(∠CBA) = 850 · sin 58° / 1 069,13 ≈ 0,6742 ⇒ ∠CBA ≈ 42,39°<br>Kontrolle mit der Winkelsumme: 180° − 58° − 79,61° ≈ 42,39° ✔
- Hilfe 1: Du kannst Alis Weg nehmen oder die Winkelsumme nutzen.
- Hilfe 2: Kontrolliere: Beide Wege müssen dasselbe Ergebnis liefern.

**e) ★★★** Beide Trupps beginnen am selben Tag. Der Trupp in A schafft 6 m pro Tag, der Trupp in B wegen weicheren Gesteins 8 m pro Tag. Berechne, wie weit vom Eingang A entfernt sich die Trupps treffen.

- Lösung: **458,2 m** (Sachrechnen)
- Lösungsweg: Zusammen 14 m pro Tag: 1 069,13 m : 14 m ≈ 76,37 Tage.<br>Trupp A: 6 m · 76,37 ≈ 458,20 m vom Eingang A entfernt.
- Hilfe 1: Zusammen schaffen die Trupps 14 m pro Tag. Wie viele Tage dauert es bis zum Treffen?
- Hilfe 2: Der Trupp aus A bohrt 6 von je 14 Metern, also den Anteil 6/14 des Tunnels.

### 13. Das Grundstück ★★★

Ein viereckiges Grundstück ABCD wurde vermessen: AB = 40 m, BC = 25 m, CD = 30 m, DA = 35 m. Zusätzlich hat man die Diagonale AC = 45 m gemessen. Sie teilt das Grundstück in zwei Dreiecke.<br>Für den Flächeninhalt eines Dreiecks aus zwei Seiten und dem eingeschlossenen Winkel gilt: A = ½ · a · b · sin γ.

**a) ★★** Berechne den Innenwinkel bei B im Dreieck ABC.

- Lösung: **84,26 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos B = (40² + 25² − 45²) / (2 · 40 · 25) = (1600 + 625 − 2025) / 2000 = 0,1<br>Winkel bei B ≈ 84,26°
- Hilfe 1: Im Dreieck ABC kennst du alle drei Seiten. Welche liegt dem Winkel bei B gegenüber?
- Hilfe 2: cos B = (AB² + BC² − AC²) / (2 · AB · BC)

**b) ★★** Berechne den Flächeninhalt des Dreiecks ABC.

- Lösung: **497,49 m²** (Flächeninhalt mit dem Sinus)
- Lösungsweg: A₁ = ½ · 40 · 25 · sin 84,26° ≈ 500 · 0,9950 ≈ 497,49 m²
- Hilfe 1: Für die Fläche brauchst du zwei Seiten und den Winkel, den sie einschließen.
- Hilfe 2: A = ½ · AB · BC · sin B

**c) ★★** Berechne den Innenwinkel bei D im Dreieck ACD.

- Lösung: **87,27 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos D = (900 + 1225 − 2025) / (2 · 30 · 35) = 100 / 2100 ≈ 0,0476<br>Winkel bei D ≈ 87,27°
- Hilfe 1: Dem Winkel bei D liegt die Diagonale AC gegenüber.
- Hilfe 2: cos D = (CD² + DA² − AC²) / (2 · CD · DA)

**d) ★★★** Berechne den Flächeninhalt des ganzen Grundstücks.

- Lösung: **1.021,9 m²** (Flächeninhalt mit dem Sinus)
- Lösungsweg: A₂ = ½ · 30 · 35 · sin 87,27° ≈ 524,40 m²<br>A = A₁ + A₂ ≈ 497,49 + 524,40 ≈ 1 021,90 m²
- Hilfe 1: Berechne zuerst die Fläche des Dreiecks ACD wie in b.
- Hilfe 2: A₂ = ½ · CD · DA · sin D, dann A₁ + A₂.

### 14. Zwei Dreiecke auf einmal ★★★

Gegeben sind a = 6 cm, b = 8 cm und α = 35°. Der Winkel α liegt nicht zwischen a und b (Fall SsW). Trotzdem kannst du den Kosinussatz a² = b² + c² − 2bc · cos α ansetzen. Er wird zu einer quadratischen Gleichung für die unbekannte Seite c.

**a) ★★★** Setze die Werte ein und bringe die Gleichung auf die Normalform c² + p · c + q = 0. Gib p an (auf zwei Nachkommastellen gerundet).

- Lösung: **-13,11 ** (SsW mit dem Kosinussatz)
- Lösungsweg: 36 = 64 + c² − 16 · cos 35° · c   | − 36<br>0 = c² − 16 · cos 35° · c + 28<br>p = −16 · cos 35° ≈ −13,1064
- Hilfe 1: 36 = 64 + c² − 2 · 8 · c · cos 35°. Bringe alles auf eine Seite, sodass links c² steht.
- Hilfe 2: p ist der ganze Faktor vor c, mit seinem Vorzeichen.

**b) ★★** Gib q an.

- Lösung: **28 ** (SsW mit dem Kosinussatz)
- Lösungsweg: q = 64 − 36 = 28
- Hilfe 1: q ist die Zahl ohne c, nachdem alles auf einer Seite steht.
- Hilfe 2: Welche Zahlen bleiben übrig, wenn du a² auf die rechte Seite bringst?

**c) ★★★** Löse die Gleichung mit der p-q-Formel. Gib die größere Lösung c₁ an.

- Lösung: **10,42 cm** (SsW mit dem Kosinussatz)
- Lösungsweg: −p/2 ≈ 6,5532, (p/2)² − q ≈ 14,9446<br>c₁ = 6,5532 + √14,9446 ≈ 10,42 cm
- Hilfe 1: p-q-Formel: c = −p/2 ± √((p/2)² − q).
- Hilfe 2: Rechne −p/2 und (p/2)² − q mit ungerundeten Werten.

**d) ★★★** Gib die kleinere Lösung c₂ an.

- Lösung: **2,69 cm** (SsW mit dem Kosinussatz)
- Lösungsweg: c₂ = 6,5532 − √14,9446 ≈ 2,69 cm
- Hilfe 1: Jetzt das Minuszeichen vor der Wurzel in der p-q-Formel.
- Hilfe 2: c₂ = −p/2 − √((p/2)² − q)

**e) ★★★** Gib an, wie viele Dreiecke es mit diesen Angaben gibt.

- **[richtig]** zwei, denn beide Lösungen sind positiv
- eines, denn eine Seite kann nur eine Länge haben
- keines, denn bei SsW hilft der Kosinussatz nicht
- Thema: SsW mit dem Kosinussatz
- Lösungsweg: Beide Lösungen sind positiv (10,42 cm und 2,69 cm). Es gibt also zwei verschiedene Dreiecke.<br>Die Diskriminante entscheidet: positiv → zwei Lösungen, null → eine, negativ → kein Dreieck. Das passt zur Mehrdeutigkeit beim Sinussatz, weil hier a < b gilt.
- Hilfe 1: Eine Seitenlänge muss positiv sein. Sind beide Lösungen positiv?
- Hilfe 2: Am Sinussatz hast du gesehen: Bei SsW kann es zwei Dreiecke geben, wenn die Seite gegenüber dem gegebenen Winkel die kürzere ist.

### 15. Der Schusswinkel ★★★

Eine Fußballspielerin steht im Punkt S. Ihr Abstand zum linken Torpfosten L beträgt 16 m, zum rechten Torpfosten R 19 m. Das Tor ist 7,32 m breit. Unter welchem Winkel sieht sie das Tor?

**a) ★★** Berechne den Schusswinkel ∠LSR.

- Lösung: **22,08 °** (Kosinussatz: Winkel (SSS))
- Lösungsweg: cos(∠LSR) = (256 + 361 − 7,32²) / (2 · 16 · 19) ≈ 0,9267<br>∠LSR ≈ 22,08°
- Hilfe 1: Im Dreieck LSR kennst du alle drei Seiten. Die Torbreite liegt dem Schusswinkel gegenüber.
- Hilfe 2: cos(∠LSR) = (16² + 19² − 7,32²) / (2 · 16 · 19)

**b) ★★★** Berechne den Winkel ∠SLR am linken Pfosten zwischen Torlinie und der Linie zur Spielerin.

- Lösung: **102,68 °** (Kosinus stumpfer Winkel)
- Lösungsweg: cos(∠SLR) = (256 + 7,32² − 361) / (2 · 16 · 7,32) ≈ −0,2195<br>∠SLR ≈ 102,68° (stumpf: Die Spielerin steht seitlich versetzt, ihr Lotfußpunkt auf der Torlinie liegt links außerhalb des Tores)
- Hilfe 1: Dem Winkel bei L liegt die Strecke SR = 19 m gegenüber.
- Hilfe 2: cos(∠SLR) = (16² + 7,32² − 19²) / (2 · 16 · 7,32). Achte auf das Vorzeichen!

**c) ★★★** Berechne die Entfernung der Spielerin von der Tormitte M.

- Lösung: **17,18 m** (Kosinussatz: dritte Seite (SWS))
- Lösungsweg: LM = 7,32 m : 2 = 3,66 m<br>SM² = 16² + 3,66² − 2 · 16 · 3,66 · cos 102,68° ≈ 295,10<br>SM ≈ 17,18 m
- Hilfe 1: Betrachte das Dreieck SLM. LM ist die halbe Torbreite, den Winkel bei L kennst du aus b.
- Hilfe 2: SM² = 16² + 3,66² − 2 · 16 · 3,66 · cos(∠SLR)

