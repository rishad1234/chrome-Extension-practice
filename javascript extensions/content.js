console.log("extension gogogogo");

let bodyColor = "#9DB9AC";
let h1Color = "#01412c";
let h2Color = "#0f4227";
let h3Color = "#264d3e";
let h4Color = "#115c46";
let h5Color = "#136855";
let h6Color = "#b3cde0";
let liColor = "#ff0052";
let aColor = "#470063";
let headerColor = "#b3cde0";
let pColor = "#29241E";

let body = document.getElementsByTagName("body");
let paragraphs = document.getElementsByTagName("p");
let h1 = document.getElementsByTagName("h1");
let h2 = document.getElementsByTagName("h2");
let h3 = document.getElementsByTagName("h3");
let h4 = document.getElementsByTagName("h4");
let h5 = document.getElementsByTagName("h5");
let h6 = document.getElementsByTagName("h6");
let liElements = document.getElementsByTagName("li");
let a = document.getElementsByTagName("a");
let header = document.getElementsByTagName("header");

addBgColor(body, bodyColor);
addColors(paragraphs, pColor);
addColors(h1, h1Color);
addColors(h2, h2Color);
addColors(h3, h3Color);
addColors(h4, h4Color);
addColors(h5, h5Color);
addColors(liElements, liColor);
addColors(a, aColor);
addColors(header, headerColor);
addBgColor(header, headerColor);

window.onscroll = changes;



function addColors(tag, color){
    for(tagName of tag){
        tagName.style['color'] = color;
        console.log("running");
    }
}

function addBgColor(tag, color){
    for(p of tag){
        p.style['background-color'] = color;
        console.log("running");
    }
}

function changes(){
    addColors(paragraphs, pColor);
    addColors(h1, h1Color);
    addColors(h2, h2Color);
    addColors(h3, h3Color);
    addColors(h4, h4Color);
    addColors(h5, h5Color);
    addColors(liElements, liColor);
    addColors(a, aColor);
    addColors(header, headerColor);
    addBgColor(header, headerColor);
}