// script.js
document.addEventListener("DOMContentLoaded", () => {
    const starRatingContainer = document.querySelector('.star-rating');
    const ratingValueDisplay = document.getElementById('rating-value');
    let rating = 0; // Holds the current rating value
  
    // Create 5 stars dynamically
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.innerHTML = '★'; // Star symbol
      star.setAttribute('data-rating', i); // Set the rating value for each star
      star.addEventListener('mouseover', handleMouseOver);
      star.addEventListener('mouseleave', handleMouseLeave);
      star.addEventListener('click', handleStarClick);
      starRatingContainer.appendChild(star);
    }
  
    // When mouse hovers over a star, highlight all stars up to that point
    function handleMouseOver(event) {
      const currentRating = parseInt(event.target.getAttribute('data-rating'));
      highlightStars(currentRating);
    }
  
    // When mouse leaves the star area, reset the highlights to the current rating
    function handleMouseLeave() {
      highlightStars(rating); // Highlight up to the current rating
    }
  
    // When a star is clicked, set the rating and highlight the stars
    function handleStarClick(event) {
      rating = parseInt(event.target.getAttribute('data-rating'));
      ratingValueDisplay.textContent = rating;
      highlightStars(rating);
    }
  
    // Function to highlight stars up to the given rating
    function highlightStars(rating) {
      const stars = document.querySelectorAll('.star-rating span');
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add('filled');
        } else {
          star.classList.remove('filled');
        }
      });
    }
  });
  