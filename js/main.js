

// Start Header
let headerDiv = document.createElement("div");
headerDiv.className = "header";
let logoDiv = document.createElement("div");
logoDiv.className = "logo";

let linksUl = document.createElement("ul");
linksUl.className = "links";

let homeLi = document.createElement("li");
let aboutLi = document.createElement("li");
let serviceLi = document.createElement("li");
let contactLi = document.createElement("li");

let homeText = document.createTextNode("Home");
let aboutText = document.createTextNode("About");
let serviceText = document.createTextNode("Service");
let contactText = document.createTextNode("Contact");

let logoText = document.createTextNode("ELAYEK");
logoDiv.appendChild(logoText);

homeLi.appendChild(homeText);
aboutLi.appendChild(aboutText);
serviceLi.appendChild(serviceText);
contactLi.appendChild(contactText);

linksUl.appendChild(homeLi);
linksUl.appendChild(aboutLi);
linksUl.appendChild(serviceLi);
linksUl.appendChild(contactLi);

headerDiv.appendChild(logoDiv);
headerDiv.appendChild(linksUl);

let script = document.querySelector("script");
script.before(headerDiv);

//Header Styling
// document.body.childNodes.style.cssText = "box-sizing:border-box;margin:0px;padding:0px"
document.body.style.cssText = "background-color:#DDD;font-family:'arial'; padding:0px; margin:0px;";
headerDiv.style.cssText = "padding:5px 20px; background-color:#FFF; display:flex; flex-flow:row wrap; align-items:center; justify-content: space-between"
linksUl.style.cssText = "list-style:none; display:flex; padding:0px"
document.querySelectorAll(".links li").forEach(a => a.style.cssText = "padding-left:20px");
logoDiv.style.cssText = "font-weight: 900; font-size:1.5rem; color:#00d082"
//End Header Styling

//End Header


// Start Content
let numberOfProducts = 15;
let contentDiv = document.createElement("div");
contentDiv.className = "content";
for (let i = 0; i < numberOfProducts; i++) {
    let productDiv = document.createElement("div");

    let productNumber = document.createElement("span");
    productNumber.appendChild(document.createTextNode(`${i + 1}`));

    let productText = document.createTextNode("product");
    productDiv.className = "product";

    productDiv.appendChild(productNumber);
    productDiv.appendChild(productText);

    contentDiv.appendChild(productDiv);
}

script.before(contentDiv);

// Start Content Styling
contentDiv.style.cssText = "margin:5px; display:flex; flex-flow:row wrap; justify-content: space-around;";
document.querySelectorAll(".content .product").forEach(a => a.style.cssText = `width:calc(100% / 3 - 10px); 
                            background-color: #FFF; box-sizing: border-box; padding: 20px; margin:5px 0; text-align:center`);
document.querySelectorAll(".product span").forEach(function (a) {
    a.style.cssText = `display:block; font-size:1.5rem; font-weight:bold;`;
});

// End Content Styling

//End Content


// Start Footer

let footer = document.createElement("footer");
let insideFooterDiv = document.createElement("div");
let footerText = document.createTextNode("CopyRight Jan 2023");

footer.className = "footer";

insideFooterDiv.appendChild(footerText);
footer.appendChild(insideFooterDiv);


script.before(footer);

// Start Footer Styling

footer.style.cssText = `background-color:#00d082; color:#FFF; padding:20px 0px; text-align:center; font-weight:700; font-size:1.2rem`;

// End Footer Styling

// End Footer