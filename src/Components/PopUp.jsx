import React from "react";
import { useState } from "react";

function Popup(){

    let [check10, setCheck10] = useState(false)
    let [changeText, setChangeText] = useState("")

    function DisplayChange(){
        if(check10 === true){
            setChangeText("You can't afford that!")
        }
        setChangeText("")
    }

    return(
        <div className="popUp">
            <h2>
            {changeText}
            </h2>
        </div>
    )
}
export default Popup