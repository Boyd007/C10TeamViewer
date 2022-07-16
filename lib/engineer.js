// LINKING MAIN CLASS CONSTRUCTOR: EMPLOYEE
const Employee = require('./employee');

// CREATING ENGINEER CLASS CONSTRUCTOR EXTENDED FROM EMPLOYEE
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub;
    }

    // GET GUTHUB USERNAME FUNCTION -> TO BE GIVEN BY USER
    getGitHub() {
        return this.gitHub;
    }

    // GET ROLE FUNCTION -> IS ENGINEER
    getRole() {
        return "Engineer";
    }
}

// EXPORTING
module.exports = Engineer;