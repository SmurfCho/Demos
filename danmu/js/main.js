const danmuArr = new Array();
let i = 0;

(function(){
	const sendBtn = document.querySelector(".send-btn");
	const cleanBtn = document.querySelector(".clean-btn");
	cleanBtn.addEventListener("click",cleanMon,false);
	sendBtn.addEventListener("click",function(){
		let curArr = getDanmu();
		let dmB = danmuBlock(curArr);
		send(dmB,curArr.length);
		i++;
		setTimeout(function(){dmB.style.display = "none";},8000);
	},false);
})();

/*每隔一段时间随机发送数组中的某条弹幕*/
setInterval(randomSend,10000);

/*随机发送数组中的弹幕*/
function randomSend(){
	if(danmuArr.length != 0){
		let n = GetRandomNum(0,danmuArr.length-1);//随机选中要发送的内容序号
		let dmB = danmuBlock(danmuArr[n]);
		send(dmB,danmuArr[n].length);
	    setTimeout(function(){dmB.style.display = "none";},8000);}
}  

/*发射弹幕*/
function send(dmB,len){
	const showBlock = document.querySelector(".danmu-showblock");
	randomtop(dmB);
	dmB.style.color = randomColor();
	showBlock.appendChild(dmB);
	dmB.style.width = dmB.offsetWidth + "px";
}
/*将弹幕存入数组*/
function getDanmu(){
	danmuArr[i] = document.querySelector(".danmu-inp").value;
	return danmuArr[i];
}
/*将弹幕放入div*/
function danmuBlock(item){
	let dmB = document.createElement("div");
	dmB.innerHTML = item;
	dmB.classList.add("danmus");
	return dmB;
}
/*生成一个随机位置*/
function randomtop(node){
	let n = GetRandomNum(0,95);
	node.style.top = n + "%";
}
/*生成一个随机数*/
function GetRandomNum(Min,Max){   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}

/*生成一个随机颜色*/
function randomColor(){
	return  '#' +  
    (function(color){  
    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])   
      && (color.length == 6) ?  color : arguments.callee(color);   
  })("");
}

/*清屏*/
function cleanMon(){
	const block = document.querySelector(".danmu-showblock");
	for(let j = block.childNodes.length-1;j >= 0;j--){
		block.removeChild(block.childNodes[j]);}
	danmuArr.splice(0,danmuArr.length);
	i = 0;
}