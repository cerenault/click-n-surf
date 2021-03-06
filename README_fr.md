# <center>Click-N-Surf : Projet tutoré LP Dev Cloud</center>

Stack technique : Docker, MongoDB, Python FastApi, ReactJS

## 1. Description du projet :

L'objectif de ce projet et de fournir à des utilisateurs intéréssés par le surf de découvrir les lieux de pratique et les différents spots français. Petit guide de découverte il permettra au débutant souhaitant s'initier à cette pratique de trouver les spots proches de chez eux où du lieu de vacances. Il permettra aussi aux initiés de découvrir des lieux de pratique en dehors de leur lieu habituel de pratique.

## Organisation du projet et compétences mises en oeuvre :

### Première partie du projet :

- Recherche des données : La première partie du projet va consister à trouver et récupérer des infos sur les différents spots de surf français. Deux Possibilités vont émmérger de cela. Si des api existe, il suffira juste de se connecter à l'interface et récupérer les données interessantes. Seconde option, trouver des sites web référençants des données et utiliser une bibliothèque de scrapping pour collecter les infos voulues.

- Développement d'une api : Basée sur FastApi la première partie du projet sera de mettre en place une api mettant à disposition 2 routes prinipales à minima. Une première permettant de récupérer la listes des noms de l'ensemble des spots français ainsi que sa position géographique (latitude/longitude). La deuxième route permettant de récupérer un ensemble d'information concernant un spot en particulier.
  Compétences mises en oeuvre :

| Compétences                                 |              Savoir associé |
| :------------------------------------------ | --------------------------: |
| Développement d'une api Python (fastApi)    |         Conduite de projet  |
| Développement d'une interface front (react) | Gestion du stock : -backlog |

### Seconde partie du projet :

Développement d'une partie front :
Compétences mises en oeuvre : React/Redux
La deuxième partie du projet consiste à mettre en place une partie front, développer en react reprenant tous les spots sur une carte de France afin de visualiser les spots dans sur les différentes régions françaises. Et suivant l'avanceement pouvoir cliquer sur un spot en particulier afin d'en avoir des informations plus précises.

## 2. Produit :

La cible de cette application web est double.

- D'un côté les vacanciers et novices. Des personnes en vacances proche des lieux de pratique de surf souhaitant s'initier à la pratique et qui pourra s'orienter facilement vers un endroit reconnu ou des écoles sont généralement implantées.
- D'un autre côté les pratiquants occasionnels ou expérimentés qui souhaiteraient découvrir de nouvelles régions à travers leur pratique favorite. Ou des surfeurs souhaitant découvrir la richesse des spots français.

| Target Group | Besoin | Produit | Obectif metier |
| :----------- | :----: | :-----: | -------------: |
| ?            |   ?    |    ?    |              ? |

## 3. Organisation (Kanban)

Pour la partie gestion du projet, Agile, j'ai choisi de travailler avec un Kanban avec l'outil en ligne _Trello_.

(https://trello.com/b/GYy1yz9A/click-n-surf)

## 4. Améliorations possibles :

Etendre la donnée de chaque spot :

- Ajout d'une déscription succinte du spot,
- Préciser l'accessibilité (voiture, parking à proximité, vélo ou marche),
- Sa popularité (spot fréquenté, frequentation uniquement estivale),
- Fond (sable, récif),
- Niveau de pratique (débutant, intermédiaire, confirmé)

Amélioration de partie API :

- Trouver et retourner le spot le plus proche depuis une position gps,
- Selectionner un spot en fonction de son niveau d'accessibilité

Amélioration de la partie Front (React) :

- Possibilité de placer les différents spots sur une carte
- Selectionner un spot et en afficher ses caractéristiques (position, déscription...)
- Trier les spots par regions, niveaux...
- Fonctionnalité "trouver le spot le plus proche"
- Améliorer le côté responsive et l'accessibilité.
