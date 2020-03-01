# Greenleaf

## Contributeur

- Julian Romana
- Jacky Shao

## Prérequis

- Avoir installer et lancer le [back-office](https://github.com/JulianRomana/api-fil-rouge)
- Copier le ficher `.env.example` en le nommant `.env` puis le remplir avec les différentes variables

| Variable               | Description                                      | Par défaut                                                                                      |
| ---------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `REACT_APP_API_URL`    | URL du back-office                               | `http://127.0.0.1:8000`                                                                         |
| `REACT_APP_MAPBOX_API` | TOKEN de l'api [Mapbox](https://www.mapbox.com/) | `pk.eyJ1IjoiY2lnYWRvbDY0NyIsImEiOiJjazZqMzFzZ2gwNWI3M2dwNWUzbHE4bTFpIn0.vNw1hzvuYIyJytcPmnWSQA` |

## Développement

```sh
# Installer les dépendances
yarn

# Lancer en mode production
yarn build

# Lancer en mode développement
yarn start

# Lancer eslint
yarn lint
```

## Technologie

- [React](https://reactjs.org/s)

## Bibliothèques utilisées

- [Mapbox](https://www.mapbox.com/)

  Nous utilisons `Mapbox` afin d'afficher les différentes maps qui sont disponibles à travers notre application mais il existe d'autre alternative comme `Google Maps`, ou bien `Leaflet` (utilisant Mapbox), etc...

  Google Maps ne serait approprié dans ce genre de projet dans laquelle nous effectuer pas mal de requête avec le rafraîchissement dynamique de React lors de notre développement, puisque les requêtes de google map qui sont assez couteux comparer avec Mapbox.

  Mapbox propose dans son ensemble tout ce que permet google map, l'affiche de marker customisé, cluster ou bien que le style de la map (night mode par exemple)

- [D3JS](https://d3js.org/)

  Avec D3js, nous avons pu afficher tout type de data viz tel que des `Donuts` ou bien des `Graphiques`

  Avant d'utiliser D3JS nous somme passés par [Chart.js](https://www.chartjs.org/) qui était à la base ce qui a été le plus approprié pour afficher nous différente data mais sur le plan développement, nous avions rencontrés différents problèmes telles que le fait que Chart.js affiche des canvas avec des tailles qui ne sont pas trop possible de changer et que le rendu soit pixelisée sur les interfaces mobile

  À l'inverse, D3JS nous a permis de faire ce que Chartjs n'était pas en mesure de produire, les rendus sont faits en SVG donc beaucoup plus rapide, léger au niveau des performances et modulables

## Style guide

- [Husky](https://github.com/typicode/husky)

  Un git hook qui sera lancé avant un `commit` ainsi qu'un `push`, avec `yarn lint` avant chaque processus, meilleur moyen de contrôle les erreurs due au code

- [Prettier](https://prettier.io/)

  Puisque nous sommes plusieurs développeurs à travailler ensemble ou bien seul, il nous faut forcément un pattern commun qui se trouve dans `.prettierrc`

- [Eslint](https://eslint.org/)

Nous renforçons notre `code quality` avec des règles définies dans `.eslintrc` couplé avec ceux de `prettier`, ce qui nous permet de produire du code propre sans qu'on soit à faire de review dessus

- [Commit convention](https://www.conventionalcommits.org/fr/)

  Ceci nous permet d'avoir des commis propres et clairs, pour que les autres développeurs travaillant sur le projet comprenant à quoi sert un commirent et ainsi évite ce genre de chose :

![Bad commit](https://imgs.xkcd.com/comics/git_commit_2x.png)
