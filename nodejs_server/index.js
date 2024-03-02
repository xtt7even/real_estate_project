const express = require('express');
const app = express();
const port = 8080;
const fs = require('node:fs');
const mysql = require('mysql');
const { json } = require('express');

app.use('/static', express.static('public'))

var dbConnection = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: 'root',
  database: 'homelty_schema',
  password: 'DbPassword12345!'
});

dbConnection.getConnection(function(err) {
  if (err) console.error(err);
  console.log("MySQL database connected!");
});


function getDataPromise (sql, connection) {
  return new Promise(function (resolve, reject) {
    console.log("Retrieving data from the DB")
    connection.query(sql, (error, result) => {
      if (error) {
        reject (error);
      }
      resolve (result);
    }); 
  });
}

//simple bubble sort for images, by listing_fk
function imagesSort(images)
{
  for (let i = 0; i < images.length - 1 - i; i++) {
    for (let j = 0; j < images.length -1 - i; j++) 
    {
      if (images[j].listing_fk > images[j+1].listing_fk)
      {
        let temp = images[j];
        images[j] = images[j+1];
        images[j+1] = temp;
      }
    } 
  }
  return images;
}

//function that allows us to wait the data from the db
let sleep = ms => new Promise(r => setTimeout(r, ms));
let waitFor = async function waitFor(func){
    while(!func()) await sleep(1000);
    return func();
};

async function injectImages(listings, images) 
{
  if (await waitFor(() => (listings && images))) {

    //sorting images by foreign key - listing_fk (id)
    images = imagesSort(images);

    //initializing photos prop in the listing object
    for (const listing in listings) {
      listings[listing].photos = [];
    }

    for (let image = 0, listing = images[0].listing_fk-1; listing < listings.length, image < images.length; image++) {
      //image - current image in the images array fetched from the database, listing - current listing, also in the fetched data
      //if images array listing id not equals to the current listing => listing++
      if (images[image].listing_fk-1 !== listing) 
      {
        listing++;
      }
      //pushing current image (images[image]) image url into the listings.photos array prop.
      listings[listing].photos.push(images[image].photourl);
    }
    return listings;
  }
}

//Promise for a database data fetch, returns parsed (merged with photos) objects array as a promise
async function fetchData(dbConnection)
{
  let listings = await getDataPromise("SELECT * FROM listings", dbConnection);
  let images = await getDataPromise("SELECT * FROM listing_images", dbConnection)
  return injectImages(listings, images);
} 

app.get('/get_properties', (req, res) => {
    console.log(`\nGet properies request initiated, property id: ${req.query.id ? req.query.id : "whole list"}\nUser ip: ${req.socket.remoteAddress}\n`)
  
    //On resolved fetchData promise we try to parse recieved promise (listings) as JSON and send it as response to the client
    fetchData(dbConnection).then((listings) => {
      try {
        JSON.parse(JSON.stringify(listings));
        let jsonListings = [];
        listings.forEach((listing => {
          jsonListings.push(listing);
        }));
        res.status(200).send(jsonListings);
      } 
      catch (error) {
        res.status(404).send(`An error occured while working on a request:\n ${error}\n(not ok.)`);
      }  
    });
});
  
app.listen(port, () => {
  console.log(`Homelty API is listening on port ${port}`);
});

