/* ??? */
document.getElementById("start").onclick = function() {
  alert("Start! again");
}

var time_spent = 0;

/* Function gets called for Instant Time */
function instantTime(n) {
  time_spent += n;
}


document.getElementById("instant-time-btn").onclick = function() {
  var n = Number(document.getElementById("instant-time")) | 0;
  instantTime(n);
}
