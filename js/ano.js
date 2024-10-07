function readMoreFun(param, param_id) {
  let elements = document.getElementsByClassName(param);
  let element_id = document.getElementById(param_id);
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hidden-content");
  }
  element_id.classList.toggle("hidden-readmore");
}