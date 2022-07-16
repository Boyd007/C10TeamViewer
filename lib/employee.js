// CREATING MAIN CLASS CONSTRUCTOR: EMPLOYEE
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // GET NAME FUNCTION -> TO BE GIVEN BY USER
    getName() {
        return this.name;
    }

    // GET ID FUNCTION -> TO BE GIVEN BY USER
    getId() {
        return this.id;
    }

    // GET EMAIL FUNCTION -> TO BE GIVEN BY USER
    getEmail() {
        return this.email;
    }

    // GET ROLE FUNCTION -> IS EMPLOYEE
    getRole() {
        return "Employee";
    }
}

// EXPORTING
module.exports = Employee;