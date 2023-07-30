const VictoryScreen = ({ handleRestart }) => {
    return (
        <div>
            <h2>You Win!</h2>
            <button onClick={handleRestart}>Play again?</button>
        </div>
    )
}

export default VictoryScreen