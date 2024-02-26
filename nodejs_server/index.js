const express = require('express')
const app = express()
const port = 3000
const fs = require('node:fs');

app.use(express.json())

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!');
})

app.get('/get_properties', (req, res) => {
  
    try {
      const properties = fs.readFileSync('./temp_jsondata/properties_temp.json', 'utf8');
      res.status(200).send(
        properties
      );
    } catch (error) {
      res.status(404).send("File not found");
    }  
})

app.listen(port, () => {
  console.log(`Homelty API is listening on port ${port}`);
})