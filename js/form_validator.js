window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');    
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    name.addEventListener('input', function() {
        if(name.value == "" | nameRegex.test(name.value)) {
            textError.textContent = '';
        } else {
            textError.textContent = 'Entered invalid name.';
        } 
    });

    const phoneNumber = document.querySelector("#phone-number");
    const phoneNumberRegex = RegExp('^([+])?(91)?[6-9]{1}[0-9]{9}$');
    phoneNumber.addEventListener('input', function() {
        if(phoneNumber.value == "" | phoneNumberRegex.test(phoneNumber.value)) {
            textError.textContent = '';
        } else {
            textError.textContent = 'Entered invalid phone number.';
        } 
    });

    const address = document.querySelector("#address");
    const addressRegex = RegExp('^.{3,}$');
    address.addEventListener('input', function() {
        var addressArray = address.value.split(",");
        let validWords = 0;
        addressArray.forEach( word => {
            if(addressRegex.test(word)){
                validWords++;
            }
        });
        if(address.value == "" | addressArray.length == validWords) {
            textError.textContent = '';
        } else {
            console.log(addressArray+" "+ addressArray.length+" valid words:"+ validWords);
            textError.textContent = 'Entered proper address';
        } 
    });
})