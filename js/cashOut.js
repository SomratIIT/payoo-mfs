document.getElementById('btn-cash-out').addEventListener('click',function(event){

    event.preventDefault();
  const agentNumber = document.getElementById('input-agent-number').value;
  console.log(agentNumber);

  const amountCashOut= document.getElementById('input-cash-out').value;
  console.log(amountCashOut);
  const pinNumberOut= document.getElementById('cash-out-pin-number').value;

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