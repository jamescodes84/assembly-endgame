export default function CurrentWord({ value }) {
   // const letterVector = value.map(letter => <span>letter</span>)
   let valueArray = value.split("")
   
   let valueArraySpan = valueArray.map((letter,index) => {
        
        return (<span key={index}>{letter.toUpperCase()}</span>)
    })

    
    return (
        <div className="current-word">{valueArraySpan}</div>
    )
}