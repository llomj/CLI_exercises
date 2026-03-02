import { GlossaryItem } from '../constants';

// French translations for glossary entries
// Note: Python code examples remain the same in all languages
export const GLOSSARY_FR: GlossaryItem[] = [
  {
    term: "Variable",
    definition: "Une référence nommée à un objet en mémoire qui peut stocker différentes valeurs.",
    levelRange: "1",
    detailedDescription: "Les variables en Python sont dynamiques, ce qui signifie qu'elles peuvent référencer des objets de tout type et peuvent être réassignées à différents types. Contrairement aux langages statiquement typés, les variables Python n'ont pas de types fixes - le type est déterminé par l'objet qu'elles référencent. Les noms de variables doivent suivre des règles spécifiques : ils peuvent contenir des lettres, des chiffres et des underscores, mais ne peuvent pas commencer par un chiffre. Ils sont sensibles à la casse.\n\n1. Explication simple : Une variable est comme une boîte avec une étiquette où Python peut ranger une valeur pour vous.\n2. Explication intermédiaire : Le nom de variable pointe vers (référence) un objet en mémoire, et cette référence peut être changée pour pointer vers un autre objet ou même un autre type au cours du programme.\n3. Explication approfondie : Dans CPython, les variables sont des entrées dans un espace de noms (un dictionnaire en interne) qui lient des identifiants à des objets ; l'affectation modifie ces liaisons et plusieurs noms peuvent désigner le même objet, ce qui est crucial à comprendre pour les types mutables.",
    example: "score = 42\nname = 'Alice'\nactive = True"
  },
  {
    term: "Chaîne de caractères",
    definition: "Une séquence immuable de caractères représentant des données texte.",
    levelRange: "1",
    detailedDescription: "Les chaînes de caractères en Python sont des objets immuables qui représentent du texte. Elles peuvent être créées avec des guillemets simples, doubles ou triples pour les chaînes multi-lignes. Python fournit de nombreuses méthodes de chaîne pour la manipulation, incluant le découpage, la concaténation et le formatage. Les chaînes sont des séquences, donc elles supportent l'indexation et l'itération.\n\n1. Explication simple : Une chaîne est la façon dont Python stocke des mots et des phrases, comme le texte que vous taperiez dans un message.\n2. Explication intermédiaire : Une chaîne est une suite ordonnée de caractères que vous pouvez découper, parcourir et combiner, mais vous ne modifiez jamais l'objet d'origine directement.\n3. Explication approfondie : Une chaîne est un type de séquence immuable basé sur une représentation Unicode ; la plupart des opérations créent de nouveaux objets chaîne, et l'indexation ou le découpage travaille sur des points de code, ce qui est important pour les encodages et les performances.",
    example: "message = 'Hello World'\nlong_text = '''This is a\nmulti-line string'''\nfirst_char = message[0]  # 'H'"
  },
  {
    term: "Entier",
    definition: "Nombres entiers sans décimales, avec une précision illimitée.",
    levelRange: "1",
    detailedDescription: "Les entiers Python ont une précision arbitraire, ce qui signifie qu'ils peuvent être arbitrairement grands sans problèmes de débordement qui surviennent avec les types entiers à largeur fixe dans d'autres langages. Cela rend Python adapté aux calculs mathématiques impliquant de très grands nombres. Les littéraux entiers peuvent inclure des underscores pour la lisibilité.\n\n1. Explication simple : Un entier est un nombre entier comme 0, 3 ou -10, sans partie décimale.\n2. Explication intermédiaire : Les entiers servent à compter, à indexer et à faire des calculs de base, et en Python vous n'avez pratiquement jamais à vous soucier d'un dépassement de capacité.\n3. Explication approfondie : Le type int de Python bascule automatiquement entre une représentation de taille machine et un entier à précision arbitraire ; des opérations comme l'addition ou la multiplication peuvent donc allouer de nouveaux objets et leur coût dépend du nombre de chiffres.",
    example: "small = 42\nlarge = 1_000_000_000_000\nnegative = -17"
  },
  {
    term: "Nombre à virgule flottante",
    definition: "Nombres décimaux représentés en format binaire à virgule flottante.",
    levelRange: "1",
    detailedDescription: "Les objets float représentent des nombres réels avec précision décimale. Ils sont implémentés en utilisant le format binaire à double précision IEEE 754, ce qui peut conduire à de petites erreurs de précision dans certains calculs. Pour les applications financières ou autres nécessitant une arithmétique décimale exacte, le module decimal doit être utilisé à la place.\n\n1. Explication simple : Un float est un nombre avec une virgule, comme 3,5 ou -0,25.\n2. Explication intermédiaire : Les floats sont pratiques pour les mesures courantes (prix, distances, moyennes), mais de petits écarts d'arrondi sont normaux à cause du stockage binaire.\n3. Explication approfondie : Le type float de Python encapsule un double IEEE 754, donc les opérations suivent ces règles, ce qui influence les comparaisons, l'accumulation des erreurs d'arrondi et le comportement des valeurs spéciales comme NaN et l'infini.",
    example: "pi = 3.14159\nnegative = -2.5\nscientific = 1.23e-4"
  },
  {
    term: "Booléen",
    definition: "Un type de données binaire représentant les valeurs True ou False.",
    levelRange: "1",
    detailedDescription: "Les valeurs booléennes sont utilisées pour les opérations logiques et les instructions conditionnelles. En Python, chaque objet a une valeur booléenne inhérente (truthiness), où la plupart des objets sont considérés comme True sauf des valeurs falsy spécifiques comme 0, les chaînes vides, les listes vides, None et False lui-même. Les opérations booléennes suivent les règles logiques standard.\n\n1. Explication simple : Un booléen est une valeur oui/non : soit True, soit False.\n2. Explication intermédiaire : Les booléens permettent à votre programme de prendre des décisions dans les if et les boucles, et beaucoup d'expressions (comme les comparaisons) produisent automatiquement True ou False.\n3. Explication approfondie : En Python, bool est une sous-classe de int avec seulement deux instances (True et False, égales à 1 et 0), et chaque type définit sa \"véracité\" via __bool__ ou __len__, ce qui est essentiel quand on écrit des conditions et des classes personnalisées.",
    example: "is_active = True\nhas_permission = False\nresult = (5 > 3) and (10 < 20)  # True"
  },
  {
    term: "Instruction If",
    definition: "Une instruction conditionnelle qui exécute du code uniquement lorsqu'une condition est True.",
    levelRange: "3",
    detailedDescription: "L'instruction if est la construction conditionnelle principale de Python. Elle évalue une expression booléenne et exécute le bloc indenté uniquement si la condition est True. Python utilise l'indentation (pas d'accolades) pour définir les blocs de code. L'instruction if peut être suivie de clauses elif (sinon-si) et else optionnelles pour gérer plusieurs conditions.\n\n1. Explication simple : if permet de dire « fais ceci seulement si la condition est vraie ».\n2. Explication intermédiaire : Les blocs if/elif/else contrôlent quel chemin de code s'exécute en fonction de conditions booléennes.\n3. Explication approfondie : Comme les conditions reposent sur la véracité des objets et l'évaluation court-circuitée, bien structurer ses if est essentiel pour garder un flux de contrôle lisible et éviter les imbrications difficiles à suivre.",
    example: "age = 18\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teen')\nelse:\n    print('Child')"
  },
  {
    term: "Opérateur de comparaison",
    definition: "Opérateurs qui comparent deux valeurs et retournent un résultat booléen.",
    levelRange: "3",
    detailedDescription: "Les opérateurs de comparaison évaluent les relations entre valeurs et retournent True ou False. Python supporte : == (égal), != (non égal), < (inférieur à), > (supérieur à), <= (inférieur ou égal), >= (supérieur ou égal), is (identité), in (appartenance). Ces opérateurs sont fondamentaux pour la logique conditionnelle et le flux de contrôle.\n\n1. Explication simple : Les opérateurs de comparaison répondent à des questions comme « est-ce égal ? » ou « est-ce plus grand ? » et renvoient True ou False.\n2. Explication intermédiaire : Ils sont utilisés dans les conditions pour tester des plages de valeurs, l'égalité, l'appartenance à une collection ou le fait que deux noms pointent vers le même objet.\n3. Explication approfondie : Comprendre la différence entre == et is, les comparaisons chaînées comme a < b < c, et la manière dont les méthodes de comparaison riches (__eq__, __lt__, etc.) sont implémentées est crucial pour écrire du code Python correct et idiomatique.",
    example: "x = 10\ny = 5\nprint(x > y)   # True\nprint(x == y)  # False\nprint(x != y)  # True\nprint(5 in [1, 2, 3, 4, 5])  # True"
  },
  {
    term: "Opérateur logique",
    definition: "Opérateurs qui combinent des expressions booléennes : and, or, not.",
    levelRange: "3",
    detailedDescription: "Les opérateurs logiques combinent des valeurs ou expressions booléennes. 'and' retourne True uniquement si les deux opérandes sont True. 'or' retourne True si au moins un opérande est True. 'not' inverse la valeur booléenne. Python utilise l'évaluation court-circuit : 'and' s'arrête au premier False, 'or' s'arrête au premier True, ce qui peut améliorer les performances.\n\n1. Explication simple : Les opérateurs logiques permettent de combiner des conditions True/False avec « et », « ou » et « non ».\n2. Explication intermédiaire : Ils sont essentiels pour exiger plusieurs conditions à la fois, accepter des alternatives ou inverser un test, tout en s'arrêtant tôt lorsque le résultat est déjà déterminé.\n3. Explication approfondie : Comme and/or renvoient l'un de leurs opérandes (et pas seulement True/False), ils sont souvent utilisés de manière idiomatique dans les expressions ; bien comprendre ce comportement évite des bugs subtils.",
    example: "x = 10\ny = 5\nresult1 = (x > 5) and (y < 10)  # True\nresult2 = (x < 5) or (y > 10)   # False\nresult3 = not (x > 5)            # False"
  },
  {
    term: "Boucle For",
    definition: "Une boucle qui itère sur une séquence (liste, chaîne, range, etc.).",
    levelRange: "3",
    detailedDescription: "La boucle for itère sur les éléments d'une séquence ou d'un autre objet itérable. Elle gère automatiquement l'itération, éliminant le besoin de gestion manuelle d'index. La variable de boucle prend chaque valeur de la séquence à tour de rôle. Les boucles for sont préférées lorsque vous savez combien d'itérations vous avez besoin ou lors de l'itération sur une collection.\n\n1. Explication simple : Une boucle for répète du code une fois pour chaque élément d'une liste ou d'une collection.\n2. Explication intermédiaire : La variable de boucle prend successivement chaque valeur d'un itérable, ce qui évite de gérer les indices à la main.\n3. Explication approfondie : La boucle for repose sur le protocole d'itération (appel à iter() puis next()), ce qui permet de parcourir aussi bien des listes finies que des flux paresseux ou potentiellement infinis.",
    example: "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)\n\n# With range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4"
  },
  {
    term: "Boucle While",
    definition: "Une boucle qui continue à s'exécuter tant qu'une condition reste True.",
    levelRange: "3",
    detailedDescription: "La boucle while exécute de manière répétée un bloc de code tant que la condition évalue à True. Contrairement aux boucles for, les boucles while sont utilisées lorsque le nombre d'itérations est inconnu à l'avance. Il faut faire attention à s'assurer que la condition devient éventuellement False, sinon une boucle infinie se produit. La variable de boucle doit être modifiée dans le corps de la boucle.\n\n1. Explication simple : Une boucle while continue tant qu'une condition reste vraie.\n2. Explication intermédiaire : Elle est idéale quand on ne connaît pas à l'avance le nombre de répétitions, mais qu'on sait quand s'arrêter.\n3. Explication approfondie : Bien concevoir la mise à jour de l'état et la condition d'arrêt est essentiel pour éviter les boucles infinies et écrire une logique de boucle claire et testable.",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # Important: modifier la condition\n\n# Boucle infinie (à éviter!)\n# while True:\n#     print('Forever')"
  },
  {
    term: "Range",
    definition: "Une fonction intégrée qui génère une séquence de nombres.",
    levelRange: "3",
    detailedDescription: "La fonction range() génère une séquence immuable de nombres, couramment utilisée dans les boucles for. Elle peut prendre un argument (stop), deux arguments (start, stop), ou trois arguments (start, stop, step). La valeur stop est exclusive. Range est efficace en mémoire car il génère les nombres à la demande plutôt que de tous les stocker en mémoire.\n\n1. Explication simple : range() fournit une série de nombres pour compter dans les boucles.\n2. Explication intermédiaire : Vous contrôlez le début, la fin (exclusive) et le pas, ce qui est pratique pour les indices et les motifs réguliers.\n3. Explication approfondie : Les objets range sont des séquences immuables et légères ; comprendre la convention « début inclus, fin exclue » aide à éviter les erreurs de décalage d'un.",
    example: "range(5)           # 0, 1, 2, 3, 4\nrange(2, 6)        # 2, 3, 4, 5\nrange(0, 10, 2)    # 0, 2, 4, 6, 8\nrange(10, 0, -1)   # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
  },
  {
    term: "Instruction Break",
    definition: "Une instruction qui sort immédiatement de la boucle actuelle.",
    levelRange: "3",
    detailedDescription: "L'instruction break termine la boucle englobante la plus proche (for ou while) et continue l'exécution après la boucle. Elle est couramment utilisée pour sortir d'une boucle tôt lorsqu'une condition est remplie, comme trouver une valeur cible ou rencontrer une condition d'erreur. Break ne sort que d'un niveau d'imbrication.\n\n1. Explication simple : break permet de sortir immédiatement d'une boucle.\n2. Explication intermédiaire : On l'utilise quand on a trouvé ce qu'on cherchait ou qu'il n'est plus logique de continuer la boucle.\n3. Explication approfondie : Combinée avec la clause else des boucles, break permet d'exprimer proprement des motifs de recherche du type « chercher puis faire autre chose seulement si rien n'a été trouvé ».",
    example: "for i in range(10):\n    if i == 5:\n        break  # Sortir de la boucle quand i est 5\n    print(i)  # Affiche 0, 1, 2, 3, 4"
  },
  {
    term: "Instruction Continue",
    definition: "Une instruction qui ignore le reste de l'itération de boucle actuelle.",
    levelRange: "3",
    detailedDescription: "L'instruction continue ignore le code restant dans l'itération de boucle actuelle et passe à l'itération suivante. Contrairement à break, continue ne sort pas de la boucle entièrement - elle passe juste au cycle suivant. C'est utile pour ignorer certaines valeurs ou conditions tout en continuant à traiter les autres.\n\n1. Explication simple : continue saute le reste du corps de la boucle et passe directement au tour suivant.\n2. Explication intermédiaire : C'est pratique pour ignorer certains cas (comme des données invalides) tout en continuant à traiter les autres éléments.\n3. Explication approfondie : Bien utilisée, continue simplifie les conditions complexes dans les boucles, mais un usage excessif peut aussi rendre le flux de contrôle plus difficile à suivre.",
    example: "for i in range(10):\n    if i % 2 == 0:  # Ignorer les nombres pairs\n        continue\n    print(i)  # Affiche uniquement les nombres impairs: 1, 3, 5, 7, 9"
  },
  {
    term: "Fonction",
    definition: "Un bloc de code réutilisable qui effectue une tâche spécifique.",
    levelRange: "5",
    detailedDescription: "Les fonctions sont des objets de première classe en Python qui encapsulent du code pour la réutilisation. Elles peuvent accepter des paramètres et retourner des valeurs. Les fonctions Python supportent les paramètres par défaut, les listes d'arguments de longueur variable (*args, **kwargs), et peuvent être passées comme arguments à d'autres fonctions. Les fonctions peuvent être définies avec ou sans instructions return explicites.\n\n1. Explication simple : Une fonction est une recette nommée pour accomplir une tâche que vous pouvez appeler plusieurs fois.\n2. Explication intermédiaire : Les fonctions regroupent des étapes liées, reçoivent des entrées (paramètres) et renvoient éventuellement un résultat, ce qui rend le code plus organisé et évite les répétitions.\n3. Explication approfondie : Comme Python traite les fonctions comme des objets de première classe, on peut les stocker, les passer en argument et les retourner, ce qui permet de construire des abstractions de plus haut niveau comme les callbacks et les décorateurs.",
    example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Hello, Alice!'\nresult2 = greet('Bob', 'Hi')  # 'Hi, Bob!'"
  },
  {
    term: "Liste",
    definition: "Une séquence mutable et ordonnée d'objets qui peut contenir des types mixtes.",
    levelRange: "5",
    detailedDescription: "Les listes sont le type de séquence mutable principal de Python. Elles peuvent croître et décroître dynamiquement, et peuvent contenir des objets de différents types. Les listes supportent des opérations puissantes comme le découpage, la concaténation et les compréhensions de liste. Elles sont implémentées comme des tableaux dynamiques, fournissant un accès aléatoire efficace mais potentiellement des insertions/suppressions coûteuses au milieu.\n\n1. Explication simple : Une liste est une collection ordonnée d'éléments, comme une liste de tâches en code.\n2. Explication intermédiaire : Vous pouvez ajouter, supprimer et modifier des éléments sur place, les parcourir et en découper des sous-listes pour les traiter.\n3. Explication approfondie : Les listes sont des tableaux dynamiques ; l'ajout en fin est en général O(1) amorti, l'accès par indice est O(1), mais les insertions/suppressions au milieu sont O(n), ce qui compte pour les performances.",
    example: "numbers = [1, 2, 3, 4, 5]\nfruits = ['apple', 'banana', 'cherry']\nmixed = [42, 'hello', True, [1, 2]]\n\n# Compréhension de liste\nsquares = [x**2 for x in numbers]"
  },
  {
    term: "Dictionnaire",
    definition: "Un mapping mutable de clés hashables vers des valeurs arbitraires.",
    levelRange: "5",
    detailedDescription: "Les dictionnaires fournissent des recherches rapides utilisant des clés plutôt qu'un indexage positionnel. Les clés doivent être des objets hashables (immuables), tandis que les valeurs peuvent être de tout type. Les dictionnaires maintiennent l'ordre d'insertion à partir de Python 3.7. Ils sont implémentés en utilisant des tables de hachage, fournissant un temps de recherche moyen O(1). Les compréhensions de dictionnaire permettent de créer des dictionnaires à partir d'itérables.\n\n1. Explication simple : Un dictionnaire est un ensemble de paires clé/valeur, comme un mini carnet d'adresses en code.\n2. Explication intermédiaire : Au lieu d'utiliser des positions, vous accédez aux valeurs avec des clés parlantes (comme \"nom\" ou \"score\"), ce qui rend les données plus faciles à manipuler.\n3. Explication approfondie : Les dicts sont des tables de hachage ; comprendre la notion de clé hashable, les collisions et la comparaison des clés (__hash__, __eq__) est important pour concevoir des mappings fiables et efficaces.",
    example: "person = {'name': 'Alice', 'age': 30, 'city': 'New York'}\n\n# Accéder aux valeurs\nname = person['name']\n\n# Compréhension de dictionnaire\nsquares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    term: "Classe",
    definition: "Un modèle pour créer des objets avec un comportement et un état partagés.",
    levelRange: "7",
    detailedDescription: "Les classes définissent la structure et le comportement des objets. Elles contiennent des attributs (données) et des méthodes (fonctions). La méthode __init__ initialise les nouvelles instances. Les classes supportent l'héritage, permettant aux classes enfant d'étendre ou de modifier le comportement de la classe parent. Python utilise un ordre de résolution de méthode (MRO) pour déterminer quelle méthode appeler dans les scénarios d'héritage multiple.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'\n\nperson = Person('Alice', 30)\nprint(person.greet())  # 'Hello, I am Alice'"
  },
  {
    term: "Méthode",
    definition: "Une fonction définie à l'intérieur d'une classe qui opère sur les instances de cette classe.",
    levelRange: "7",
    detailedDescription: "Les méthodes sont des fonctions liées aux instances de classe. Le premier paramètre est conventionnellement nommé 'self' et se réfère à l'instance. Les méthodes peuvent accéder et modifier les attributs d'instance. Les méthodes de classe et les méthodes statiques fournissent des moyens alternatifs de définir des fonctions liées aux classes. Les méthodes supportent les mêmes caractéristiques de paramètres que les fonctions régulières.",
    example: "class Calculator:\n    def add(self, a, b):\n        return a + b\n    \n    def multiply(self, a, b):\n        return a * b\n\ncalc = Calculator()\nresult = calc.add(5, 3)  # 8"
  },
  {
    term: "Portée",
    definition: "La région d'un programme où une variable est accessible.",
    levelRange: "7",
    detailedDescription: "La portée détermine où les variables peuvent être accessibles. Python a quatre portées : locale (à l'intérieur des fonctions), englobante (fonctions imbriquées), globale (niveau module), et intégrée (noms intégrés de Python). Les variables dans les portées intérieures peuvent masquer celles des portées extérieures. La règle LEGB (Local, Enclosing, Global, Built-in) détermine la résolution des noms.",
    example: "global_var = 'global'\n\ndef outer():\n    enclosing_var = 'enclosing'\n    \n    def inner():\n        local_var = 'local'\n        print(local_var)  # local\n        print(enclosing_var)  # enclosing\n        print(global_var)  # global\n    \n    return inner\n\ninner_func = outer()\ninner_func()"
  },
  {
    term: "Variable globale",
    definition: "Une variable définie au niveau du module, accessible dans tout le module.",
    levelRange: "7",
    detailedDescription: "Les variables globales sont définies en dehors de toute fonction ou classe. Elles peuvent être accessibles depuis n'importe où dans le module, y compris à l'intérieur des fonctions. Pour modifier une variable globale depuis l'intérieur d'une fonction, vous devez la déclarer avec le mot-clé 'global'. Les variables globales devraient être utilisées avec parcimonie car elles peuvent rendre le code plus difficile à comprendre et à déboguer.",
    example: "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)  # 1"
  },
  {
    term: "Variable locale",
    definition: "Une variable définie à l'intérieur d'une fonction, uniquement accessible dans cette fonction.",
    levelRange: "7",
    detailedDescription: "Les variables locales sont créées lorsqu'une fonction est appelée et détruites lorsque la fonction retourne. Elles ne sont pas accessibles en dehors de la fonction. Les variables locales avec le même nom que les variables globales masquent les globales dans la portée de la fonction. C'est ce qu'on appelle le masquage de variable.",
    example: "def calculate():\n    x = 10  # variable locale\n    y = 20  # variable locale\n    return x + y\n\nresult = calculate()  # 30\n# x et y ne sont pas accessibles ici"
  },
  {
    term: "Fonction imbriquée",
    definition: "Une fonction définie à l'intérieur d'une autre fonction.",
    levelRange: "7",
    detailedDescription: "Les fonctions imbriquées (aussi appelées fonctions internes) sont définies dans le corps d'une autre fonction. Elles peuvent accéder aux variables de leur portée englobante (fermeture). Les fonctions imbriquées sont utiles pour créer des fonctions d'aide ou implémenter des décorateurs. Elles suivent la règle LEGB pour la résolution des noms.",
    example: "def outer_function(x):\n    def inner_function(y):\n        return x + y  # peut accéder à x de la portée extérieure\n    return inner_function\n\nadd_five = outer_function(5)\nprint(add_five(3))  # 8"
  },
  {
    term: "Fermeture",
    definition: "Une fonction qui se souvient de l'environnement dans lequel elle a été créée.",
    levelRange: "9",
    detailedDescription: "Une fermeture se produit lorsqu'une fonction imbriquée référence des variables de sa portée englobante, même après que la fonction extérieure ait terminé son exécution. Cela permet à la fonction interne de 'se souvenir' de l'état de la fonction extérieure. Les fermetures sont fondamentales pour les décorateurs, les fonctions partielles et de nombreux modèles de conception.",
    example: "def make_multiplier(factor):\n    def multiply(number):\n        return number * factor  # factor est 'mémorisé'\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5))  # 10\ntriple = make_multiplier(3)\nprint(triple(5))  # 15"
  },
  {
    term: "Fonction d'aide",
    definition: "Une petite fonction utilitaire qui assiste une fonction plus grande.",
    levelRange: "7",
    detailedDescription: "Les fonctions d'aide (aussi appelées fonctions utilitaires) sont de petites fonctions définies pour effectuer des tâches spécifiques qui supportent des fonctions plus grandes. Elles améliorent la lisibilité et la réutilisabilité du code en décomposant des opérations complexes en morceaux gérables. Les fonctions d'aide sont souvent définies dans la portée où elles sont utilisées.",
    example: "def process_data(data):\n    def validate_item(item):\n        return isinstance(item, int) and item > 0\n    \n    def clean_item(item):\n        return max(0, min(100, item))\n    \n    valid_data = [clean_item(item) for item in data if validate_item(item)]\n    return valid_data\n\nresult = process_data([10, -5, 50, 'invalid', 200])  # [10, 50]"
  },
  {
    term: "Récursivité",
    definition: "Une fonction qui s'appelle elle-même pour résoudre un problème.",
    levelRange: "9",
    detailedDescription: "La récursivité se produit lorsqu'une fonction s'appelle elle-même, soit directement soit indirectement à travers d'autres fonctions. Chaque appel récursif crée un nouveau contexte d'exécution avec ses propres variables locales. La récursivité nécessite un cas de base pour empêcher les boucles infinies et un cas récursif qui se dirige vers le cas de base. Python a une limite de récursivité (par défaut 1000) pour empêcher le débordement de pile.",
    example: "def factorial(n):\n    if n <= 1:  # cas de base\n        return 1\n    return n * factorial(n - 1)  # cas récursif\n\nprint(factorial(5))  # 120"
  },
  {
    term: "Décorateur",
    definition: "Une fonction qui modifie le comportement d'une autre fonction.",
    levelRange: "9",
    detailedDescription: "Les décorateurs sont des fonctions qui prennent une autre fonction comme argument et retournent une version modifiée de cette fonction. Ils sont appliqués en utilisant le symbole @. Les décorateurs sont couramment utilisés pour la journalisation, l'authentification, la mise en cache et la validation. Ils utilisent les fermetures et les objets fonction pour envelopper la fonctionnalité.",
    example: "def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.2f} seconds')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return 'done'\n\nslow_function()  # affiche les informations de temps"
  },
  {
    term: "Fonction Lambda",
    definition: "Une fonction anonyme et en ligne définie avec le mot-clé lambda.",
    levelRange: "7",
    detailedDescription: "Les fonctions lambda sont de petites fonctions anonymes qui peuvent être définies en ligne. Elles peuvent prendre n'importe quel nombre d'arguments mais ne peuvent avoir qu'une seule expression. Les fonctions lambda sont souvent utilisées avec des fonctions comme map(), filter(), et sorted() où une petite fonction est nécessaire temporairement. Elles ne peuvent pas contenir d'instructions ou de logique complexe.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Lambda avec map\neven_numbers = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8, 10]\n\n# Lambda avec filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]\n\n# Lambda avec sorted\npairs = [(1, 'one'), (2, 'two'), (3, 'three')]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])"
  },
  {
    term: "Générateur",
    definition: "Une fonction qui produit des valeurs une à la fois au lieu de retourner une liste complète.",
    levelRange: "9",
    detailedDescription: "Les générateurs sont des fonctions qui utilisent le mot-clé 'yield' pour produire une séquence de valeurs paresseusement. Au lieu de calculer toutes les valeurs à la fois et de les stocker en mémoire, les générateurs calculent les valeurs à la demande. Cela les rend efficaces en mémoire pour les grands ensembles de données. Les générateurs peuvent être consommés en utilisant next() ou dans des boucles for.",
    example: "def fibonacci_generator():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci_generator()\nprint(next(fib))  # 0\nprint(next(fib))  # 1\nprint(next(fib))  # 1\nprint(next(fib))  # 2\n\n# Ou utiliser dans une boucle\nfor num in fib:\n    if num > 100:\n        break\n    print(num)"
  },
  {
    term: "None",
    definition: "Une constante spéciale représentant l'absence de valeur.",
    levelRange: "1",
    detailedDescription: "None est la valeur nulle de Python, représentant l'absence de valeur ou un objet null. C'est un objet singleton (une seule instance existe). None est couramment utilisé comme valeur de retour par défaut pour les fonctions qui ne retournent rien explicitement. Il est évalué à False dans les contextes booléens.\n\n1. Explication simple : None signifie “nothing here” or “no value yet” in Python.\n2. Explication intermédiaire : Functions that don’t renvoyer anything special actually renvoyer None, and you can also use None as a placeholder when you haven’t decided on a real value.\n3. Explication approfondie : None est un objet sentinelle singleton souvent utilisé pour signaler des données manquantes, des valeurs optionnelles ou des états spéciaux ; les vérifications d'identité (is None) sont préférées à l'égalité, et utiliser None comme argument par défaut a des implications importantes pour les paramètres mutables.",
    example: "value = None\nif value is None:\n    print('No value assigned')\n\ndef find_item(items, target):\n    for item in items:\n        if item == target:\n            return item\n    return None  # Not found"
  },
  {
    term: "Commentaire",
    definition: "Texte dans le code ignoré par l'interpréteur Python, utilisé pour la documentation.",
    levelRange: "1",
    detailedDescription: "Les commentaires commencent par # et continuent jusqu'à la fin de la ligne. Ils sont utilisés pour expliquer le code, documenter les fonctions ou désactiver temporairement du code. Les commentaires multi-lignes peuvent être créés avec plusieurs lignes # ou des chaînes entre triples guillemets (bien que cette dernière crée un objet chaîne). Les commentaires sont essentiels pour la lisibilité et la maintenance du code.\n\n1. Explication simple : Un commentaire est une note pour les humains que Python ignore lors de l'exécution du code.\n2. Explication intermédiaire : Les bons commentaires expliquent pourquoi le code est écrit d'une certaine manière ou ce que fait un bloc non évident, sans répéter ce qui est déjà clair dans le code.\n3. Explication approfondie : La qualité des commentaires affecte fortement la maintenabilité ; les équipes utilisent souvent les commentaires avec les docstrings et les annotations de type pour enregistrer les hypothèses, les cas limites et les décisions de conception qui ne peuvent pas être facilement exprimées dans le code seul.",
    example: "# This is a single-line comment\n\n# Multi-line comments use\n# multiple hash symbols\n\nx = 5  # Inline comment explaining the variable\n\n\"\"\"\nThis is a docstring, not technically a comment,\nbut often used for documentation.\n\"\"\""
  },
  {
    term: "Conversion de type",
    definition: "Convertir une valeur d'un type de données à un autre.",
    levelRange: "1",
    detailedDescription: "La conversion de type (aussi appelée cast) transforme les valeurs d'un type à un autre. Python fournit des fonctions intégrées comme int(), float(), str(), bool() pour les conversions. Certaines conversions sont automatiques (implicites), tandis que d'autres doivent être explicites. Toutes les conversions ne sont pas possibles — tenter des conversions invalides lève TypeError.\n\n1. Explication simple : La conversion de type consiste à demander à Python de transformer une valeur en un autre type, comme transformer la chaîne « 42 » en nombre 42.\n2. Explication intermédiaire : Vous utilisez des fonctions comme int(), float(), str() et bool() pour convertir les valeurs quand vous en avez besoin sous une forme différente pour les calculs, l'affichage ou la logique.\n3. Explication approfondie : Comprendre quelles conversions sont sûres, avec perte ou invalides (par exemple, analyser l'entrée utilisateur ou convertir des floats en int) est essentiel pour éviter les bugs et les exceptions, surtout avec des sources de données externes et des interfaces utilisateur.",
    example: "x = '42'\nnumber = int(x)  # Convert string to integer: 42\n\ndecimal = float(5)  # Convert int to float: 5.0\n\ntext = str(123)  # Convert number to string: '123'\n\nboolean = bool(1)  # Convert to boolean: True\nboolean2 = bool(0)  # False"
  },
  {
    term: "Opérateur arithmétique",
    definition: "Opérateurs qui effectuent des opérations mathématiques : +, -, *, /, //, %, **.",
    levelRange: "1",
    detailedDescription: "Les opérateurs arithmétiques effectuent des opérations mathématiques de base. + (addition), - (subtraction), * (multiplication), / (division, always renvoie float), // (floor division), % (modulo/remainder), ** (exponentiation). Python follows standard mathematical precedence rules. Division by zero raises ZeroDivisionError.\n\n1. Explication simple : Arithmetic operators sont the symbols you already know from math, like + and -, that let Python add, subtract, multiply, and divide numbers.\n2. Explication intermédiaire : These operators follow a fixed order of operations, and some (like // and %) sont especially useful for integer math, splits, and patterns.\n3. Explication approfondie : Operator behavior interacts avec Python’s numeric tower (int, float, complex, Decimal, Fraction) and type promotion rules, so understanding how mixed-type expressions sont evaluated helps you write precise numeric code.",
    example: "a = 10\nb = 3\n\nprint(a + b)   # 13 (addition)\nprint(a - b)   # 7 (subtraction)\nprint(a * b)   # 30 (multiplication)\nprint(a / b)   # 3.333... (division)\nprint(a // b)  # 3 (floor division)\nprint(a % b)   # 1 (modulo)\nprint(a ** b)  # 1000 (exponentiation)"
  },
  {
    term: "Concaténation de chaînes",
    definition: "Combiner plusieurs chaînes en une seule chaîne avec + ou join().",
    levelRange: "1",
    detailedDescription: "La concaténation de chaînes combine les chaînes bout à bout. L'opérateur + concatène deux chaînes. Pour plusieurs chaînes, join() est plus efficace que des opérations + répétées. La concaténation crée de nouveaux objets chaîne car les chaînes sont immuables. L'opérateur += peut être utilisé pour la concaténation en place (bien qu'il crée quand même un nouvel objet).\n\n1. Explication simple : La concaténation consiste à coller des chaînes ensemble pour former un texte plus long.\n2. Explication intermédiaire : Vous pouvez construire rapidement des messages en joignant des éléments comme des noms, des étiquettes et des nombres convertis en chaînes, mais le faire dans une boucle avec + peut être lent.\n3. Explication approfondie : Comme chaque concaténation crée une nouvelle chaîne, les motifs de concaténation intensive devraient utiliser join() ou d'autres techniques de tampon pour les performances, surtout lors de la construction de grandes réponses ou du traitement de flux de données.",
    example: "first = 'Hello'\nlast = 'World'\nresult = first + ' ' + last  # 'Hello World'\n\n# Using join (more efficient for many strings)\nwords = ['Hello', 'World', 'Python']\ncombined = ' '.join(words)  # 'Hello World Python'\n\n# String repetition\nrepeated = 'ha' * 3  # 'hahaha'"
  },
  {
    term: "Découpage de chaîne",
    definition: "Extracting a portion of a chaîne using index notation [start:end:step].",
    levelRange: "1",
    detailedDescription: "String slicing extracts substrings using bracket notation avec colons. Le syntax is [start:end:step] where start is inclusive, end is exclusive, and step controls the increment. Negative indices count from the end. Omitting start defaults to 0, omitting end defaults to the end. Slicing renvoie a new chaîne and never raises IndexError.\n\n1. Explication simple : Slicing lets you cut out part of a chaîne, like taking just the first three letters of a word.\n2. Explication intermédiaire : You choose where to start, where to stop, and how big the step is, so you can grab prefixes, suffixes, every second character, or even reverse the text.\n3. Explication approfondie : Slicing est un general sequence operation that works the same way for listes, tuples, and many custom types; understanding slice objets, negative indices, and how copies sont created helps you write both clean APIs and efficient data-processing code.",
    example: "text = 'Python'\nprint(text[0:2])    # 'Py'\nprint(text[:3])     # 'Pyt'\nprint(text[3:])     # 'hon'\nprint(text[-3:])    # 'hon'\nprint(text[::2])    # 'Pto' (every 2nd character)\nprint(text[::-1])   # 'nohtyP' (reverse)"
  },
  {
    term: "Opérateur d'assignation",
    definition: "Le = operator that assigns a value to a variable.",
    levelRange: "1",
    detailedDescription: "Le assignment operator = binds a value to a variable name. Python supports multiple assignment (unpacking), augmented assignment (+=, -=, *=, etc.), and chained assignment. Assignment doesn't copy objets - it creates a reference. For mutable objets, this means multiple variables can reference the same objet.\n\n1. Explication simple : Le = sign tells Python to remember a value under a name, like x = 5.\n2. Explication intermédiaire : When you assign, the name points to an existing objet instead of making a deep copy, especially for listes and dictionaries.\n3. Explication approfondie : Understanding that assignment only rebinds names (and does not duplicate objets) is critical for reasoning about aliasing, mutations, fonction arguments, and bugs where changing one variable seems to “mysteriously” affect another.",
    example: "x = 10  # Simple assignment\n\na, b = 1, 2  # Multiple assignment\n\nx += 5  # Augmented assignment (same as x = x + 5)\n\n# Chained assignment\nx = y = z = 0  # All three variables equal 0"
  },
  {
    term: "f-string",
    definition: "A formatted chaîne literal that allows embedded expressions using f prefix.",
    levelRange: "1",
    detailedDescription: "F-chaînes (formatted chaîne literals) sont prefixed avec 'f' or 'F' and allow embedding Python expressions dans curly braces {}. They provide a concise and readable way to format chaînes. F-chaînes sont evaluated at runtime and support expressions, fonction calls, and formatting specifiers. They sont the preferred méthode for chaîne formatting in Python 3.6+.\n\n1. Explication simple : An f-chaîne est un normal chaîne avec an f in front that lets you plug values directly into the text using {braces}.\n2. Explication intermédiaire : F-chaînes make it easy to build clear messages by mixing variables and text in one place instead of using + or .format().\n3. Explication approfondie : Because f-chaînes evaluate arbitrary expressions at runtime and support rich formatting mini-languages, they sont powerful but should be used carefully avec untrusted data, and understanding their evaluation order helps avoid subtle bugs.",
    example: "name = 'Alice'\nage = 30\n\n# F-string with variables\nmessage = f'Hello, {name}!'\n\n# F-string with expressions\ninfo = f'{name} is {age} years old'\n\n# F-string with formatting\nprice = 19.99\nformatted = f'Price: ${price:.2f}'  # 'Price: $19.99'\n\n# F-string with function calls\nresult = f'The length is {len(name)}'"
  },
  {
    term: "Instruction Elif",
    definition: "A conditional clause that checks additional conditions après an if instruction.",
    levelRange: "3",
    detailedDescription: "Elif (else-if) allows checking multiple conditions sequentially. It combines else and if into a single keyword. Elif clauses sont evaluated only if all previous conditions were False. Once a True condition is found, that block executes and subsequent elif/else clauses sont skipped. Elif provides a cleaner alternative to nested if instructions.\n\n1. Explication simple : elif lets you say “otherwise, if this other condition is true…” instead of writing a new if.\n2. Explication intermédiaire : It chains several mutually exclusive tests so only the first matching block runs, keeping your decisions organized.\n3. Explication approfondie : Proper use of elif (instead of nested ifs) clarifies intent and leverages Python’s top‑down evaluation of conditions to keep complex decision trees readable.",
    example: "score = 85\n\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\nprint(grade)  # 'B'"
  },
  {
    term: "Clause Else",
    definition: "An optional clause that executes when all previous conditions sont False.",
    levelRange: "3",
    detailedDescription: "Le else clause provides a default action when no conditions in an if/elif chain sont True. It must come après all if and elif instructions. There can only be one else clause per if instruction. Else can also be used avec for and while boucles to execute code when the boucle completes normally (not via break).\n\n1. Explication simple : else est le “otherwise” block that runs when nothing avant it matched.\n2. Explication intermédiaire : In if/elif/else, the else block handles the fallback case; on boucles, else runs only if the boucle didn’t exit early avec break.\n3. Explication approfondie : Loop else clauses sont unique to Python and enable idioms like “search avec for/else,” which separates the “found” and “not found” behavior cleanly.",
    example: "age = 15\n\nif age >= 18:\n    status = 'Adult'\nelse:\n    status = 'Minor'\n\n# Else with loops\nfor i in range(5):\n    if i == 10:\n        break\nelse:\n    print('Loop completed normally')  # This executes"
  },
  {
    term: "Opérateur ternaire",
    definition: "A conditional expression that renvoie one value if True, another if False.",
    levelRange: "3",
    detailedDescription: "Python's ternary operator (conditional expression) has the syntax: value_if_true if condition else value_if_false. It's a concise way to assign values based on conditions. Unlike if-else instructions, ternary operators sont expressions that renvoyer values. They can be nested but should be used sparingly for readability.\n\n1. Explication simple : A ternary expression lets you choose entre two values in one short line.\n2. Explication intermédiaire : It’s useful when you want to assign one of two options based on a simple condition sans writing a full if block.\n3. Explication approfondie : Because ternary expressions sont expressions (not instructions), they can be composed dans larger expressions, but heavy nesting can hurt readability and should be used avec care.",
    example: "age = 20\nstatus = 'Adult' if age >= 18 else 'Minor'\n\n# Equivalent to:\n# if age >= 18:\n#     status = 'Adult'\n# else:\n#     status = 'Minor'\n\nmax_value = a if a > b else b  # Find maximum"
  },
  {
    term: "Véracité",
    definition: "Le inherent boolean value of any Python objet.",
    levelRange: "3",
    detailedDescription: "Every Python objet has a truthiness value - it's considered either truthy or falsy. Falsy values include: None, False, 0, empty sequences (\"\", [], ()), empty mappings ({}), and objets avec __bool__() or __len__() returning False/0. All other values sont truthy. Truthiness is evaluated in boolean contexts like if instructions.\n\n1. Explication simple : Truthiness is how Python decides if a value counts as True or False in conditions.\n2. Explication intermédiaire : Empty things (like \"\", [], {}) and zero sont treated as False, while most non-empty or non-zero values sont treated as True.\n3. Explication approfondie : Classes can customize their truthiness via __bool__ or __len__, which is powerful but must be designed carefully so objets behave intuitively in conditions.",
    example: "if 0:  # Falsy\n    print('This won't print')\n\nif 1:  # Truthy\n    print('This will print')\n\nif '':  # Falsy (empty string)\n    print('Won't print')\n\nif 'hello':  # Truthy\n    print('Will print')\n\nif []:  # Falsy (empty list)\n    print('Won't print')"
  },
  {
    term: "Évaluation en court-circuit",
    definition: "Le behavior where logical operators stop evaluating once the result is determined.",
    levelRange: "3",
    detailedDescription: "Python's 'and' and 'or' operators use short-circuit evaluation. For 'and', if the left operand is False, the right operand isn't evaluated. For 'or', if the left operand is True, the right operand isn't evaluated. Ce can improve performance and allow safe operations like checking if a liste exists avant accessing it.\n\n1. Explication simple : Short-circuiting means Python sometimes stops checking conditions early when the answer is already known.\n2. Explication intermédiaire : With and/or, Python doesn’t evaluate the second part if the first part is enough to decide the result, which can prevent errors and save time.\n3. Explication approfondie : Short-circuit behavior enables idioms like safe attribute access and lazy evaluation, but you must remember that side effects in the second operand may not run if the first operand decides the outcome.",
    example: "x = 0\ny = 5\n\n# Short-circuit with 'and'\nresult = x and y  # Returns 0, doesn't evaluate y\n\n# Short-circuit with 'or'\nresult = x or y  # Returns 5, doesn't need to check further\n\n# Safe list access\nitems = [1, 2, 3]\nif items and items[0] > 0:  # Safe: checks items exists first\n    print('First item is positive')"
  },
  {
    term: "Boucle imbriquée",
    definition: "A boucle dans another boucle, used to iterate over multi-dimensional data.",
    levelRange: "3",
    detailedDescription: "Nested boucles place one boucle dans another, creating a pattern where the inner boucle completes all iterations for each iteration of the outer boucle. Ce is useful for working avec 2D data structures, generating combinations, or processing grids. Le total iterations equals the product of both boucle ranges.\n\n1. Explication simple : A nested boucle est un boucle dans another boucle.\n2. Explication intermédiaire : You use them for things like working over rows and columns in a grid or comparing every pair of items.\n3. Explication approfondie : Because total work grows as the product of boucle sizes (often O(n²)), nested boucles require extra care avec performance and sont good candidates for refactoring or using vectorized/optimized libraries.",
    example: "for i in range(3):\n    for j in range(2):\n        print(f'({i}, {j})')\n# Output:\n# (0, 0) (0, 1)\n# (1, 0) (1, 1)\n# (2, 0) (2, 1)\n\n# Processing a 2D grid\nmatrix = [[1, 2], [3, 4]]\nfor row in matrix:\n    for cell in row:\n        print(cell)"
  },
  {
    term: "Variable de boucle",
    definition: "Le variable that takes each value from the iterable in a for boucle.",
    levelRange: "3",
    detailedDescription: "Le boucle variable est le identifier that receives each value from the iterable during iteration. It's created in the boucle scope and persists après the boucle completes avec its final value. Le boucle variable can be any valid identifier and can be used within the boucle body. Modifying the boucle variable doesn't affect the original iterable.\n\n1. Explication simple : Le boucle variable est le name that takes each item’s value during a boucle.\n2. Explication intermédiaire : Changing the boucle variable only changes that name, not the original collection you’re looping over.\n3. Explication approfondie : Loop variables can leak into the surrounding scope in Python, which can surprise people coming from other languages and is important to remember when reusing names.",
    example: "for number in [1, 2, 3, 4, 5]:\n    print(number * 2)  # number is the loop variable\n\n# Loop variable persists after loop\nfor item in ['a', 'b']:\n    pass\nprint(item)  # 'b' (last value)\n\n# Using loop variable with range\nfor i in range(5):\n    print(f'Index: {i}')"
  },
  {
    term: "Boucle infinie",
    definition: "A boucle that continues indefinitely car its condition never becomes False.",
    levelRange: "3",
    detailedDescription: "An infinite boucle occurs when a while boucle's condition always evaluates to True, or when the boucle variable in a for boucle never reaches a termination point. While sometimes intentional (avec break instructions), infinite boucles sont usually bugs. They can cause programs to hang or consume excessive resources. Always ensure boucle conditions can become False.\n\n1. Explication simple : An infinite boucle est un boucle that never stops.\n2. Explication intermédiaire : It happens when the condition to stop the boucle is never met, often car a variable isn’t updated correctly.\n3. Explication approfondie : Intentional infinite boucles sont common in servers and event boucles but must include clear break conditions or external signals for shutdown; accidental ones sont a classic bug from misdesigned termination logic.",
    example: "# Intentional infinite loop with break\nwhile True:\n    user_input = input('Enter command: ')\n    if user_input == 'quit':\n        break  # Exit the loop\n    print(f'You entered: {user_input}')\n\n# Accidental infinite loop (BUG!)\n# count = 0\n# while count < 5:\n#     print(count)\n#     # Forgot to increment count - infinite loop!"
  },
  {
    term: "Instruction Pass",
    definition: "A null operation that does nothing, used as a placeholder.",
    levelRange: "3",
    detailedDescription: "Le pass instruction est un null operation - when executed, nothing happens. It's useful as a placeholder where syntax requires a instruction but no action is needed. Common uses include: empty fonction/classe bodies, conditional blocks that will be implemented later, or exception handlers that intentionally do nothing.\n\n1. Explication simple : pass means “do nothing here” so the code still stays valid.\n2. Explication intermédiaire : It’s handy when you’re sketching out structure or when you intentionally want to ignore a case for now.\n3. Explication approfondie : Although pass has no runtime effect, using it thoughtfully can make the intent of unfinished or deliberately empty code blocks clearer during development and reviews.",
    example: "def function_to_implement_later():\n    pass  # Placeholder - will add code later\n\nif condition:\n    pass  # Do nothing if condition is True\nelse:\n    print('Condition is False')\n\ntry:\n    risky_operation()\nexcept:\n    pass  # Silently ignore errors"
  },
  {
    term: "Indexation de liste",
    definition: "Accessing individual elements of a liste using their position (index).",
    levelRange: "5",
    detailedDescription: "List indexing uses square brackets avec an integer index to access elements. Indices start at 0 for the first element. Negative indices count from the end (-1 est le last element). Accessing an invalid index raises IndexError. Indexing renvoie a reference to the objet, so modifying mutable elements affects the original liste.\n\n1. Explication simple : List indexing lets you grab an item from a liste by its position number.\n2. Explication intermédiaire : Positions start at 0, and negative indexes let you count from the end, which is useful for quickly reaching the last element(s).\n3. Explication approfondie : Because indexing renvoie references to objets, not copies, changes to mutable elements through an index will be visible from all variables that share the same liste.",
    example: "fruits = ['apple', 'banana', 'cherry']\n\nprint(fruits[0])   # 'apple' (first element)\nprint(fruits[1])   # 'banana'\nprint(fruits[-1])  # 'cherry' (last element)\nprint(fruits[-2])  # 'banana' (second from end)\n\n# Modifying through index\nfruits[0] = 'orange'  # ['orange', 'banana', 'cherry']"
  },
  {
    term: "Méthode de liste",
    definition: "Built-in fonctions that operate on listes: append(), remove(), sort(), etc.",
    levelRange: "5",
    detailedDescription: "List méthodes sont fonctions called on liste objets using dot notation. Common méthodes include: append() (add to end), insert() (add at position), remove() (remove by value), pop() (remove and renvoyer), sort() (in-place sorting), reverse() (reverse order), count() (count occurrences), index() (find position). Most liste méthodes modify the liste in-place.\n\n1. Explication simple : List méthodes sont built-in tools attached to listes that help you add, remove, and organize items.\n2. Explication intermédiaire : Using méthodes like append, remove, and sort lets you change a liste sans recreating it from scratch.\n3. Explication approfondie : Many liste méthodes mutate the liste in-place and renvoyer None, which est un common gotcha; understanding which operations mutate versus create new listes is important for avoiding accidental side effects.",
    example: "numbers = [3, 1, 4, 1, 5]\n\nnumbers.append(9)      # [3, 1, 4, 1, 5, 9]\nnumbers.insert(1, 2)   # [3, 2, 1, 4, 1, 5, 9]\nnumbers.remove(1)      # [3, 2, 4, 1, 5, 9] (removes first 1)\nnumbers.sort()         # [1, 2, 3, 4, 5, 9]\nnumbers.reverse()      # [9, 5, 4, 3, 2, 1]\ncount = numbers.count(1)  # 1"
  },
  {
    term: "Compréhension de liste",
    definition: "A concise way to create listes using a single line of code.",
    levelRange: "5",
    detailedDescription: "List comprehensions provide a compact syntax for creating listes. Le basic form is [expression for item in iterable]. They can include conditions: [expression for item in iterable if condition]. List comprehensions sont more readable and often faster than equivalent for boucles. They can be nested for multi-dimensional listes.\n\n1. Explication simple : A liste comprehension est un one-line shortcut for building a new liste from another sequence.\n2. Explication intermédiaire : It combines a for boucle and optional if filter into a single, readable expression that often replaces several lines of code.\n3. Explication approfondie : Comprehensions sont evaluated in their own scope and can be nested; using them wisely leads to concise, expressive code, but very complex ones sont better rewritten as regular boucles.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Square each number\nsquares = [x**2 for x in numbers]  # [1, 4, 9, 16, 25]\n\n# Filter even numbers\n evens = [x for x in numbers if x % 2 == 0]  # [2, 4]\n\n# Nested comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]"
  },
  {
    term: "Tuple",
    definition: "An immutable, ordered sequence of objets, defined avec parentheses.",
    levelRange: "5",
    detailedDescription: "Tuples sont immutable sequences, meaning they cannot be modified après creation. They sont defined avec parentheses (or just commas). Tuples sont faster than listes and can be used as dictionnaire keys (since they're hashable). They're useful for fixed collections of related values. Single-element tuples require a trailing comma.\n\n1. Explication simple : A tuple is like a liste that you can’t change.\n2. Explication intermédiaire : Tuples sont good for grouping a fixed set of related values, such as a point (x, y) or fonction renvoyer values.\n3. Explication approfondie : Because tuples sont immutable and hashable (when containing only hashable items), they’re often used as dictionnaire keys and elements of sets, and they play a key role in multiple assignment and pattern matching.",
    example: "point = (3, 4)  # Coordinates\nperson = ('Alice', 30, 'Engineer')  # Multiple values\n\n# Single element tuple\nsingle = (42,)  # Note the comma\nnot_tuple = (42)  # This is just an integer\n\n# Tuple unpacking\nx, y = point  # x = 3, y = 4\n\n# Tuples as dictionary keys\nlocations = {(0, 0): 'Origin', (1, 1): 'Corner'}"
  },
  {
    term: "Ensemble",
    definition: "An unordered collection of unique, hashable objets.",
    levelRange: "5",
    detailedDescription: "Sets sont mutable collections that store unique elements. They don't maintain order (though Python 3.7+ preserves insertion order). Sets sont useful for membership testing, removing duplicates, and mathematical set operations (union, intersection, difference). Elements must be hashable (immutable). Sets sont created avec {} or set().\n\n1. Explication simple : A set est un bag of unique items where order doesn’t matter.\n2. Explication intermédiaire : Sets shine when you need to test “is this in there?” quickly or remove duplicates from a collection.\n3. Explication approfondie : Backed by hash tables like dicts, sets enable fast membership tests and support rich algebraic operations (union, intersection, difference) that map directly to classic set theory.",
    example: "numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4} (duplicates removed)\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\n\nunion = set1 | set2        # {1, 2, 3, 4, 5}\nintersection = set1 & set2  # {3}\ndifference = set1 - set2    # {1, 2}\n\n# Membership testing\nprint(2 in set1)  # True"
  },
  {
    term: "Clé de dictionnaire",
    definition: "Le unique identifier used to access values in a dictionnaire.",
    levelRange: "5",
    detailedDescription: "Dictionary keys must be hashable (immutable) objets like chaînes, numbers, or tuples. Keys sont unique - assigning to an existing key overwrites the value. Keys sont used to access, add, or modify dictionnaire values. Accessing a non-existent key raises KeyError (use get() to avoid this). Keys can be iterated over avec .keys().\n\n1. Explication simple : A dictionnaire key est le label you use to look up a stored value.\n2. Explication intermédiaire : Keys must be unique within a dictionnaire, and you use them for fast, readable access instead of numeric positions.\n3. Explication approfondie : Only hashable objets can be keys; understanding how hashing and equality work on custom types is vital if you want to use your own classes as keys reliably.",
    example: "person = {'name': 'Alice', 'age': 30}\n\n# Accessing values\nname = person['name']  # 'Alice'\nage = person.get('age', 0)  # 30 (with default)\n\n# Adding/modifying\nperson['city'] = 'NYC'  # Add new key\nperson['age'] = 31     # Modify existing\n\n# Iterating keys\nfor key in person.keys():\n    print(key, person[key])"
  },
  {
    term: "Valeur de dictionnaire",
    definition: "Le data associated avec a key in a dictionnaire.",
    levelRange: "5",
    detailedDescription: "Dictionary values can be any Python objet - chaînes, numbers, listes, other dictionaries, fonctions, etc. Values sont accessed using their corresponding keys. Unlike keys, values don't need to be unique or hashable. Values can be modified, added, or removed. Le .values() méthode renvoie all values in a dictionnaire.\n\n1. Explication simple : A dictionnaire value est le actual data you’re storing under a key.\n2. Explication intermédiaire : Values can be any type (even other dictionaries), which makes dicts great for nested and structured data.\n3. Explication approfondie : Because values can be mutable and deeply nested, thinking about aliasing and copying is important when you pass dictionnaire-based data structures around your program.",
    example: "data = {\n    'name': 'Alice',\n    'scores': [85, 90, 88],\n    'info': {'age': 30, 'city': 'NYC'}\n}\n\n# Accessing values\nname = data['name']           # 'Alice'\nscores = data['scores']        # [85, 90, 88]\ninfo = data['info']            # {'age': 30, 'city': 'NYC'}\n\n# Modifying values\ndata['scores'].append(92)  # Modifies the list\n\n# Iterating values\nfor value in data.values():\n    print(value)"
  },
  {
    term: "Compréhension de dictionnaire",
    definition: "A concise way to create dictionaries using a single expression.",
    levelRange: "5",
    detailedDescription: "Dictionary comprehensions create dictionaries using the syntax {key: value for item in iterable}. They can include conditions: {key: value for item in iterable if condition}. Dictionary comprehensions sont more readable and efficient than creating dictionaries avec boucles. They're useful for transforming data structures.\n\n1. Explication simple : A dictionnaire comprehension est un shortcut for building a new dictionnaire from another sequence.\n2. Explication intermédiaire : It lets you specify how to compute each key and value in one compact expression, often replacing several lines of boucle code.\n3. Explication approfondie : Comprehensions encourage a declarative style for transforming and filtering data; as avec liste comprehensions, very complex ones should be broken into clearer steps.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Create dictionary of squares\nsquares = {x: x**2 for x in numbers}\n# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# With condition\n evens = {x: x*2 for x in numbers if x % 2 == 0}\n# {2: 4, 4: 8}\n\n# From two lists\nkeys = ['a', 'b', 'c']\nvalues = [1, 2, 3]\ndict_from_lists = {k: v for k, v in zip(keys, values)}\n# {'a': 1, 'b': 2, 'c': 3}"
  },
  {
    term: "Paramètre",
    definition: "A variable in a fonction definition that receives a value when the fonction est appelé.",
    levelRange: "7",
    detailedDescription: "Parameters sont placeholders in fonction definitions that specify what arguments the fonction expects. When a fonction est appelé, arguments sont passed and assigned to parameters. Parameters can have default values, making them optional. Functions can accept variable numbers of arguments using *args and **kwargs.\n\n1. Explication simple : A parameter est le name you use dans a fonction to refer to a value that will be passed in.\n2. Explication intermédiaire : Parameters define what information a fonction needs, and arguments fill those slots when you call the fonction.\n3. Explication approfondie : Understanding parameter kinds (positional-only, keyword-only, var-positional, var-keyword) and how Python matches arguments to them is crucial for designing flexible, clear APIs.",
    example: "def greet(name, greeting='Hello'):  # name and greeting are parameters\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Alice' is the argument\nresult2 = greet('Bob', 'Hi')  # 'Bob' and 'Hi' are arguments"
  },
  {
    term: "Argument",
    definition: "A value passed to a fonction when it est appelé.",
    levelRange: "7",
    detailedDescription: "Arguments sont the actual values passed to fonctions when they're called. They correspond to the fonction's parameters. Arguments can be positional (matched by position) or keyword (matched by name). Functions can accept variable numbers of arguments. Arguments sont evaluated avant being passed to the fonction.\n\n1. Explication simple : An argument est le real value you give to a fonction when you call it.\n2. Explication intermédiaire : You can pass arguments by position or by naming the parameter, which makes calls more explicit and flexible.\n3. Explication approfondie : Argument passing rules, including unpacking avec * and **, sont central to writing composable fonctions and higher-order utilities in Python.",
    example: "def add(a, b):  # a and b are parameters\n    return a + b\n\nresult = add(5, 3)  # 5 and 3 are arguments\nresult2 = add(a=5, b=3)  # Keyword arguments\nresult3 = add(b=3, a=5)  # Order doesn't matter with keywords"
  },
  {
    term: "Instruction Return",
    definition: "A instruction that exits a fonction and optionally renvoie a value.",
    levelRange: "7",
    detailedDescription: "Le renvoyer instruction exits a fonction immediately and can renvoyer a value to the caller. Functions sans an explicit renvoyer instruction renvoyer None. Return can renvoyer multiple values as a tuple. Once renvoyer executes, no further code in the fonction runs. Return est un expression, not a instruction, so it can be used in expressions.\n\n1. Explication simple : renvoyer sends a result back from a fonction and stops the fonction right away.\n2. Explication intermédiaire : You can renvoyer one value, many values (as a tuple), or nothing (which is really None under the hood).\n3. Explication approfondie : Careful design of what a fonction renvoie (and when) shapes how easy it is to compose and test; early renvoie often simplify complex branching logic.",
    example: "def add(a, b):\n    return a + b  # Returns the sum\n\nresult = add(3, 5)  # result = 8\n\ndef get_name_and_age():\n    return 'Alice', 30  # Returns tuple\n\nname, age = get_name_and_age()  # Unpacking"
  },
  {
    term: "Paramètre par défaut",
    definition: "A parameter avec a default value that est utilisé if no argument is provided.",
    levelRange: "7",
    detailedDescription: "Default parameters have values assigned in the fonction definition. If no argument is provided for a default parameter, the default value est utilisé. Default parameters must come après non-default parameters. Default values sont evaluated once when the fonction est défini, which can cause issues avec mutable defaults (use None instead).\n\n1. Explication simple : A default parameter gives a fonction a backup value to use when no argument is passed.\n2. Explication intermédiaire : Defaults make parameters optional and help you avoid repetitive argument passing in common cases.\n3. Explication approfondie : Because default values sont evaluated at fonction definition time, mutable defaults can accidentally share state entre calls; the common “None + create dans” pattern avoids this pitfall.",
    example: "def greet(name, greeting='Hello'):  # greeting has default 'Hello'\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))        # 'Hello, Alice!'\nprint(greet('Bob', 'Hi'))    # 'Hi, Bob!'\n\n# Mutable default (problematic)\ndef add_item(item, items=[]):  # BAD!\n    items.append(item)\n    return items\n\n# Better approach\ndef add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items"
  },
  {
    term: "Instance",
    definition: "An individual objet created from a classe.",
    levelRange: "7",
    detailedDescription: "An instance est un specific objet created from a classe blueprint. Each instance has its own set of attributes (instance variables) but shares the classe's méthodes. Instances sont created by calling the classe like a fonction, which invokes __init__. Multiple instances of the same classe sont independent objets avec separate state.\n\n1. Explication simple : An instance is one actual objet made from a classe, like one specific user in your app.\n2. Explication intermédiaire : Different instances of the same classe share behavior but keep their own data, so changing one doesn’t change the others.\n3. Explication approfondie : Instances carry their own __dict__ of attributes (unless __slots__ est utilisé), and understanding how attribute lookup works entre instance and classe is central to grasping Python’s OOP model.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name\n\n# Creating instances\nperson1 = Person('Alice')  # person1 is an instance\nperson2 = Person('Bob')    # person2 is another instance\n\nprint(person1.name)  # 'Alice'\nprint(person2.name)  # 'Bob'"
  },
  {
    term: "Variable d'instance",
    definition: "A variable that belongs to a specific instance of a classe.",
    levelRange: "7",
    detailedDescription: "Instance variables (also called attributes) store data unique to each instance. They sont created by assigning to self.attribute_name. Each instance has its own copy of instance variables. Instance variables can be accessed using dot notation (instance.attribute) or through self within méthodes.\n\n1. Explication simple : An instance variable est un piece of data that belongs to one specific objet.\n2. Explication intermédiaire : You define them in __init__ using self.x = value so each instance can store its own state.\n3. Explication approfondie : Instance attributes live in the instance’s namespace, and dynamic addition or removal of attributes at runtime is possible, which is powerful but should be used avec discipline.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name      # Instance variable\n        self.age = age        # Instance variable\n\nperson = Person('Alice', 30)\nprint(person.name)  # 'Alice' (accessing instance variable)\nprint(person.age)   # 30"
  },
  {
    term: "Variable de classe",
    definition: "A variable shared by all instances of a classe.",
    levelRange: "7",
    detailedDescription: "Class variables sont defined at the classe level (à l’extérieur de méthodes) and sont shared by all instances. They sont useful for storing data common to all instances. Class variables can be accessed through the classe or any instance. Modifying a classe variable through an instance creates an instance variable avec the same name (shadowing).\n\n1. Explication simple : A classe variable est un setting shared by all objets of that classe.\n2. Explication intermédiaire : Changing the classe variable on the classe affects all instances that haven’t overridden it on themselves.\n3. Explication approfondie : Shadowing classe variables avec instance attributes est un common source of confusion; understanding attribute resolution order helps you predict which value you’ll actually see.",
    example: "class Dog:\n    species = 'Canis familiaris'  # Class variable\n    \n    def __init__(self, name):\n        self.name = name  # Instance variable\n\ndog1 = Dog('Buddy')\ndog2 = Dog('Max')\n\nprint(dog1.species)  # 'Canis familiaris'\nprint(dog2.species)  # 'Canis familiaris'\nprint(Dog.species)   # 'Canis familiaris' (same for all)"
  },
  {
    term: "Self",
    definition: "A reference to the current instance, used to access instance attributes and méthodes.",
    levelRange: "7",
    detailedDescription: "Self est le conventional name for the first parameter of instance méthodes. It refers to the instance on which the méthode est appelé. Through self, méthodes can access and modify instance variables and call other méthodes. Self is automatically passed when calling méthodes on instances - you don't pass it explicitly.\n\n1. Explication simple : self is how a méthode refers to “this objet”.\n2. Explication intermédiaire : When you call obj.méthode(), Python automatically passes obj as the first argument, which we usually name self.\n3. Explication approfondie : self is just a convention, but it encodes the idea of bound méthodes; understanding this helps explain why méthodes behave differently when accessed via the classe versus an instance.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name  # self refers to the instance\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'  # Accessing via self\n\nperson = Person('Alice')\nperson.greet()  # self is automatically person"
  },
  {
    term: "Constructeur",
    definition: "A special méthode __init__ that initializes a new instance of a classe.",
    levelRange: "7",
    detailedDescription: "Le constructor (__init__ méthode) is automatically called when a new instance est créé. It's used to initialize instance variables and perform setup. __init__ doesn't create the objet (that's done by __new__), but it's the primary place for initialization. It can accept parameters to customize the instance.\n\n1. Explication simple : Le constructor est le special méthode that runs when you create a new objet from a classe.\n2. Explication intermédiaire : You use __init__ to set up the initial state of an objet based on the arguments passed to the classe.\n3. Explication approfondie : Separating objet creation (__new__) from initialization (__init__) allows advanced customization of instances, but most everyday code only needs to implement __init__.",
    example: "class Person:\n    def __init__(self, name, age):  # Constructor\n        self.name = name\n        self.age = age\n        print(f'{name} created')\n\nperson = Person('Alice', 30)  # Constructor is called automatically\n# Output: 'Alice created'"
  },
  {
    term: "Héritage",
    definition: "A mechanism where a child classe inherits attributes and méthodes from a parent classe.",
    levelRange: "9",
    detailedDescription: "Inheritance allows creating new classes based on existing ones. Le child classe (subclass) inherits all attributes and méthodes from the parent classe (superclass) and can add new ones or override existing ones. Inheritance promotes code reuse and establishes an 'is-a' relationship. Python supports multiple inheritance.\n\n1. Explication simple : Inheritance lets one classe reuse and extend the behavior of another.\n2. Explication intermédiaire : A child classe automatically gets the méthodes and attributes of its parent, and can override them or add new ones.\n3. Explication approfondie : Designing good inheritance hierarchies requires thinking about “is-a” relationships, the méthode resolution order (MRO), and when composition est un better fit than subclassing.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):  # Dog inherits from Animal\n    def speak(self):  # Override parent method\n        return 'Woof!'\n\ndog = Dog('Buddy')\nprint(dog.name)    # Inherited attribute\nprint(dog.speak())  # Overridden method: 'Woof!'"
  },
  {
    term: "Polymorphisme",
    definition: "Le ability of different classes to respond to the same méthode call in different ways.",
    levelRange: "9",
    detailedDescription: "Polymorphism allows objets of different types to be treated uniformly through a common interface. In Python, polymorphism is achieved through duck typing - if an objet has the required méthode, it can be used. Ce enables writing code that works avec multiple types sans explicit type checking.\n\n1. Explication simple : Polymorphism means different objets can respond to the same action in their own way.\n2. Explication intermédiaire : If several classes implement the same méthode name, you can write one piece of code that calls that méthode and works for all of them.\n3. Explication approfondie : Python’s duck typing emphasizes behavior over type hierarchy, so polymorphism is more about shared protocols (like “has a .write() méthode”) than about strict inheritance trees.",
    example: "class Dog:\n    def speak(self):\n        return 'Woof!'\n\nclass Cat:\n    def speak(self):\n        return 'Meow!'\n\n# Polymorphic function\ndef make_sound(animal):\n    return animal.speak()  # Works with any object with speak()\n\ndog = Dog()\ncat = Cat()\nprint(make_sound(dog))  # 'Woof!'\nprint(make_sound(cat))  # 'Meow!'"
  },
  {
    term: "Encapsulation",
    definition: "Le bundling of data and méthodes that operate on that data within a single unit.",
    levelRange: "9",
    detailedDescription: "Encapsulation est le principle of hiding internal implementation details and exposing only what's necessary. In Python, encapsulation is achieved through naming conventions: single underscore (_) for 'protected' and double underscore (__) for 'private' (name mangling). Python doesn't enforce strict encapsulation - it's a convention.\n\n1. Explication simple : Encapsulation means keeping an objet’s internal details hidden and only exposing what other code needs to use.\n2. Explication intermédiaire : By grouping data and behavior together and using naming conventions, you signal which parts of a classe sont “public” and which sont internal.\n3. Explication approfondie : While Python doesn’t enforce access restrictions, consistent use of encapsulation patterns leads to cleaner APIs and reduces the risk of breaking users’ code when internals change.",
    example: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # 'Private' attribute\n    \n    def deposit(self, amount):\n        self.__balance += amount  # Controlled access\n    \n    def get_balance(self):\n        return self.__balance  # Public interface\n\naccount = BankAccount(100)\n# account.__balance  # Error: name mangling\nprint(account.get_balance())  # 100"
  },
  {
    term: "Super",
    definition: "A built-in fonction that renvoie a proxy objet to access parent classe méthodes.",
    levelRange: "9",
    detailedDescription: "Super() provides a way to call méthodes from parent classes. It's commonly used in __init__ to ensure parent initialization. Super() follows the méthode resolution order (MRO) to find the correct parent méthode. It's essential in multiple inheritance scenarios to call the right parent méthode.\n\n1. Explication simple : super() is how a child classe calls a méthode from its parent classe.\n2. Explication intermédiaire : It’s especially important in __init__ to make sure the parent part of the objet is set up correctly.\n3. Explication approfondie : In multiple inheritance chains, super() coordinates calls along the MRO so that each classe in the hierarchy gets a chance to run its logic exactly once.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)  # Call parent __init__\n        self.breed = breed\n    \n    def speak(self):\n        return super().speak() + ' Woof!'  # Extend parent method\n\ndog = Dog('Buddy', 'Labrador')\nprint(dog.name)  # 'Buddy' (from parent)\nprint(dog.speak())  # 'Some sound Woof!'"
  },
  {
    term: "Redéfinition de méthode",
    definition: "Defining a méthode in a child classe that replaces a méthode from the parent classe.",
    levelRange: "9",
    detailedDescription: "Method overriding occurs when a child classe defines a méthode avec the same name as a parent classe méthode. Le child's méthode takes precedence when called on child instances. Overriding allows customizing behavior while maintaining the same interface. Le parent méthode can still be accessed using super().\n\n1. Explication simple : Overriding means a child classe replaces a parent’s méthode avec its own version.\n2. Explication intermédiaire : It lets you keep the same méthode name but adapt what it does for a more specific type.\n3. Explication approfondie : Overriding is central to polymorphism; knowing when to call super() versus fully replace behavior helps keep inherited code predictable and maintainable.",
    example: "class Shape:\n    def area(self):\n        return 0\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Override parent method\n        return self.width * self.height\n\nrect = Rectangle(5, 3)\nprint(rect.area())  # 15 (uses overridden method)"
  },
  {
    term: "Méthode abstraite",
    definition: "A méthode declared in a base classe that must be implemented by subclasses.",
    levelRange: "9",
    detailedDescription: "Abstract méthodes define an interface that subclasses must implement. In Python, abstract méthodes sont created using the abc (Abstract Base Class) module. Classes avec abstract méthodes cannot be instantiated directly. Abstract méthodes ensure that subclasses provide required functionality, enforcing a contract.\n\n1. Explication simple : An abstract méthode est un méthode that says “subclasses must define this,” but doesn’t provide its own body.\n2. Explication intermédiaire : Abstract base classes use abstract méthodes to guarantee that certain behaviors exist on all concrete subclasses.\n3. Explication approfondie : Abstract méthodes and ABCs let you formalize protocols and catch missing implementations early, which is especially useful in large systems and avec static type checkers.",
    example: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):  # Abstract base class\n    @abstractmethod\n    def area(self):  # Must be implemented by subclasses\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Required implementation\n        return self.width * self.height\n\n# shape = Shape()  # Error: cannot instantiate abstract class\nrect = Rectangle(5, 3)  # OK"
  },
  {
    term: "Patron de conception",
    definition: "A reusable solution to a commonly occurring problem in software design.",
    levelRange: "9",
    detailedDescription: "Design patterns sont proven solutions to common programming problems. They provide templates for structuring code to achieve flexibility, maintainability, and reusability. Common patterns include Singleton, Factory, Observer, Strategy, and Decorator. Patterns sont language-agnostic concepts that can be implemented in Python.\n\n1. Explication simple : A design pattern est un reusable “recipe” for solving a common design problem in code.\n2. Explication intermédiaire : Patterns give shared names and structures (like Singleton or Factory) so developers can talk about and apply solutions quickly.\n3. Explication approfondie : In Python, many classic patterns look different car of first-classe fonctions and dynamic typing; understanding both the original intent and the Pythonic implementation leads to cleaner architecture.",
    example: "# Singleton Pattern\nclass Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\n# Factory Pattern\nclass AnimalFactory:\n    @staticmethod\n    def create_animal(animal_type):\n        if animal_type == 'dog':\n            return Dog()\n        elif animal_type == 'cat':\n            return Cat()\n        return None"
  },
  {
    term: "Gestion des exceptions",
    definition: "A mechanism to handle errors and exceptional conditions using try/except blocks.",
    levelRange: "9",
    detailedDescription: "Exception handling allows programs to gracefully handle errors sans crashing. Le try block contains code that might raise exceptions. Le except block catches and handles specific exceptions. Optional else runs if no exception occurs, and finally always executes. Proper exception handling improves program robustness.\n\n1. Explication simple : Exception handling is how Python lets you catch and respond to errors instead of crashing.\n2. Explication intermédiaire : You wrap risky code in try, handle specific problems in except, and optionally clean up in finally.\n3. Explication approfondie : Good exception handling distinguishes entre expected, recoverable errors and truly unexpected bugs, and it uses precise exception types rather than broad catches to keep failures understandable.",
    example: "try:\n    result = 10 / 0  # Raises ZeroDivisionError\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nexcept Exception as e:\n    print(f'An error occurred: {e}')\nelse:\n    print('No errors occurred')\nfinally:\n    print('This always executes')"
  },
  {
    term: "Gestionnaire de contexte",
    definition: "An objet that manages resources using the 'avec' instruction.",
    levelRange: "9",
    detailedDescription: "Context managers ensure proper resource management (like file closing) using the 'avec' instruction. They implement __enter__ and __exit__ méthodes. Context managers automatically handle setup and cleanup, even if exceptions occur. Le 'avec' instruction is preferred over manual resource management.\n\n1. Explication simple : A context manager is what lets avec open(...) automatically close the file for you.\n2. Explication intermédiaire : It wraps some code avec setup and teardown logic so resources sont always cleaned up, even if errors happen.\n3. Explication approfondie : Implementing __enter__ and __exit__ (or using contextlib) lets you create your own safe “avec” blocks for locks, transactions, timers, and other resources that need strict lifetime control.",
    example: "# Built-in file context manager\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# File is automatically closed here\n\n# Custom context manager\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, *args):\n        print(f'Elapsed: {time.time() - self.start}')\n\nwith Timer():\n    # Do something\n    pass"
  }
];
