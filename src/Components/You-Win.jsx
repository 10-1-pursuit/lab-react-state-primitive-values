
export default function YouWin() {
    return (
        <>
            <h2>You Win!</h2>
            <button onClick={() => window.location.reload(false)}>Play again?</button></>
    );
}
