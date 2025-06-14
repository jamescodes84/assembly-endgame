import React from "react"
import Header from "./components/Header"
import GameStatusBanner from "./components/GameStatusBanner"
import LanguageChips from "./components/LanguageChips"
import CurrentWord from "./components/CurrentWord"


export default function App() {
    const [currentWord, setCurrentWord] = React.useState("whatdoyoukno")
    return (
        <main>
            <Header />
            <GameStatusBanner />
            <LanguageChips />
            <CurrentWord value={currentWord}/>
        </main>
    )
}
