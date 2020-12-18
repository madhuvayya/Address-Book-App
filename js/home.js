let contactsList;

window.addEventListener('DOMContentLoaded', (event) => {
    contactsList = getContactsDataFromStorage();
    document.querySelector(".contacts-count").textContent = contactsList.length; 
    createInnerHtml();
});

const getContactsDataFromStorage = () => {
    return localStorage.getItem('ContactsList') ? 
                JSON.parse(localStorage.getItem('ContactsList')) : [];
} 


const createInnerHtml = () => {
    const headerHtml = "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th>"
    + "<th>Zip code</th><th>Phone Number</th><th></th></tr>";

    let innerHtml = `${headerHtml}`;
    for(const contactData of contactsList) {   
         innerHtml = `${innerHtml}
        <tr>
            <td>${contactData._fullName}</td>
            <td>${contactData._address}</td>
            <td>${contactData._city}</td>
            <td>${contactData._state}</td>
            <td>${contactData._zipcode}</td>
            <td>${contactData._phoneNumber}</td>
            <td>
                <img name="${contactData._id}" onclick="remove(${contactData._id})" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${contactData._id}" onclick="update(${contactData._id})" alt="edit" src="../assets/icons/create-black-18dp.svg">                    
            </td>
        </tr>`;
    }    
    document.querySelector('#display').innerHTML = innerHtml;        
}

const remove = (id) => {
    let contactData = contactsList.find(contact => contact._id == id);
    if (!contactData) return;
    const index = contactsList
                    .map(contact => contact._id)
                    .indexOf(contactData._id);
    contactsList.splice(index, 1);
    localStorage.setItem("ContactsList",JSON.stringify(contactsList));
    document.querySelector(".contacts-count").textContent = contactsList.length;
    createInnerHtml();                
}

const update=(id)=>{
    let contactData = contactsList.find(contact => contact._id == id);
    if(!contactData) return;
    localStorage.setItem('editContact' , JSON.stringify(contactData));
    window.location.replace("../pages/address_form.html");
}