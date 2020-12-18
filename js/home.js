window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `
        <tr>
            <th>Fullname</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip code</th>
            <th>Phone Number</th>
            <th></th>
        </tr>
        <tr>
            <td>Madhu Vayya</td>
            <td>Subhashchandrabose nagar,Kukatpally</td>
            <td>Hyderabad</td>
            <td>Telangana</td>
            <td>500072</td>
            <td>7777777777</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">                    
            </td>
        </tr>`;
    document.querySelector('#display').innerHTML = innerHtml;        
}          