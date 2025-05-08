const rates = {
  usd: { il: 3.6, euro: 0.93, yen: 155, usd: 1 },
  il: { usd: 0.28, euro: 0.26, yen: 43, il: 1 },
  euro: { usd: 1.08, il: 3.9, yen: 167, euro: 1 },
  yen: { usd: 0.0064, il: 0.023, euro: 0.006, yen: 1 },
};
const conversionAPI =
  "https://v6.exchangerate-api.com/v6/500148fc1fef7fc0692f3680/latest";
// list of currencies
const currencies = ["USD", "ILS", "EUR", "JPY"];
// fetch api on load
window.addEventListener("DOMContentLoaded", () => {
  currencies.forEach((currency) => {
    fetchConversionRate(currency);
  });
});

function fetchConversionRate(currency) {
  fetch(`${conversionAPI}/${currency}`)
    .then((response) => response.json())
    .then((data) => {
      rates[currency] = data.conversion_rates;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function toggleInput(selectedRadio) {
  // disable the whole row if the checkbox is unchecked
  const allRows = document.querySelectorAll("#sourceContainer .currency-row");
  allRows.forEach((row) => {
    const radio = row.querySelector('input[type="radio"]');
    const input = row.querySelector('input[type="number"]');
    if (radio == selectedRadio) {
      input.disabled = false;
    } else {
      input.disabled = true;
      input.value = ""; // clear the value of the unchecked radio's input
    }
  });
  convert(); // update conversion when checkbox toggled
}

function getSelectedCurrency(containerId) {
  const container = document.getElementById(containerId);
  const rows = container.querySelectorAll(".currency-row");
  for (const row of rows) {
    const radio = row.querySelector('input[type="radio"]');
    if (radio.checked) {
      const label = row.querySelector("label").textContent.trim();
      const valueInput = row.querySelector('input[type="number"]');
      const value = valueInput ? parseFloat(valueInput.value) : null;
      return { currency: label, amount: value };
    }
  }
  return null;
}

function convert() {
  const from = getSelectedCurrency("sourceContainer");
  const toRows = document.querySelectorAll("#targetContainer .currency-row");
  toRows.forEach((row) => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    const label = row.querySelector("label").textContent.trim();
    const output = row.querySelector(".converted");
    if (checkbox.checked && from && from.amount > 0) {
      const rate = rates[from.currency]?.[label];
      if (rate) {
        const converted = (from.amount * rate).toFixed(2);
        output.textContent = `= ${converted}`;
      } else {
        output.textContent = "N/A";
      }
    } else {
      output.textContent = "";
    }
  });
}

// Enable live conversion when input value changes
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("input", convert);
  });
});
