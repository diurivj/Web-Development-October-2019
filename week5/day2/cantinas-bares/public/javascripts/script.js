document.addEventListener(
  "DOMContentLoaded",
  () => {
    const elems = document.querySelectorAll("select");
    const instances = M.FormSelect.init(elems, {});
  },
  false
);
