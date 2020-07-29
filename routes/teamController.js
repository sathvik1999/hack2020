const Client = require("../models/Client");
const { Item } = require("@azure/cosmos");

 class TeamList {
   /**
    * Handles the various APIs for displaying and managing tasks
    * @param {Client} client
    */
   constructor(client) {
     this.client = client;
   }
   async showTeams(req, res) {
     const querySpec = {
       query: "SELECT * FROM c",
     };

     const items = await this.client.find(querySpec);
     const orgs = [];
     

      items.forEach(function(item)
      {
          if(item.level=="1"){
            orgs.push(item)
          }
      });

     res.locals.orgs = orgs;
     res.locals.teams = items;
     res.render("index", {data: orgs});

    //  res.render("C:\Users\Sathvik\Documents\hack2020\public\index.html", {
    //   name:"example"
    // });
   }
 }

 module.exports = TeamList;