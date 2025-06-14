export default function GameStatusBanner() {
    let roundOver = true /* this will eventually come in via props */
    let playerWonRound = false /*this will eventually come in via props */
    
    return (
        <div className="gamestatus-div">
            {
                roundOver ?
                    <div >
                    <div className={`gamestatus-banner-${playerWonRound ? "win":"lose"}`}>{playerWonRound ? "YOU WIN!!!": "YOU LOSE!!!"}</div>
                    <div className={`gamestatus-banner-${playerWonRound ? "win":"lose"}`}>{playerWonRound ? "Well done! 🎉":  "Better start learning Assembly! 🤖"}</div>
                    </div> 
                :
                    <div className="gamestatus-banner-empty"></div>
            }
        </div>
    )
}