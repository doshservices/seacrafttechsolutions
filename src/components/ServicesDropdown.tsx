import { FC } from "react";
import { Link } from "react-router-dom";
import { ServiceLinks } from "../utils/interface";
import { services } from "../data/services";

export const ServiceDropdown: FC = () => {
    return (
        <ul className="services__dropdown">
            {services.map((service: ServiceLinks, index: number) =>
                <li key={index}>
                    <Link to={`${service.url}`}>{service.name}</Link>
                </li>
            )}
        </ul>
    )
}