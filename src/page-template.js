
//create html file
const generateEmployeeCards = employeesArray => {
  return `
    <section class='row'>
      
        ${employeesArray
      .filter(({ title }) => title === 'Manager')
      .map(({ name, title, id, email, officeNumber }) => {
        return `
        <div class='col-3'>
          <div class='card'>
            <div class='card-header'>
              <div class='card-col-title'>
                <h2>${name}</h2>
              </div>
              <div class='card-col-title'>
                <h3><i class="fas fa-mug-hot"></i> ${title}</h3>
              </div>
            </div>
            <div class='card-body-row'>
              <div class='card-col-body'>
                <h4>ID: ${id}</h4>
              </div>
              <div class='card-col-body link'>
                <a href='mailto:${email}'>Email: ${email}</a>
              </div>
              <div class='card-col-body'>
                <h4>Office Number: ${officeNumber}</h4>
              </div>
            </div>
          </div>
        </div>       
        `;
      })
      .join('')}
      ${employeesArray
      .filter(({ title }) => title === 'Engineer')
      .map(({ name, id, email,title, github }) => {
        return `
          <div class='col-3'>
            <div class='card'>
              <div class='card-header'>
                <div class='card-col-title'>
                  <h2>${name}</h2>
                </div>
                <div class='card-col-title'>
                  <h3><i class="fas fa-glasses"></i> ${title} </h3>
                </div>
              </div>
              <div class='card-body-row'>
                <div class='card-col-body'>
                  <h4>ID: ${id}</h4>
                </div>
                <div class='card-col-body link'>
                  <a href='mailto:${email}'>Email: ${email}</a>
                </div>
                <div class='card-col-body link'>
                <a href='https://github.com/${gitHub}'>GitHub: ${gitHub}</a>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('')}
        ${employeesArray
      .filter(({ title }) => title === 'Intern')
      .map(({ name, id, email, title, school }) => {
        return `
          <div class='col-3'>
              <div class='card'>
                <div class='card-header'>
                  <div class='card-col-title'>
                    <h2>${name}</h2>
                  </div>
                  <div class='card-col-title'>
                    <h3><i class="fas fa-user-graduate"></i> ${title}</h3>
                  </div>
                </div>
                <div class='card-body-row'>
                  <div class='card-col-body'>
                    <h4>ID: ${id}</h4>
                  </div>
                  <div class='card-col-body link'>
                    <a href='mailto:${email}'>Email: ${email}</a>
                  </div>
                  <div class='card-col-body'>
                    <h4>School: ${school}</h4>
                  </div>
                </div>
              </div>
            </div>
          `;
      })
      .join('')}
    </section>
  `;
}

// insert infro from object created in index
module.exports = templateData => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Organization Chart</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>My Team<h1>
    </header>
    <main class="container">
      ${generateEmployeeCards(templateData)}
    </main>
  </body>
  </html>
  `;
};