const clients = require("./data")
const fs = require('fs');
// const clients = JSON.parse(fs.readFileSync("clientsData.json"));
// let clients = require("./clientsData.json");


exports.getAllClients = (req, res, next) => {
    console.log(`in getAllClients(): Going to fetch all clients...`);
    res.status(200).send(clients)
}

exports.addNewClient = (req, res, next) => {
    const clientToAdd = req.body
    console.log(`in addNewClient(): clientToAdd is `, clientToAdd);

    clients.push(clientToAdd)
    // fs.writeFileSync("clientsData.json", JSON.stringify(clients, null, 2));
    res.status(200).send(clients)
}
