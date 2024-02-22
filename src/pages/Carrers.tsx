import { FC } from "react";
import { positions } from "../data/openPositions";
import { Position } from "../utils/interface";

const Carrers: FC = () => {
    return (
        <div className="carrers">
            <section className="carrers__hero">
                <h2>CAREERES</h2>
                <h3>Empowering
                    Success Together</h3>
                <p>We are committed to fostering a culture of diversity, inclusion, and collaboration. We believe that by bringing together people from different backgrounds and experiences, we can drive innovation and creativity to solve the industry's most complex challenges.
                </p>
                <p>
                    Join us at Seacraft Technology Solutions Limited and be part of a team that's shaping the future of subsea and marine technology. Explore our current career opportunities and start your journey toward a fulfilling and rewarding career with us.
                </p>
            </section>
            <section className="carrers__open__positions">
                <h2>Open Positions</h2>
                <div className="position">
                    {positions.map((position: Position, index: number) =>
                        <div key={index}>
                            <h4>{position.role}</h4>
                            <p>{position.qualification}</p>
                            <button>Apply Now</button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Carrers;