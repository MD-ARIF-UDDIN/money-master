// getting calculate button
const calculateBtn = document.getElementById("calculate-btn");

// get input from user
function getInputValue(inputID) {
  let inputBox = document.getElementById(inputID);
  let inputAmount = parseFloat(inputBox.value);

  if (isNaN(inputAmount) || inputAmount < 0) {
    inputBox.value = "";
    return alert(
      "Please input valid amount of money in number format for: " + inputID
    );
  } else {
    return inputAmount;
  }
}
// calculation of Total Expenses
calculateBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let incomeAmount = getInputValue("income-input");
  let foodAmount = getInputValue("food-input");
  let rentAmount = getInputValue("rent-input");
  let clothesAmount = getInputValue("clothes-input");

  const totalExpenses = foodAmount + rentAmount + clothesAmount;

  const balanceAmount = incomeAmount - totalExpenses;
  if (totalExpenses <= incomeAmount) {
    document.getElementById("total-expenses").innerText = totalExpenses;
    document.getElementById("balance-field").innerText = balanceAmount;
  } else if (totalExpenses > incomeAmount) {
    alert("Your expense can't be bigger than your income.");
  }
});

//calculation of saving amount
document.getElementById("save-btn").addEventListener("click", function () {
  let incomeAmount = getInputValue("income-input");
  let remaining = document.getElementById("balance-field").innerText;
  let remainingAmount = remaining;
  let save = getInputValue("save");

  if (save <= 100) {
    const totalSaveAmount = (incomeAmount * save) / 100;

    if (totalSaveAmount <= remainingAmount) {
      const remaingBalance = remainingAmount - totalSaveAmount;

      document.getElementById("saving-amount").innerText = totalSaveAmount;

      document.getElementById("remaning-amount").innerText = remaingBalance;
    } else {
      alert("Your remaining balance is less than the money you want to save.");
    }
  } else if (save >= 101) {
    document.getElementById("saving-amount").innerText = "00";

    alert("you can't save more than 100 percent");
  }
});
