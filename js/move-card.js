
    document.addEventListener('DOMContentLoaded', function() {
        // obtaining the container element
        var containers = document.querySelector('.containers');
        // obtaining all the elements with class "more-detail"
        var moreDetails = document.querySelectorAll('.more-detail');
        var isMoved = false; // for checking if the card has been moved
    
        // initializing .more-detail
        moreDetails.forEach(function(detail) {
          detail.style.display = 'none';
        });
    
        // for each click event on the container element
        containers.addEventListener('click', function(event) {
          // checking if the clicked element is a.more-detail
          if (isMoved) {
            // if it has been moved, then reset the position and hide .more-detail
            containers.style.transform = 'translateX(0)';
            // hiding all.more-detail
            moreDetails.forEach(function(detail) {
              detail.style.display = 'none';
            });
            isMoved = false;
          } else {
            // if it hasn't moved, then move it to the left and show .more-detail       
            containers.style.transform = 'translateX(-200px)';
            isMoved = true;
            // showing all.more-detail
            setTimeout(function() {
              moreDetails.forEach(function(detail) {
                detail.style.display = 'block';
              });
            }, 10); // display after 1000ms
          }
        });
    
        // obtaining all the elements with class "next"
        var nextElements = document.querySelectorAll('.next');
        // for each click event on the .next element
        nextElements.forEach(function(nextElement) {
          nextElement.addEventListener('click', function(event) {
            event.stopPropagation(); // preventing the click event from bubbling up to the container element
          });
        });
      });