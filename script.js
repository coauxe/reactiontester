function getRandomColor(){
		var letters = "123456789ABCDEF".split("");
		var color = "#";
		for (var i=0; i<6; i++){
			color += letters[Math.round(Math.random()*15)];
		}
		return color;
	}

	var clickedTime; var createdTime; var reactionTime;


	function makeBox(){

		var time=Math.random()*5000;
		//Timing function in javascript. measured in milliseconds so this would be 3 seconds.//
		
		if (Math.random()>0.5){
			document.getElementById("box").style.borderRadius="100px";
		} else {
			document.getElementById("box").style.borderRadius="0px";
		}

		var widthheight = (Math.random()*150)+50;
		var top = Math.random()*200;
		var left = Math.random()*80;


		document.getElementById("box").style.top=top+"px";
		document.getElementById("box").style.left=left+"%";
		document.getElementById("box").style.width=widthheight+"px";
		document.getElementById("box").style.height=widthheight+"px";



		setTimeout(function() {
		//this makes it so the box will appear in 3 seconds since the css for the box is set to none.//

		document.getElementById("box").style.backgroundColor=getRandomColor();
		document.getElementById("box").style.borderColor=getRandomColor();
		document.getElementById("box").style.display="block";
		//createdTime is logged at the time the shape becomes visible as opposed to when the function makeBox() is called//
		createdTime=Date.now();
		}, time);
	}


		document.getElementById("box").onclick=function(){

			clickedTime=Date.now();

			reactionTime=(clickedTime-createdTime)/1000;

			document.getElementById("time").innerHTML=reactionTime+" seconds!";
			// this refers to the thing you are talking bout at a specific instance//
			//when clicked, it makes the box disappear//
			this.style.display="none";
			makeBox();
		};

	makeBox();
