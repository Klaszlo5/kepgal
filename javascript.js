var kep = 1;

function elozo() {
        kep--;
        if(kep<1) {
          kep = 1;
        }
        document.getElementById('kepem')
        .src="kepek/maki" + kep + ".jpg";
        document.getElementById('kepem')
        .innerHTML="Heello";
}
     
function kovetkezo() {
        kep++;
        
        if(kep>3) {
          kep = 3;
        }
        document.getElementById('kepem')
        .src="kepek/maki" + kep + ".jpg";
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
