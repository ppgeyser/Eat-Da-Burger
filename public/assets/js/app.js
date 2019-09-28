$(document).on("click", "#button-add", function (event) {
    event.preventDefault();

    burgerName = $("#data-burger-name").val().trim();

    var newBurger = {
        name: burgerName
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(document).on("click", "#button-devour", function (event) {

    event.preventDefault();

    var id = $(this).attr("burger-id");

    var updatedBurger = {
        id: id
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedBurger
    }).then(
        function () {
            console.log("updated id ", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});