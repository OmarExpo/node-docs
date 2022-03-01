const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const techandtools = fs.readFileSync("./public/pages/techandtools/techandtools.html").toString(); 
const commandandsnippets = fs.readFileSync("./public/pages/commandandsnippets/commandandsnippets.html").toString(); 


const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to NodeJS Documentation") + frontpage + footer;
const techandtoolsPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the Technology and Tools") + techandtools + footer;
const commandandsnippetsPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the Commands and Snippets") + commandandsnippets + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/techandtools", (req, res) => {
    res.send(techandtoolsPage)
});

app.get("/commandandsnippets", (req, res) => {
    res.send(commandandsnippetsPage)
});

const host = '0.0.0.0';
let port = process.env.PORT || 3000;
//const port = 3000;

app.listen(port,host, () => console.log("Server has started successfully!!", port));