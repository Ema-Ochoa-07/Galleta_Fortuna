import getRandomNumber from "../services/getRandomNumber"
import quotes from "../data/phrases.json"
import photos from "../data/photos.json"

const BtnPhrase = ({setPhraseSelect, setBgSelected}) => {
    const hundleClick = () =>{
        const indexRandom = getRandomNumber(quotes.length)
        setPhraseSelect(quotes[indexRandom])
        
        const indexPhotosRandom = getRandomNumber(photos.length)
        setBgSelected(photos[indexPhotosRandom])
    }

  return (
    <button className="ml-auto block cursor-pointer bg-violet-950 py-2 px-4 text-white
    round-md text-sm hover:brightness-0-200" onClick={hundleClick}>Cambiar frase</button>
  )
}

export default BtnPhrase