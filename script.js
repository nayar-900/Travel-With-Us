// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

  // Contact form popup on submit
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh
    alert("Your query has been submitted. Thank you!");
    this.reset(); // Clear the form
  });

  const cards = document.querySelectorAll('.destination-card');
  const modal = document.getElementById('destinationModal');
  const closeModal = document.getElementById('closeModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDetails = document.getElementById('modalDetails');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      modalImage.src = card.dataset.image;
      modalTitle.textContent = card.dataset.title;
      modalDetails.textContent = card.dataset.details;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });