import React,{useEffect} from 'react'
import {f} from "./test"

function Disply(props) {

//  const a=f;
//  console.log(a.result,111)

const TO=props.to;
 const FROM=props.from;
 const AMOUNT=props.amt;
 const CLK=props.clking

 const element=<></>
 
console.log(TO,FROM,AMOUNT);

  const api="";
    var myHeaders = new Headers();
  myHeaders.append("apikey", api);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  if(TO!=="" && FROM!=="" && CLK=="true"){
    var res;
  
  fetch("https://api.apilayer.com/exchangerates_data/convert?to="+TO+"&from="+FROM+"&amount="+AMOUNT, requestOptions)
  .then(response =>res =response)
  .then(result => console.log(result))
  .then(result =>alert(result))
  .then(result =>res=result)

  .catch(error => console.log('error', error));

  console.log(res,"abcd");
  
  // if (res.success="true"){
  //   element=<h1>{AMOUNT} in {FROM} will be equal to {res.result} in {TO} </h1>
  // }

}
    
  return (
    // element
    <></>
  )
}

export default Disply

//igesaHIvh3C5dqpVnN4qCYXS8swq48UU