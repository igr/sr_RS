# RS Alternativni Tastaturni Raspored

Uobičajeni srpski latinični tastaturni raspored (engl: _keyboard layout_) ima dva problema:

+ dodatna srpska slova (`š`, `ć`, `ž` itd.) se nalaze na mestu znakova koji se učestalo koriste u programiranju: `[`, `]`, `:`, `"` itd.
+ raspored ostalih znakova, naročito onih koji se nalaze u prvom redu tasature, je potpuno izmenjen u odnosu na US tastaturni raspored, kao na primer: zagrade, znak pitanja i slično.

Ovo je alternativni tastaturni raspored napravljen sa sledećim početnim postavkama:

+ izmena mora biti **minimalna**: da uključi što manji broj tastera.
+ specifična srpska dodatna slova se smatraju **dopunom** na osnovni raspored, te se ona _uključuju_ po potrebi.
+ uključivanje dodatnih srpskih slova mora biti ergonomski i jednostavno.

Na ovaj način dobijamo raspored koji predstavlja ekstenziju na uobičajeni; tako da treba memorisati lokaciju samo dodatih znakova.


## Definicija Rasporeda

| Kombinacija tastera | Srpsko slovo |
| ------------------- | ------------ |
| `⌥ + [`             | `š`          |
| `⌥ + ]`             | `đ`          |
| `⌥ + \`             | `ž`          |
| `⌥ + ;`             | `;`          |
| `⌥ + '`             | `'`          |

Velika slova se dobijaju očekivano: kada se uključe sa `SHIFT`.

Napomena: `⌥` predstavlja `Alt` ili `Option` taster.


## Instalacija na OSX (Mac)

+ Preuzmi [SRB.bundle](osx/SRB.bundle.zip).
+ Otpakuj arhivu.
+ Smesti ga u `~/Library/Keyboard Layouts` folder.
+ Izloguj se i uloguj se ponovo.
+ Otvori `System Preferences > Keyboard > Input Sources`.
+ Dodaj `SRB` za _Input Source_.

![](osx/keyboard-input-source.png)
