import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FlowViewProps {
  onBack: () => void;
}

const FLOW_CONTENT_EN = `
# FLOW & INDENTATION IN PYTHON

Python uses indentation to define blocks of code. No curly braces — spaces and tabs show what belongs where.

---

## 1. INDENTATION RULES

• Step 1: Use 4 spaces per level (standard Python style).
• Step 2: Everything inside a block is indented one level more than the block header.
• Step 3: The first line that is less indented ends the block.

Example:
  if x > 0:
      print("positive")   # inside if
      print("still")      # still inside
  print("done")           # outside if

---

## 2. FOR LOOPS — FLOW

• Step 1: Python evaluates the loop header (for item in sequence).
• Step 2: It takes the first item and runs the body.
• Step 3: When the body finishes, it takes the next item.
• Step 4: Repeat until no items left.

Order: always inner first, then outer.

Example (nested loops):
  for i in range(2):
      for j in range(2):
          print(i, j)   # inner runs fully for each outer step

Output: 0 0, 0 1, 1 0, 1 1
  → First: outer i=0, inner j=0,1
  → Then:  outer i=1, inner j=0,1

---

## 3. WHILE LOOPS — FLOW

• Step 1: Check the condition.
• Step 2: If True, run the body.
• Step 3: Go back to Step 1.
• Step 4: If False, stop.

Order: condition → body → condition → body → ...

Example:
  n = 0
  while n < 3:
      print(n)
      n += 1

Flow: n=0 → True → print 0 → n=1 → True → print 1 → n=2 → True → print 2 → n=3 → False → stop

---

## 4. RETURN vs PRINT

• return: Sends a value back to the caller. The function ends here.
• print: Displays text to the screen. Does NOT send a value back.

Step 1: return exits the function immediately.
Step 2: print only shows output; nothing is returned.

Example:
  def add(a, b):
      return a + b

  def show(a, b):
      print(a + b)

  x = add(2, 3)   # x gets 5
  y = show(2, 3)  # prints 5, but y is None

---

## 5. GLOBAL vs LOCAL VARIABLES

• Step 1: Variables defined inside a function are LOCAL — only visible inside that function.
• Step 2: Variables defined at the top level are GLOBAL — visible everywhere.
• Step 3: To change a global inside a function, use: global x

Order: Python looks for a name first in the local scope, then in enclosing scopes, then global.

Example:
  x = 10

  def f():
      x = 5    # local x, does not change global
      return x

  def g():
      global x
      x = 5    # changes global x

  print(f())   # 5
  print(x)     # 10 (unchanged)
  g()
  print(x)     # 5 (changed)

---

## 6. CLOSURES — INNER FUNCTIONS

• Step 1: A function can define another function inside it.
• Step 2: The inner function can "remember" variables from the outer.
• Step 3: The inner function "closes over" those variables — that's a closure.

Order: outer runs first → inner is created but not run → when you call inner, it uses the outer's variables.

Example:
  def make_counter():
      count = 0

      def step():
          nonlocal count
          count += 1
          return count

      return step

  c = make_counter()
  print(c())   # 1
  print(c())   # 2

  → step "closes over" count — it remembers it between calls.

---

## 7. OOP WORKFLOW — ORDER OF EXECUTION

• Step 1: Class definition runs — methods are defined.
• Step 2: object = MyClass() — __new__ runs first, then __init__.
• Step 3: object.method() — Python looks up method in the class hierarchy (MRO).
• Step 4: self refers to the instance.

Order: inner first (instance attributes), then outer (class attributes).

Example:
  class Dog:
      species = "Canis"   # class attribute

      def __init__(self, name):
          self.name = name   # instance attribute

      def bark(self):
          print(self.name, "says woof")

  d = Dog("Rex")
  d.bark()   # Rex says woof

  Flow: 1) Dog class defined
          2) Dog("Rex") → __init__ runs
          3) self.name = "Rex"
          4) d.bark() → looks up bark in Dog
          5) bark uses self.name

---

## 8. NESTED BLOCKS — INNER THEN OUTER

Rule: Always execute the innermost block first. When it finishes, move to the next outer level.

  for i in range(2):
      if i == 0:
          for j in range(2):
              print(i, j)   # innermost: runs first
      print("outer")       # outer: runs after inner block

  Step 1: i=0
  Step 2: if True → inner for loop runs (j=0, j=1)
  Step 3: print "outer"
  Step 4: i=1
  Step 5: if False → skip inner
  Step 6: print "outer"

---

## SUMMARY

• Indentation defines blocks — no braces.
• Loops: inner first, then outer.
• return vs print: return gives a value; print only displays.
• Global vs local: scope matters; use global to modify globals.
• Closures: inner functions remember outer variables.
• OOP: __init__ → instance attributes → methods use self.
`;

