const loanAmountInput = document.getElementById('loan-amount');
const interestRateInput = document.getElementById('interest-rate');
const loanTenureInput = document.getElementById('loan-tenure');
const loanAmountValue = document.getElementById('loan-amount-value');
const interestRateValue = document.getElementById('interest-rate-value');
const loanTenureValue = document.getElementById('loan-tenure-value');
const monthlyPayment = document.getElementById('monthly-payment');
function calculateMonthlyPayment(){
     const loanAmount = parseFloat(loanAmountInput.value);
     const interestRate = parseFloat(interestRateInput.value) / 100 / 12;
     const loanTenure = parseInt(loanTenureInput.value) * 12;
     const numerator = loanAmount * interestRate * Math.pow(1 + interestRate,loanTenure);
     const denominator = Math.pow(1 + interestRate,loanTenure) - 1;
     const payment = numerator / denominator;
     monthlyPayment.textContent = `Monthly Payment: $${payment.toFixed(2)}`;
}
function updateValues(){
     loanAmountValue.textContent = `$${parseFloat(loanAmountInput.value).toLocaleString()}`;
     interestRateValue.textContent = `${parseFloat(interestRateInput.value).toFixed(1)}%`;
     loanTenureValue.textContent = `${loanTenureInput.value} years`;
     calculateMonthlyPayment();
}
updateValues();
loanAmountInput.addEventListener('input',updateValues);
interestRateInput.addEventListener('input',updateValues);
loanTenureInput.addEventListener('input',updateValues);