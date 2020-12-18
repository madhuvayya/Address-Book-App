window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th>"
    + "<th>Zip code</th><th>Phone Number</th><th></th></tr>";

    let contactData = createContactsJson()[0]; 
    const innerHtml = `${headerHtml}
        <tr>
            <td>${contactData._fullName}</td>
            <td>${contactData._address}</td>
            <td>${contactData._city}</td>
            <td>${contactData._state}</td>
            <td>${contactData._zipcode}</td>
            <td>${contactData._phoneNumber}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">                    
            </td>
        </tr>`;
    document.querySelector('#display').innerHTML = innerHtml;        
}

const createContactsJson = () => {
    let contactsListLocal = [
        {
            _fullName: 'Madhu Vayya',
            _phoneNumber: 7777777777,
            _address: 'Subhashchandrabose nagar,Kukatpally',
            _city: 'Hyderabad',
            _state: 'Telangana',
            _zipcode: '500072'
        },
        {
            _fullName: 'Rajesh',
            _phoneNumber: 7777777778,
            _address: 'Nehru nagar',
            _city: 'Warangal',
            _state: 'Telangana',
            _zipcode: '5045612'  
        }        
    ];
    return contactsListLocal;
}