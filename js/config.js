// Einstellungen der Lernapp.
window.KONFIG = {
  // Web-App-Adresse des Google-Skripts (endet auf /exec). Leer = Demo-Modus, Ergebnisse bleiben nur auf diesem Gerät.
  SKRIPT_URL: "https://script.google.com/macros/s/AKfycbxjg8d3Uy6JgmcXUKP2SdeEKGiqmF-EUz5x9JvxxRIlvKB5NthWAe-ZL7zFZtoaqUSQEQ/exec",
  // Nach zwei Fehlversuchen den gerundeten Kontrollwert zeigen, damit mit den Folgeteilaufgaben weitergerechnet werden kann.
  // Den vollständigen Lösungsweg gibt es nur über „Zeige mir den Lösungsweg“; die Teilaufgabe zählt dann als nicht gelöst.
  KONTROLLWERT_ZEIGEN: true,
  // Nach so vielen verfehlten Teilaufgaben zum selben Thema erscheint eine Wiederholungskarte.
  WIEDERHOLUNG_AB: 2
};
