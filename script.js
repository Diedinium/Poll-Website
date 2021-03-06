//Main Script Document

//"Return to top" button
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
//"Return to top" button end

//Political Parties Modals JavaScript

//Function called from button, element ID is passed into "idClicked" upon button click.
function ShowModal(idClicked) {
  //switch statement decides which modal to load based on button ID.
  switch (idClicked) {
    case "BtnExpand1":
      $('#ModalConservatives').modal('show');
      AOS.refresh();
      break;
    case "BtnExpand2":
      $('#ModalLabour').modal('show');
      AOS.refresh();
      break;
    case "BtnExpand3":
      $('#ModalLibDem').modal('show');
      AOS.refresh();
      break;
    case "BtnExpand4":
      $('#ModalUKIP').modal('show');
      AOS.refresh();
      break;
    case "BtnExpand5":
      $('#ModalGreens').modal('show');
      AOS.refresh();
      break;
    case "BtnExpand6":
      $('#ModalSNP').modal('show');
      AOS.refresh();
      break;
    default:
      Console("Unknown case")
  }
  
}
//Political Parties Modals JavaScript end

//Detect IE javascript
function isIE() {
  ua = navigator.userAgent;
  //MSIE used to detect old browsers and Trident used to newer ones
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  
  return is_ie; 
}

//Function that displays an alert if user is using IE, checks if this warning has already been displayed before doing so.
window.onload = function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
      if (isIE()){
        alert('This website is not designed for Internet Explorer compatibility, you will experience layout and functionality issues. Please upgrade to a more recent browser such as Chrome, Edge or Firefox for the best experience.');
      }
      localStorage.setItem("hasCodeRunBefore", true);
  }
}
//Detect IE javascript end