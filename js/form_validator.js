window.addEventListener('DOMContentLoaded', (event) => {
    const fullName = document.querySelector('#full-name');
    fullName.addEventListener('input', function() {
        if(fullName.value.length == 0) {
            setTextValue('.text-error', "");
            return;
        }
        try {
            (new Contact()).fullName = fullName.value;;
            setTextValue('.text-error', "");
        } catch (e) {
            setTextValue('.text-error', e);
        }
    });

    const phoneNumber = document.querySelector("#phone-number");
    phoneNumber.addEventListener('input', function() {
        if(phoneNumber.value == "") {
            setTextValue('.text-error', "");
            return;
        }
        try {
            (new Contact()).phoneNumber = phoneNumber.value;;
            setTextValue('.text-error', "");
        } catch (e) {
            setTextValue('.text-error', e);
        }
    });

    const address = document.querySelector("#address");
    address.addEventListener('input', function() {
        if(address.value == "") {
            setTextValue('.text-error', "");
        }
        try {
            (new Contact()).address = address.value;;
            setTextValue('.text-error', "");
        } catch (e) {
            setTextValue('.text-error', e);
        }
    });
})

const save = (event) => {
    setContactObject();
}

const setContactObject = () => {
    let contact = new Contact();
    contact.fullName = getInputValueById("#full-name"),
    contact.phoneNumber = getInputValueById("#phone-number"),
    contact.address = getInputValueById("#address"),
    contact.city = getInputValueById("#city"),
    contact.state = getInputValueById("#state"),
    contact.zipcode = getInputValueById("#zipcode")
    alert(contact.toString());
}

const getInputValueById = (id) => {
    return document.querySelector(id).value;
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}