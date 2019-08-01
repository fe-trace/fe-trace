@setAddress
class Clid {
    constructor(name, age) {
        this.name = name;
    }

    getAddress() {
        return this.address;
    }
}

function setAddress(target, key, descriptor) {
    console.log(target, key, descriptor);
    // return target;
}