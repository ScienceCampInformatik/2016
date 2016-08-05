var name= "Lena";

function show(){
	document.getElementById("name").textContent = name;
}

function change(){
	name = prompt("Ändere name!","");
}

function hund(){
	var antwort = prompt("Magst du Hunde?","Ja oder Nein");

	if(antwort == "Ja" || antwort == "Vielleicht"){
		document.getElementById("bild").src="http://www.testedich.de/quiz37/picture/pic_1434894316_2.jpg";
	}else{
		document.getElementById("bild").src="http://www.lindermanns-tierwelt.de/wp-content/uploads/Hund-h%C3%B6rt-nicht%C2%A9-Andres-Rodriguez-Fotolia.com_.jpg";

	}
}

function summe(){
 var erg = 0;
 for(var i = 1; i<= 100; i++){
 	erg += i;
 }
 document.getElementById("Summe").textContent=erg;

}

var zahlen = [ 1, 2, 4, 7, 8];

function arrayelem(){
	var id;
	id = prompt("Gibt eine Zahl ein","Gibt eine Zahl zwischen 0 und "+ (zahlen.length -1) +" ein");

	document.getElementById("array").textContent = "Das "+ id + "-te Element ist: " + zahlen[id];
}
