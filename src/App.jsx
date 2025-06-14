import React from "react"
import Header from "./components/Header"
import GameStatusBanner from "./components/GameStatusBanner"
import LanguageChips from "./components/LanguageChips"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import NewGameButton from "./components/NewGameButton"


export default function App() {
    const [currentWord, setCurrentWord] = React.useState("javascript")
    return (
        <main>
            <Header />
            <GameStatusBanner />
            <LanguageChips />
            <CurrentWord value={currentWord}/>
            <Keyboard />
            <NewGameButton />
        </main>
    )
}
