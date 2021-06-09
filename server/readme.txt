// ------------1------------------------------------------
How to prepare a DB file
1- All database should be in one file.
2- All data should be in json file format
3- All the data is stored in one object in json file. In the object each collection is an array of objects.
4- Each collection(array of objects) is an object that must have an id field.
5- All array names should in lowercase and plural.
6- Each object in an array has an id property and its value should be unique.
7- To refer an object from one array of objects into another array of objects, use signular array name with Id in camelcase

Convert JS array of objects to json format

code:
const data = JSON.stringify(categories);
fs.writeFile(path: `${__dirname}/db2.json`, content: data, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("data is written successfully!");
});

online tool:
https://www.convertonline.io/convert/js-to-json

// -------------------------2------------------------------
JSON Server
1- create a folder and copy db.json file in this folder
2- create a public folder and copy all images here
3- Create a node project (npm init -y)
4- install json-server (npm i json-server)
5- run server (json-server --watch --port 3001 db.json)
note: you can also give server start command in scripts in package.json file. 
("start": "json-server --watch --port 3001 db.json")

// ---------------------------3-------------------------------------
Server Routes

1- All array names are plorul routes that will return array of objects
2- Each object id in an array is a singular route

// ------------------------------------------------------------------

Relationships

To include children resources, add \?_embed

GET /products?\?_embed=reviews
GET /products/1?\?_embed=reviews

To include parent resource, add \?_expand

GET /reviews?_expand=product
GET /reviews/1?_expand=product

To get or create nested resources

GET  /products/1/reviews
POST /products/1/reviews

