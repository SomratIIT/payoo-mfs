document.getElementById('btn-add-money').addEventListener('click',function(event)
{   
    event.preventDefault();

    // const newMoney = document.getElementById('input-add-money').value;
 newMoney=   getInputFieldValueById();
    // const pinNumber =document.getElementById('input-pin-number').value;
 const pinNumber = getInputFieldPinById('input-pin-number'); 
    if(pinNumber==='1998'){
        const balance = document.getElementById('account-balance').innerText;


        const totalBalance = parseFloat(newMoney) + parseFloat(balance);

        document.getElementById('account-balance').innerText= totalBalance;
    }
    else
    {
        alert('Get Out');
    }

    
   





})