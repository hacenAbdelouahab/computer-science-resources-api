// grab different elements
let inputButton = document.querySelector("input");
let searchButton = document.querySelector("button");
let all = document.querySelector(".all-resources");
let resetButoon = document.querySelector(".reset");
let dataToDisplay = document.querySelector(".data-to-display");
let apiSection = document.querySelector(".apis .container");

// Plotting the right resource in the Resources section
inputButton.addEventListener("keydown", async function (event) {
  try {
    if (event.keyCode === 13) {
      if (inputButton.value) {
        const response = await fetch(`/api/${inputButton.value}`);
        const data = await response.json();
        console.log("Download complete", data);
        apiSection.innerHTML = "";

        if (true) {
          data.forEach((element) => {
            let box = document.createElement("div");
            box.classList.add("box");
            let image = document.createElement("div");
            image.classList.add("image");
            let img = document.createElement("img");
            img.src = element.img;
            image.appendChild(img);
            let ul = document.createElement("ul");
            let nameLi = document.createElement("li");
            let nameText = document.createTextNode(element.name);
            nameLi.classList.add("name");
            nameLi.appendChild(nameText);
            let descriptionLi = document.createElement("li");
            let descriptionText = document.createTextNode(element.description);
            descriptionLi.classList.add("description");
            descriptionLi.appendChild(descriptionText);
            let keywordsLi = document.createElement("li");
            element.keywords.forEach((keyword) => {
              let span = document.createElement("span");
              let spanText = document.createTextNode(keyword);
              span.classList.add("keyword");
              span.appendChild(spanText);
              keywordsLi.appendChild(span);
            });
            let urlLi = document.createElement("li");
            urlLi.classList.add("url");
            let link = document.createElement("a");
            link.target = "_blank";
            link.href = element.url;
            let linkText = document.createTextNode('Explore')
            link.appendChild(linkText)
            urlLi.appendChild(link);
            ul.append(nameLi, descriptionLi, keywordsLi, urlLi);
            box.append(image, ul);
            apiSection.appendChild(box);

          });
        }
      }
      inputButton.value = "";
    }
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
});
