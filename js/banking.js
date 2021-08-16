// ================= all input prossing part =========================
function getInputValue(id){
    const inputId = document.getElementById(id);
    const inputValueText = inputId.value;
    const inputValueNumber = parseFloat(inputValueText);
    inputId.value = '';
    return inputValueNumber;
}

// ================= all display card prossing part =========================
function displayCard(id, newAmount){
    const displayCardId = document.getElementById(id);
    const cardAmountText = displayCardId.innerText;
    const preCardAmountNumber = parseFloat(cardAmountText);
    const cardTotal = preCardAmountNumber + newAmount;
    return displayCardId.innerText = cardTotal;
}

// ================= Balance handleing part =========================
function getCurrentBalance(){
    const balanceId = document.getElementById('balance-total');
    const balanceAmountText = balanceId.innerText;
    const preBalanceAmountNumber = parseFloat(balanceAmountText);
    return preBalanceAmountNumber;
}
function balance(currentAmount, isTrue){
    const balanceId = document.getElementById('balance-total');
    const preBalanceAmountNumber = getCurrentBalance();
    if (isTrue == true){
        const finalBalance = preBalanceAmountNumber + currentAmount;
        balanceId.innerText = finalBalance;
    }else{
        const finalBalance = preBalanceAmountNumber - currentAmount;
        balanceId.innerText = finalBalance;
    }
}

// =======================================================
// ================= Deposit Part ========================
// =======================================================
document.getElementById('deposit-btn').addEventListener('click', function(){
    // input part
    const inputFild = getInputValue('deposit-input');

    if (inputFild > 0){
        // display on card proces
        displayCard('deposit-total', inputFild)
        // total balance handle
        balance(inputFild, true);
    }else{
        alert('Please Input a Positive Number!!!')
    }
    
})

// =======================================================
// ================= withdraw Part =======================
// =======================================================
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // input part
    const inputFild = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (inputFild > 0 && currentBalance > inputFild){
        // display on card proces
        displayCard('withdraw-total', inputFild);
        // total balance handle
        balance(inputFild, false);
    }
    if(currentBalance < inputFild){
        alert('Your Balance Is Very Low, You Can Not Withdraw');
    }

})