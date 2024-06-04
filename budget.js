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
        const expense = expense[i];
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
    localStorage.setItem("expenses",jSON.stringfy(expenses));
}