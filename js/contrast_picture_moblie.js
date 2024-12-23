document.addEventListener('DOMContentLoaded', function () {
    var image = document.getElementById('toggle-image');
    var isClicked = false; // State to track whether the image has been clicked
  
    image.addEventListener('click', function () {
      if (!isClicked) {
        // Change the image to the second image
        image.src = '../picture/Compare_processed.png';
        isClicked = true;
      } else {
        // Change the image back to the first image
        image.src = '../picture/Compare_original.png';
        isClicked = false;
      }
    });
  });