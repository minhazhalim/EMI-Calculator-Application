const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const loanTenure = document.getElementById('loanTenure');
const calculate = document.getElementById('calculate');
document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
     inputNumber.oninput = () => {
          if(inputNumber.value.length > inputNumber.maxLength){
               inputNumber.value = inputNumber.value.slice(0,inputNumber.maxLength);
          }
     };
});
calculate.onclick = (event) => {
     event.preventDefault();
     const isYear = document.getElementById('year').checked;
     const isMonth = document.getElementById('month').checked;
     let noOfMonths = 0;
     if(isMonth == "" && isYear == ""){
          alert('Please Select Loan Tenure Type-> Month or Year');
     }else{
          if(isYear == true){
               noOfMonths = loanTenure.value * 12;
          }else{
               noOfMonths = loanTenure.value;
          }
          let r = parseFloat(interest.value) / 12 / 100;
          let p = amount.value;
          let n = noOfMonths;
          let emi = (p * r * Math.pow((1 + r),n)) / (Math.pow((1 + r),n) - 1);
          let totalInterest = (emi * n) - p;
          let totalPayment = totalInterest + parseFloat(p);
          document.getElementById('emi').innerHTML = '₹ ' + Math.round(emi);
          document.getElementById('totalInterest').innerHTML = '₹ ' + Math.round(totalInterest);
          document.getElementById('totalPayment').innerHTML = '₹ ' + Math.round(totalPayment);
     }
};