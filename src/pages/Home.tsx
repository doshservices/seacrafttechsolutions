import { FC } from "react";
import { Link } from "react-router-dom";
import { HomeSlider } from "../components";
import { services } from "../data/services";
import ArrowLight from "../assets/Icons/arrow-light.svg"
import patners from "../assets/Icons/Partners.png"
import chartsImg from "../assets/Seacraft Asset/Images/1707487196965.png"

const Home: FC = () => {
    return (
        <div className="homepage">
            <HomeSlider />
            <section className="about-seacraft">
                <h2>ABOUT SEACRAFT</h2>
                <h3>
                    Innovative &
                    Technological
                    Driven Solutions.
                </h3>
                <p>
                    Seacraft Technology Solutions Limited delivers versatile subsea and marine solutions globally.
                    Our expertise spans marine operations, ROV services, customized subsea tooling, and autonomous vehicles.
                    We ensure efficient facility maintenance, pipeline inspection, dredging, and corrosion control.
                    Our comprehensive services include chemical supply, wellbore cleanout, testing, and skilled manpower provision for onshore and offshore facilities.
                </p>
            </section>
            <section className="seacraft-offer">
                <h2>WHAT WE OFFER</h2>
                <h3>
                    Our Core Expertise
                </h3>
                <p className="intro">
                    From customized subsea tooling to autonomous unmanned vehicles, we deliver unparalleled expertise in facilitating safe and efficient operations beneath the waves.
                </p>
                <div className="services">
                    {services.map((service: any, index: number) =>
                        <div key={index}>
                            <img src={service.icon} alt="" />
                            <h4>{service.name}</h4>
                            <p>{service.briefDescription}</p>
                            <Link className="link" to={`${service.url}`}>
                                <img src={ArrowLight} alt="" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>
            <section className="patners">
                <h2>OUR PATNERS</h2>
                <h3>Excellence
                    Innovation &
                    Partnerships.
                </h3>
                <p>At Seacraft Technology Solutions Limited, we believe in the power of collaboration. By joining forces with industry leaders, we leverage collective expertise and resources to deliver cutting-edge solutions and unparalleled service. Together, we pave the way for transformative advancements in the subsea and marine sector, shaping a brighter future for all.</p>
            </section>
            <figure className="patners-img" >
                <img src={patners} width="100%" alt="" />
            </figure>
            <section className="charts">
                <figure>
                    <img src={chartsImg} alt="charts logo" />
                </figure>
                <div>
                    <h2>CAREERS</h2>
                    <h3>Chart Your Course to Success</h3>
                    <p>Join us in pushing the boundaries of subsea and marine technology, and embark on a rewarding journey where your skills and aspirations are valued and empowered to thrive.</p>
                    <Link to="#">
                        Careers
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home