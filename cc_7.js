// Step 5: DOM manipulation
// Select elements 
const ctaInput = document.getElementById ("cta-input");
const ctaButton = document.getElementById ("cta-button");
const ctaHeadline = document.getElementById ("cta");

// Add event listener to update CTA text
ctaButton.addEventListener("click", function() {
  if (ctaInput.value !== "") {
    ctaHeadline.textContent = ctaInput.value;
    ctaInput.value = "";
  }
});