// src/modules/quiz.js

export const Quiz = {
  calculateEnergy: () => {
    const sliders = document.querySelectorAll(".quiz-slider");
    let total = 0;

    sliders.forEach((slider) => {
      total += parseInt(slider.value);
    });

    return Math.round(total / sliders.length);
  }
};