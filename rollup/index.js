import "./index.css";
import JS_IMAGE from "./assets/javaS.png";

const headline = document.createElement("h1");
headline.textContent = "I love JavaScript";

const jsImageHTML = document.createElement("img");
jsImageHTML.src = JS_IMAGE;

document.body.append(headline, jsImageHTML);

console.log("Hello World!");
