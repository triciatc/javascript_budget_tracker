// Tabs Script
const btContainer = document.querySelector('#budgetTabs')

btContainer
.querySelectorAll('.TabButton')
.forEach( tab => 
  tab.onclick =_=>
    {
    btContainer.dataset.tab = tab.dataset.tab
    }
  )

//Calculation Script
const expenseInputs = document.querySelectorAll(".expense");
const householdInputs = document.querySelectorAll(".household");
const lifestyleInputs = document.querySelectorAll(".lifestyle");
const familyInputs = document.querySelectorAll(".family");
const financeInputs = document.querySelectorAll(".finance");
const transportInputs = document.querySelectorAll(".transport");
const savingsInputs = document.querySelectorAll(".savings");
const incomeInputs = document.querySelectorAll(".income");
const expenseTotalElement = document.querySelector("#expenseTotal");
const incomeTotalElement = document.querySelector("#incomeTotal");
const householdTotalElement = document.querySelector("#householdTotal");
const lifestyleTotalElement = document.querySelector("#lifestyleTotal");
const familyTotalElement = document.querySelector("#familyTotal");
const financeTotalElement = document.querySelector("#financeTotal");
const transportTotalElement = document.querySelector("#transportTotal");
const savingsTotalElement = document.querySelector("#savingsTotal");
const finalBalanceElement = document.querySelector("#finalBalance");
const result = document.querySelector("#result");
const calculateBtn = document.querySelector("#calculate");


// Calculate total income
function calculateTotalIncome() {
  incomeTotalElement.value = Array.from(incomeInputs)
      .map(input => parseFloat(input.value) || 0)
      .reduce((total, value) => total + value, 0);
}

// Calculate total expenses
function calculateTotalExpense() {
  expenseTotalElement.value = Array.from(expenseInputs)
      .map(input => parseFloat(input.value) || 0)
      .reduce((total, value) => total + value, 0);
}

// Calculate total expenses
function calculateTotalExpense() {
  expenseTotalElement.value = Array.from(expenseInputs)
      .map(input => parseFloat(input.value) || 0)
      .reduce((total, value) => total + value, 0);
}

//Calculating total for household spending
function calculateTotalHousehold() {
    householdTotalElement.value =
      Array.from(householdInputs)
      .map(input => parseFloat(input.value) || 0)
      .reduce((total, value) => total + value, 0);
}

//Calculating total for lifestlye spending total
function calculateTotalLifestyle() {
  lifestyleTotalElement.value =
    Array.from(lifestyleInputs)
    .map(input => parseFloat(input.value) || 0)
    .reduce((total, value) => total + value, 0);
}

//Calculating total for family spending total
function calculateTotalFamily() {
  familyTotalElement.value =
    Array.from(familyInputs)
    .map(input => parseFloat(input.value) || 0)
    .reduce((total, value) => total + value, 0);
}

//Calculating total for finance spending total
function calculateTotalFinance() {
  financeTotalElement.value =
    Array.from(financeInputs)
    .map(input => parseFloat(input.value) || 0)
    .reduce((total, value) => total + value, 0);
}

//Calculating total for transport spending total
function calculateTotalTransport() {
  transportTotalElement.value =
    Array.from(transportInputs)
    .map(input => parseFloat(input.value) || 0)
    .reduce((total, value) => total + value, 0);
}

//Calculating total for savings spending total
function calculateTotalSavings() {
  savingsTotalElement.value =
    Array.from(savingsInputs)
    .map(input => parseFloat(input.value) || 0)
    .reduce((total, value) => total + value, 0);
}


// Calculate final balance
function calculateFinalBalance() {
  const totalIncome = parseFloat(incomeTotalElement.value) || 0;
  const totalExpense = parseFloat(expenseTotalElement.value) || 0;
  console.log(totalIncome - totalExpense)
  finalBalance.textContent = (totalIncome - totalExpense);
}

// Add event listeners
incomeInputs.forEach(input => {
  input.addEventListener("input", () => {
      calculateTotalIncome();
  });
});

expenseInputs.forEach(input => {
  input.addEventListener("input", () => {
      calculateTotalExpense();
  });
});

calculateBtn.addEventListener('click', () => {
  calculateFinalBalance();
  result.style.display = 'inline';
});


householdInputs.forEach(input => {
  input.addEventListener("input", () => {
    calculateTotalHousehold();
  });
});

lifestyleInputs.forEach(input => {
  input.addEventListener("input", () => {
    calculateTotalLifestyle();
  });
});

familyInputs.forEach(input => {
  input.addEventListener("input", () => {
    calculateTotalFamily();
  });
});    

financeInputs.forEach(input => {
  input.addEventListener("input", () => {
    calculateTotalFinance();
  });
});    

transportInputs.forEach(input => {
  input.addEventListener("input", () => {
    calculateTotalTransport();
  });
});    

savingsInputs.forEach(input => {
  input.addEventListener("input", () => {
    calculateTotalSavings();
  });
});    

