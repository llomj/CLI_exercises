import { GlossaryItem } from '../constants';

// French translations for CLI glossary entries
// Shell/CLI command examples remain the same in all languages
export const GLOSSARY_FR: GlossaryItem[] = [
  {
    term: "Terminal",
    definition: "Une interface textuelle pour interagir avec le système d'exploitation en tapant des commandes.",
    levelRange: "1",
    detailedDescription: "Le terminal (aussi appelé console ou ligne de commande) est un programme qui accepte une entrée texte et affiche une sortie texte. Il donne un accès direct au système d'exploitation sans interface graphique. Sous Linux/macOS, les terminaux courants incluent GNOME Terminal, iTerm2 et l'application Terminal intégrée. Sous Windows, l'Invite de commandes et PowerShell jouent des rôles similaires.\n\n1. Explication simple : Un terminal est une fenêtre où vous tapez des commandes au lieu de cliquer sur des icônes.\n2. Explication intermédiaire : C'est le principal moyen d'exécuter des commandes shell, des scripts et des outils système sur les systèmes de type Unix.\n3. Explication approfondie : Le terminal est un émulateur de terminal qui se connecte à un processus shell ; il gère l'affichage, l'entrée et supporte souvent des fonctionnalités comme les onglets, l'historique et la couleur.",
    example: "$ ls -la\n$ pwd\n$ echo hello"
  },
  {
    term: "Shell",
    definition: "Le programme qui interprète les commandes et exécute les programmes dans le terminal.",
    levelRange: "1",
    detailedDescription: "Le shell est l'interpréteur de ligne de commande qui lit votre entrée, l'analyse et exécute les commandes. Les shells courants incluent Bash (Bourne Again Shell), Zsh (Z Shell) et sh (shell POSIX). Le shell gère les variables, le globbing, la redirection, les tubes et les scripts. Votre shell par défaut est défini dans /etc/passwd ou via chsh.\n\n1. Explication simple : Le shell est le programme qui comprend et exécute les commandes que vous tapez.\n2. Explication intermédiaire : Il fournit des fonctionnalités comme les variables, l'historique des commandes, la complétion par tabulation et les scripts.\n3. Explication approfondie : Le shell est un programme en espace utilisateur qui fork et exec d'autres programmes ; il implémente le contrôle des jobs, les pipelines et un langage de script riche.",
    example: "bash\nzsh\nsh script.sh"
  },
  {
    term: "PATH",
    definition: "Variable d'environnement listant les répertoires où le shell recherche les programmes exécutables.",
    levelRange: "1",
    detailedDescription: "PATH est une liste de répertoires séparés par des deux-points (point-virgule sous Windows). Quand vous tapez une commande comme ls, le shell recherche dans chaque répertoire de PATH, dans l'ordre, un exécutable nommé ls. Si non trouvé, vous obtenez 'command not found'. Vous pouvez afficher PATH avec echo $PATH et ajouter des répertoires avec export PATH=$PATH:/nouveau/dir.\n\n1. Explication simple : PATH indique au shell où chercher les programmes quand vous tapez une commande.\n2. Explication intermédiaire : Sans PATH, vous devriez taper le chemin complet (ex. /usr/bin/ls) pour chaque commande.\n3. Explication approfondie : PATH est hérité par les processus enfants ; le modifier dans .bashrc ou .zshrc affecte les nouveaux shells. Des considérations de sécurité s'appliquent quand PATH inclut le répertoire courant (.).",
    example: "echo $PATH\nexport PATH=$PATH:$HOME/bin"
  },
  {
    term: "Code de sortie",
    definition: "Valeur numérique (0-255) retournée par un programme pour indiquer le succès ou l'échec.",
    levelRange: "1",
    detailedDescription: "Quand un programme se termine, il retourne un code de sortie (aussi appelé statut de sortie ou code de retour) au shell. Convention : 0 signifie succès, non-zéro signifie échec. Le shell stocke le dernier code de sortie dans $?. Vous pouvez l'utiliser dans des conditions : if command; then ... fi. Codes courants : 0 (succès), 1 (erreur générale), 2 (mauvaise utilisation), 126 (non exécutable), 127 (non trouvé).\n\n1. Explication simple : Le code de sortie 0 signifie que la commande a réussi ; tout autre nombre signifie généralement qu'un problème s'est produit.\n2. Explication intermédiaire : Les scripts et programmes utilisent les codes de sortie pour que d'autres commandes puissent réagir au succès ou à l'échec.\n3. Explication approfondie : exit est un builtin du shell ; le noyau transmet le statut de sortie au processus parent. De nombreux outils documentent leurs codes de sortie dans les pages man.",
    example: "ls /tmp; echo $?\nfalse; echo $?"
  },
  {
    term: "Globbing",
    definition: "Correspondance de motifs qui développe les wildcards comme * et ? en noms de fichiers correspondants.",
    levelRange: "1",
    detailedDescription: "Le globbing (ou expansion de noms de chemins) se produit quand le shell remplace les motifs par les noms de fichiers correspondants avant d'exécuter une commande. * correspond à toute chaîne (y compris vide) ; ? correspond à un seul caractère ; [abc] correspond à l'un de a, b ou c. L'expansion se fait dans le shell, pas dans le programme. Pour empêcher l'expansion, mettez le motif entre guillemets.\n\n1. Explication simple : * et ? sont des wildcards qui correspondent à plusieurs fichiers à la fois.\n2. Explication intermédiaire : ls *.txt se développe en tous les fichiers .txt du répertoire courant avant que ls ne s'exécute.\n3. Explication approfondie : Le globbing est fait par le shell ; si aucun fichier ne correspond, le motif peut être passé littéralement (bash) ou causer une erreur (zsh avec nomatch).",
    example: "ls *.txt\nrm temp_?\ncp [abc]*.log backup/"
  },
  {
    term: "Redirection",
    definition: "Envoyer l'entrée/sortie d'une commande vers ou depuis des fichiers au lieu du terminal.",
    levelRange: "1",
    detailedDescription: "La redirection change où vont stdin (0), stdout (1) et stderr (2). > redirige stdout vers un fichier (écrase) ; >> ajoute. < redirige stdin depuis un fichier. 2> redirige stderr. 2>&1 envoie stderr là où va stdout. &> (bash) redirige les deux. Le shell configure les descripteurs de fichiers avant d'exécuter la commande.\n\n1. Explication simple : > enregistre la sortie dans un fichier ; < lit l'entrée depuis un fichier.\n2. Explication intermédiaire : Vous pouvez rediriger stdout, stderr et stdin séparément ou ensemble.\n3. Explication approfondie : La redirection utilise dup2() pour réaffecter les descripteurs de fichiers. L'ordre compte : 2>&1 >file redirige stderr vers l'ancien stdout, puis stdout vers file, donc stderr peut encore aller au terminal.",
    example: "ls > output.txt\ncat < input.txt\ncmd 2>&1 | tee log.txt"
  },
  {
    term: "Tube (pipe)",
    definition: "Connexion de la sortie d'une commande à l'entrée d'une autre avec |.",
    levelRange: "1",
    detailedDescription: "Un tube (|) connecte la stdout de la commande de gauche à la stdin de la commande de droite. Les deux s'exécutent concurremment ; la commande de droite lit pendant que la gauche écrit. Les tubes permettent la composition : ls | grep txt | wc -l. Seule stdout est tubée ; stderr va au terminal sauf redirection. Broken pipe (SIGPIPE) se produit si le lecteur se termine tôt.\n\n1. Explication simple : | envoie la sortie d'une commande comme entrée à la suivante.\n2. Explication intermédiaire : Les tubes permettent d'enchaîner les commandes : trouver des fichiers, les filtrer, les compter.\n3. Explication approfondie : Le shell crée un tube avec pipe(), fork, et connecte les descripteurs de fichiers. Les données circulent de gauche à droite ; la contre-pression est gérée en bloquant l'écrivain.",
    example: "ls -l | grep '\\.txt$'\ncat file | sort | uniq"
  },
  {
    term: "Alias",
    definition: "Un nom raccourci pour une commande ou une chaîne de commandes.",
    levelRange: "1",
    detailedDescription: "Un alias définit un nom court qui se développe en une commande plus longue. Exemple : alias ll='ls -la'. Quand vous tapez ll, le shell le remplace par ls -la. Les alias sont typiquement définis dans .bashrc ou .zshrc. Ils ne persistent pas entre les sessions sauf s'ils sont sauvegardés. Utilisez alias pour les lister, unalias pour les supprimer. Les alias n'acceptent pas les arguments comme les fonctions.\n\n1. Explication simple : Un alias est un raccourci—tapez ll au lieu de ls -la.\n2. Explication intermédiaire : Définissez les alias dans votre fichier de config shell pour qu'ils soient disponibles dans chaque nouveau terminal.\n3. Explication approfondie : L'expansion des alias se fait avant les autres analyses ; ils ne conviennent pas à la logique complexe—utilisez des fonctions à la place.",
    example: "alias ll='ls -la'\nalias gs='git status'"
  },
  {
    term: "Variable d'environnement",
    definition: "Paire clé-valeur stockée dans l'environnement du processus, visible au processus et à ses enfants.",
    levelRange: "1",
    detailedDescription: "Les variables d'environnement (ex. PATH, HOME, USER) sont héritées par les processus enfants. Définir avec export VAR=valeur (bash/zsh). Afficher avec printenv ou echo $VAR. Elles servent à la configuration : EDITOR, LANG, etc. Les processus enfants ne peuvent pas modifier l'environnement du parent. Les variables définies dans le shell persistent jusqu'à la sortie du shell sauf si sauvegardées dans .bashrc.\n\n1. Explication simple : Les variables d'environnement stockent des paramètres que les programmes peuvent lire, comme votre répertoire personnel.\n2. Explication intermédiaire : export rend une variable disponible aux programmes que vous lancez depuis le shell.\n3. Explication approfondie : L'environnement est passé comme troisième argument à execve() ; c'est un tableau de chaînes KEY=valeur terminé par null.",
    example: "export EDITOR=vim\necho $HOME"
  },
  {
    term: "Chemin absolu",
    definition: "Un chemin qui commence à la racine (/) et identifie de manière unique un fichier.",
    levelRange: "2",
    detailedDescription: "Un chemin absolu commence par / et spécifie l'emplacement complet depuis la racine du système de fichiers. Exemples : /home/user/file.txt, /usr/bin/ls. Il est le même quel que soit le répertoire de travail courant. Utilisez pwd pour voir votre répertoire actuel ; les chemins absolus n'en dépendent pas. Requis pour référencer des fichiers depuis des scripts ou configs qui peuvent s'exécuter depuis différents répertoires.\n\n1. Explication simple : Un chemin absolu commence par / et donne l'adresse complète d'un fichier.\n2. Explication intermédiaire : /home/user/docs/report.txt fonctionne de partout ; docs/report.txt ne fonctionne que si vous êtes dans /home/user.\n3. Explication approfondie : Le noyau résout les chemins à partir de / ; les liens symboliques dans le chemin sont suivis (sauf avec realpath ou similaire).",
    example: "/home/user/file.txt\n/usr/local/bin/myapp"
  },
  {
    term: "Chemin relatif",
    definition: "Un chemin relatif au répertoire de travail courant, ne commençant pas par /.",
    levelRange: "2",
    detailedDescription: "Un chemin relatif ne commence pas par / ; il est interprété par rapport au répertoire courant (.). ./file signifie file dans le répertoire courant. ../parent signifie le répertoire parent. ../sibling/file remonte d'un niveau, puis entre dans sibling. Les chemins relatifs changent de sens quand vous faites cd. Utilisez-les pour la portabilité au sein d'un projet.\n\n1. Explication simple : Un chemin relatif décrit où est un fichier par rapport à où vous êtes.\n2. Explication intermédiaire : ./script.sh exécute un script dans le répertoire courant ; ../ signifie le dossier au-dessus.\n3. Explication approfondie : Le shell et le noyau résolvent . et .. pendant la résolution du chemin ; .. ne traverse pas les frontières de systèmes de fichiers dans certains cas limites.",
    example: "./script.sh\n../config/settings.conf"
  },
  {
    term: "Permissions de fichier",
    definition: "Bits lecture (r), écriture (w) et exécution (x) qui contrôlent l'accès pour l'utilisateur, le groupe et les autres.",
    levelRange: "2",
    detailedDescription: "Les fichiers Unix ont trois ensembles de permissions : propriétaire (utilisateur), groupe et autres. Chacun a r (lecture), w (écriture), x (exécution). Pour les fichiers : r=lire le contenu, w=modifier, x=exécuter. Pour les répertoires : r=lister, w=créer/supprimer, x=entrer (cd). Voir avec ls -l ; modifier avec chmod. Octal : 755 = rwxr-xr-x. Symbolique : chmod u+x file.\n\n1. Explication simple : Les permissions contrôlent qui peut lire, modifier ou exécuter un fichier.\n2. Explication intermédiaire : chmod 755 rend un fichier exécutable pour tous ; chmod 600 le rend privé.\n3. Explication approfondie : Les permissions sont stockées dans l'inode ; le noyau les vérifie à chaque accès. SUID, SGID et le sticky bit étendent le modèle.",
    example: "ls -l file.txt\nchmod 755 script.sh\nchmod u+x file"
  },
  {
    term: "grep",
    definition: "Commande qui recherche du texte pour les lignes correspondant à un motif.",
    levelRange: "3",
    detailedDescription: "grep (Global Regular Expression Print) recherche dans l'entrée (fichiers ou stdin) les lignes correspondant à un motif. Par défaut il affiche les lignes correspondantes. -i ignore la casse ; -r récursif dans les répertoires ; -n affiche les numéros de ligne ; -v inverse (non correspondant). Les motifs sont des regex basiques par défaut ; -E pour regex étendue (egrep). Code de sortie 0 si correspondance trouvée, 1 sinon.\n\n1. Explication simple : grep trouve les lignes contenant un mot ou un motif dans un fichier.\n2. Explication intermédiaire : grep -r 'error' . recherche dans tous les fichiers du répertoire courant récursivement.\n3. Explication approfondie : grep compile le motif et scanne ligne par ligne ; il est optimisé pour la vitesse. Utilisez -F pour les chaînes littérales quand vous n'avez pas besoin de regex.",
    example: "grep 'error' log.txt\ngrep -r 'TODO' src/\ngrep -i 'warning' *.log"
  },
  {
    term: "Tube (|)",
    definition: "L'opérateur | qui connecte la stdout d'une commande à la stdin d'une autre.",
    levelRange: "3",
    detailedDescription: "Voir 'Tube (pipe)' au niveau 1 pour la définition complète. Les tubes sont fondamentaux pour la philosophie Unix : de petits outils qui font une chose bien, composés avec des tubes. Patterns courants : ps aux | grep python, cat file | sort | uniq, find . -name '*.txt' | xargs grep pattern.\n\n1. Explication simple : | enchaîne les commandes pour que la sortie d'une devienne l'entrée de la suivante.\n2. Explication intermédiaire : Les tubes permettent des one-liners puissants en combinant des commandes simples.\n3. Explication approfondie : Le shell crée un tube, fork, et connecte les descripteurs de fichiers ; les deux processus s'exécutent concurremment.",
    example: "ps aux | grep nginx\ncat access.log | cut -d' ' -f1 | sort | uniq -c"
  },
  {
    term: "Shebang",
    definition: "La première ligne #! d'un script qui spécifie l'interpréteur pour l'exécuter.",
    levelRange: "1",
    detailedDescription: "Le shebang (#!/bin/bash ou #!/usr/bin/env python3) est la première ligne d'un script exécutable. Le noyau l'utilise pour choisir l'interpréteur. #! doivent être les deux premiers caractères. /usr/bin/env est souvent utilisé pour la portabilité (ex. #!/usr/bin/env bash) pour que le script trouve l'interpréteur dans PATH. Le reste de la ligne est passé à l'interpréteur.\n\n1. Explication simple : #!/bin/bash indique au système d'exécuter le script avec bash.\n2. Explication intermédiaire : Utilisez #!/usr/bin/env bash pour trouver bash dans PATH, ce qui aide sur différents systèmes.\n3. Explication approfondie : Le noyau lit le shebang, exécute l'interpréteur avec le chemin du script comme argument. Des limites de longueur s'appliquent sur certains systèmes.",
    example: "#!/bin/bash\necho 'Hello'\n\n#!/usr/bin/env python3\nprint('Hi')"
  },
  {
    term: "cd",
    definition: "Change directory—navigue vers un autre dossier.",
    levelRange: "1",
    detailedDescription: "cd (change directory) définit le répertoire de travail courant du shell. cd /path va à un chemin absolu. cd relative/path va relativement au répertoire courant. cd .. remonte d'un niveau. cd - va au répertoire précédent. cd sans argument va à $HOME. C'est un builtin du shell car il doit changer le répertoire de travail du shell lui-même.\n\n1. Explication simple : cd vous déplace dans un autre dossier.\n2. Explication intermédiaire : cd .. remonte ; cd - retourne où vous étiez avant.\n3. Explication approfondie : Seul le processus du shell change de répertoire ; les processus enfants l'héritent. Il n'y a pas de programme cd—ce doit être un builtin.",
    example: "cd /home/user\ndir\ncd ..\ncd -"
  },
  {
    term: "ls",
    definition: "Liste le contenu d'un répertoire—affiche les fichiers et dossiers.",
    levelRange: "1",
    detailedDescription: "ls liste les fichiers et répertoires. -l format long (permissions, propriétaire, taille, date) ; -a afficher les cachés (dotfiles) ; -la les deux ; -h tailles lisibles ; -t trier par temps ; -r ordre inverse. Par défaut, ls trie alphabétiquement. Sur beaucoup de systèmes, ls est aliasé à ls --color pour une sortie colorée. Code de sortie 0 normalement, 2 si le répertoire n'existe pas.\n\n1. Explication simple : ls montre ce qu'il y a dans le dossier courant.\n2. Explication intermédiaire : ls -la montre tout y compris les fichiers cachés, avec les détails.\n3. Explication approfondie : ls lit les entrées de répertoire via getdents() ; il peut faire stat() sur chaque fichier pour -l. Les grands répertoires peuvent être lents.",
    example: "ls\nls -la\nls -lht"
  },
  {
    term: "pwd",
    definition: "Print working directory—affiche le chemin du dossier courant.",
    levelRange: "1",
    detailedDescription: "pwd (print working directory) affiche le chemin absolu du répertoire courant. C'est un builtin du shell et aussi un programme séparé (/bin/pwd). Le builtin suit le répertoire logique du shell ; la commande externe peut résoudre les liens symboliques avec -P. Utile dans les scripts pour savoir où vous êtes. Simple et rapide.\n\n1. Explication simple : pwd vous dit dans quel dossier vous êtes.\n2. Explication intermédiaire : Utilisez pwd dans les scripts pour obtenir le chemin du répertoire courant.\n3. Explication approfondie : PWD est souvent gardé dans l'environnement du shell ; pwd l'affiche juste. Avec -P, le pwd externe utilise getcwd() qui résout les liens symboliques.",
    example: "pwd\n# Sortie: /home/user/projects"
  },
  {
    term: "cat",
    definition: "Concaténer et afficher le contenu des fichiers.",
    levelRange: "3",
    detailedDescription: "cat lit les fichiers et les écrit sur stdout. cat file1 file2 concatène plusieurs fichiers. Sans argument, cat lit stdin (donc il répète ce que vous tapez jusqu'à Ctrl+D). Souvent utilisé pour voir de petits fichiers ou pour tubifier du contenu : cat file | grep x. Pour les grands fichiers, utilisez less ou more. -n numérote les lignes. -A affiche les caractères non imprimables.\n\n1. Explication simple : cat affiche le contenu d'un fichier.\n2. Explication intermédiaire : cat file1 file2 combine et affiche plusieurs fichiers.\n3. Explication approfondie : cat est simple et rapide ; pour la visualisation interactive, less est meilleur. cat sert aussi à créer des fichiers : cat > file, puis taper, Ctrl+D.",
    example: "cat readme.txt\ncat file1.txt file2.txt\ncat file | head -20"
  },
  {
    term: "mkdir",
    definition: "Créer un nouveau répertoire.",
    levelRange: "1",
    detailedDescription: "mkdir crée des répertoires. mkdir dirname crée un répertoire. mkdir -p parent/child/grandchild crée le chemin complet, y compris les répertoires parents. -p ne provoque pas d'erreur si le répertoire existe déjà. Utile dans les scripts pour s'assurer qu'un chemin existe. Les permissions suivent umask ; utilisez -m pour définir explicitement.\n\n1. Explication simple : mkdir crée un nouveau dossier.\n2. Explication intermédiaire : mkdir -p a/b/c crée a, puis a/b, puis a/b/c si nécessaire.\n3. Explication approfondie : mkdir appelle le syscall mkdir() ; -p implémente une boucle pour créer chaque composant du chemin. Échoue si un composant existe et n'est pas un répertoire.",
    example: "mkdir mydir\nmkdir -p project/src/components"
  },
  {
    term: "rm",
    definition: "Supprimer des fichiers ou répertoires.",
    levelRange: "1",
    detailedDescription: "rm supprime des fichiers. -r (récursif) supprime les répertoires et leur contenu. -f (force) ignore les fichiers manquants et ne demande pas. -rf est courant mais dangereux—vérifiez bien le chemin. rm ne déplace pas vers la corbeille ; la suppression est permanente. Utilisez rm -i pour une confirmation interactive. Ne jamais exécuter rm -rf / ou rm -rf /*.\n\n1. Explication simple : rm supprime des fichiers. rm -r supprime des dossiers et tout leur contenu.\n2. Explication intermédiaire : rm -rf est puissant et irréversible—utilisez avec extrême prudence.\n3. Explication approfondie : rm délie les fichiers ; si le nombre de liens atteint 0, l'inode est libérée. Les fichiers ouverts peuvent persister jusqu'à fermeture. -rf peut être catastrophique si le chemin est faux.",
    example: "rm oldfile.txt\nrm -r olddir\nrm -rf temp/"
  },
  {
    term: "cp",
    definition: "Copier des fichiers ou répertoires.",
    levelRange: "1",
    detailedDescription: "cp copie des fichiers. cp src dst copie un fichier. cp -r src dst copie un répertoire récursivement. -i demande avant écrasement. -p préserve les attributs (horodatages, permissions). Plusieurs sources peuvent copier vers un répertoire : cp a b c dest/. Si dest existe et est un fichier, il est écrasé ; si c'est un répertoire, les fichiers sont copiés dedans.\n\n1. Explication simple : cp fait une copie d'un fichier ou dossier.\n2. Explication intermédiaire : cp -r copie un répertoire et tout son contenu.\n3. Explication approfondie : cp lit et écrit ; il ne clone pas les inodes. Pour les grands arbres, rsync peut être plus rapide. Préserver les hard links nécessite -a ou -l.",
    example: "cp file.txt backup.txt\ncp -r src/ backup/"
  },
  {
    term: "mv",
    definition: "Déplacer ou renommer des fichiers et répertoires.",
    levelRange: "1",
    detailedDescription: "mv déplace ou renomme des fichiers. Sur le même système de fichiers, mv est typiquement un renommage (même inode) ; entre systèmes de fichiers, il copie puis supprime. mv old new renomme. mv file dir/ déplace dans le répertoire. -i demande avant écrasement. mv n'a pas besoin de -r pour les répertoires—il déplace tout l'arbre.\n\n1. Explication simple : mv déplace des fichiers ou les renomme.\n2. Explication intermédiaire : mv folder/ dest/ déplace tout le dossier dans dest.\n3. Explication approfondie : Même système de fichiers : syscall rename(), rapide. Système différent : copie + unlink. Un déplacement cross-device peut être lent pour les grands répertoires.",
    example: "mv oldname.txt newname.txt\nmv file.txt ~/Documents/"
  },
  {
    term: "chmod",
    definition: "Changer les permissions des fichiers (lecture, écriture, exécution).",
    levelRange: "2",
    detailedDescription: "chmod change les bits de permission des fichiers. Octal : chmod 755 file (rwxr-xr-x). Symbolique : chmod u+x (ajouter exécution pour l'utilisateur), g-w (retirer écriture pour le groupe), o=r (les autres ont lecture seule). u=utilisateur, g=groupe, o=autres, a=tous. + ajouter, - retirer, = définir. -R récursif dans les répertoires. Seul le propriétaire ou root peut changer les permissions.\n\n1. Explication simple : chmod change qui peut lire, modifier ou exécuter un fichier.\n2. Explication intermédiaire : chmod 755 rend un script exécutable pour tous ; 600 le rend privé.\n3. Explication approfondie : chmod modifie les bits de mode dans l'inode. SUID (4000), SGID (2000), sticky (1000) peuvent aussi être définis. umask affecte les nouveaux fichiers, pas chmod.",
    example: "chmod 755 script.sh\nchmod u+x file\nchmod -R 644 docs/"
  },
  {
    term: "Inode",
    definition: "Structure de données stockant les métadonnées d'un fichier (permissions, taille, pointeurs vers les blocs de données).",
    levelRange: "2",
    detailedDescription: "Un inode (index node) est une structure du système de fichiers contenant les métadonnées du fichier : permissions, propriétaire, taille, horodatages et pointeurs vers les blocs de données. Chaque fichier a un inode ; le nom du fichier est stocké dans le répertoire (qui mappe les noms aux numéros d'inode). ls -i affiche les numéros d'inode. Les hard links partagent le même inode. Quand tous les liens sont supprimés, l'inode est libérée.\n\n1. Explication simple : Un inode est le 'dossier' du fichier qui stocke ses infos et où vivent ses données.\n2. Explication intermédiaire : Le nom du fichier est dans le répertoire ; le répertoire pointe vers un numéro d'inode. Plusieurs noms peuvent pointer vers le même inode (hard links).\n3. Explication approfondie : Les inodes sont alloués à la création des fichiers ; manquer d'inodes peut empêcher de nouveaux fichiers même si l'espace disque reste. ext4 et similaires utilisent des inodes.",
    example: "ls -i file.txt\nstat file.txt"
  },
  {
    term: "Lien symbolique",
    definition: "Fichier spécial qui pointe vers un autre fichier ou répertoire par chemin (comme un raccourci).",
    levelRange: "2",
    detailedDescription: "Un lien symbolique (symlink) est un fichier contenant un chemin vers un autre fichier. Créé avec ln -s cible nomlien. Contrairement aux hard links, les symlinks peuvent pointer vers des répertoires et à travers les systèmes de fichiers. Si la cible est déplacée ou supprimée, le symlink casse (lien pendu). ls -l affiche la cible. readlink affiche le chemin cible. Les symlinks peuvent être relatifs ou absolus.\n\n1. Explication simple : Un symlink est un raccourci—un fichier qui pointe vers un autre fichier.\n2. Explication intermédiaire : ln -s /path/to/target mylink crée un symlink. Si vous supprimez la cible, le lien casse.\n3. Explication approfondie : Les symlinks ont leur propre inode ; l'inode stocke le chemin cible. Le noyau suit les symlinks pendant la résolution du chemin. Les symlinks circulaires peuvent causer des problèmes.",
    example: "ln -s /usr/bin/python3 py\nln -s ../config/settings.conf ."
  },
];
