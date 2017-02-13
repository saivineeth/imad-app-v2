var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
x:"article-one",
y:"This is my first article",
z:`article1`
};
var article2 = {
x:'article-two',
y:`This is my second article`,
z:`article2`
};
var article3 = {
x:'article-three',
y:`This is my third article`,
z:`article3`
};

function sende(name="aname"){
var arti = name.x;
var he = name.y;
var para = name.z;
var articleTemp=`<!DOCTYPE html>
<html>
<head>
<title>Saivineeth | ${arti}</title>
<link href="/ui/style-arti.css" rel="stylesheet">	
</head>
<body>

	<div class="content">
    <h1 class="title">${aname.head}</h1>
	<p> ${aname.paragraph}
	</p>
	</div>
	</body>
</html>`;
    return articleTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
 var articleName=req.params.articleName;
console.log(`article name is ${articleName}`); 
  res.send(sende(articleName));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/style-arti.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style-arti.css'));
});

app.get('/ui/a.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'a.jpg'));
});
app.get('/ui/b.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'b.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
