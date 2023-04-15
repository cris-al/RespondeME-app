import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Category() {
    const router = useRouter()

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push("/questions/developer")
        }, 3000)
        return () => clearTimeout(timeout)
    }, [])
    return(
        <main>
            <h1>Comenzando...</h1>
            <h3>count</h3>
        </main>
    )
}