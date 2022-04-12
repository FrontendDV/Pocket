// Get elements 
let incomeInput = document.getElementById('incomeInput')
let foodInput = document.getElementById('foodInput')
let rentInput = document.getElementById('rentInput')
let clothersInput = document.getElementById('clothersInput')
let calculateBtn = document.getElementById('calculateBtn')
let balanceField = document.getElementById('balanceField')
let totalExpenses = document.getElementById('totalExpenses')
let percentInput = document.getElementById('percentInput')
let saveBtn = document.getElementById('saveBtn')
let savingAmount = document.getElementById('savingAmount')
let remBalance = document.getElementById('remBalance')

// Listeners

// For Calculate button
calculateBtn.addEventListener('click',function(){
    totalExpensesFunc()
    calculateBalance()
    negativeNumber()
    emptyInputValues()
})
// For save Button
saveBtn.addEventListener('click',function(){
    savePercent()
    overall()
    negativeNumber()
    emptyPercentValue()
})

// This function checks if input is empty
function emptyInputValues(){
    let incomeInputValue = incomeInput.value
    let foodInputValue = foodInput.value
    let rentInputValue = rentInput.value
    let clothersInputValue = clothersInput.value


    if(incomeInputValue === "" || foodInputValue === "" || rentInputValue === "" || clothersInputValue === ""){
        totalExpenses.innerText = "Total expenses : please enter an valid number"
        balanceField.innerText = "Balance : please enter an valid number"
        totalExpenses.style.color = 'red'
        balanceField.style.color = 'red'
    }
}
// This function checks if percent input is empty
function emptyPercentValue(){
    let percentInputValue = percentInput.value

    if(percentInputValue === ""){
        savingAmount.innerText = "Saving Amount : please enter an valid number"
        remBalance.innerText = "Remaining Balance : please enter an valid number"
        balanceField.innerText = "Balance : please enter an valid number"
        savingAmount.style.color = 'red'
        remBalance.style.color = 'red'
        balanceField.style.color = 'red'
    }
}
// This function checks if input value is a negative number
function negativeNumber(){
    let incomeInputValue = parseInt(incomeInput.value)
    let foodInputValue = parseInt(foodInput.value)
    let rentInputValue = parseInt(rentInput.value)
    let clothersInputValue = parseInt(clothersInput.value) 
    let percentInputValue = parseInt(percentInput.value)

    if(incomeInputValue < 0){
        incomeInput.style.border = '1px solid red'
        totalExpenses.innerText = "Total expenses : please enter an valid number"
        balanceField.innerText = "Balance : please enter an valid number"
    }
    if(foodInputValue < 0){
        foodInput.style.border = '1px solid red'
        totalExpenses.innerText = "Total expenses : please enter an valid number"
        balanceField.innerText = "Balance : please enter an valid number"
    }
    if(rentInputValue < 0){
        rentInput.style.border = '1px solid red'
        totalExpenses.innerText = "Total expenses : please enter an valid number"
        balanceField.innerText = "Balance : please enter an valid number"
    }
    if(clothersInputValue < 0){
        clothersInput.style.border = '1px solid red'
        totalExpenses.innerText = "Total expenses : please enter an valid number"
        balanceField.innerText = "Balance : please enter an valid number"
    }
    if(percentInputValue < 0){
        percentInput.style.border = '1px solid red'
        balanceField.innerText = "Balance : please enter an valid number"
        savingAmount.innerText = "Saving Amount : please enter an valid number"
        remBalance.innerText = "Remaining Balance : please enter an valid number"
    }
    
}

// This function calculates the sum of expenses
function totalExpensesFunc(){
    let foodInputValue = parseInt(foodInput.value)
    let rentInputValue = parseInt(rentInput.value)
    let clothersInputValue = parseInt(clothersInput.value) 
    
    let overall = foodInputValue + rentInputValue + clothersInputValue

    if(overall < 0){
        totalExpenses.innerText = `Total expenses : Error` 
    }else{
        totalExpenses.innerText = `Total expenses : ` + overall
    }

   

    return totalExpensesFunc
}
// This function calculates the balance
function calculateBalance(){
    let incomeInputValue = parseInt(incomeInput.value)
    let foodInputValue = parseInt(foodInput.value)
    let rentInputValue = parseInt(rentInput.value)
    let clothersInputValue = parseInt(clothersInput.value)    

    let overall = incomeInputValue - (foodInputValue + rentInputValue + clothersInputValue)

    if(overall < 0){
        balanceField.innerText = `balance : Error` 
    }else{
        balanceField.innerText = `balance : ` + overall
    }
    return overall
}

// This function calculates the percentage
function savePercent(){
    let incomeInputValue = parseInt(incomeInput.value)
    let percentInputValue = parseInt(percentInput.value)
    
    let overall = (incomeInputValue*percentInputValue)/100
    if(overall > calculateBalance()){
        savingAmount.innerText = 'Saving Amount : Error'
    }else{
        savingAmount.innerText = `Saving Amount : ` + overall
    }
    return overall
}
// This function calculates the remaining balance
function overall(){
     let overall = calculateBalance()-savePercent()

    if(overall < 0){
        remBalance.innerText = `Remaining Balance : Error` 
    }else{
        remBalance.innerText = `Remaining Balance : ` + overall
    }
}
