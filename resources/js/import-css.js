let stylesLink = document.createElement("link");

stylesLink.href = "./css/app.css?v=13";
stylesLink.type = "text/css";
stylesLink.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(stylesLink);



let fontsLink = document.createElement("link");

fontsLink.href = "./fonts.css?v=10";
fontsLink.type = "text/css";
fontsLink.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(fontsLink);

