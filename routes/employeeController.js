const Client = require("../models/Client");

 class EmployeeList {
   /**
    * Handles the various APIs for displaying and managing tasks
    * @param {Client} client
    */
   constructor(client) {
     this.client = client;
   }
   async showTasks(req, res) {
     const querySpec = {
       query: "SELECT * FROM c",
    //    parameters: [
    //      {
    //        name: "@completed",
    //        value: false
    //      }
    //    ]
     };

     const items = await this.client.find(querySpec);
     res.render("index", {
       title: "Employee List",
       employees: items
     });
    console.log(__dirname);
    // res.send(path.join(__dirname+'/views/index.html'));
    // res.render('index.html');
    //  res.sendFile('../views/index.html',{
    //     title: "Employee List",
    //     employees: items
    //   });

   }

   async addTask(req, res) {
     const item = req.body;

     await this.client.addItem(item);
     res.redirect("/");
   }

   async completeTask(req, res) {
     const completedTasks = Object.keys(req.body);
     const employees = [];

     completedTasks.forEach(employee => {
       employees.push(this.client.updateItem(employee));
     });

     await Promise.all(employees);

     res.redirect("/");
   }
 }

 module.exports = EmployeeList;