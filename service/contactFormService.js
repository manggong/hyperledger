const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/SmartHC"

module.exports = {
  contactFormInsertOne: function (res, name, id, pw, message) {
    MongoClient.connect(url, function (err, db) {
      if (err) {
        console.log(err)
      } else {
        db = db.db("SmartHC") /*database명을 다시 한번 명시했다. 이거 안 하면 에러남*/
        console.log("db connected...ok")
        db.collection("contactForm").insertOne(
          {
            name: name,
            id: id,
            pw: pw,
            message: message,
          },
          (err, result) => {
            if (err) {
              console.log(err)
            } else {
              console.log("메세지 저장됨\n")
              console.log(result)
              res.send("회원 가입되셨습니다")
            }
          }
        )
      }
    })
  },
  login: function (req, res, id, pw) {
    MongoClient.connect(url, function (err, db) {
      if (err) {
        console.log(err)
      } else {
        db = db.db("SmartHC") /*database명을 다시 한번 명시했다. 이거 안 하면 에러남*/
        console.log("db connected...ok")
        db.collection("contactForm").findOne(
          {
            id: id,
            pw: pw,
          },
          (err, result) => {
            if (err) {
              console.log(err)
            } else {
              console.log("로그인 ok")
              console.log(result)
              req.session.loginedID = id
              res.send(result.name + "님 로그인되셨습니다")
            }
          }
        )
      } //end else
    })
  },
}
