import React from "react";

const PayButton = ({onClick,incrementor}) => {
    return (
        <button onClick={onClick}>
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
        </button>
    )
}

export default PayButton;