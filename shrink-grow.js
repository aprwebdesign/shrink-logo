window.addEventListener("scroll", function() {
  let logo = document.querySelector(".divwrapperofimage img"); // Select the image element within the .divwrapperofimage div
  
  if(logo !== null) {
    let scrollPosition = window.scrollY; // Get the scroll position
    let maxScroll = 600; // Define the scroll position at which the image is completely gone
    let startShrink = 200; // Define the scroll position at which the shrinking starts

    if(scrollPosition < startShrink) {
      // If the scroll position is less than the start position, the size of the image is 100%
      logo.style.transform = "scale(1)";
    } else if(scrollPosition > maxScroll) {
      // If the scroll position is greater than the maximum scroll position, the size of the image is 0%
      logo.style.transform = "scale(0)";
    } else {
      // Otherwise, calculate the size of the image based on the scroll position
      let scale = 1 - ((scrollPosition - startShrink) / (maxScroll - startShrink));
      logo.style.transform = "scale(" + scale + ")";
    }
  }
});
