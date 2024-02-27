const express = require('express');
const app = express();
const port = 8080;
const fs = require('node:fs');

// const propertyTool = require('./project_libs/properties_parser');

app.get('/helloworld', (req, res) => {
  res.status(200).send('Hello World!'.json());
});

app.get('/get_properties', (req, res) => {
    console.log("get properies request initiated")
    try {
      const properties = JSON.parse(fs.readFileSync('./temp_jsondata/properties_temp.json', 'utf8'));
      //if request contains an id param, responding with a specific property, otherwise the whole list
      req.query.id ? res.status(200).send(properties[req.query.id]) : res.status(200).send(properties); 
    } 
    catch (error) {
        res.status(404).send(`An error occured while sending a request:\n ${error}`);
    }  
});

app.listen(port, () => {
  console.log(`Homelty API is listening on port ${port}`);
});