# Unabhängige Zweitrechnung aller Sollwerte mit sympy (exakte Ausdrücke, dann numerisch).
# Aufruf: python tools/nachrechnen.py  (liest die Werte aus js/aufgaben.js über node)
import json
import subprocess
import sys
from pathlib import Path

from sympy import acos, asin, cos, deg, pi, rad, sin, sqrt, Rational as R

wurzel = Path(__file__).resolve().parent.parent


def c(g):
    return cos(rad(g))


def s(g):
    return sin(rad(g))


def seite(x, y, w):
    return sqrt(x**2 + y**2 - 2 * x * y * c(w))


def winkel(x, y, gegen):
    return deg(acos((x**2 + y**2 - gegen**2) / (2 * x * y)))


t6_b = seite(7, 5, 48)
t11_a = seite(4, 7, 40)
t12_ab = seite(850, 1240, 58)
t12_A = winkel(850, t12_ab, 1240)
t13_B, t13_D = winkel(40, 25, 45), winkel(30, 35, 45)
t14_p, t14_q = -16 * c(35), 28
t14_w = sqrt((t14_p / 2) ** 2 - t14_q)
tor = R(732, 100)
t15_L = winkel(16, tor, 19)

ERWARTET = {
    1: [None, 39, sqrt(39)],
    2: [None, 52 - 48 * c(40), sqrt(52 - 48 * c(40)), seite(4, 6, 80), None],
    3: [sqrt(19), sqrt(34), R(-1, 2), 7, None],
    4: [None, R(1, 5), deg(acos(R(1, 5))), winkel(6, 7, 5), 180 - deg(acos(R(1, 5))) - winkel(6, 7, 5)],
    5: [None, seite(120, 150, 65), winkel(120, seite(120, 150, 65), 150)],
    6: [t6_b, None, winkel(t6_b, 5, 7), 132 - winkel(t6_b, 5, 7), None],
    7: [None, R(-2, 7), deg(acos(R(-2, 7))), None, winkel(9, 7, 4), 180 - deg(acos(R(-2, 7))) - winkel(9, 7, 4)],
    8: [36, 27, seite(27, 36, 72), seite(54, 72, 72)],
    9: [21, None, winkel(6, 8, 11), 10, R(-39, 24), None],
    10: [125, seite(8, 5, 55), seite(8, 5, 125), 178, None],
    11: [t11_a, deg(asin(7 * s(40) / t11_a)), winkel(t11_a, 4, 7), 140 - winkel(t11_a, 4, 7), None],
    # ∠CBA unabhängig über den Sinussatz (spitz, da nicht gegenüber der längsten Seite)
    12: [t12_ab, t12_A, None, deg(asin(850 * s(58) / t12_ab)), t12_ab * R(6, 14)],
    13: [t13_B, 500 * s(t13_B), t13_D, 500 * s(t13_B) + 525 * s(t13_D)],
    14: [t14_p, t14_q, -t14_p / 2 + t14_w, -t14_p / 2 - t14_w, None],
    15: [winkel(16, 19, tor), t15_L, seite(16, tor / 2, t15_L)],
}

js = "const {AUFGABEN}=require('./js/aufgaben.js');console.log(JSON.stringify(AUFGABEN.map(a=>a.teile.map(t=>t.typ==='auswahl'?null:t.wert))))"
werte = json.loads(subprocess.run(["node", "-e", js], cwd=wurzel, capture_output=True, text=True, check=True).stdout)

fehler = 0
for nr, soll in ERWARTET.items():
    ist = werte[nr - 1]
    if len(ist) != len(soll):
        print(f"Aufgabe {nr}: {len(ist)} Teilaufgaben im Code, {len(soll)} in der Zweitrechnung")
        fehler += 1
        continue
    for i, (x, y) in enumerate(zip(ist, soll)):
        if (x is None) != (y is None):
            print(f"Aufgabe {nr}{chr(97 + i)}: Auswahl/Zahl passt nicht")
            fehler += 1
        elif y is not None and abs(x - float(y.evalf(15) if hasattr(y, "evalf") else y)) > 1e-9 * max(1, abs(x)):
            print(f"Aufgabe {nr}{chr(97 + i)}: Code {x} ≠ sympy {float(y)}")
            fehler += 1
print(f"{fehler} Abweichung(en)." if fehler else "Alle Sollwerte stimmen mit der sympy-Rechnung überein.")
sys.exit(1 if fehler else 0)
