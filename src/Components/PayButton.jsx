const PayButton = ({ incrementor, handlePay }) => {
    return (
        <button onClick={handlePay}>
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
        </button>
    )
}

export default PayButton