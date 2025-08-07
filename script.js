document.addEventListener("DOMContentLoaded", function () {
  const rocket = document.getElementById("rocket");
  const blurOverlay = document.getElementById("blurOverlay");
  const planetCards = document.querySelectorAll(".planet-card");
  const navButtons = document.querySelectorAll(".nav-btn");

  // Анимация перелета к планетам
  planetCards.forEach((card) => {
    card.addEventListener("click", function () {
      const planet = this.dataset.planet;

      // Активируем размытие фона
      blurOverlay.classList.add("active");

      // Анимация взлета
      rocket.style.animation = "launch 2s forwards";

      setTimeout(() => {
        // Смена фона (имитация перелета)
        document.body.className = `${planet}-bg`;
        // Убираем размытие
        blurOverlay.classList.remove("active");
        // Анимация посадки
        rocket.style.animation = "landing 2s forwards";
      }, 2000);
    });
  });

  // Переход между страницами
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.dataset.target === "planets") {
        // Активируем размытие
        blurOverlay.classList.add("active");

        // Анимация перехода
        rocket.style.animation = "launch 2s forwards";
        setTimeout(() => {
          window.location.href = "planets.html";
        }, 2000);
      }
    });
  });
});
