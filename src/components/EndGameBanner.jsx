export default function EndGameBanner() {
    let roundOver = false /* this will eventually come in via props */
    let playerWonRound = true /*this will eventually come in via props */
    
    return (
        <>
        
            {roundOver ?
            <div >
            <div class={`endgame-banner-${playerWonRound ? "win":"lose"}`}>{playerWonRound ? "YOU WIN!!!": "YOU LOSE!!!"}</div>
            <div class={`endgame-banner-${playerWonRound ? "win":"lose"}`}>{playerWonRound ? "Well done! 🎉":  "Better start learning Assembly! 🤖"}</div>
            </div> :
            <div className="endgame-banner-empty"></div>
            }
            
        </>
    )
}