// Add event listener to the navigation menu
document.querySelector('.nav__links').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Add event listener to the join now button
  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('#join-now').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add event listener to the review navigation
  document.querySelector('.review__nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const reviewContainer = document.querySelector('.review__container');
      const reviewContent = document.querySelector('.review__content');
      const reviewRating = document.querySelector('.review__rating');
      const reviewFooter = document.querySelector('.review__footer');
      const reviewMember = document.querySelector('.review__member');
      const reviewMemberDetails = document.querySelector('.review__member__details');
  
      if (e.target.classList.contains('ri-arrow-left-line')) {
        reviewContainer.classList.add('prev-review');
        reviewContent.classList.add('prev-review-content');
        reviewRating.classList.add('prev-review-rating');
        reviewFooter.classList.add('prev-review-footer');
        reviewMember.classList.add('prev-review-member');
        reviewMemberDetails.classList.add('prev-review-member-details');
      } else if (e.target.classList.contains('ri-arrow-right-line')) {
        reviewContainer.classList.remove('prev-review');
        reviewContent.classList.remove('prev-review-content');
        reviewRating.classList.remove('prev-review-rating');
        reviewFooter.classList.remove('prev-review-footer');
        reviewMember.classList.remove('prev-review-member');
        reviewMemberDetails.classList.remove('prev-review-member-details');
      }
    }
  });
  
  // Add event listener to the footer social media links
  document.querySelector('.footer__socials').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.open(href, '_blank');
    }
  });