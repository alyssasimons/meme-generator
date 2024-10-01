import React from "react"
import {useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = useState("")

    function getMeme() {
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMeme(memeArray[randomNumber].url)
        console.log(memeUrl)
    }

    return (
        <main>
            <div className="formContainer">
                <form className="form">
                    <div className="topForm">
                        <label>top text: </label>
                        <input className="formInput" type="text"></input>
                    </div>
                    <div className="bottomForm">
                        <label>bottom text: </label>
                        <input className="formInput" type="text"></input> 
                    </div>
                </form>
                <input className="button" onClick={getMeme} 
                type="submit" value="generate meme image"></input>
            </div>
            <div className="memeImageContainer">
                <img className="meme" src={meme} alt="Random meme image"/>
            </div>
        </main>
    )
}