import React from "react"
import Header from "./components/Header"
import GameStatusBanner from "./components/GameStatusBanner"
import LanguageChips from "./components/LanguageChips"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import NewGameButton from "./components/NewGameButton"


export default function App() {

    
    const [currentWord, setCurrentWord] = React.useState("the")
    let [guessedLetters, setGuessedLetters] = React.useState([])
    console.log(guessedLetters)
    let letterArray = currentWord.split("")
    let letterObjects = letterArray.map(letter => {
      return ({
        letter: letter,
        hasBeenClicked: false,
        isInWord: false
      })
    })

    let letterArraySpans = letterArray.map((letter,index) => {    
      return (<span key={index}>{letter.toUpperCase()}</span>)
    })
    console.log(letterArraySpans)

    function handleLetterClick(buttonLetter) {
      
      if (guessedLetters.length == 0) {
        
        setGuessedLetters([buttonLetter])
      } else {
         setGuessedLetters(prevGuessedLetters => [...prevGuessedLetters, buttonLetter])
      }
      
    }

    return (
        <main>
            <Header />
            <GameStatusBanner />
            <LanguageChips />
            <CurrentWord letters={letterArraySpans}/>
            <Keyboard  handleLetterClick={handleLetterClick} />
            <NewGameButton />
        </main>
    )
}
