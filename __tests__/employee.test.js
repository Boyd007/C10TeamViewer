const Employee = require('../lib/employee');

test('checking to see if we get the constructor value name for Employee', () => {
    const name = 'Jessica';
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
});

test('checking to see if we get the constructor value id for Employee', () => {
    const id = '001';
    const newEmployee = new Employee('Jessica', id);
    expect(newEmployee.id).toBe(id);
});

test('checking to see if we get the constructor value email for Employee', () => {
    const email = 'jessicad@me.com';
    const newEmployee = new Employee('Jessica', '001', email);
    expect(newEmployee.email).toBe(email);
});


test('checking to see the return for getName() function', () => {
    const name = 'Jessica';
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
});

test('checking to see the return for getId() function', () => {
    const id = '001';
    const newEmployee = new Employee('Jessica', id);
    expect(newEmployee.getId()).toBe(id);
});

test('checking to see the return for getEmail() function', () => {
    const email = 'jessicad@me.com';
    const newEmployee = new Employee('Jessica', '001', email);
    expect(newEmployee.getEmail()).toBe(email);
});

test('checking to see the return for getRole() function', () => {
    const newEmployee = new Employee('Jessica', '001', 'jessicad@me.com');
    expect(newEmployee.getRole()).toBe('Employee');
});