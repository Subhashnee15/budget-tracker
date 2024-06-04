//Get form , expense list and the total amount elements
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalAmountElement = document.getElementById("total-amount");

// Initialize expense array from localStorage

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//function to render expense in tabular form
function renderExpenses() {
    // clear expense list
    expenseList.innerHTML ="" ;
    // initialize total amount 
    let totalAmount = 0;
    
    // Loop through expenses array and create table rows
    for(let i = 0; i <expenses.length; i++) {
        const expense = expenses[i];
        const expenseRow = document.createElement("tr");
        expenseRow.innerHTML = `
        <td>${expense.name}</td>
        <td>$${expense.amount}</td>
        <td class
        ="delete-btn" data-id = "${i}">Delete</td>
        `;
        expenseList.appendChild(expenseRow);

        //Update total amount
        totalAmount += expense.amount;

    }
    //update total Amount display 
    totalAmountElement.textContent =
    totalAmount.toFixed(2);
    //Save expense to local storage
    localStorage.setItem("expenses",
    JSON.stringfy(expenses));
}

// function to add expense
function addExpense(event) {
    event.preventDefault();

    // Get expense name nad amount from form
    const expenseNameInput =
    document.getElementById("expense-name");
    const expenseAmountInput = 
    document.getElementById("expense-amount");
    const expenseName =
    expenseNameInput.value;
    const expenseAmount = 
    parseFloat(expenseAmountInput.value);

    // clear forms inputs
    expenseNameInput.value = "";
    expenseAmountInput.value = "";

    // validate inputs
    if (expenseName === "" || isNaN(expenseAmount)) {
        alert ("Please enter valid expense details. ");
        return;
    }

    // create new expense object
    const expense = {
        name : expenseName,
        amount : expenseAmount,
    };

    //add expenses to expense array
    expenses.push(expense);
  // render expense 
  renderExpenses();

}
// Function to delete expense
function deleteExpense(event) {
    if(event.targetclassList.contains("delete-btn")) {
        // Get expense index from data-id attribute
        const expenseIndex = 
        parseInt(event.target.getAttribute("data-id"));

        // Remove expense from expenses array
        expenses.splice(expenseIndex,1);

        // Render expenses
        renderExpenses();
    }
}

// Add event listeners
expenseForm.addEventListener("submit", addExpense);
expenseList.addEventListener("click",deleteExpense);

// Render initial expense on page load
renderExpenses();