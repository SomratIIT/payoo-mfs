
// Step 01 --add an event handler to the add money btn inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event)
{
    event.preventDefault();

// Step 2 --get money
const addMoneyInput = document.getElementById('input-add-money').value;

console.log(addMoneyInput);



// Step 3--- get the pin number

const addPinInput= document.getElementById('input-pin-number').value;
console.log(addPinInput);

// Step 3.5----verify the pin number
if(addPinInput==='1998')
{
    console.log('Successfully ' +addMoneyInput+' Taka Added');

    //Step-4  get the current balance
    
    const balance=document.getElementById('account-balance').innerText;
    console.log(balance);

    const newbalance= parseFloat(addMoneyInput)  + parseFloat(balance);
    console.log('Total Money = '+newbalance);

    document.getElementById('account-balance').innerText =newbalance;
}
else{

    alert('Failed To Add Money');
}

})



