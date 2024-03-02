const express = require('express');
const app = express();
const port = 8080;
const fs = require('node:fs');
const mysql = require('mysql');
const { json } = require('express');

const {getDataPromise, injectImages} = require('./libs/listingsHandler.js')

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
        res.status(200).send(listings);
      } 
      catch (error) {
        res.status(404).send(`An error occured while working on a request:\n ${error}\n(not ok.)`);
      }  
    });
});
  
app.listen(port, () => {
  console.log(`Homelty API is listening on port ${port}`);
});

