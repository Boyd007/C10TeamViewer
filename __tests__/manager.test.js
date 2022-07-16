const Manager = require('../lib/manager');

test('checking to see if we get the constructor value officeNumber for Manager', () => {
    const officeNumber = '000-000-0000';
    const newManager = new Manager('Jessica', '001', 'jessicad@me.com', officeNumber);
    expect(newManager.officeNumber).toBe(officeNumber);
});

test('checking to see the return for getOfficeNumber() function', () => {
    const officeNumber = '000-000-0000';
    const newManager = new Manager('Jessica', '001', 'jessicad@me.com', officeNumber);
    expect(newManager.getOfficeNumber()).toBe(officeNumber);
});

test('checking to see the return for getRole() function', () => {
    const newManager = new Manager('Jessica', '001', 'jessicad@me.com', '000-000-0000');
    expect(newManager.getRole()).toBe('Manager');
});