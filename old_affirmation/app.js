const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);



// const options = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://type.fit/api/quotes",
//   "method": "GET"
// };
// fetch('https://motivational-quotes1.p.rapidapi.com/motivation', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.content))
// 	.catch(err => console.error(err));





// // email validation api
// const client = require('@sendgrid/client');
// client.setApiKey(process.env.SENDGRID_API_KEY);

// const id = 4900;
// const headers = {
//   "on-behalf-of": "The subuser's username. This header generates the API call as if the subuser account was making the call."
// };
// const data = {
//   "default": true
// };

// const request = {
//   url: `/v3/whitelabel/links/${id}`,
//   method: 'PATCH',
//   headers: headers,
//   body: data
// }

// client.request(request)
//   .then(([response, body]) => {
//     console.log(response.statusCode);
//     console.log(response.body);
//   })
//   .catch(error => {
//     console.error(error);
//   });

