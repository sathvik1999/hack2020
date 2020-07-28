const config = {
    endpoint: "https://hackathon-2020.documents.azure.com:443/",
    key: "97aZaIfuRiVn2NukZDmBtQiSjpUGPoQyFQnwdFh5AtYIMXegVeDbTxSxZ9NfI6vMdhiqUhpToU6tfDNlm2718A==",
    databaseId: "hack_hilton",
    containerId: "Team",
    partitionKey: { kind: "Hash", paths: ["/tid"] }
};
  
module.exports = config;