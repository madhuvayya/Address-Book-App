class Contact {

    get id() { return this._id }
    set id(id) {
        this._id = id;
    }

    get fullName() { return this._fullName }
    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(fullName))
            this._fullName = fullName;
        else
            throw 'Name is incorrect!'
    }

    get phoneNumber() { return this._phoneNumber }
    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp('^([+])?(91)?[6-9]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw 'Entered invalid phone number.'
    }

    get address() { return this._address }
    set address(address) {
        const addressRegex = RegExp('^.{3,}$');
        var addressArray = address.split(",");
        let validWords = 0;
        addressArray.forEach( word => {
            if(addressRegex.test(word)){
                validWords++;
            }
        });
        if (addressArray.length == validWords)
            this._address = address;
        else
            throw 'Enter proper address!';
    }

    get city() { return this._city }
    set city(city) {
        this._city = city;
    }

    get state() { return this._state }
    set state(state) {
        this._state = state;
    }

    get zipcode() { return this._zipcode }
    set zipcode(zipcode) {
        this._zipcode = zipcode;
    }

    toString() {
        return  "Name: "+ this.fullName + ", Phone Number: "+ this.phoneNumber + ", Address: " + this.address
                + ", City: "+ this.city + ", State: "+ this.state + ", Zipcode: "+ this.zipcode;
    }
} 