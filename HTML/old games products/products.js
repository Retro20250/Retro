
      function increase() {
        const numberElement = document.querySelector(".number");
        let value = parseInt(numberElement.textContent);
        numberElement.textContent = value + 1;
      }

      function decrease() {
        const numberElement = document.querySelector(".number");
        let value = parseInt(numberElement.textContent);
        if (value > 1) {
          numberElement.textContent = value - 1;
        }
      }

      // Product slider functions
      function showNextImages(sectionId) {
        const currentRow = document.getElementById(product-row1-${sectionId});
        const nextRow = document.getElementById(product-row2-${sectionId});

        currentRow.classList.add("hidden");
        nextRow.classList.remove("hidden");

        const leftBtn = document.querySelector(
          .product-section[data-id="${sectionId}"] .product-left
        );
        const rightBtn = document.querySelector(
          .product-section[data-id="${sectionId}"] .product-right
        );

        leftBtn.classList.add("highlighted");
        rightBtn.classList.remove("highlighted");
      }

      function showPrevImages(sectionId) {
        const currentRow = document.getElementById(product-row2-${sectionId});
        const prevRow = document.getElementById(product-row1-${sectionId});

        currentRow.classList.add("hidden");
        prevRow.classList.remove("hidden");

        const leftBtn = document.querySelector(
          .product-section[data-id="${sectionId}"] .product-left
        );
        const rightBtn = document.querySelector(
          .product-section[data-id="${sectionId}"] .product-right
        );

        leftBtn.classList.remove("highlighted");
        rightBtn.classList.add("highlighted");
      }

      function highlightButton(btn) {
        if (!btn.classList.contains("highlighted")) {
          btn.style.backgroundColor = "rgba(255, 175, 3, 0.4)";
        }
      }

      function resetButton(btn) {
        if (!btn.classList.contains("highlighted")) {
          btn.style.backgroundColor = "rgba(255, 175, 3, 0.2)";
        }
      }