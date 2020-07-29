
var toggler = document.getElementsByClassName("caret");
var i;
// var orgs = document.getElementsByClassName("caret");
// console.log(parsed_data);
for (i = 0; i < toggler.length; i++) {
  var sam = "sam";
  toggler[i].addEventListener("click", function(sam) {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
    console.log(sam);
  });
}

var something = (items,org) => {
  console.log(items);
}
