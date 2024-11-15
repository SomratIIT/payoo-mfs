document.getElementById('btn-cash-out').addEventListener('click',function(event){

    event.preventDefault();
  // const agentNumber = document.getElementById('input-agent-number').value;
  
const agentNumber = getInputFieldPinById('input-agent-number');

console.log(agentNumber);
  // const amountCashOut= document.getElementById('input-cash-out').value;
const amountCashOut=getInputFieldPinById('input-cash-out');
  console.log(amountCashOut);
  // const pinNumberOut= document.getElementById('cash-out-pin-number').value;
  const pinNumberOut = getInputFieldPinById('cash-out-pin-number'); 
  console.log(pinNumberOut);
  if(pinNumberOut==='1998')
  {
    const OldMoney = document.getElementById('account-balance').innerText;

    const remainBalance = parseFloat(OldMoney) - parseFloat(amountCashOut);
    document.getElementById('account-balance').innerText = remainBalance;
  }
  else{
    alert('Get Lost Fucking Person');
  }
})