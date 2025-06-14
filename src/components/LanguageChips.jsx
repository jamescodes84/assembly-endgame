import { languages } from "../../languages"

export default function LanguageChips() {
   
    
    const languageElements = languages.map(language => {

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return (
            <span className="chip" style={styles} key={language.name}>{language.name} </span>
        )

    })
    return (
        <div className="language-chips">{languageElements}</div>
    )
}