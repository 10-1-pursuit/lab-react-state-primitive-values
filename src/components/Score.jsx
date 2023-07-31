import { useState } from 'react'

const Score = (props) => {

    const [tenOrMore, setTenOrMore] = useState(false)

    const [buttonTxt, setBttnText] = useState("Pay 10 points to change from +1 to +2")
    console.log(buttonTxt)

    function handleBttnText() {
        if (tenOrMore === false) {
            setBttnText('Pay 10 points to change from +1 to +2')
        } else {
        } setBttnText('Pay 10 points to change from +2 to +3')

    }
    return (
        <button onClick={(sythEvent) => {
            setTenOrMore(!tenOrMore)
            handleBttnText()
        }}>
            {buttonTxt}
        </button>
    )

}

export default Score