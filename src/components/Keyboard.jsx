export default function Keyboard({ handleLetterClick }) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabet_array = alphabet.split("")

    let keyboard = alphabet_array.map(letter => {
        return (<button key={letter} onClick = {() => handleLetterClick(letter)}>{letter}</button>)
    })
    
    return (
       <div className="keyboard">{keyboard}</div>
    )
}