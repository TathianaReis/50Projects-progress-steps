const progress = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circleStep = document.querySelectorAll('.circle');
let currentStep;
let progressWidth = 0;

nextButton.addEventListener('click', function (e) {
  prevButton.disabled = false;
  circleStep.forEach((step, i) => {
    if (step.classList.contains('active')) {
      currentStep = ++i;
    }
  });

  if (currentStep < circleStep.length) {
    circleStep[currentStep].classList.add('active');
    progressWidth += 33;
    progress.style.width = `${progressWidth}%`;
  }

  controlButtons();
});

prevButton.addEventListener('click', function (e) {
  nextButton.disabled = false;

  circleStep.forEach((step, i) => {
    if (step.classList.contains('active')) {
      circleStep[currentStep].classList.remove('active');
    }
  });

  if (currentStep > 0) {
    currentStep -= 1;
    progressWidth -= 33;
    progress.style.width = `${progressWidth}%`;
  }

  controlButtons();
});

function controlButtons() {
  if (currentStep === circleStep.length - 1) {
    nextButton.disabled = true;
  }

  if (currentStep === 0) {
    prevButton.disabled = true;
  }
}
