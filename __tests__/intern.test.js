const Intern = require('../lib/intern');

test('checking to see if we get the constructor value school for Intern', () => {
    const school = 'University of Toronto';
    const newIntern = new Intern('Jessica', '001', 'jessicad@me.com', school);
    expect(newIntern.school).toBe(school);
});

test('checking to see the return for getSchool() function', () => {
    const school = 'University of Toronto';
    const newIntern = new Intern('Jessica', '001', 'jessicad@me.com', school);
    expect(newIntern.getSchool()).toBe(school);
});

test('checking to see the return for getRole() function', () => {
    const newIntern = new Intern('Jessica', '001', 'jessicad@me.com', '000-000-0000', 'University of Toronto');
    expect(newIntern.getRole()).toBe('Intern');
});