function elozo(){
        document.getElementById('kepem')
        .src="kepek/maki1.jpg";
        document.getElementById('kepem')
        .innerHTML="Heello";
}
     
function masik(){
        document.getElementById('kepem')
        .src="kepek/maki2.jpg";
        document.getElementById('kepem')
        .innerHTML="Heello";
}

function onkatt(kepeck) {
  var fokep = document.getElementById("kepem1");
  var szov = document.getElementById("szovegkep");
  fokep.src = kepeck.src;
  szov.innerHTML = kepeck.alt;
  fokep.parentElement.style.display = "block";
} 
