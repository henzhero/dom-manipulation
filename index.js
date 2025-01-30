let p = document.createElement("p");
p.textContent = "Hey, I'm red!";
p.style.color = "red";

document.body.appendChild(p);

let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";

document.body.appendChild(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent= "I'm in a div";
let para = document.createElement("p");
para.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(para);

document.body.appendChild(div);

