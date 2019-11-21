let date = new Date();
let time = date.getTime();

let stylesLink = document.createElement("link");

stylesLink.href = "./css/app.css?v=" + time;
stylesLink.type = "text/css";
stylesLink.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(stylesLink);



let fontsLink = document.createElement("link");

fontsLink.href = "./fonts.css";
fontsLink.type = "text/css";
fontsLink.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(fontsLink);

