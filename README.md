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

## Adresse du site (URL)

GitHub Pages construit l'adresse à partir du **nom du compte** et du **nom du dépôt** :

| Configuration | Adresse obtenue |
|---|---|
| Actuelle : compte `adebayo-moutalabi`, dépôt `mariane-portfolio.github.io` | `adebayo-moutalabi.github.io/mariane-portfolio.github.io/` |
| Organisation GitHub `marianehounsou` + dépôt `marianehounsou.github.io` | `marianehounsou.github.io` |
| Nom de domaine personnel (ex. `marianehounsou.com`) | `marianehounsou.com` |

Pour une adresse propre sans le nom du compte :

1. **Gratuit** : créer une organisation GitHub (github.com → *Your organizations* → *New organization* → plan Free), par ex. `marianehounsou`.
2. Transférer ce dépôt dans l'organisation (*Settings → General → Transfer ownership*), puis le renommer exactement `marianehounsou.github.io`.
3. *Settings → Pages* → *Deploy from a branch* → branche `main`, dossier `/ (root)`.

Option domaine personnel : acheter le domaine, ajouter un fichier `CNAME` contenant le domaine à la racine, puis le renseigner dans *Settings → Pages → Custom domain*.
