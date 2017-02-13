var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
name:"article-one",
paragraph:"This is my first article",
head:`article1`
};
var article2 = {
name:'article-two',
paragraph:`This is my second article`,
head:`article2`
};
var article3 = {
name:'article-three',
paragraph:`This is my third article`,
head:`article3`
};

function sende(aname){
var arti = aname.name;

var he = aname.head;
var para = aname.paragraph;
var articleTemp=`<!DOCTYPE html>
<html>
<head>
<title>Saivineeth | ${aname.name}</title>
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
