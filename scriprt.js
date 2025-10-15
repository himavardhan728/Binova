function evaluateWaste() {
  const material = document.getElementById("material").value;
  const result = document.getElementById("result");

  if (!material) {
    result.textContent = "⚠️ Please select a material.";
    result.classList.remove("hidden");
    result.style.color = "red";
    return;
  }

  const values = {
    plastic: "₹5",
    paper: "₹3",
    metal: "₹10"
  };

  result.textContent = `🎉 You've earned a digital coupon worth ${values[material]} for recycling ${material}!`;
  result.classList.remove("hidden");
  result.style.color = "#0072ff";
}
