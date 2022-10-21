import React, {useState,useContext} from "react";
import { statevar } from "../context/statevar";
import Disply from "./Disply";



import FROMDropdown from "./FROMDropdown";
import TODropdown from "./TODropdown";

function Form() {

    const [TOcurrency, setTOcurrency] = useState("");
    const [FROMcurrency, setFROMcurrency] = useState("");
    const [amount,setamount]=useState(0.00);
    const [clk, setclk] = useState("false");


    var element=<></>;
    function calldata(){
        if(TOcurrency!=="" && FROMcurrency!==""){
            console.log(FROMcurrency,TOcurrency)
            setclk("true")
        }
    }
    function changeAMT(e){console.log("456");
        setamount(e)}

    return (<div>
    <div className="d-flex justify-content-around">
    <div>
    <label>Amount</label>
    <input style={{marginTop:"20px"}} value={amount} onChange={(e)=>changeAMT(e.target.value)} className="form-control me-2" type="amount" placeholder="1.00" aria-label=""/>
    </div>
    <statevar.Provider value ={{FROMcurrency, setFROMcurrency}}>
    <FROMDropdown/>
    </statevar.Provider>

    <statevar.Provider value ={{TOcurrency, setTOcurrency}}>
    <TODropdown/>
    </statevar.Provider>

</div>
<button type="button" className="btn btn-secondary btn-lg " style={{width:"100%",marginTop:"150px"}} onClick={calldata}>Get</button>
<Disply to={TOcurrency} from={FROMcurrency} amt={amount} clking={clk}/>

</div>
        );
  }


 export  default Form;