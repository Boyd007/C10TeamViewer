// FUNCTION TO GENERATE MANAGER TEAM CARD
function manager(data) {
    return `<div class="card">
                <div class="name-title">
                    <h2>${data[0].name}</h2>
                    <h4><i class="fa fa-coffee aria-hidden="true""></i>&nbsp;Manager</h4>
                </div>
                <div class="additional-info">
                    <p class="info-one">ID: ${data[0].id}</p>
                    <p class="info-two">Email: <a href="mailto:${data[0].email}">${data[0].email}</a></p>
                    <p class="info-three">Extension: ${data[0].officeNumber}</p>
                </div>
            </div>`
}

// FUNCTION TO GENERATE ENGINEER TEAM CARD(S)
function newEngineer(data) {
    let engineerMember = [];

    data.forEach(engineer => {
        engineerMember.push(`<div class="card">
        <div class="name-title">
            <h2>${engineer.name}</h2>
            <h4><i class="fa fa-cogs"></i>&nbsp;Engineer</h4>
        </div>
        <div class="additional-info">
            <p class="info-one">ID: ${engineer.id}</p>
            <p class="info-two">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="info-three">GitHub: <a href="https://www.github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
        </div>
    </div>`);
    });
    return engineerMember.join("");
}

// FUNCTION TO GENERATE INTERN TEAM CARD(S)
function newIntern(data) {
    let internMember = [];

    data.forEach(intern => {
        internMember.push( `<div class="card">                
        <div class="name-title">
            <h2>${intern.name}</h2>
            <h4><i class="fa fa-graduation-cap"></i>&nbspIntern</h4>
        </div>
        <div class="additional-info">
            <p class="info-one">ID: ${intern.id}</p>
            <p class="info-two">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="info-three">School: ${intern.school}</p>
        </div>
    </div>`);
    });
    return internMember.join("");
}

// MAIN FUNCTION TO GENERATE HTML DOCUMENT
function generateSite(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet"  type='text/css'>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>Your Team!</title>
    </head>
    <body>
        
        <div id="container">

            <header><h1>Your Team</h1></header>

            <main>
            ${manager(data.filter(member => member.getRole() === "Manager"))}
            ${newEngineer(data.filter(member => member.getRole() === "Engineer"))}
            ${newIntern(data.filter(member => member.getRole() === "Intern"))}
            </main>

        </div>

    </body>
    </html>`
}

// EXPORTING
module.exports = generateSite;