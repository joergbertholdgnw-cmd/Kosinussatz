# Kosinussatz mit Sternen (Jahrgang 9/10)

Lernapp mit 15 aufeinander aufbauenden Aufgaben zum Kosinussatz. Sie richtet sich an Lerngruppen, die den Kosinussatz gerade kennengelernt haben (Sinussatz mit SsW-Fall, Pythagoras und p-q-Formel sind bekannt), und knüpft an die Stationsarbeit „Der Kosinussatz“ an.

- **★ Basis** (Aufgaben 1–5): Aufbau der Formel, dritte Seite (SWS), stumpfe Winkel, Winkel aus drei Seiten (SSS), erste Sachaufgabe.
- **★★ Standard** (6–10): Dreiecke vollständig berechnen, typische Fehler finden, Dreiecksart ohne Winkelberechnung, Dreiecksungleichung, Parallelogramm.
- **★★★ Expert** (11–15): Sinussatz-Falle bei stumpfen Winkeln, Methodenwahl Sinus- oder Kosinussatz, Flächeninhalt, SsW als quadratische Gleichung, Vermessung.
- Jede Aufgabe hat eine maßstäbliche Planfigur (gegeben schwarz, gesucht farbig), manche Teilaufgaben eine eigene Teilfigur.
- Jede Teilaufgabe hat zwei gestufte Hilfen. Rechenaufgaben werden mit ±1 % Toleranz geprüft (zwei Versuche), Auswahlfragen mit einem Versuch.
- **„Zeige mir den Lösungsweg“**: Auf Wunsch zeigt die App den vollständigen Lösungsweg einer Teilaufgabe. Die Teilaufgabe zählt dann als nicht gelöst, und die ganze Aufgabe wird im Adminbereich als **„✗ LW“ (nicht gelöst, Lösungsweg angesehen)** gekennzeichnet.
- Wer zweimal beim selben Thema scheitert, bekommt eine Merkkarte zur Wiederholung.
- Anmeldung, Gerätebindung, Abmelden und Adminbereich funktionieren wie in der App „Körperberechnungen mit Sternen“.

## Einrichtung (einmalig, etwa 10 Minuten)

Die App ist eine statische Webseite. Die Ergebnisse speichert ein Google-Apps-Script in einer Google-Tabelle der Lehrkraft. Für diese App braucht es eine **eigene** Tabelle mit eigenem Skript (nicht die der Körperberechnungen). Das Admin-Passwort liegt nur im Skript und nie in diesem Repository.

### 1. Google-Tabelle und Skript anlegen

1. Neue Google-Tabelle anlegen, z. B. „Ergebnisse Kosinussatz“.
2. Menü **Erweiterungen → Apps Script** öffnen.
3. Den Inhalt von [`apps-script/Code.gs`](apps-script/Code.gs) vollständig in die Datei `Code.gs` kopieren und speichern.
4. Links auf das Zahnrad **Projekteinstellungen** klicken, ganz unten **Skripteigenschaft hinzufügen**:
   - Eigenschaft: `ADMIN_PASSWORT`
   - Wert: das gewünschte Admin-Passwort
5. Oben rechts **Bereitstellen → Neue Bereitstellung**, Typ **Web-App**:
   - Ausführen als: **Ich**
   - Zugriff: **Jeder** (nötig, damit Schülergeräte ohne Google-Konto Ergebnisse senden können)
6. Die Zugriffsanfrage bestätigen und die **Web-App-URL** kopieren (endet auf `/exec`).

Nach einer Änderung an `Code.gs`: Bereitstellen → Bereitstellungen verwalten → Bearbeiten → Version „Neue Version“ → Bereitstellen.

### 2. URL in die App eintragen

In [`js/config.js`](js/config.js) die URL bei `SKRIPT_URL` eintragen und speichern (auf GitHub: Datei öffnen, Stift-Symbol, „Commit changes“).

Ohne eingetragene URL läuft die App im Demo-Modus: Ergebnisse bleiben dann nur auf dem jeweiligen Gerät.

### 3. Veröffentlichen mit GitHub Pages

Im Repository **Settings → Pages**: Quelle „Deploy from a branch“, den Branch mit der App und den Ordner `/ (root)` wählen. Nach ein bis zwei Minuten ist die App unter `https://<benutzername>.github.io/<repository>/` erreichbar, der Adminbereich unter `…/admin.html`.

## Datenschutz

- Gespeichert werden Vorname, erster Buchstabe des Nachnamens, eine zufällige Geräte-Kennung und die Ergebnisse. Keine E-Mail, keine Klasse.
- Den eigenen Stand kann nur das Gerät abrufen, an das der Name gebunden ist. Die Bindungen stehen im Blatt „Geraete“ und werden beim Neustart für eine neue Klasse mit gelöscht.
- Die Daten liegen in der Google-Tabelle der Lehrkraft. Bitte vor dem Einsatz klären, ob die Schule das erlaubt.
- Nach fünf falschen Passwörtern sperrt das Skript den Adminzugang für 10 Minuten.

## Aufgaben ändern und prüfen

Alle Aufgaben stehen in [`js/aufgaben.js`](js/aufgaben.js); die Sollwerte werden dort aus den Angaben berechnet. Eine Übersicht mit Lösungen, Lösungswegen und Hilfen steht in [`AUFGABEN.md`](AUFGABEN.md). Nach jeder Änderung:

```
node tools/pruefe-aufgaben.js            # Aufbau, Niveaus, Rundung, Eingabe-Erkennung
python tools/nachrechnen.py              # unabhängige Zweitrechnung aller Sollwerte mit sympy
node tools/durchsicht.js > AUFGABEN.md   # Übersicht für die Durchsicht neu erzeugen
```

Weitere Einstellungen (Kontrollwert nach zwei Fehlversuchen, Schwelle für Merkkarten) stehen in `js/config.js`.
