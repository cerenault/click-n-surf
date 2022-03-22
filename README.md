# <center>Click-N-Surf Project : LP Dev Cloud</center>

Technology Stack : Docker, MongoDB, Python FastApi, React JS

## 1. Project description :

The objective of this project is to give some informations about french surf spots for people interessed to discover surf and their different playing fields. As a little guide, the website can informe the beginner who wants to discover this practice by french spots positions and helps the surfers to expend their activities beyond their usual places.

## Organisation and skills developed :

### - First part :

#### Research data and initialize the database

The first part of the project is to find pertinent informations of different french spots and constitute a database. There is no pertinent api for that so i decided to scrap data from a website (with beautifulSoup). This allowed me to collect some informations about more hundred spots in metropolitan France and Dom-Tom.

After that I create de MongoDB and a database from the [_dataset_surf_spots.csv_](https://github.com/cerenault/click-n-surf/blob/main/dataset_surf_spots.csv) file.

#### Create the stack

I decide to dockerize all services in a docker-compose. For the beginning I used existants images for create a docker-compose with MongoDB and FastApi.

- The Api development : Based on Python FastApi, I connected the database to the Api with [_PyMongo_](https://pymongo.readthedocs.io/en/stable/) and I create different endpoints :

  - List of all spots in db
  - List all spots from a specific region
  - Return informations about one spot
  - Add a new spot
  - Delete a spot

I develop some test with Pytest for check the result of the different functions and endpoints.

#### Skills :

| Skills                                                       |                                                                                                                                     Associated Knowledge |
| :----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Create a stack from scratch                                  |                                                                                                                 Identify needs for the project objective |
| Collect data and create a database                           |                                                                                                           Search pertinent data and sorting informations |
| Api implementation and database relation                     |                                 Understand the mechanism and the relation from db to api. Read the doc, research of examples and fit them to the project |
| Test implementation                                          |                                     Identify the pertinent parts of code who need to be test. Fully understand the features tested and their mechanisms. |
| Orchestration and management of services in a docker-compose |                                    Identify the structure of the project and the links of the differents services. Organize volumes for the data stored. |
| Front implementation and relation with the Api               |   Identify the external services we need (packages, dependances), understand the mechanism between api and front-end. Consider the target of the product |
| Project management                                           | Evaluate the complexity of tasks by considering time project. Evaluate time for every task to do. Identify and define the process of task implementation |

### - Second part :

#### Front-end implementation :

Technology used : React JS.

The second part concern the front-end implementation. I decide to work with react. The objective was to realise a simplist website. Before implementation I did a model of the website with [_Figma_](https://www.figma.com/file/bMzeamWIQONacQELLGowFi/CLICK-N-SURF?node-id=0%3A1).
I integrated a opensource map with the Api [_Mapbox_](https://www.mapbox.com/) to display a France map and show the different spots.
And next to the map I display a list of clickable items of the different spots.
This part is not completed (the map can't display the spot and the items of the list are not redirected).

## 2. Product :

This project is for two target .

- One the one hand for summer tourists, beginner and curious. People near the surf spots but who don't know about surfing. This people can get informations about recognized places where they can do surf and who generaly surf school are implented.

- And on the other hand occasional surfer or confirmed who wants to discover new regions through their favorite practice or discover the french surf spots wealth.

| Target Group | Besoin | Produit | Obectif metier |
| :----------- | :----: | :-----: | -------------: |
| ?            |   ?    |    ?    |              ? |

## 3. Organisation (Kanban)

For the organisation I chosed to work with _Trello_ tool.

(https://trello.com/b/GYy1yz9A/click-n-surf)

## 4. Future : To Do

Extends datas for spots :

- add a little description of a spot,
- accessibility (road, bike, on foot),
- popularity (participation rate, tourist attendance),
- floor (sand, reef),
- level accessibility (from beginner to advanced)

Improve api :

- Find the nearest spot from a position (gps coordinates)
- Select spot from level accessibility

Improve Front :

- Place de spot in a map
- Select one spot and show informations about it
- Sort the spots from regions/level...
- Show the nearest spot in a map
- Improve responsive and accessibility.
