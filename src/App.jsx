import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import getRandomNumber from './services/getRandomNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'
import photos from './data/photos.json'

function App() {

const indexRandom = getRandomNumber(quotes.length)
const [phraseSelect, setPhraseSelect] = useState(quotes[indexRandom])

const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)])
console.log(quotes)

const objStyle = {
  backgroundImage: `url(/img/fondo${bgSelected}.png)`
}
  return (
    <div style={objStyle} className='min-h-screen flex justify-center items-center bg-cover bg-center'>
      <h1 className='absolute top-20 text-2xl uppercase font-bold'>Galleta de la fortuna</h1>
      <article className='max-w-[400px] p-6 bg-[#9D68CB] bg-opacity-45 rounded-xl shadow-2xl'>
        <Phrase phraseSelect={phraseSelect}/>
        <BtnPhrase 
        setPhraseSelect={setPhraseSelect}
        setBgSelected = {setBgSelected}
        /> 
      </article>      
    </div>
  )
}

export default App