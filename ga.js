	var sIndex = 1;
show(sIndex);

function pSlid(n) {
  show(sIndex += n);
}

function current(n) {
  show(sIndex = n);
}

function show(n) {
  var i;
  var slid = document.getElementsByClassName("slid");
  var ddts = document.getElementsByClassName("dot");
  if (n > slid.length) {sIndex = 1} 
  if (n < 1) {sIndex = slid.length}
  for (i = 0; i < slid.length; i++) {
      slid[i].style.display = "none"; 
  }
  for (i = 0; i < ddts.length; i++) {
      ddts[i].className = ddts[i].className.replace(" active", "");
  }
  slid[sIndex-1].style.display = "block"; 
  ddts[sIndex-1].className += " active";
}