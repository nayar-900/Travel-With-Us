// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu on link click
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
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

  menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.classList.remove("-translate-y-4", "opacity-0");
    }, 10);
  } else {
    mobileMenu.classList.add("-translate-y-4", "opacity-0");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }
});
