function square() {
  let val = document.getElementById("val").value;
  alert("The area of square is" + val * val);
}
function rectangle() {
  let l = document.getElementById("val1").value;
  let b = document.getElementById("val2").value;
  alert("The area of rectangle is" + l * b);
}
function triangle() {
  let b = document.getElementById("val1").value;
  let h = document.getElementById("val2").value;
  alert("The area of triangle is" + b * h * 0.5);
}
function circle() {
  const pi = 3.14;
  let r = document.getElementById("val").value;
  alert("The area of circle is" + pi * r * r);
}
