const express = require("express")
const path = require("path")
var session = require("express-session")
var cookieParser = require("cookie-parser")
const app = express()

const contactFormService = require("./service/contactFormService")
const medicalFormService = require("./service/medicalFormService")

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser("!@#$%^&*()전은수는예쁘다"))
app.use(
  session({
    name: "JES_SID",
    timeout: 30,
    resave: false,
    saveUninitialized: false,
    secret: "!@#$%^&*()전은수는예쁘다",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
)

app.use(express.static(path.join(__dirname, "/public")))
app.use(express.json())

app.post("/contactForm", function (req, res) {
  var name = req.body.name
  var id = req.body.id
  var pw = req.body.pw
  var message = req.body.message
  console.log(name, id, pw, message)
  if (name && id && pw) {
    contactFormService.contactFormInsertOne(res, name, id, pw, message)
  } else {
    res.send("Failure")
  }
})

app.post("/medicalReportForm", function (req, res) {
  var name = req.body.name
  var ssn = req.body.ssn
  var addr = req.body.addr
  var email = req.body.email
  var visitDate = req.body.dday
  var desease = req.body.point
  var deseaseCode = req.body.code
  var content = req.body.desc
  console.log(name, ssn, addr, email, visitDate, desease, deseaseCode, content)
  if (name && ssn) {
    medicalFormService.medicalFormInsertOne(
      name,
      ssn,
      addr,
      email,
      visitDate,
      desease,
      deseaseCode,
      content
    )
    res.send("진료 확인서 저장 완료")
  } else {
    res.send("Failure")
  }
})

app.get("/medical_report_req", function (req, res) {
  console.log(req.session)
  if (req.session.loginedID) {
    res.sendFile(path.join(__dirname + "/public/medical_report.html"))
  } else {
    res.sendFile(path.join(__dirname + "/public/login.html"))
  }
})

app.post("/login", function (req, res) {
  var id = req.body.id
  var pw = req.body.pw
  console.log(id, pw)
  if (id && pw) {
    contactFormService.login(req, res, id, pw)
  } else {
    res.send("id와 pw를 입력하세요")
  }
})

app.listen(7777, function () {
  console.log("7777 server ready...")
})
