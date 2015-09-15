$(document).ready(function() {
  $(".jumbotron").hide();
  $(".jumbotron").fadeIn("slow");

  function setJumbo(str) {
    switch(str) {
      case "education": // change jumbo to education
        $("#jumboContent").html(document.getElementById("educationHTML").innerHTML);
        break;
      case "skills": // change jumbo to skills
        $("#jumboContent").html(document.getElementById("skillsHTML").innerHTML);
        break;
      case "projects": // change jumbo to projects
        $("#jumboContent").html(document.getElementById("projectsHTML").innerHTML);
        break;
    }
    $(".jumbotron").fadeIn("slow"); // fade in the new jumbo
  }

  $(function() { // setActive()
    $(".navbar_section").on("click", function() { // whenever a navbar section is clicked
      var self = $(this);
      self.siblings().removeClass("active");
      self.addClass("active"); // make that section active
      var newJumbo = self.attr("id").split("_")[1]; // get the section name

      $(".jumbotron").fadeOut("slow", function() { // fade out the old jumbo
        setJumbo(newJumbo); // set the new jumbo as a callback function
      });

    });
  });
});
