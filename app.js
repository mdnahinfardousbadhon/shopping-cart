function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();

    
}


document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1280, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1280, false);
});

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1280;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;
}