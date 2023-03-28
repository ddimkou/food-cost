document.addEventListener("DOMContentLoaded", function () {
  // Price/kg generator
  const amountIngredient = document.querySelector("#amount-of-ingredient");
  const priceIngredient = document.querySelector("#price-of-ingredient");
  const generate = document.querySelector("#btn-generate");
  const generatedValue = document.querySelector("#generated-value");

  generate.addEventListener("click", () => {
    const amount = amountIngredient.value;
    const price = priceIngredient.value;

    if (amount === "" || price === "") {
      generatedValue.textContent = "Please enter valid inputs";
    } else {
      const value = (price / amount).toFixed(2);
      generatedValue.textContent = `${value}/KG`;
    }
  });

  // Food cost calculator

  const ingredientNames = document.querySelectorAll(".ingredient-name");
  const pricePerKgs = document.querySelectorAll(".price-per-kg");
  const amountsUsed = document.querySelectorAll(".amount-used");
  const sellingPriceInput = document.getElementById("selling-price");
  const calculateButton = document.querySelector("#btn-calculate");
  const resultElement = document.getElementById("result");

  calculateButton.addEventListener("click", calculateFoodCost);

  function calculateFoodCost() {
    let totalCost = 0;

    // loop inputs to get the cost for every ingredient
    for (let i = 0; i < ingredientNames.length; i++) {
      const ingredientName = ingredientNames[i].value;
      const pricePerKg = pricePerKgs[i].value;
      const amountUsed = amountsUsed[i].value;

      const costForIngredient = (pricePerKg * amountUsed).toFixed(2);
      totalCost += parseFloat(costForIngredient);
    }

    const sellingPrice = sellingPriceInput.value;
    const foodCostPercentage = ((totalCost / sellingPrice) * 100).toFixed(2);
    resultElement.textContent = `${foodCostPercentage}%`;

    // bg color according to the percentage of food cost
    switch (true) {
      case foodCostPercentage >= 35:
        resultElement.style.backgroundColor = "black";
        resultElement.style.color = "white";
        break;
      case foodCostPercentage >= 32 && foodCostPercentage < 35:
        resultElement.style.backgroundColor = "red";
        break;
      case foodCostPercentage < 32:
        resultElement.style.backgroundColor = "green";
        break;
      default:
        resultElement.style.backgroundColor = "lightblue";
    }
  }
});
