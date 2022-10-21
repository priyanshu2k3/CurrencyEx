// var f={
//     "date": "2018-02-22",
//     "historical": "",
//     "info": {
//       "rate": 148.972231,
//       "timestamp": 1519841432
//     },
//     "query": {
//       "amount": 25,
//       "from": "GBP",
//       "to": "JPY"
//     },
//     "result": 3724.305775,
//     "success": true
//   }

// var data=function fetching(){ 
//  const TO="INR";
//  const FROM="USD";
//  const AMOUNT=1.0;
//  const CLK="true";

//  var myHeaders = new Headers();
//  myHeaders.append("apikey", "igesaHIvh3C5dqpVnN4qCYXS8swq48UU");
 
//  var requestOptions = {
//    method: 'GET',
//    redirect: 'follow',
//    headers: myHeaders
//  };
//     fetch("https://api.apilayer.com/exchangerates_data/convert?to="+TO+"&from="+FROM+"&amount="+AMOUNT, requestOptions)
//    .then(response => response.text())
//    .then(result => console.log(result))
//    .catch(error => console.log('error', error));

// }
// export{f,fetching};


// //var res=fetch("https://api.apilayer.com/exchangerates_data/convert?to="+TO+"&from="+FROM+"&amount="+AMOUNT, requestOptions)