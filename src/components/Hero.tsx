import { FC } from "react"
import { pagesHero } from "../utils/interface"

export const Hero: FC<pagesHero> = ({ heading, paragraph1, paragraph2, className }) => {
    return (
        <div className="pages__hero">
            <section className={`wrapper ${className}`}>
                <h2>{heading}</h2>
                {paragraph1 && <p>{paragraph1}</p>}
                {paragraph2 && <p>{paragraph2}</p>}
            </section>
        </div>
    )
}