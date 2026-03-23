const links = document.querySelectorAll('.navigatie a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// // Chat gpt 
// const form = document.getElementById("overlijden-form");
// const bsnInput = document.getElementById("bsn_overledene");

// bsnInput.addEventListener("input", () => {
//     if (bsnInput.validity.patternMismatch) {
//         bsnInput.setCustomValidity("BSN moet precies 9 cijfers bevatten.");
//     } else {
//         bsnInput.setCustomValidity("");
//     }
// });

// function validateStep(stepId, nextHash) {
//     const step = document.getElementById(stepId);
//     const fields = step.querySelectorAll("input");

//     for (const field of fields) {
//         if (!field.checkValidity()) {
//             field.reportValidity();
//             return;
//         }
//     }

//     window.location.hash = nextHash;
// }

// document.getElementById("volgende-knop-1").addEventListener("click", (e) => {
//     e.preventDefault();
//     validateStep("stap1", "stap2");
// });

// document.getElementById("volgende-knop-2").addEventListener("click", (e) => {
//     e.preventDefault();
//     validateStep("stap2", "stap3");
// });

// document.getElementById("volgende-knop-3").addEventListener("click", (e) => {
//     e.preventDefault();
//     validateStep("stap3", "stap4");
// });

// form.addEventListener("submit", (e) => {
//     if (!form.checkValidity()) {
//         e.preventDefault();
//         form.reportValidity();
//     } else {
//         e.preventDefault();
//         alert("Formulier is geldig en zou nu verzonden worden.");
//     }
// });