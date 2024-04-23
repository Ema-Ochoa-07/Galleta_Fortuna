
const Phrase = ({phraseSelect}) => {
    console.log(phraseSelect)
    
  return (
    <p className="italic">{phraseSelect.phrase}</p>
  )
}

export default Phrase