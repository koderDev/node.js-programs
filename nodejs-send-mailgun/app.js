const express = require('express');
 // importing mailgun SDK;
var formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
const apiKey = ''; //key from the Mailgun 
// Your domain, from the Mailgun Control Panel
const domain = '';

const mailgun = new Mailgun(formData);
const client = mailgun.client({key: apiKey});

const from = ''; //from mail
 //path send mail
 app.get('/send', async function (req, res) {
    const messageData = {
        from: from,
        to: '', //email to
        subject: '',
        html: ``
      };
      
      client.messages.create(domain, messageData)
       .then((res) => {
         console.log(res);
       })
       .catch((err) => {
         console.error(err);
       });
 });
 
 const port = 8000;
 app.listen(port, () => {
   console.log(`server is listening on ${port}`);
 });