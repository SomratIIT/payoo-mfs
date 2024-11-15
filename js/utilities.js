console.log('How are you?')
function getInputFieldValueById(){
    const newMoney = document.getElementById('input-add-money').value;

    return newMoney;
}

function getInputFieldPinById(id){
    const pinNumber =document.getElementById(id).value;

    return pinNumber;
}