import { FC, useState, useRef, useEffect } from "react";
import { services } from "../data/services";
import { useNavigate } from "react-router-dom";

const Services: FC = () => {
    const elementRef = useRef<any>(null);
    const [width, setWidth] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            if (elementRef.current) {
                setWidth(elementRef.current.offsetWidth);
            }
        };

        if (elementRef.current) {
            setWidth(elementRef.current.offsetWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                    {services.slice(0, 12).map((service: any, index: number) =>
                        <figure onClick={() => navigate(`${service.url}`)} ref={elementRef} className="first" key={index}>
                            <img src={service.logo} alt={service.name} loading="lazy" />
                            <figcaption>{service.name}</figcaption>
                        </figure>
                    )}
                </div>
                <div className="last">
                    {services.slice(12).map((service: any, index: number) =>
                        <figure onClick={() => navigate(`${service.url}`)} style={{ maxWidth: width }} key={index}>
                            <img src={service.logo} alt={service.name} loading="lazy" />
                            <figcaption>{service.name}</figcaption>
                        </figure>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Services;