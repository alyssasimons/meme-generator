import React from "react"
import {useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://th.bing.com/th/id/OIP.V0npe_Q1op_2gN92DIXnwAHaH3?rs=1&pid=ImgDetMain"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMeme() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
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
                <img className="meme" src={meme.randomImage} alt="Random meme image"/>
            </div>
        </main>
    )
}