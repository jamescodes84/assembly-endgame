import React from "react"
import Header from "./components/Header"
import GameStatusBanner from "./components/GameStatusBanner"
import LanguageChips from "./components/LanguageChips"


export default function App() {
  let gameOver = false
    return (
        <main>
            <Header />
            <GameStatusBanner />
            <LanguageChips />
        </main>
    )
}
