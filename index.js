const express = require('express');
const app = express();
const mysql = require('mysql');

// |date|title|content|
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'BlogTest'
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/', (request, response) => {
  connection.query('SELECT * FROM blog', function (error, results, fields) {
    if (error) throw error;
    response.send(
      (() => {
        let res = "";
        for (let item of results) {
          res += `<div>` +
            `<u><h1>■ ${item.title}</h1></u>` +
            `<u><h5>投稿日時：${item.date}</h5></u>` +
            `<div>${item.content}</div>` +
            `</div>`;
        }
        return res;
      })()
    );
  });
});