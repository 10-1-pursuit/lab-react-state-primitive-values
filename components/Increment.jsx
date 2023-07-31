import React from "react";

const IncrementButton = ({onClick,incrementor}) => {
    return <button onClick={onClick}>+{incrementor}</button>
}

export default IncrementButton;