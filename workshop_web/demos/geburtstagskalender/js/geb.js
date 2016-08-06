
var entries = [
    {
      name: "Erwin Schrödinger",
      month: 8,
      date: "12.8.1887",
      src: "https://www.burks.de/burksblog/pix/2015/06/160615_3.jpg"
    },
    {
      name: "Alfred Hitchcock",
      month: 8,
      date: "13.8.1999",
      src: "http://i.imgur.com/97GEkeY.jpgy"
    }
 ];
 var now = new Date();
 
 
function birth(){
	for (var i = 0; i < entries.length; i++){
	  if (entries[i].month == now.getMonth() + 1){
			document.write("<li><img  src=\"" + entries[i].src +"\" style=\"width:600px;\"> <p>"+entries[i].name+" "+entries[i].date+"</p> </li>");
	  }
	}
}
