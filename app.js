const express = require('express')
const app = express()
const port = 3000

const homePayload = {"home":{"logoWithName":"https://fakeimg.pl/274x49","annoucements":[{"title":"xyz announcement","desc":"xyz description","from":"2021-08-22T20:25:09+0000","to":"2021-08-22T20:25:09+0000"},{"title":"abc announcement","desc":"abc description","from":"2021-08-22T20:25:09+0000","to":"2021-08-22T20:25:09+0000"},{"title":"pqr announcement","desc":"pqr description","from":"2021-08-22T20:25:09+0000","to":"2021-08-22T20:25:09+0000"}],"tiles":[{"order":1,"title":"Member Login","desc":"Manage your account","icon":"face","url":"www.google.com","backgroundColor":"#efcced"},{"order":2,"title":"Schedule","desc":"calendar updates","icon":"schedule","url":"www.google.com","backgroundColor":"#efcced"},{"order":3,"title":"Facebook","desc":"Follow us on Facebook","icon":"schedule","url":"www.google.com","backgroundColor":"#efcced"},{"order":4,"title":"Card","desc":"Your membership","icon":"qr_code_scanner","url":"www.google.com","backgroundColor":"#efcced"}],"config":{"primaryColor":"#796AC6","secondaryColor":"#FEB144","primaryTextColor":"#ffffff","secondaryTextColor":"#000000"}}}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send(homePayload);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
