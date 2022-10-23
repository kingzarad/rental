// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const request = require('request');

export default async function handler(req, res) {
  var options = {
    'method': 'POST',
    'url': 'https://g.payx.ph/payment_request',
    'headers': {
    },
    formData: {
      'x-public-key': 'pk_e4783abcc7de2c605448246817691400',
      'amount': '5',
      'merchantname': 'Techcabz',
      'description': 'Payment for services rendered',
      'customername': 'user test',
      'customeremail': 'user@gmail.com',
      'customermobile': '09123456789',
      'redirectsuccessurl': 'http://localhost:3000',
      'redirectfailurl': 'http://localhost:3000',  
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    //console.log(response.body)
    const data = res.status(201).json(response.body);
    console.log(data);
  });

  
  
}
