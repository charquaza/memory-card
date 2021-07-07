function Scoreboard(props) {
    return (
        <section>
            <p><span className="underline">Current Score</span>: {props.currScore}</p>
            <p><span className="underline">High Score</span>: {props.highScore}</p>
        </section>
    );
}

export default Scoreboard;