export default function EndGameBanner() {
    let playerWonRound = true /*this will eventually come in via props */
    
    return (
        <div class="header">
           <div class={`endgame-banner-${playerWonRound? "win":"lose"}`}>{playerWonRound ? "YOU WIN!!!": "YOU LOSE!!!"}</div>
           <div class={`endgame-banner-${playerWonRound? "win":"lose"}`}>{playerWonRound ? "Well done! 🎉":  "Better start learning Assembly! 🤖"}</div>
        </div>
    )
}