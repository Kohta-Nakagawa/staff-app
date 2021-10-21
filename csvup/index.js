var admin = require("firebase-admin");

var serviceAccount = require("./staff-app-29611-firebase-adminsdk-s6wl2-72518095cf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://staff-app-29611-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
const fs = require("fs");
const csvSync = require("csv-parse/lib/sync");
const file = "hoge.csv"; //インポートしたいcsvファイルをindex.jsと同じ階層に入れてください
let data = fs.readFileSync(file); //csvファイルの読み込み
let responses = csvSync(data); //parse csv
let objects = []; //この配列の中にパースしたcsvの中身をkey-value形式で入れていく。

responses.forEach(function(response) {
  objects.push({
    _id: response[0],
    created_at: response[1],
    id: response[2],
    memo: response[3],
    playCount: response[4],
    title: response[5],
    tiupdated_attle: response[6]
  });
}, this);

objects.shift(); //ヘッダもインポートされてしまうから、配列の一番最初のelementは削除します。

return db
  .runTransaction(function(transaction) {
    return transaction.get(db.collection("games")).then(doc => {
      objects.forEach(function(object) {
        if (object["_id"] != "") {
          let id = object["_id"];
          delete object._id;
          transaction.set(db.collection("games").doc(id), object);
        } else {
          delete object._id;
          transaction.set(db.collection("games").doc(), object);
        }
      }, this);
    });
  })
  .then(function() {
    console.log("success");
  })
  .catch(function(error) {
    console.log("Failed", error);
  });
