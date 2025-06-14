export default function GameStatusBanner() {
    let roundOver = true /* this will eventually come in via props */
    let playerWonRound = true /*this will eventually come in via props */
    
    return (
        <>
        
            {
                roundOver ?
                    <div >
                    <div class={`gamestatus-banner-${playerWonRound ? "win":"lose"}`}>{playerWonRound ? "YOU WIN!!!": "YOU LOSE!!!"}</div>
                    <div class={`gamestatus-banner-${playerWonRound ? "win":"lose"}`}>{playerWonRound ? "Well done! 🎉":  "Better start learning Assembly! 🤖"}</div>
                    </div> 
                :
                    <div className="gamestatus-banner-empty"></div>
            }
            
        </>
    )
}