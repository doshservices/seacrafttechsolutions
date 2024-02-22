import { FC } from "react";
import { services } from "../data/services";

const Services: FC = () => {
    return (
        <div id="services">
            <div className="wrapper">
                <h2>SERVICES</h2>
                <h3>
                    Innovative
                    Technological
                    Driven Services
                </h3>
                <p>With a relentless pursuit of cutting-edge solutions, we leverage advanced technology to deliver groundbreaking services that set new standards in the marine industry, driving efficiency, safety, and excellence.</p>
                <div className="services__type">
                    {services.map((service: any, index: number) =>
                        <figure key={index}>
                            <img src={service.logo} alt="" loading="lazy" />
                            <figcaption>{service.name}</figcaption>
                        </figure>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Services;