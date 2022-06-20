document.addEventListener("submit", (e) => {
  const form = document.querySelector("#f");
  e.preventDefault();

  const formData = {};
  const data = new FormData(form);

  for (let [key, value] of data.entries()) {
    formData[key] = value;
  }

  fetch("/singin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
});
