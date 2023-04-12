import Style from "./Option.module.css";

export default function Option({option}) {
    const { text, veracity } = option;
    return <label className={Style.option} onClick={() => console.log(veracity)}>
            { text }
            </label>
}