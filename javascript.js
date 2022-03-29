function megnyom(imgs) {
	getElementById("galeria").style.display = "none";
	document.getElementsByClassName(kepeckt)[0], 
	document.getElementsByClassName(kepeckt)[1],
	document.getElementsByClassName(kepeckt)[2];
  var kinagy = document.getElementById("nagyobitot");
  var retail = document.getElementById("kepeckt");
  kinagy.src = imgs.src;
  retail.innerHTML = imgs.alt;
  kinagy.parentElement.style.display = "block";
}
var c =0;
function filterezés(c) {
  var indexkep = document.getElementsByClassName("galeria");
  if (c == "all") c = "";
    removeFilter(thumbnails[i], "filter--show");
    if (thumbnails[i].className.indexOf(c) > -1) addFilter(thumbnails[i], "filter--show");
  }
}