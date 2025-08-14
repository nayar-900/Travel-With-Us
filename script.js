// Mobile Menu Toggle with Smooth Animation
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden-slide")) {
    mobileMenu.classList.remove("hidden-slide");
  } else {
    mobileMenu.classList.add("hidden-slide");
  }
});

// Close menu on link click
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden-slide");
  });
});

// Destination Modal Logic (Home Page)
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

if (closeModal) {
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}
