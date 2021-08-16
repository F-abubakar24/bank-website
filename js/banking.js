// ====================================================
// handle deposit part event
// ====================================================
function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // clear the input fild
    depositInput.value = '';
    return newDepositAmount;
}


document.getElementById('deposit-btn').addEventListener('click', function(){
    // get deposit input value
    const depositInput = getInputValue();

    // get deposit display card;
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    // input money add with display card money
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    




    // update total account current balance after "Deposit"
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const preBalanceAmount = parseFloat(balanceAmountText);

    // add deposit money with main total balance;
    const newBalanceTotal = preBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
})



// ====================================================
    // handel withdraw part event
// ====================================================
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // withdraw input part
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // withdraw display card
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    
    // sum withdraw input && withdraw display
    const newWithdrawTotal = previousWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear the withdraw input fild
    withdrawInput.value = '';




    // update total account current balance after "withdraw"
    const withdrawBalanceTotal = document.getElementById('balance-total');
    const withdrawBalanceTotalText = withdrawBalanceTotal.innerText;
    const previousBalance = parseFloat(withdrawBalanceTotalText);

    // minus withdraw money with main total balance;
    const newAfterWithdrawBalance = previousBalance - withdrawAmount;
    withdrawBalanceTotal.innerText = newAfterWithdrawBalance;

})