import { FC } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { HomeSlider } from "../components";
import ArrowLight from "../assets/Icons/arrow-light.svg"
import patners from "../assets/Icons/Partners.png"
import chartsImg from "../assets/Seacraft Asset/Images/1707487196965.png"
import chartBg from "../assets/Seacraft Asset/Images/charts-bg.png"
import chartBgDesktop from "../assets/Seacraft Asset/Images/chart-bg-desktop.png"
import { latestNews } from "../data/latestNews";
import { latestUpdate } from "../utils/interface";
import { useWindowWidth } from "../utils/useWindowWidth";

const Home: FC = () => {
    const windowWidth = useWindowWidth()

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
                    {services.slice(0, 8).map((service: any, index: number) =>
                        <div key={index}>

                            <img src={service.icon} alt="" loading="lazy" />
                            <h4>{service.name}</h4>
                            <p>{service.briefDescription}</p>
                            <Link className="link" to={`${service.url}`}>
                                <img src={ArrowLight} alt="" />
                            </Link>
                        </div>
                    )}
                </div>
                <a className="see-more" href="http://" target="_blank" rel="noopener noreferrer">View All</a>
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
                <img src={windowWidth > 500 ? chartBgDesktop : chartBg} alt="background-img" className="background" loading="lazy" />
                <figure>
                    <img src={chartsImg} alt="charts logo" loading="lazy" />
                </figure>
                <div>
                    <h2>CAREERS</h2>
                    <h3>Chart Your Course to Success</h3>
                    <p>Join us in pushing the boundaries of subsea and marine technology, and embark on a rewarding journey where your skills and aspirations are valued and empowered to thrive.</p>
                    <Link to="/carrers">
                        Careers
                    </Link>
                </div>
            </section>
            <div className="latest-news">
                <h2>OUR LATEST NEWS</h2>
                <h3>Our perspectives into the issues that matter.</h3>
                <div className="news-container">
                    {latestNews.map((news: latestUpdate, index: number) =>
                        <div title={news.title} key={index} className="news">
                            <figure>
                                <img src={news.image} alt={news.title} loading="lazy" />
                            </figure>
                            <div className="wrapper">
                                <div>
                                    <span role="time">{news.date}</span>
                                    <h4>{news.title}</h4>
                                </div>
                                <Link className="read-more" to="#">
                                    <span>Read More</span>
                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_121_39)">
                                            <path d="M9.55998 13.6521C9.43726 13.7705 9.27292 13.8363 9.10225 13.8352C8.93158 13.8342 8.76814 13.7665 8.64681 13.6465C8.52548 13.5267 8.45599 13.364 8.45314 13.1936C8.45029 13.0231 8.51437 12.8583 8.63159 12.7344L13.3375 8.03316H0.858472C0.772542 8.03378 0.687328 8.01754 0.607702 7.98526C0.528077 7.95298 0.455602 7.90528 0.39442 7.84503C0.333239 7.78475 0.28455 7.71301 0.25114 7.63392C0.21773 7.55483 0.200253 7.46992 0.199707 7.38408C0.200439 7.20976 0.270079 7.0428 0.393463 6.91953C0.516847 6.79627 0.683982 6.7267 0.858472 6.72597H13.3375L8.63159 2.03102C8.51089 1.90678 8.44335 1.74045 8.44335 1.56729C8.44335 1.39414 8.51089 1.2278 8.63159 1.10356C8.69219 1.04193 8.76439 0.992981 8.8441 0.959564C8.9238 0.926147 9.00941 0.908936 9.09579 0.908936C9.18223 0.908936 9.26785 0.926147 9.34755 0.959564C9.42726 0.992981 9.49945 1.04193 9.55998 1.10356L15.3798 6.91965C15.5003 7.04208 15.5677 7.20687 15.5677 7.37852C15.5677 7.55018 15.5003 7.71497 15.3798 7.8374L9.55998 13.6521Z" fill="#019FE8" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_121_39">
                                                <rect width="16" height="13.19" fill="white" transform="translate(0.189941 0.910034)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;