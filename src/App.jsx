import React from "react"
import Header from "./components/Header"
import GameStatusBanner from "./components/GameStatusBanner"


export default function App() {
  let gameOver = false
    return (
        <main>
            <Header />
            <GameStatusBanner />
          
        </main>
    )
}
