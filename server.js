const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.static('public'))
const { resources } = require("./resources.js") ; 

// set the ejs after installing it basically telling Express we are using ejs as a template angine
app.set("view engine", "ejs");


console.log(resources[0].name)
app.get("/", (req, res) => {
    if (resources) {
        res.render("index.ejs", { resources });
    } else {
        res.status (500).json ({
            error : 'Resources were not able to be loaded from resources.js' 
        })
    }
});

app.get("/api", (req, res) => {
  res.json(resources);
  console.log(resources.length)
});

app.get("/api/:keyword", (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  let searchedElement = [];
  resources.forEach((resource) => {
    if (resource.keywords.map((element)=>element.toLowerCase()).includes(keyword)) searchedElement.push(resource);
  });
  
  searchedElement.length
    ? res.json(searchedElement)
    : res.json("No Element matched the searched keyword");
});

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
