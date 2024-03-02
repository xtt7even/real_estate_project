 //function that allows us to wait the data from the db
let sleep = ms => new Promise(r => setTimeout(r, ms));
let waitFor = async function waitFor(func){
    while(!func()) await sleep(1000);
    return func();
};

//simple bubble sort for images, by listing_fk
function imagesSort (images)
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
  
  
async function injectImages (listings, images) 
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


module.exports = {getDataPromise, injectImages};