const FLOW_CONTENT_FR = `
# FLUX ET INDENTATION EN PYTHON

Python utilise l'indentation pour définir les blocs de code. Pas d'accolades — les espaces et tabulations montrent ce qui appartient à quoi.

---

## 1. RÈGLES D'INDENTATION

• Étape 1 : Utilisez 4 espaces par niveau (style Python standard).
• Étape 2 : Tout ce qui est dans un bloc est indenté d'un niveau de plus que l'en-tête.
• Étape 3 : La première ligne moins indentée termine le bloc.

Exemple :
  if x > 0:
      print("positif")    # dans le if
      print("encore")     # dans le if
  print("fini")           # à l'extérieur

---

## 2. BOUCLES FOR — FLUX

• Étape 1 : Python évalue l'en-tête (for item in sequence).
• Étape 2 : Il prend le premier élément et exécute le corps.
• Étape 3 : Quand le corps finit, il prend l'élément suivant.
• Étape 4 : Répète jusqu'à ce qu'il n'y ait plus d'éléments.

Ordre : toujours l'intérieur d'abord, puis l'extérieur.

Exemple (boucles imbriquées) :
  for i in range(2):
      for j in range(2):
          print(i, j)   # l'intérieur s'exécute complètement à chaque étape

Sortie : 0 0, 0 1, 1 0, 1 1
  → D'abord : i=0, j=0,1
  → Puis :   i=1, j=0,1

---

## 3. BOUCLES WHILE — FLUX

• Étape 1 : Vérifier la condition.
• Étape 2 : Si True, exécuter le corps.
• Étape 3 : Revenir à l'étape 1.
• Étape 4 : Si False, arrêter.

Ordre : condition → corps → condition → corps → ...

Exemple :
  n = 0
  while n < 3:
      print(n)
      n += 1

Flux : n=0 → True → print 0 → n=1 → True → print 1 → n=2 → True → print 2 → n=3 → False → stop

---

## 4. RETURN vs PRINT

• return : Renvoie une valeur à l'appelant. La fonction se termine ici.
• print : Affiche du texte à l'écran. Ne renvoie PAS de valeur.

Étape 1 : return quitte la fonction immédiatement.
Étape 2 : print affiche seulement ; rien n'est renvoyé.

Exemple :
  def add(a, b):
      return a + b

  def show(a, b):
      print(a + b)

  x = add(2, 3)   # x vaut 5
  y = show(2, 3)  # affiche 5, mais y est None

---

## 5. VARIABLES GLOBALES vs LOCALES

• Étape 1 : Les variables définies dans une fonction sont LOCALES — visibles seulement dans cette fonction.
• Étape 2 : Les variables définies au niveau global sont GLOBALES — visibles partout.
• Étape 3 : Pour modifier une globale dans une fonction, utilisez: global x

Ordre : Python cherche d'abord dans le scope local, puis dans les scopes englobants, puis global.

Exemple :
  x = 10

  def f():
      x = 5    # x locale, ne change pas la globale
      return x

  def g():
      global x
      x = 5    # modifie la globale

  print(f())   # 5
  print(x)     # 10 (inchangé)
  g()
  print(x)     # 5 (modifié)

---

## 6. CLOSURES — FONCTIONS IMBRIQUÉES

• Étape 1 : Une fonction peut définir une autre fonction à l'intérieur.
• Étape 2 : La fonction interne peut "se souvenir" des variables de l'externe.
• Étape 3 : La fonction interne "ferme sur" ces variables — c'est une closure.

Ordre : l'externe s'exécute d'abord → l'interne est créée mais pas exécutée → quand vous appelez l'interne, elle utilise les variables de l'externe.

Exemple :
  def make_counter():
      count = 0

      def step():
          nonlocal count
          count += 1
          return count

      return step

  c = make_counter()
  print(c())   # 1
  print(c())   # 2

  → step "ferme sur" count — elle s'en souvient entre les appels.

---

## 7. FLUX OOP — ORDRE D'EXÉCUTION

• Étape 1 : La définition de la classe s'exécute — les méthodes sont définies.
• Étape 2 : objet = MaClasse() — __new__ s'exécute d'abord, puis __init__.
• Étape 3 : objet.methode() — Python cherche la méthode dans la hiérarchie (MRO).
• Étape 4 : self désigne l'instance.

Ordre : interne d'abord (attributs d'instance), puis externe (attributs de classe).

Exemple :
  class Chien:
      species = "Canis"   # attribut de classe

      def __init__(self, nom):
          self.nom = nom   # attribut d'instance

      def aboyer(self):
          print(self.nom, "dit ouaf")

  d = Chien("Rex")
  d.aboyer()   # Rex dit ouaf

  Flux : 1) Classe Chien définie
          2) Chien("Rex") → __init__ s'exécute
          3) self.nom = "Rex"
          4) d.aboyer() → cherche aboyer dans Chien
          5) aboyer utilise self.nom

---

## 8. BLOCS IMBRIQUÉS — INTÉRIEUR PUIS EXTÉRIEUR

Règle : Toujours exécuter le bloc le plus interne d'abord. Quand il finit, passer au niveau suivant.

  for i in range(2):
      if i == 0:
          for j in range(2):
              print(i, j)   # le plus interne : s'exécute en premier
      print("externe")      # externe : après le bloc interne

  Étape 1 : i=0
  Étape 2 : if True → boucle interne (j=0, j=1)
  Étape 3 : print "externe"
  Étape 4 : i=1
  Étape 5 : if False → sauter l'interne
  Étape 6 : print "externe"

---

## RÉSUMÉ

• L'indentation définit les blocs — pas d'accolades.
• Boucles : intérieur d'abord, puis extérieur.
• return vs print : return donne une valeur ; print affiche seulement.
• Global vs local : le scope compte ; utilisez global pour modifier les globales.
• Closures : les fonctions internes se souviennent des variables externes.
• OOP : __init__ → attributs d'instance → méthodes utilisent self.
`;

export const FlowView: React.FC<FlowViewProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const content = language === 'fr' ? FLOW_CONTENT_FR : FLOW_CONTENT_EN;

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-diagram-project text-emerald-400"></i>
          {language === 'fr' ? 'Flux et indentation' : 'Flow & Indentation'}
        </h2>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {language === 'fr' ? 'Retour' : 'Back'}
        </button>
      </div>

      <div className="glass rounded-2xl p-6 border border-white/5 overflow-x-auto max-h-[70vh] overflow-y-auto">
        <pre className="code-font text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre">
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
};
