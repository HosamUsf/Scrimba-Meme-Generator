import React from "react";
import memesData from "../memesData";

export default function Meme() {
  // let [memeImage, setMemeImage] = React.useState("");

  const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages,SetAllMemeImages] = React.useState(memesData)


  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevState =>({
      ...prevState,
      randomImage:url
    }) );
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }



  return (
      <main>
        <div className="meme--container">
          <input
              type="text"
              placeholder="Top text"
              className="meme--input"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
          />
          <input
              type="text"
              placeholder="Bottom text"
              className="meme--input"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
          />
          <button
              className="meme--button"
              onClick={getMemeImage}
          >
            Get a new meme image
          </button>
        </div>
        <div className="result--container">
          <img src={meme.randomImage}/>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
  );
}
