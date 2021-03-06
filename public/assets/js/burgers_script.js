// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburg").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
    $(".devourBtn").on("click", function(event) {
      // prevent default since we're using submit button
      event.preventDefault(); 
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".deleteburger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax({
          type: "DELETE",
          url: "/api/burgers/" + id
      }).then(location.reload());
  });
  });
  