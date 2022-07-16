const Engineer = require('../lib/engineer');

test('checking to see if we get the constructor value gitHub for Engineer', () => {
    const gitHub = 'jessicamdittrich';
    const newEngineer = new Engineer('Jessica', '001', 'jessicad@me.com', gitHub);
    expect(newEngineer.gitHub).toBe(gitHub);
});

test('checking to see the return for getGitHub() function', () => {
    const gitHub = 'jessicamdittrich';
    const newEngineer = new Engineer('Jessica', '001', 'jessicad@me.com', gitHub);
    expect(newEngineer.getGitHub()).toBe(gitHub);
});

test('checking to see the return for getRole() function', () => {
    const newEngineer = new Engineer('Jessica', '001', 'jessicad@me.com', '000-000-0000', 'jessicamdittrich');
    expect(newEngineer.getRole()).toBe('Engineer');
});