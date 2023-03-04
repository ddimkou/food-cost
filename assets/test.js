document.addEventListener("DOMContentLoaded", function () {
  console.log("hello world");

  // price/kg generator
  const amountIngredient = document.querySelector("#amount-of-ingredient");
  const priceIngredient = document.querySelector("#price-of-ingredient");
  const generate = document.querySelector("#btn-generate");
  const generatedValue = document.querySelector("#generated-value");

  generate.addEventListener("click", () => {
    const amount = amountIngredient.value;
    const price = priceIngredient.value;
    const value = (price / amount).toFixed(2);
    generatedValue.textContent = value;
  });

  // Food cost calculator
  // Get all the input elements
  const ingredientNames = document.querySelectorAll(".ingredient-name");
  const pricePerKgs = document.querySelectorAll(".price-per-kg");
  const amountsUsed = document.querySelectorAll(".amount-used");
  const sellingPriceInput = document.getElementById("selling-price");
  const calculateButton = document.getElementById("btn-calculate");
  const resultElement = document.getElementById("result");

  // Add event listener to the calculate button
  calculateButton.addEventListener("click", calculateFoodCost);

  // Calculate the food cost when the calculate button is clicked
  function calculateFoodCost() {
    // Initialize the total cost to zero
    let totalCost = 0;

    // Loop through all the input elements and calculate the cost for each ingredient
    for (let i = 0; i < ingredientNames.length; i++) {
      const ingredientName = ingredientNames[i].value;
      const pricePerKg = pricePerKgs[i].value;
      const amountUsed = amountsUsed[i].value;

      // Calculate the cost for this ingredient and add it to the total cost
      const costForIngredient = (pricePerKg * amountUsed).toFixed(2);
      totalCost += parseFloat(costForIngredient);

      // Print the cost for this ingredient to the console
      console.log(`${ingredientName}: $${costForIngredient}`);
    }

    // Get the selling price from the input element
    const sellingPrice = sellingPriceInput.value;

    // Calculate the food cost in percentage
    const foodCostPercentage = ((totalCost / sellingPrice) * 100).toFixed(2);

    // Set the food cost percentage as the text content of the result element
    resultElement.textContent = `${foodCostPercentage}%`;
  }
});
