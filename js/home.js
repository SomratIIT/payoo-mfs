
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
})