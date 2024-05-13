import { FC, useEffect, useState } from "react";
import { services } from "../data/services";
import { Link, useLocation } from "react-router-dom";
import { useWindowWidth } from "../utils/useWindowWidth";
import { Document, Page, pdfjs } from 'react-pdf';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import lightwellToolsImage from '../assets/Seacraft Asset/leghtwell-tools.png'
import shallow from '../assets/Seacraft Asset/shallow.png'
import wellHead from '../assets/Seacraft Asset/well-head.png'
import casing from '../assets/Seacraft Asset/casing.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import NSSBreaker from "../../public/TMT-NSS-004-Breaker_110901.pdf"
import NSSIntensifier from "../../public/TMT-NSS-005-10K Intensifier_110852.pdf"
import NSSMultipurposeRotaryTool from "../../public/TMT-NSS-001-Multipurpose Rotary Tool_034530.pdf"
import NSSMainElectronicsEnclosure from "../../public/TMT-NSS-002-Main Electronics Enclosure_110911.pdf"
import NSSHydraulicActuatorOverrideHot from "../../public/TMT-NSS-003-Hydraulic Actuator Override Hot Stab Two Port_034536.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Service: FC = () => {
    const location = useLocation();
    const [service, setService] = useState<any>(null);
    const subseaPath = "/services/customized-subsea-tooling"
    const lightandwellPath = "/services/light-well-intervention"
    const plugPath = "/services/plug-&-abandonment"
    const [numPages, setNumPages] = useState<number | null>(null);
    const [showPdf, setShowPdf] = useState(false)
    const [file, setFile] = useState(NSSBreaker)
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const openPdf = (fileType: any) => {
        setShowPdf(!showPdf)
        setFile(fileType)
    }

    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = showPdf ? 'hidden' : 'unset';
        };

        handleBodyOverflow();

        return () => {
            handleBodyOverflow();
        };
    }, [showPdf]);

    const pages: JSX.Element[] = [];
    if (numPages) {
        for (let i = 1; i <= numPages; i++) {
            pages.push(<Page key={`page_${i}`} pageNumber={i} />);
        }
    }

    const handleLocationChange = () => {
        const id = window.location.pathname.slice(10);
        const idToFind: any = services?.find((item: any) => item?.id === id) || null;
        setService(idToFind);
    };

    useEffect(() => {
        handleLocationChange();

        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, [location.pathname]);

    const windowWidth = useWindowWidth();

    return (
        <div id="service">
            <Link to="/services" id="service__back__btn">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 11L17.325 12.6917L13.3313 16.8333L27 16.8333L27 19.1667L13.3313 19.1667L17.325 23.3083L15.75 25L9 18L15.75 11Z" fill="black" />
                </svg>
                <span>Back to List of Services</span>
            </Link>
            {windowWidth >= 700 ?
                <>
                    {service?.hero.length > 1 ?
                        <div className="wrapper">
                            <Swiper
                                onSwiper={setSwiperRef}
                                effect={'fade'}
                                loop={true}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true
                                }}
                                className='service__slider'
                                modules={[EffectFade, Autoplay, Pagination]}
                            >
                                {service?.hero?.map((hero: any, index: number) =>
                                    <SwiperSlide onClick={() => console.log(hero)} className='slides' key={index}>
                                        <img className='background-image' src={hero} alt={`${service?.name} Service Logo`} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            <div className="navigate">
                                <button onClick={() => swiperRef?.slidePrev()}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="40.6204" y="40.6204" width="40.2407" height="40.2407" rx="1.62037" transform="rotate(-180 40.6204 40.6204)" stroke="black" strokeWidth="0.759259" />
                                        <path d="M15.9742 20.7662L22.0184 14.3766L23.4287 15.8675L18.7948 20.7662L23.4287 25.6649L22.0184 27.1558L15.9742 20.7662Z" fill="black" />
                                    </svg>
                                </button>
                                <button onClick={() => swiperRef?.slideNext()}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.37963" y="0.37963" width="40.2407" height="40.2407" rx="1.62037" stroke="black" strokeWidth="0.759259" />
                                        <path d="M25.0258 20.2338L18.9816 26.6234L17.5713 25.1325L22.2052 20.2338L17.5713 15.3351L18.9816 13.8442L25.0258 20.2338Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        :
                        <figure>
                            {windowWidth >= 700 ?
                                <img src={service?.hero} alt={`${service?.name} Service Logo`} />
                                :
                                <img src={service?.logo} alt={`${service?.name} Service Logo`} />
                            }
                        </figure>
                    }
                </>
                :
                <>
                    {service?.hero.length > 1 ?
                        <div className="wrapper">
                            <Swiper
                                onSwiper={setSwiperRef}
                                effect={'fade'}
                                loop={true}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true
                                }}
                                className='service__slider'
                                modules={[EffectFade, Autoplay, Pagination]}
                            >
                                {service?.mobileHero?.map((hero: any, index: number) =>
                                    <SwiperSlide onClick={() => console.log(hero)} className='slides' key={index}>
                                        <img className='background-image' src={hero} alt={`${service?.name} Service Logo`} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            <div className="navigate">
                                <button onClick={() => swiperRef?.slidePrev()}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="40.6204" y="40.6204" width="40.2407" height="40.2407" rx="1.62037" transform="rotate(-180 40.6204 40.6204)" stroke="black" strokeWidth="0.759259" />
                                        <path d="M15.9742 20.7662L22.0184 14.3766L23.4287 15.8675L18.7948 20.7662L23.4287 25.6649L22.0184 27.1558L15.9742 20.7662Z" fill="black" />
                                    </svg>
                                </button>
                                <button onClick={() => swiperRef?.slideNext()}>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.37963" y="0.37963" width="40.2407" height="40.2407" rx="1.62037" stroke="black" strokeWidth="0.759259" />
                                        <path d="M25.0258 20.2338L18.9816 26.6234L17.5713 25.1325L22.2052 20.2338L17.5713 15.3351L18.9816 13.8442L25.0258 20.2338Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        :
                        <figure>
                            {windowWidth >= 700 ?
                                <img src={service?.hero} alt={`${service?.name} Service Logo`} />
                                :
                                <img src={service?.logo} alt={`${service?.name} Service Logo`} />
                            }
                        </figure>
                    }</>
            }
            <div id="service__description">
                <div className="icon-name">
                    <img src={service?.pageIcon} alt={service?.name} />
                    <h2>{service?.name}</h2>
                </div>
                <div className="description">
                    <div className="paragraph">
                        {service?.fullDescription?.map((description: string, index: number) =>
                            <p key={index}>{description}</p>
                        )}
                    </div>
                    {location.pathname === lightandwellPath ?
                        <section className="light-well-tools">
                            <h3>RLWI Equiptment</h3>
                            <img src={lightwellToolsImage} alt="tools" />
                        </section>
                        : null
                    }
                    {location.pathname === plugPath ?
                        <>
                            <section className="plug-extra">
                                <h3>Casing Perforation and Cement Plug Replacement</h3>
                                <img src={casing} alt="Casing Perforation and Cement Plug Replacement" />
                            </section>
                            <section className="plug-extra">
                                <h3>Well Head Severance Tool - AXE</h3>
                                <img src={wellHead} alt="Well Head Severance Tool - AXE" />
                            </section>
                            <section className="plug-extra">
                                <h3>Shallow Annulus Plugs</h3>
                                <img src={shallow} alt="Shallow Annulus Plugs" />
                            </section>
                        </>
                        : null
                    }
                    {location.pathname === subseaPath ?
                        <>
                            <section className="pdfs">
                                <h3>Customised Tooling solutions</h3>
                                <button onClick={() => openPdf(NSSBreaker)} className="pdf">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.175 13.5L10.575 19.1L12 20.5L20 12.5L12 4.5L10.575 5.9L16.175 11.5H4V13.5H16.175Z" fill="black" />
                                    </svg>
                                    <span>NSS-001-Breaker</span>
                                </button>
                                <button onClick={() => openPdf(NSSIntensifier)} className="pdf">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.175 13.5L10.575 19.1L12 20.5L20 12.5L12 4.5L10.575 5.9L16.175 11.5H4V13.5H16.175Z" fill="black" />
                                    </svg>
                                    <span>NSS-002-10K Intensifier</span>
                                </button>
                                <button onClick={() => openPdf(NSSMultipurposeRotaryTool)} className="pdf">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.175 13.5L10.575 19.1L12 20.5L20 12.5L12 4.5L10.575 5.9L16.175 11.5H4V13.5H16.175Z" fill="black" />
                                    </svg>
                                    <span>NSS-003-Multipurpose Rotary Tool</span>
                                </button>
                                <button onClick={() => openPdf(NSSMainElectronicsEnclosure)} className="pdf">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.175 13.5L10.575 19.1L12 20.5L20 12.5L12 4.5L10.575 5.9L16.175 11.5H4V13.5H16.175Z" fill="black" />
                                    </svg>
                                    <span>NSS-004-Main Electronics Enclosure</span>
                                </button>
                                <button onClick={() => openPdf(NSSHydraulicActuatorOverrideHot)} className="pdf">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.175 13.5L10.575 19.1L12 20.5L20 12.5L12 4.5L10.575 5.9L16.175 11.5H4V13.5H16.175Z" fill="black" />
                                    </svg>
                                    <span>NSS-005-Hydraulic Actuator Override Hot Stab Two Port</span>
                                </button>
                                {showPdf ?
                                    <div className="document">
                                        <button className="close" onClick={() => openPdf(NSSHydraulicActuatorOverrideHot)}>
                                            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.33268 15.8333L4.16602 14.6666L8.83268 9.99996L4.16602 5.33329L5.33268 4.16663L9.99935 8.83329L14.666 4.16663L15.8327 5.33329L11.166 9.99996L15.8327 14.6666L14.666 15.8333L9.99935 11.1666L5.33268 15.8333Z" fill="#fff" />
                                            </svg>
                                        </button>
                                        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                                            {pages}
                                        </Document>
                                    </div>
                                    : null
                                }
                            </section>
                            <section className="mail">
                                <h3>For More Enquires, Sales or Rentals of Tools:</h3>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "1rem", gap: "10px" }}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.175 13.5L10.575 19.1L12 20.5L20 12.5L12 4.5L10.575 5.9L16.175 11.5H4V13.5H16.175Z" fill="black" />
                                    </svg>
                                    <a href="mailto:sales@seacrafttechsolutions.com" target="_blank">Contact: <span>sales@seacrafttechsolutions.com</span></a>
                                </div>
                            </section>
                        </>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Service;