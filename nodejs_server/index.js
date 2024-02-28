const express = require('express');
const app = express();
const port = 8080;
const fs = require('node:fs'
);
const mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: 'root',
  database: 'homelty_schema',
  password: 'DbPassword12345!'
});

con.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
});

// const propertyTool = require('./project_libs/properties_parser');

app.get('/helloworld', (req, res) => {
  res.status(200).send('Hello World!'.json());
});

async function postListings(properties)
{
  const listingInsertSQL = "INSERT INTO listings (price, numOfBedrooms, numOfBathrooms, location, listingType, listingDescription, listingCondition, area) VALUES ?";
    const imagesInsertSQL = "INSERT INTO listing_images (photourl, listing_fk) VALUES (?)"
    const values = [];

    for (const pair in urlsAndIds) {
      values.push(
          [
            properties[property].price,
            properties[property].numOfBedrooms,
            properties[property].numOfBathrooms,
            properties[property].location,
            properties[property].propertyType,
            properties[property].description,
            properties[property].condition,
            properties[property].area
          ]
      );
    }
}

app.get('/get_properties', (req, res) => {
    console.log(`\nGet properies request initiated, property id: ${req.query.id ? req.query.id : "whole list"}\nUser ip: ${req.socket.remoteAddress}\n`)
    const properties = JSON.parse(fs.readFileSync('./temp_jsondata/properties_temp.json', 'utf8'));
  
    try {
      // con.query(listingInsertSQL, [values], function (err) {
      //   if (err) throw err;
      //   con.end();
      // });

 
      //if request contains an id param, responding with a specific property, otherwise the whole list
      req.query.id ? res.status(200).send(properties[req.query.id]) : res.status(200).send(properties); 
    } 
    catch (error) {
        res.status(404).send(`An error occured while working on a request:\n ${error}`);
    }  

    con.end();
});

app.get('/images/listings', (req, res) => {
  console.log(`\nGet listing images request initiated, property id: ${req.query.id ? req.query.id : "whole list"}\nUser ip: ${req.socket.remoteAddress}\n`)
  try {
      res.status(200).sendFile(`/images/listings_photos/${req.query.imagepath}`, { root: __dirname })
  } 
  catch (error) {
      res.status(404).send(`An error occured while working on a request:\n ${error}`);
  }  
});

app.listen(port, () => {
  console.log(`Homelty API is listening on port ${port}`);
});

