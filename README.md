# Mariane Inès Norma Hounsou — site vitrine

Site personnel statique (HTML / CSS / JS, sans dépendance) présentant le profil, le parcours, les compétences, les formations, les certifications et les projets de Mariane Hounsou.

- **Bilingue FR / EN** : bouton en haut à droite (langue du navigateur détectée par défaut). Le français est dans `index.html`, l'anglais dans le dictionnaire `EN` de `assets/js/main.js`.
- **Palette** : rouge vin `#69001c`, or clair `#ffd58c`, bruns.
- **Effets** : réseau animé dans le hero, texte qui s'illumine au scroll, parcours en défilement horizontal épinglé, grille « bento » avec halo au survol, bandeau défilant, cartes de formation empilées, anneaux de progression des certifications, boutons magnétiques. Respecte `prefers-reduced-motion`.

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Publier avec GitHub Pages

Settings → Pages → *Deploy from a branch* → choisir la branche et le dossier `/ (root)`.

## Modifier le contenu

| Section | Où |
|---|---|
| Textes FR | `index.html` (attributs `data-i18n`) |
| Textes EN | `assets/js/main.js` → objet `EN` |
| Mots du titre animé | `assets/js/main.js` → `ROLES` |
| Couleurs | `assets/css/style.css` → `:root` |
