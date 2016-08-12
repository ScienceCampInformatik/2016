var vorname = "Lena";

function show(){
	document.getElementById("name").textContent =  vorname;
}


function change(){
	vorname = prompt("Gebe einen Namen an","");
}

function ask(){
	var antwort = prompt("Hast du Spaß?","Ja oder Nein");
	
	if(antwort == "Ja"){
		document.getElementById("bild").src = "http://media.einfachtierisch.de/thumbnail/600/0/media.einfachtierisch.de/images/2013/01/Junge-Katze-Erziehen.jpg";
	
	}else{
		document.getElementById("bild").src = "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg";
	}
}

// Berechne die Summe von 1 bis 100

function sum(){
	var erg = 0;
	
	for(var i = 1; i <= 100; i++){
		erg = erg + i;
	}
	
	document.getElementById("summe").textContent = erg;
}

function add( num1 , num2 ){
	var erg = parseInt(num1) + parseInt(num2);
	
	return erg;
}

function addtwo(){
	var a = prompt("Geb eine Zahl ein","");
	var b = prompt("Geb eine Zahl ein","");
	document.getElementById("addition").textContent= add(a,b);
}

function zahlen(){
	var betreuer = ["Sebastian", "Matthias", "Lena"];
	document.getElementById("betreuer").textContent = betreuer[0] + " " +  betreuer[1] + " " + betreuer[2] + " " + betreuer.length;
}

