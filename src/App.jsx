import React from "react"
import Header from "./components/Header"
import EndGameBanner from "./components/EndGameBanner"


export default function App() {
  let gameOver = false
    return (
        <main>
            <Header />
            <EndGameBanner />
          
        </main>
    )
}
