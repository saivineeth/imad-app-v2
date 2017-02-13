var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
arti_name:"article-one",
paragraph:"This is my first article",
head:`article1`
};
var article2 = {
arti_name:'article-two',
paragraph:`This is my second article`,
head:`article2`
};
var article3 = {
arti_name:'article-two',
paragraph:`This is my third article`,
head:`article3`
};

function sende(sudo){
var arti=sudo.arti_name;
console.log(`article name is ${arti}`);
var he=sudo.head;
var para=sudo.paragraph;
var article=`<!DOCTYPE html>
<html>
<head>
<title>Saivineeth | ${arti}</title>
<link href="/ui/style-arti.css" rel="stylesheet">	
</head>
<body>

	<div class="content">
    <h1 class="title">${he}</h1>
	<p> ${para}
	</p>
	</div>
	</body>
</html>`;
    return article;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
 var articleName=req.params.articleName;
 
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
