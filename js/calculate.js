const calculateBtn = document.getElementById("calculate-btn");

// get input from user
function getInputValue(inputID) {
  let inputBox = document.getElementById(inputID);
  let inputAmount = parseFloat(inputBox.value);

  if (inputID.value.length == 0) {
    return alert("Please fill the input field for:" + inputID);
  } else if (isNaN(inputAmount) || inputAmount < 0) {
    inputBox.value = "";
    return alert(
      "Please input valid amount of money in number format for:" + inputID
    );
  } else {
    return inputAmount;
  }
}
// calculation of Total Expenses
calculateBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const incomeAmount = getInputValue("income-input");
  const foodAmount = getInputValue("food-input");
  const rentAmount = getInputValue("rent-input");
  const clothesAmount = getInputValue("clothes-input");

  const totalExpenses = foodAmount + rentAmount + clothesAmount;

  const balanceAmount = incomeAmount - totalExpenses;
  if (totalExpenses <= incomeAmount) {
    document.getElementById("total-expenses").innerText = totalExpenses;
    document.getElementById("balance-field").innerText = balanceAmount;
  } else {
    alert("Your expense can't be bigger than your income.");
  }
});

// document.getElementById("save-btn").addEventListener("click", function () {
//   const income = inputValue("income");
//   const remaining = document.getElementById("balance").innerText;
//   const save = inputValue("save");

//   if (save <= 100) {
//     const totalSaving = (income * save) / 100;

//     if (totalSaving < parseFloat(remaining)) {
//       const remaingBalance = parseFloat(remaining) - totalSaving;

//       document.getElementById("savingAmount").innerText = totalSaving;

//       document.getElementById("remaningAmount").innerText = remaingBalance;
//     } else {
//       alert("Your remaining balnace is less then the amount you want save.");
//     }
//   } else {
//     alert("Please Select the percentage between 0 to 100");
//   }
// });
