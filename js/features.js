// Show the cash out form

document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    // Show cashout btn
    console.log('Show cash  out btn clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('addMoneyFrom').classList.add('hidden')
})
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    
  
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('addMoneyFrom').classList.remove('hidden');
})