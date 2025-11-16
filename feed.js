document.addEventListener("DOMContentLoaded", () => {
  const ratingCategories = [
    "navigationEase",
    "bookingProcess",
    "accuracyInformation",
    "paymentOptions",
    "securityMeasures",
    "customerSupport",
    "overallExperience",
  ];

  ratingCategories.forEach((category) => {
    const container = document.getElementById(category);
    if (!container) return; // Skip if element doesn't exist
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa", "fa-star", "star");
      star.dataset.rating = i;
      star.addEventListener("click", () => setRating(category, i));
      container.appendChild(star);
    }
  });
});

function setRating(category, rating) {
  const stars = document.querySelectorAll(`#${category} .star`);
  const ratingText = document.getElementById(`${category}-rating-text`);
  if (!ratingText) return;

  stars.forEach((star) => {
    star.classList.toggle("checked", star.dataset.rating <= rating);
  });
  ratingText.textContent = `Rating: ${rating}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedback-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    const comments = document.getElementById("comments")?.value.trim() || "";

    // Only prevent submission if validation fails
    if (comments === "" || comments.length < 4) {
      event.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your feedback before submitting.",
        customClass: {
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
          confirmButton: "swal-confirm-button",
        },
      });
      return;
    }

    // Allow form to submit to Netlify
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your response has been recorded.",
      customClass: {
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
        confirmButton: "swal-confirm-button",
      },
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        form.reset();

        // Reset star ratings
        const ratingCategories = [
          "navigationEase",
          "bookingProcess",
          "accuracyInformation",
          "paymentOptions",
          "securityMeasures",
          "customerSupport",
          "overallExperience",
        ];

        ratingCategories.forEach((category) => {
          const stars = document.querySelectorAll(`#${category} .star`);
          stars.forEach((star) => star.classList.remove("checked"));
          const ratingText = document.getElementById(`${category}-rating-text`);
          if (ratingText) ratingText.textContent = "Rating: 0";
        });
      }
    });
  });
});