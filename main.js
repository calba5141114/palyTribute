// link to the HTML page
var listOfThingsILike = document.getElementById("thingsILike");

//list of things we like
var like = ["Veggie Grill", "Joker", "Criminal Minds"];

function format(like) {
  // place to hold our new text
  var things = " ";
  // going through the list of items and formating them into html
  for (var i = 0; i < like.length; i++) {
    var stuff = `<li> ${like[i]} </li>`;
    things += stuff;
  }
  // returning formatted html
  return things;
}

listOfThingsILike.innerHTML = format(like);