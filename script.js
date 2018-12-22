// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("ToTopButton").style.display = "block";
  } else {
    document.getElementById("ToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Political Parties Page Expand/Close script.
var idClicked;
$(document).ready(function() {
  $("#HiddenElement1").hide();
  $("a.btn").click(function(e) {
    idClicked = e.target.id;
    ExpandShrinkContent();
  });

  function ExpandShrinkContent() {
    if (idClicked == "BtnExpand1") {
      $("#HideContent1").hide();
      $("#HideContent2").hide();
      $("#HiddenElement1").fadeIn(800);
      AOS.refresh();
    }
  }
});