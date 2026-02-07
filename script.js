    // script.js

    document.addEventListener("DOMContentLoaded", () => {
      const tabButtons = document.querySelectorAll(".tab-btn");
      const tabContents = document.querySelectorAll(".tab-content");

      function showTab(tabName) {
        tabContents.forEach(tab => {
          tab.classList.remove("active");
        });
        document.getElementById(tabName).classList.add("active");

        tabButtons.forEach(btn => {
          btn.classList.remove("active-btn");
          if (btn.dataset.tab === tabName) {
            btn.classList.add("active-btn");
          }
        });
      }

      // Initial load
      showTab("home");

      tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const tab = btn.dataset.tab;
          showTab(tab);
        });
      });

      // Quick link cards as buttons
      const quickLinks = document.querySelectorAll(".quick-link-card");
      quickLinks.forEach(card => {
        card.addEventListener("click", () => {
          const tab = card.dataset.tab;
          showTab(tab);
        });
      });

      // Modal popup for disease info
      const modal = document.getElementById("img-modal");
      const modalImg = document.getElementById("modal-img");
      const modalTitle = document.getElementById("modal-title");
      const modalDescription = document.getElementById("modal-description");
      const closeBtn = document.querySelector(".close-button");

      document.querySelectorAll(".popup-img").forEach(img => {
        img.addEventListener("click", () => {
          modal.style.display = "flex";
          modalImg.src = img.src;
          modalTitle.textContent = img.dataset.title;
          modalDescription.textContent = img.dataset.description;
        });
      });

      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });

      // Back to top/home
      document.querySelector(".home-btn").addEventListener("click", () => {
        showTab("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });