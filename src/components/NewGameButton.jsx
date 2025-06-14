export default function NewGameButton(){
    function handleClick () {
        console.log("button clicked")
    }
    return(
        <div className="new-game-button">
            <button onClick={handleClick} >New Game</button>
        </div>
        
    )
}