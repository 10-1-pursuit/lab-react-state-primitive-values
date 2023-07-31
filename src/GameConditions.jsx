import { useState } from "react"
import App from "./App.jsx"



const onClickCount = (count) => {

    const [countReachesTen, SetcountReachesTen] = useState(10)

    const [countToZero, SetCountToZero] = useState(0)

    const [countGoesUpOne, SetCountGoesUpOne] = useState(+1)




    function GameCondition(scoreCount) {

        if (countReachesTen === true) {

            SetcountReachesTen.addEventListener("click", (event) => {



            })
        }




    }
}