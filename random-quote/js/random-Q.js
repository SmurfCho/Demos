var quotes = [['“The best kind of leader: one who creates independence, not dependence.','– Gloria Steinem, Feminist'],
['“I didn’t get there by wishing for it or hoping for it, but by working for it.','– Estée Lauder, Entrepreneur'],
['“Talent wins games, but teamwork and intelligence wins championships.','– Michael Jordan, NBA Player'],
['“The more I want to get something done, the less I call it work.','– Richard Bach, Writer']];//一些备选quotes
var colors = ['#f99','#669','#f66','#9cf','#663'];//一些备选color
var quote = document.querySelector('blockquote');
var aur = document.querySelector('cite');
var newBtn = document.querySelector(".new-btn");
newBtn.addEventListener("click",fill,false);
var retweet = document.querySelector(".retweet");
retweet.addEventListener("click",function(){
	window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote.innerHTML + '" ' + aur.innerHTML,"_blank"));
});
var retum = document.querySelector(".retum");
retum.addEventListener("click",function(){
	window.open("https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+encodeURIComponent(aur.innerHTML)+"&content=" + encodeURIComponent(quote.innerHTML)+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button","_blank");
});
fill();
function fill(){
	var body = document.querySelector("body");
	var button = document.querySelectorAll("button");
	var item = quotes[randomNum(quotes.length)];
	var color = colors[randomNum(colors.length)];
	quote.innerHTML = item[0];
	aur.innerHTML = item[1];
	quote.style.color = color;
	aur.style.color = color;
	body.style.backgroundColor = color;
	button[0].style.backgroundColor = color;
	button[1].style.backgroundColor = color;
	newBtn.style.backgroundColor = color;
}
function randomNum(len){
	return Math.floor(Math.random()*len);	
}