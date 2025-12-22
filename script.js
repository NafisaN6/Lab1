
$(document).ready(function(){

  // 1. Highlight nav links on hover
  $("nav a").hover(
    function() {
      $(this).css("color", "#FFD966");
    },
    function() {
      $(this).css("color", "#F1EEF3");
    }
  );

  // 2. Click article titles to toggle content
  $("article h1").click(function(){
    $(this).nextAll("p, img").slideToggle();
  });

  // 3. Image hover animation
  $("article img").hover(
    function(){
      $(this).animate({ opacity: 0.7 }, 300);
    },
    function(){
      $(this).animate({ opacity: 1 }, 300);
    }
  );

  // 4. Smooth scroll for footer links
  $("footer a").click(function(e){
    e.preventDefault();
    window.open($(this).attr("href"), "_blank");
  });

  // 5. Call-to-action effect for Donate link
  $("nav a:contains('Donate')").click(function(){
    alert("Thank you for considering a donation to Habitat for Humanity!");
  });

});


$(document).ready(function(){

  let progress = 0;

  $(".build-step").click(function(){
    let step = $(this).data("step");

    $(this).prop("disabled", true);
    progress += 25;

    $("#progress-fill").animate({ width: progress + "%" }, 500);
    $("#percent").text(progress + "%");

    $("#house").css("transform", "scale(1.1)");
    setTimeout(() => {
      $("#house").css("transform", "scale(1)");
    }, 300);

    if(step === "foundation"){
      $("#house").text("🧱");
      $("#game-message").text("Foundation laid! Strong start!");
    }
    if(step === "walls"){
      $("#house").text("🏠");
      $("#game-message").text("The walls are up! The home is taking shape!");
    }
    if(step === "roof"){
      $("#house").text("🏡");
      $("#game-message").text("The gardan is added! We're almost ready!");
    }
    if(step === "family"){
      $("#house").text("🏠❤️");
      $("#game-message").html("The home is complete! A family now has a safe place to live! <br><strong>Thank you for building hope.</strong>");
    }
  });

});


