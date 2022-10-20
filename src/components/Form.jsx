import React, {useState,useContext} from "react";
import { statevar } from "../context/statevar";

import Dropdown from "./Dropdown";

function Form() {
    return (<div >
    <div className="d-flex justify-content-around">
    <div>
    <label>Amount</label>
    <input style={{marginTop:"20px"}} className="form-control me-2" type="amount" placeholder="1.00" aria-label=""/>
    </div>
    <Dropdown/>
    {/* <Dropdown pop/> */}
</div>
<button type="button" className="btn btn-secondary btn-lg " style={{width:"100%",marginTop:"150px"}}>Get</button>
</div>
        );
  }


 export  default Form;