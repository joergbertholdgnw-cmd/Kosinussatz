// Planfiguren zu den Aufgaben. Die Dreiecke werden aus den gegebenen Längen maßstäblich konstruiert,
// beschriftet sind nur die gegebenen Stücke und die gesuchte Größe (nie das Ergebnis).
(function () {
  const B = 320, H = 230, RAND_X = 48, RAND_Y = 30;
  const rad = (g) => (g * Math.PI) / 180;
  const T = (x, y, text, extra = "") => `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" ${extra}>${text}</text>`;

  // Punkt aus zwei Abständen: C liegt im Abstand b von A und a von B, oberhalb von AB
  function dritterPunkt(A, Bp, b, a, unten) {
    const dx = Bp[0] - A[0], dy = Bp[1] - A[1], c = Math.hypot(dx, dy);
    const x = (b * b + c * c - a * a) / (2 * c), h = Math.sqrt(Math.max(0, b * b - x * x)) * (unten ? -1 : 1);
    return [A[0] + (dx * x - dy * h) / c, A[1] + (dy * x + dx * h) / c];
  }

  /*
   * Allgemeine Figur in Modellkoordinaten (y nach oben), wird in die Zeichenfläche eingepasst.
   * o.punkte: { Name: [x, y] }
   * o.flaechen: [[Namen…, klasse]]           gefüllte Vielecke
   * o.strecken: [[P, Q, text, klasse, seite]] seite = 1 / −1 legt die Beschriftungsseite fest
   * o.winkel:   [[Scheitel, P, Q, text, hervor]]
   * o.namen:    Punktnamen, die beschriftet werden (Standard: alle)
   * o.extra:    (p) => SVG, p(Name) bzw. p([x, y]) liefert Bildschirmkoordinaten
   */
  function figur(o) {
    const P = o.punkte, liste = Object.values(P).concat(o.zusatzRahmen || []);
    const xs = liste.map((q) => q[0]), ys = liste.map((q) => q[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const hoehe = o.hoehe || H;
    const m = Math.min((B - 2 * RAND_X) / (maxX - minX || 1), (hoehe - 2 * RAND_Y) / (maxY - minY || 1));
    const ox = (B - (maxX - minX) * m) / 2, oy = (hoehe - (maxY - minY) * m) / 2;
    const p = (q) => { const k = typeof q === "string" ? P[q] : q; return [ox + (k[0] - minX) * m, hoehe - oy - (k[1] - minY) * m]; };
    const namen = Object.keys(P).filter((n) => !o.namen || o.namen.includes(n));
    const sx = namen.reduce((s, n) => s + p(n)[0], 0) / namen.length, sy = namen.reduce((s, n) => s + p(n)[1], 0) / namen.length;

    let g = o.extraUnten ? o.extraUnten(p) : "";
    for (const f of o.flaechen || []) {
      const klasse = f[f.length - 1], ecken = f.slice(0, -1);
      g += `<path d="M${ecken.map((n) => p(n).map((v) => v.toFixed(1)).join(" ")).join(" L")} Z" class="${klasse}"/>`;
    }
    for (const [s, t, , klasse] of o.strecken || []) {
      const [x1, y1] = p(s), [x2, y2] = p(t);
      g += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="${klasse || ""}"/>`;
    }
    for (const [v, a, b, text, hervor] of o.winkel || []) {
      const [vx, vy] = p(v), [ax, ay] = p(a), [bx, by] = p(b);
      const wa = Math.atan2(ay - vy, ax - vx), wb = Math.atan2(by - vy, bx - vx);
      let d = wb - wa; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
      const r = hervor ? 24 : 20;
      const x1 = vx + r * Math.cos(wa), y1 = vy + r * Math.sin(wa), x2 = vx + r * Math.cos(wa + d), y2 = vy + r * Math.sin(wa + d);
      g += `<path d="M${vx.toFixed(1)} ${vy.toFixed(1)} L${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${x2.toFixed(1)} ${y2.toFixed(1)} Z" class="winkelbogen ${hervor ? "hervor" : ""}"/>`;
      if (text) {
        const wm = wa + d / 2, rt = r + 14 + Math.min(18, text.length * 2.2);
        g += T(vx + rt * Math.cos(wm), vy + rt * Math.sin(wm) + 5, text, `text-anchor="middle" class="winkel${hervor ? " hervor" : ""}"`);
      }
    }
    for (const [s, t, text, klasse, seite, anteil = 0.5] of o.strecken || []) {
      if (!text) continue;
      const [x1, y1] = p(s), [x2, y2] = p(t), mx = x1 + (x2 - x1) * anteil, my = y1 + (y2 - y1) * anteil, l = Math.hypot(x2 - x1, y2 - y1) || 1;
      let nx = -(y2 - y1) / l, ny = (x2 - x1) / l;
      if (seite ? seite < 0 : nx * (mx - sx) + ny * (my - sy) < 0) { nx = -nx; ny = -ny; }
      // Abstand so, dass das Textfeld (Breite ≈ 7 px je Zeichen, Höhe 14 px) die Seite nicht berührt
      const abstand = 6 + Math.abs(nx) * text.length * 3.6 + Math.abs(ny) * 8;
      const gesucht = text.includes("?");
      g += T(mx + nx * abstand, my + ny * abstand + 5, text, `text-anchor="middle"${gesucht || /akzent/.test(klasse || "") ? ' class="gesucht"' : ""}`);
    }
    for (const n of namen) {
      const [x, y] = p(n), dx = x - sx, dy = y - sy, l = Math.hypot(dx, dy) || 1;
      g += T(x + (dx / l) * 14, y + (dy / l) * 14 + 5, n, 'text-anchor="middle" class="name"');
    }
    if (o.extra) g += o.extra(p);
    return `<svg viewBox="0 0 ${B} ${hoehe}" class="skizze-svg" role="img" aria-label="Planfigur">${g}</svg>`;
  }

  // Dreieck ABC aus den Seitenlängen a, b, c (a liegt A gegenüber usw.)
  function planfigur(o) {
    const [a, b, c] = o.seiten, n = o.namen || ["A", "B", "C"];
    const punkte = { [n[0]]: [0, 0], [n[1]]: [c, 0] };
    punkte[n[2]] = dritterPunkt([0, 0], [c, 0], b, a);
    const t = o.text || {}, hv = o.hervor || [], wh = o.winkelHervor || [];
    const seiteKlasse = (s) => (hv.includes(s) ? "akzent" : "");
    const w = o.winkel || {};
    const winkelListe = [[n[0], n[1], n[2], "A"], [n[1], n[2], n[0], "B"], [n[2], n[0], n[1], "C"]]
      .filter(([, , , k]) => w[k] !== undefined || wh.includes(k)).map(([v, p1, p2, k]) => [v, p1, p2, w[k] || "", wh.includes(k)]);
    return figur({
      punkte,
      flaechen: [[n[0], n[1], n[2], "flaeche-hell"]],
      strecken: [[n[1], n[2], t.a, seiteKlasse("a")], [n[2], n[0], t.b, seiteKlasse("b")], [n[0], n[1], t.c, seiteKlasse("c")]],
      winkel: winkelListe,
      extra: o.extra, extraUnten: o.extraUnten
    });
  }

  // ───────────── Sachskizzen ─────────────
  const teich = planfigur({
    seiten: [150, 120, 147.26], namen: ["A", "B", "P"],
    text: { a: "150 m", b: "120 m", c: "?" }, winkel: { C: "65°" }, hervor: ["c"],
    extraUnten: (p) => {
      const [ax, ay] = p("A"), [bx, by] = p("B"), mx = (ax + bx) / 2, my = (ay + by) / 2;
      const w = (Math.atan2(by - ay, bx - ax) * 180) / Math.PI, l = Math.hypot(bx - ax, by - ay);
      return `<ellipse cx="${mx.toFixed(1)}" cy="${(my + 6).toFixed(1)}" rx="${(l / 2 + 4).toFixed(1)}" ry="20" transform="rotate(${w.toFixed(1)} ${mx.toFixed(1)} ${(my + 6).toFixed(1)})" class="flaeche-wasser"/>`;
    }
  });

  const schiffe = planfigur({
    seiten: [27, 36, 37.74], namen: ["F", "S", "H"],
    text: { a: "Segelboot", b: "Fähre", c: "Abstand ?" }, winkel: { C: "72°" }, hervor: ["c"]  });

  function parallelogramm(hervor) {
    const D = [5 * Math.cos(rad(55)), 5 * Math.sin(rad(55))];
    const punkte = { A: [0, 0], B: [8, 0], C: [8 + D[0], D[1]], D };
    const flaeche = hervor === "f" ? [["A", "B", "D", "flaeche-hell"]] : hervor === "e" ? [["A", "B", "C", "flaeche-hell"]] : [["A", "B", "C", "D", "flaeche-hell"]];
    return figur({
      punkte, flaechen: flaeche,
      strecken: [["A", "B", "8 cm"], ["B", "C", hervor === "e" ? "5 cm" : ""], ["C", "D", ""], ["D", "A", "5 cm"],
        ["B", "D", "f", hervor === "f" ? "akzent" : "gestrichelt", 1, 0.25], ["A", "C", "e", hervor === "e" ? "akzent" : "gestrichelt", -1, hervor === "e" ? 0.86 : 0.72]],
      winkel: [["A", "B", "D", "55°"]].concat(hervor === "e" ? [["B", "C", "A", "aus a", true]] : [])
    });
  }

  const tunnel = planfigur({
    seiten: [1240, 850, 1069.13], namen: ["A", "B", "C"],
    text: { a: "1240 m", b: "850 m", c: "Tunnel ?" }, winkel: { C: "58°" }, hervor: ["c"],
    extraUnten: (p) => {
      const [ax, ay] = p("A"), [bx, by] = p("B");
      const mx = (ax + bx) / 2;
      return `<path d="M${(ax - 12).toFixed(1)} ${ay.toFixed(1)} Q ${mx.toFixed(1)} ${(ay - 90).toFixed(1)} ${(bx + 12).toFixed(1)} ${by.toFixed(1)} Z" class="flaeche-gruen"/>` +
        T(mx, ay - 22, "Berg", 'text-anchor="middle" class="klein"');
    }
  });

  function grundstueck() {
    const A = [0, 0], Bp = [40, 0], C = dritterPunkt(A, Bp, 45, 25), D = dritterPunkt(A, C, 35, 30);
    return figur({
      punkte: { A, B: Bp, C, D }, flaechen: [["A", "B", "C", "D", "flaeche-gruen"]],
      strecken: [["A", "B", "40 m"], ["B", "C", "25 m"], ["C", "D", "30 m"], ["D", "A", "35 m"], ["A", "C", "45 m", "gestrichelt", -1]],
      winkel: [["B", "C", "A", "?", true], ["D", "A", "C", "?", true]]
    });
  }

  function ssw() {
    const C = [8 * Math.cos(rad(35)), 8 * Math.sin(rad(35))];
    const p2 = 16 * Math.cos(rad(35)) / 2, w = Math.sqrt(p2 * p2 - 28);
    const punkte = { A: [0, 0], C, "B₂": [p2 - w, 0], "B₁": [p2 + w, 0] };
    return figur({
      punkte, zusatzRahmen: [[C[0] + 6, C[1]], [C[0], C[1] + 1]],
      flaechen: [["A", "B₁", "C", "flaeche-hell"]],
      strecken: [["A", "B₁", "", ""], ["A", "C", "b = 8 cm"], ["C", "B₁", "a = 6 cm", "akzent"], ["C", "B₂", "", "akzent gestrichelt"]],
      winkel: [["A", "B₁", "C", "35°"]],
      extra: (p) => {
        const [cx, cy] = p("C"), [bx] = p("B₁"), r = Math.hypot(bx - cx, p("B₁")[1] - cy);
        return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" class="duenn gestrichelt"/>`;
      }
    });
  }

  function fussball(mitte) {
    const L = [0, 0], R = [7.32, 0], S = dritterPunkt(L, R, 16, 19, true), M = [3.66, 0];
    const punkte = mitte ? { L, R, S, M } : { L, R, S };
    return figur({
      punkte, zusatzRahmen: [[-2, 2], [9.3, 2]],
      flaechen: [["L", "R", "S", "flaeche-gruen"]],
      strecken: [["L", "R", mitte ? "" : "7,32 m", "dick"], ["S", "L", "16 m"], ["S", "R", "19 m"]].concat(mitte ? [["S", "M", "?", "akzent"]] : []),
      winkel: mitte ? [["L", "R", "S", "aus b"]] : [["S", "L", "R", "?", true]],
      extra: (p) => {
        const [lx, ly] = p([-2, 0]), [rx] = p([9.3, 0]);
        return `<line x1="${lx.toFixed(1)}" y1="${ly.toFixed(1)}" x2="${rx.toFixed(1)}" y2="${ly.toFixed(1)}" class="duenn gestrichelt"/>` +
          T(rx + 4, ly + 4, "Torlinie", 'class="klein"');
      }
    });
  }

  const SKIZZEN = {
    teich, schiffe, tunnel,
    parallelogramm: parallelogramm(), parallelogramm_f: parallelogramm("f"), parallelogramm_e: parallelogramm("e"),
    grundstueck: grundstueck(), ssw: ssw(), fussball: fussball(false), fussball_m: fussball(true)
  };

  // Skizze zu einer Aufgabe oder Teilaufgabe: Name einer Sachskizze oder Angaben für eine Planfigur
  function skizze(angabe) {
    if (!angabe) return "";
    return typeof angabe === "string" ? SKIZZEN[angabe] || "" : planfigur(angabe);
  }

  window.SKIZZEN = SKIZZEN;
  window.skizze = skizze;
})();
