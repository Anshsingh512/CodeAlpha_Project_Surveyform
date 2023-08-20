document.addEventListener("DOMContentLoaded", function() {
  let currentPage = 1;
  const pages = document.querySelectorAll('.page');

  function showPage(pageNumber) {
    pages[currentPage - 1].style.display = 'none';
    pages[pageNumber - 1].style.display = 'block';
    currentPage = pageNumber;
  }

  showPage(1); // Show the first page initially

  const prevButtons = document.querySelectorAll('.prevBtn');
  const nextButtons = document.querySelectorAll('.nextBtn');

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showPage(currentPage - 1);
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showPage(currentPage + 1);
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.querySelector('.submitBtn');
  
  submitButton.addEventListener('click', function() {
    alert("Survey submitted!");
    // You can add more actions here if needed
  });
});

