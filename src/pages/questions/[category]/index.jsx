import Styles from "./index.module.css";
import Option from "@/components/Option/Option";
const questions = 
    { 
        question: "¿Cuanto es 2 + 2?",
        options: [
            { text: "A. 3", veracity: false },
            { text: "B. 5", veracity: false },
            { text: "C. 4", veracity: true },
            { text: "D. 2", veracity: false },
        ]
    }

export default function Question() {
    return(
        <main className={Styles.maincontainer}>
            <h2>{questions.question}</h2>
            <section className={Styles.optioncontainer}>
                { questions.options.map(el => <Option option={el} key={el.text}/>) }
            </section>
        </main>
    )
}