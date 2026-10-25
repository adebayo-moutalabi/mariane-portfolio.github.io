# Mariane Inès Norma Hounsou — site vitrine

Site personnel statique (HTML / CSS / JS, sans dépendance) qui raconte le parcours de Mariane Hounsou en chapitres.

- `/` : design **v2 « Chapitres »** (actuel)
- `/v1/` : premier design, conservé pour comparaison (supprimer le dossier `v1/` pour le retirer)

## Les chapitres (v2)

| # | Section | Interaction |
|---|---|---|
| Prologue | Présentation | Écran de démarrage, badge 3D qui s'incline et se retourne au clic |
| Manifeste | Phrase d'accroche | Les mots s'illuminent au défilement |
| 01 Origines | Cotonou → Wilmington | Carte : l'arc se trace au défilement, les étapes s'activent |
| 02 Terrain | Expériences | Sélecteur segmenté façon Apple + simulateur de tickets à résoudre |
| 03 Projets | Réalisations | Cartes qui s'agrandissent en fiche détaillée (besoin / action / résultat) |
| 04 Compétences | Techniques (6 domaines) | Filtres + cartes qui se retournent |
| 05 Humain | Soft skills | Cartes qui se retournent : « mon approche » |
| 06 Formations | Diplômes & formations | Carrousel à faire glisser |
| 07 La suite | Certifications & objectifs | Anneaux de progression cliquables |
| Épilogue | Contact | Composeur de message → ouvre la messagerie |

En-tête : une « île » flottante façon Dynamic Island (logo animé, chapitre en cours, anneau de progression) qui ouvre un menu plein écran avec révélation circulaire.

Logo : « MH » dessiné comme un réseau — le M et le H partagent un même câble, le nœud doré est le hub (`assets/favicon.svg`).

Partout : étincelles au clic, curseur personnalisé, bascule FR / EN, et un **terminal caché** (bouton `›_` ou touche `` ` ``, tapez `help`).

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Modifier le contenu

| Quoi | Où |
|---|---|
| Textes FR fixes | `index.html` (attributs `data-i18n`) |
| Textes EN fixes | `assets/js/main.js` → objet `EN` |
| Expériences, tickets, projets, compétences, soft skills, objectifs | `assets/js/main.js` → `XP`, `TICKETS`, `PROJECTS`, `SKILLS`, `SOFT`, `GOALS` |
| Couleurs | `assets/css/style.css` → `:root` |
| Photo | `assets/img/mariane.jpg` (carré, 640 px) |
| Chapitres du menu | `assets/js/main.js` → `CHAPTERS` |

## Adresse du site (URL)

Le dépôt appartient à l'organisation `mariane-portfolio` et s'appelle `mariane-portfolio.github.io`.
Le site est donc publié à l'adresse **https://mariane-portfolio.github.io**.

Pour activer la publication : *Settings → Pages → Deploy from a branch*, choisir la branche `main` et le dossier `/ (root)`.

Option domaine personnel : acheter le domaine (ex. `marianehounsou.com`), ajouter un fichier `CNAME` contenant ce domaine à la racine, puis le renseigner dans *Settings → Pages → Custom domain*.
