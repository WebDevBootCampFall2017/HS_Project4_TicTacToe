	var count = 0;
	var XScore = 0;
	var OScore = 0;
	var winner = false;
	var mark, nxt;

	function toggle(tagId){
		if (winner == true){
			return;
		}else if(document.getElementById(tagId).innerHTML=="X" || document.getElementById(tagId).innerHTML =="O"){
			document.getElementById("alert").innerHTML=" Invalid Move!";
			return;
		}else{
			document.getElementById("alert").innerHTML="";
			count++;
			if (count >= 9){
				document.getElementById("tips").innerHTML="";
				document.getElementById("alert").innerHTML="Tie. New Game?";
			}else{
				if (count % 2 == 0){
					mark = "O";
					nxt ="Next: X";
				}else{
					mark = "X";
					nxt = "Next: O";
				}
				document.getElementById("tips").innerHTML=nxt;
			}
			document.getElementById(tagId).innerHTML=mark;
		}
		checkWin();
	}

	function checkWin() {
		if((document.getElementById("TL").innerHTML == document.getElementById("TC").innerHTML && document.getElementById("TC").innerHTML == document.getElementById("TR").innerHTML &&
			document.getElementById("TL").innerHTML != "")|| /*top*/
			(document.getElementById("ML").innerHTML == document.getElementById("MC").innerHTML && document.getElementById("MC").innerHTML == document.getElementById("MR").innerHTML &&document.getElementById("ML").innerHTML != "")|| /*middle*/
			(document.getElementById("BL").innerHTML == document.getElementById("BC").innerHTML && document.getElementById("BC").innerHTML == document.getElementById("BR").innerHTML &&document.getElementById("BL").innerHTML != "")|| /*bot*/
			(document.getElementById("TL").innerHTML == document.getElementById("ML").innerHTML && document.getElementById("ML").innerHTML == document.getElementById("BL").innerHTML &&document.getElementById("BL").innerHTML != "")|| /*left*/
			(document.getElementById("TC").innerHTML == document.getElementById("MC").innerHTML && document.getElementById("MC").innerHTML == document.getElementById("BC").innerHTML &&document.getElementById("BC").innerHTML != "")|| /*cent*/
			(document.getElementById("TR").innerHTML == document.getElementById("MR").innerHTML && document.getElementById("MR").innerHTML == document.getElementById("BR").innerHTML &&document.getElementById("BR").innerHTML != "")|| /*right*/
			(document.getElementById("TL").innerHTML == document.getElementById("MC").innerHTML && document.getElementById("MC").innerHTML == document.getElementById("BR").innerHTML &&document.getElementById("BR").innerHTML != "")||
			(document.getElementById("TR").innerHTML == document.getElementById("MC").innerHTML && document.getElementById("MC").innerHTML == document.getElementById("BL").innerHTML &&document.getElementById("BL").innerHTML != "")){
			winner = true;
			document.getElementById("tips").innerHTML="";
			if (mark == "X"){
				XScore += 1 
				var _winner = localStorage.getItem("p1");
				document.getElementById("XScore").innerHTML = XScore
			}else if (mark == "O"){
				OScore += 1 
				_winner = localStorage.getItem("p2")
				document.getElementById("OScore").innerHTML = OScore
			}
			document.getElementById("alert").innerHTML= _winner + " is the winner!"

		}
	}

	function reset(){
		var x = document.getElementsByClassName("gameButton");
		for (var i = 0; i <= 8; i++) {
			x[i].innerHTML="";
		}
		winner = false;
		count =0;
		document.getElementById("tips").innerHTML="Next:";
		document.getElementById("alert").innerHTML="";
	}