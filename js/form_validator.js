let contactObject = {};

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
    createAndStore();
}

const setContactObject = () => {
    contactObject._id = createContactId();
    contactObject._fullName = getInputValueById("#full-name"),
    contactObject._phoneNumber = getInputValueById("#phone-number"),
    contactObject._address = getInputValueById("#address"),
    contactObject._city = getInputValueById("#city"),
    contactObject._state = getInputValueById("#state"),
    contactObject._zipcode = getInputValueById("#zipcode")
    alert(JSON.stringify(contactObject));
}

const getInputValueById = (id) => {
    return document.querySelector(id).value;
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const createAndStore = () => {
    let contactsList = JSON.parse(localStorage.getItem("ContactsList"));
    if(contactsList){
        let contactData = contactsList
                                .find(contact => contact._id == contactObject._id);
        if(!contactData){
            contactsList.push(createContactData());
        } else {
            const index = contactsList
                                .map(contact => contact._id)
                                .indexOf(contactData._id);
            contactsList.
                    splice(index, 1, createContactData(contactData._id));
        }
    } else {
        contactsList = [createContactData()]
    }
    localStorage.setItem("ContactsList", JSON.stringify(contactsList))
}

const createContactData = (id) => {
    let contactData = new Contact();
    if (!id) 
        contactData.id = createContactId();
    else 
        contactData.id = id;

    setContactData(contactData);
    return contactData;
}

const setContactData = (contactData) => {
    try {
        contactData.fullName = contactObject._fullName;
    } catch(e) {
        setTextValue('.text-error', e);
        throw e;
    }
    try {
        contactData.phoneNumber = contactObject._phoneNumber;
    } catch(e) {
        setTextValue('.text-error', e);
        throw e;
    }
    try {
        contactData.address = contactObject._address;
    } catch(e) {
        setTextValue('.text-error', e);
        throw e;
    }        
    contactData.city = contactObject._city;
    contactData.state = contactObject._state;
    contactData.zipcode = contactObject._zipcode;
    contactData.id = contactObject._id;
    alert(contactData.toString());
}

const createContactId = () => {
    let contactID = localStorage.getItem("ContactID");
    contactID = !contactID ? 1 : (parseInt(contactID)+1).toString();
    localStorage.setItem("ContactID", contactID);
    return contactID;
}