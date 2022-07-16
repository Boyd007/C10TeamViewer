// LINKING MAIN CLASS CONSTRUCTOR: EMPLOYEE
const Employee = require('./employee');

// CREATING ENGINEER CLASS CONSTRUCTOR EXTENDED FROM EMPLOYEE
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // GET OFFICE NUMBER FUNCTION -> TO BE GIVEN BY USER
    getOfficeNumber() {
        return this.officeNumber;
    }

    // GET ROLE FUNCTION -> IS MANAGER
    getRole() {
        return "Manager";
    }
}

// EXPORTING
module.exports = Manager;