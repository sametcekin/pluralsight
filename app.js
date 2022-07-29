const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const circulationRepo = require("./repos/circulationRepo");
const data = require("./circulation.json");

const url = "mongodb://localhost:27017";
const dbName = "circulation";

async function main() {
  const client = new MongoClient(url);
  await client.connect();

  const results = await circulationRepo.loadData(data);

  const admin = client.db(dbName).admin();
  
  assert.equal(data.length, results.insertedCount);

  // console.log(results.insertedCount, results.ops);
  // console.log(await admin.serverStatus());
  // console.log(await admin.listDatabases());
}

main();
