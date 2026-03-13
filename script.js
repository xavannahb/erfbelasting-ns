const form = document.getElementById('wizardForm');
const steps = Array.from(form.querySelectorAll('[data-step]'));
const progressEl = document.getElementById('progress');

let current = 0;

function showStep(index) {
    steps.forEach((s, i) => s.classList.toggle('is-active', i === index));
    current = index;
    progressEl.textContent = `Stap ${current + 1} van ${steps.length}`;
    // focus eerste input in stap
    const first = steps[current].querySelector('input, select, textarea, button');
    if (first) first.focus({ preventScroll: true });
}

function validateCurrentStep() {
    const step = steps[current];
    const fields = Array.from(step.querySelectorAll('input, select, textarea'));

    // reset custom validity (voor toekomstige uitbreidingen)
    fields.forEach(f => f.setCustomValidity?.(''));

    // Check alleen zichtbare & enabled velden
    const invalid = fields.find(el => !el.disabled && el.willValidate && !el.checkValidity());

    if (invalid) {
    // Laat browser “bubble” melding zien
    invalid.reportValidity();
        return false;
        }
        return true;
}

form.addEventListener('click', (e) => {
    const nextBtn = e.target.closest('[data-next]');
    const prevBtn = e.target.closest('[data-prev]');

    if (nextBtn) {
        if (!validateCurrentStep()) return;
        if (current < steps.length - 1) showStep(current + 1);
    }

      if (prevBtn) {
        if (current > 0) showStep(current - 1);
      }
});

form.addEventListener('submit', (e) => {
      // laatste stap ook valideren
      if (!validateCurrentStep()) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      const data = new FormData(form);
      const obj = Object.fromEntries(data.entries());
      console.log('Form data:', obj);
      alert('Formulier is “verstuurd” (check console voor data).');
      // Hier zou je fetch() kunnen doen naar je backend.
});

showStep(0);