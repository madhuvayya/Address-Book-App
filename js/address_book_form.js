let isUpdate = false;
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
    checkForUpdate();    
})

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        setContactObject();
        createAndStore();
        resetForm();
        window.location.replace("../pages/home.html")
    } catch (error) {
        return;
    }
}

const setContactObject = () => {
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

const resetForm = () => {
    setValue('#full-name','');
    setValue('#phone-number','');
    setValue('#address','');
    setSelectedIndex('#city',0);
    setSelectedIndex('#state',0);
    setSelectedIndex('#zipcode',0);
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
}

const checkForUpdate = () =>  {
    const contactJson = localStorage.getItem('editContact');
    isUpdate = contactJson ? true : false;
    if (!isUpdate) return;
    contactObject = JSON.parse(contactJson);
    setForm();  
}

const setForm = () => {
    setValue('#full-name', contactObject._fullName);
    setValue('#phone-number', contactObject._phoneNumber);
    setValue('#address', contactObject._address);
    setValue('#city', contactObject._city);
    setValue('#state', contactObject._state);
    setValue('#zipcode', contactObject._zipcode);    
}