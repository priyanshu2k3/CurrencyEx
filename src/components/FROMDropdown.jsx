import {React, useContext, useState } from 'react';
import { statevar } from '../context/statevar';



function FROMDropdown() {
        const {FROMcurrency, setFROMcurrency} =useContext(statevar);

    async function  changeCurrency(e){
        await setFROMcurrency(e);
        //console.log(FROMcurrency);
    }
    const elements=
    <div>
    <label>FROM
        <div className="dropdown" style={{marginTop:"20px"}}>
        <select onChange={(event) => changeCurrency(event.target.value)} value={FROMcurrency} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        
        <option className="dropdown-item" value="INR">Indian rupee</option>
        <option className="dropdown-item" value="USD">United States dollar</option>
        <option className="dropdown-item" value="EUR">Euro</option>
        <option className="dropdown-item" value="JPY">Japanese yen</option>
        <option className="dropdown-item" value="GBP">Pound sterling</option>
        <option className="dropdown-item" value="AUD">Australian dollar</option>
        <option className="dropdown-item" value="CAD">Canadian dollar</option>
        <option className="dropdown-item" value="CHF">Swiss franc</option>
        <option className="dropdown-item" value="CNY">Renminbi</option>
        <option className="dropdown-item" value="HKD">Hong Kong dollar</option>
        <option className="dropdown-item" value="NZD">New Zealand dollar</option>
        <option className="dropdown-item" value="SEK">Swedish krona</option>
        <option className="dropdown-item" value="KRW">South Korean won</option>
        <option className="dropdown-item" value="SGD">Singapore dollar</option>
        <option className="dropdown-item" value="NOK">Norwegian krone</option>
        <option className="dropdown-item" value="MXN">Mexican peso</option>
        <option className="dropdown-item" value="RUB">Russian ruble</option>
        <option className="dropdown-item" value="ZAR">South African rand</option>
        <option className="dropdown-item" value="TRY">Turkish lira</option>
        <option className="dropdown-item" value="BRL">Brazilian real</option>
        <option className="dropdown-item" value="TWD">New Taiwan dollar</option>
        <option className="dropdown-item" value="DKK">Danish krone</option>
        <option className="dropdown-item" value="PLN">Polish złoty</option>
        <option className="dropdown-item" value="THB">Thai baht</option>
        <option className="dropdown-item" value="IDR">Indonesian rupiah</option>
        <option className="dropdown-item" value="HUF">Hungarian forint</option>
        <option className="dropdown-item" value="CZK">Czech koruna</option>
        <option className="dropdown-item" value="ILS">Israeli new shekel</option>
        <option className="dropdown-item" value="CLP">Chilean peso</option>
        <option className="dropdown-item" value="PHP">Philippine peso</option>
        <option className="dropdown-item" value="AED">UAE dirham</option>
        <option className="dropdown-item" value="COP">Colombian peso</option>
        <option className="dropdown-item" value="SAR">Saudi riyal</option>
        <option className="dropdown-item" value="MYR">Malaysian ringgit</option>
        <option className="dropdown-item" value="RON">Romanian leu</option>

        </select>
        </div>
        </label>
        </div>

    return (
        <>{elements}</>
        );
    }

  
  
   export  default FROMDropdown;