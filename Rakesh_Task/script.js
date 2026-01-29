const cards = document.querySelectorAll(".card");
const total = document.querySelector(".total");

function generateOptions(card) {
    const body = card.querySelector(".card-body");
    const units = parseInt(card.dataset.units);

    body.innerHTML = "";

    for (let i = 1; i <= units; i++) {
        const row = document.createElement("div");
        row.className = "row";

        row.innerHTML = `
      <span>#${i}</span>
      <select>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <select>
        <option>Black</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
    `;

        body.appendChild(row);
    }
}

cards.forEach(card => generateOptions(card));

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const price = card.dataset.price;
        total.textContent = `Total : $${price}.00 USD`;

        const radio = card.querySelector("input");
        radio.checked = true;
    });
});
