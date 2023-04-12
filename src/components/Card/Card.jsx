import Image from "next/image";
import Style from "./Card.module.css";
import { useRouter } from "next/router";

export default function Card({ text, icon, to }) {
    const router = useRouter();
    const handleClick = () => router.push("/questions/"+to);
    return(
        <section className={Style.container} onClick={handleClick}>
            <Image className={Style.image} src={icon} alt={"Icono de "+text}/>
            <h2 className={Style.title}>{text}</h2>
        </section>
    );
};