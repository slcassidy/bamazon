// Calling the npm installed items
var mysql      = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'MySQL2019!!',
  database : 'bamazon'
});
 
connection.connect();
 
connection.query('SELECT id, product_name, department_name, price, stock_quantity from products', function (error, results, fields) {
  if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// console.log(fields)
console.log(results)
});
 
connection.end();

// Using sequelize
// const db = require('./models');

// db.sequelize.sync().then(function(){
//   db.Products.findAll({}).then(function(data){
//     console.log('------------PRINTING DB DATA-----------------');
//     console.log(JSON.stringify(data, null, 2));
//   });
// });

// *******************Inquire********************

inquirer
  .prompt([
    // Ask them from a list what they want to search for
    {
      type: 'list',
      message: 'What search category would you like to choose?',
      choices: [`Songs`, `Bands`, `Movies`],
      name: 'type'
    },
    // Here we ask the user to confirm.
    {
      type: 'confirm',
      message: 'Are you sure:',
      name: 'confirm',
      default: true
    },
        // Here we create a basic text prompt.
        {
          type: 'input',
          message: 'What would you like to search for today?',
          name: 'search'
        }   


  ])
  .then(function(inquirerResponse) {


  
//*******************Variables*********************** 
    let select = "";
    // view = inquirerResponse.search
    console.log(inquirerResponse.search)
    console.log(inquirerResponse.type)


// Case switch to identify which response to remove from inventory


      switch(inquirerResponse.type){
        case `Movies`:
        select = queryOmdb;
        break;
//         case 'Bands':
//         select = queryBand;
//         break;
          case 'Songs':
          spot();
          break;
        default:
        console.log ("Not Available")
      };

     
  axios.get(select).then(function(response) {
    // If the request was successful...
    if (response.status === 200) {    
      // Then log the data from the site!
      console.log(response.data);
    }    
  }); //Edn of axios




});
