//need an on click for searching for services offered
$( "#search" ).click(function() {
  console.log("On Click is working");
});
//need an on click for submitting services you want to offer
$( "#serv" ).click(function() {
  console.log("On Click is working");
});
// on click for submitting new user
$("#sub").on("submit", function(event) {
  console.log("button pushed");
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newUser = {
    name: $("#user").val().trim(),
    zipcode: $("#zipcode").val().trim(),
    email: $("#email").val().trim()
  };
console.log("data: ", newUser);
  // Send the POST request.
  $.ajax("/signup", {
    type: "POST",
    data: newUser
  }).then(
    function() {
      console.log("created new user");
      // Reload the page to get the updated list
      // location.reload();
    }
  );
});