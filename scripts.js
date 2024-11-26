function zoomCard(cardElement) {
        const overlay = document.querySelector(".overlay");
        cardElement.classList.add("zoom-active");
        overlay.classList.add("active");

        const socialLinks = cardElement.querySelector(".social-links");

        // Tambahkan tombol close jika belum ada
        if (!socialLinks.querySelector(".close-btn")) {
          const closeButton = document.createElement("button");
          closeButton.classList.add("close-btn", "btn", "btn-danger", "btn-sm"); // Tambahkan kelas untuk konsistensi
          closeButton.innerHTML = '<i class="bi bi-x-lg"></i>'; // Ikon close
          closeButton.title = "Close"; // Tambahkan tooltip
          closeButton.onclick = function (event) {
            event.stopPropagation(); // Mencegah event klik pada parent card
            zoomOutCard();
          };
          socialLinks.appendChild(closeButton); // Tambahkan ke social-links
        }
      }

      function zoomOutCard() {
        const activeCard = document.querySelector(".card.zoom-active");
        const overlay = document.querySelector(".overlay");

        if (activeCard) {
          activeCard.classList.remove("zoom-active");
          const closeButton = activeCard.querySelector(
            ".social-links .close-btn"
          );
          if (closeButton) {
            closeButton.remove(); // Hapus tombol close dari social-links
          }
        }

        overlay.classList.remove("active");
      }