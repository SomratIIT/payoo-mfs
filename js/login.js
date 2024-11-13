
// Set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // prevent default behavior(prevent reloading browser)
event.preventDefault();


    console.log('Login Button Clicked');
    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;

   

    const pinNumber = document.getElementById('pin-dao').value;

    if(phoneNumber==='017' && pinNumber==='1998')
    {
       

        window.location.href='/home.html';
    }

    else{
        alert('Get Out');
    }
   
})