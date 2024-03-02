const express = require('express');
const app = express();
const port = 8080;
const fs = require('node:fs');
const mysql = require('mysql');

app.use('/static', express.static('public'))

var dbConnection = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: 'root',
  database: 'homelty_schema',
  password: 'DbPassword12345!'
});

dbConnection.getConnection(function(err) {
  if (err) throw err;
    console.log("Connected!");
});

// import * as propFetcher from './project_libs/propertiesFetcher.js';

function getDataPromise (sql, connection) {
  return new Promise(function (resolve, reject) {
    console.log("Retrieving some data from the DB")
    connection.query(sql, (error, result) => {
      if (error) {
        console.log(error);
        reject (error);
      }
      resolve (result);
    }); 
  });
}


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

let sleep = ms => new Promise(r => setTimeout(r, ms));
let waitFor = async function waitFor(func){
    while(!func()) await sleep(1000);
    return func();
};

async function injectImages(listings, images) 
{
  if (await waitFor(() => (listings && images))) {
    images = imagesSort(images);
    console.log("Images sorted");
    console.log(listings.length)
    for (const listing in listings) {
      listings[listing].images = [];
      console.log("Initializing images array in the listing params")
    }
    for (let image = 0, listing = images[0].listing_fk-1; listing < listings.length, image < images.length; image++) {
      console.log(images[image].listing_fk-1, listing, images[listing].listing_fk)
      if (images[image].listing_fk-1 !== listing) listing++;
      listings[listing].images.push(images[image].photourl);
      console.log("Some magic with.. IDK WTF IS THIS, BUT IF YOU READ THIS IT SHOULD BE OK")
    }
    return listings;
  }
}

app.get('/get_properties', (req, res) => {
    console.log(`\nGet properies request initiated, property id: ${req.query.id ? req.query.id : "whole list"}\nUser ip: ${req.socket.remoteAddress}\n`)
    // const properties = JSON.parse(fs.readFileSync('./temp_jsondata/properties_temp.json', 'utf8'));
  
    let listings = []; 
    let images = [];

    getDataPromise("SELECT * FROM listings", dbConnection)
    .then(
      function (result) {
        listings = result;
        return getDataPromise("SELECT * FROM listing_images", dbConnection)
      }
    )
    .then (
      function (result) {
        images = result;
        // console.log(listings.length)
        return injectImages(listings, images);
      }
    )
    .then ((listings) => {
        try {
          console.log(listings)
          res.status(200).send(listings);
        } 
        catch (error) {
          res.status(404).send(`An error occured while working on a request:\n ${error}\n(not ok.)`);
        }  
      }
    )
    

});
  
app.listen(port, () => {
  console.log(`Homelty API is listening on port ${port}`);
});

