const { createServer } = require('node:http');
const fs = require("node:fs");

const indexPage = fs.readFileSync('./index.html', 'utf-8', (err) => {
    if (err)
        console.error(err);
});

const contactPage = fs.readFileSync('./contact-me.html', 'utf-8', err => {
    if (err) {
        console.error(err)
    }
})
const aboutPage = fs.readFileSync('./about.html', 'utf-8', err => {
    if (err) {
        console.error(err)
    }
})

const notfoundPage = fs.readFileSync('./404.html', 'utf-8', err => {
    if (err) {
        console.error(err)
    }
})

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(indexPage);
    } else if (req.url === '/contact-me') {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(contactPage);
    } else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(aboutPage);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(notfoundPage);
    }
})

server.listen(8080, '127.0.0.1');