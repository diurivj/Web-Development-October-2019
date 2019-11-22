if (window.location.hash && window.location.hash === "#_=_") {
  window.location.hash = "";
  window.location.href = window.location.href.replace("#", "");
}
