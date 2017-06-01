$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var lenght1 = parseInt($("input#lenght1").val());
    var lenght2 = parseInt($("input#lenght2").val());
    var lenght3 = parseInt($("input#lenght3").val());

    if (lenght1 === lenght2 && lenght3 === lenght2) {
        alert("This is a equilateral");
    } else if ((lenght1 === lenght2 && lenght2 != lenght3) || (lenght3 === lenght2 && lenght2!= lenght1) || (lenght1 === lenght3 && lenght3 != lenght2)) {
        alert("This is an Isosceles");
    } else if (lenght1 != lenght2 && lenght2 != lenght3) {
        alert("This is a scalene");
    } else {
        alert("Probably not a triangle");
    }
  })
});
