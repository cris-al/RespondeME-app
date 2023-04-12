import { useRouter } from "next/router";
import Styles from "./index.module.css";
import Option from "@/components/Option/Option";
const options = [
    { text: "Opción 1", veracity: false },
    { text: "Opción 2", veracity: false },
    { text: "Opción 3", veracity: true },
    { text: "Opción 4", veracity: false },
];
export default function Question() {
    const router = useRouter();
    const { category } = router.query;

    return(
        <main className={Styles.maincontainer}>
            <h2>Categoria: {category}</h2>
            <section className={Styles.optioncontainer}>
                { options.map(el => <Option option={el} key={el.text}/>) }
            </section>
        </main>
    )
}