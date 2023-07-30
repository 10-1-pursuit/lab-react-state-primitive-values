const IncrementButton = ({ incrementor, handleIncrement }) => {
    return <button onClick={handleIncrement}>+{incrementor}</button>
}

export default IncrementButton;