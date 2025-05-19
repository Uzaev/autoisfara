document.addEventListener("DOMContentLoaded", function () {
  const typeFilter = document.getElementById("typeFilter");
  const brandFilter = document.getElementById("brandFilter");
  const rows = document.querySelectorAll("table tbody tr");

  function filterModels() {
    const type = typeFilter.value;
    const brand = brandFilter.value;

    rows.forEach(row => {
      const show =
        (type === "all" || row.classList.contains(type)) &&
        (brand === "all" || row.classList.contains(brand));
      row.style.display = show ? "" : "none";
    });
  }

  typeFilter.addEventListener("change", filterModels);
  brandFilter.addEventListener("change", filterModels);

  const form = document.getElementById("reviewForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const review = document.getElementById("userReview").value;

    const reviewList = document.querySelector(".review-list");
    const newReview = document.createElement("div");
    newReview.className = "review";
    newReview.innerHTML = `<strong>${name}:</strong><p>${review}</p>`;
    reviewList.appendChild(newReview);

    form.reset();
  });
});
