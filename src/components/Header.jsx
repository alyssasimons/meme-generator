import React from "react"

export default function Header() {
    return (
        <header>
            <div className="headerContainer">
                <img className="headerLogo" src="/pepe.png" alt="Pepe the Frog creating a heart with his fingers"/>
                <h1 className="headerTitle">meme generator</h1>
            </div>
        </header>
    )
}