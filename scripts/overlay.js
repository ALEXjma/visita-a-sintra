function showOverlay(name) {
  const overlay = document.querySelector(".overlay-content");
  const iframe = overlay.querySelector("iframe");
  iframe.src = name;
  document.querySelector(".overlay").style.display = "block";
}

function hideOverlay() {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}
