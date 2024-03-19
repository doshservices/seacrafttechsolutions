import { FC, useEffect, useState } from "react";
import { services } from "../data/services";
import { Link, useLocation } from "react-router-dom";
import { useWindowWidth } from "../utils/useWindowWidth";
import { Document, Page, pdfjs } from 'react-pdf';
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
    const [numPages, setNumPages] = useState<number | null>(null);
    const [showPdf, setShowPdf] = useState(false)
    const [file, setFile] = useState(NSSBreaker)

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

    const windowWidth = useWindowWidth()

    return (
        <div id="service">
            <Link to="/services" id="service__back__btn">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 11L17.325 12.6917L13.3313 16.8333L27 16.8333L27 19.1667L13.3313 19.1667L17.325 23.3083L15.75 25L9 18L15.75 11Z" fill="black" />
                </svg>
                <span>Back to List of Services</span>
            </Link>
            <figure>
                {windowWidth >= 700 ?
                    <img src={service?.hero} alt={`${service?.name} Service Logo`} />
                    :
                    <img src={service?.logo} alt={`${service?.name} Service Logo`} />
                }
            </figure>
            {windowWidth > 750 ?
                <svg className="navigate" width="245" height="41" viewBox="0 0 245 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="21.0001" r="2.28571" transform="rotate(-90 150 21.0001)" fill="black" />
                    <circle cx="150" cy="21" r="7.71429" transform="rotate(-90 150 21)" stroke="black" strokeWidth="0.571429" />
                    <circle cx="172.286" cy="20.9999" r="1.71429" transform="rotate(-90 172.286 20.9999)" fill="black" />
                    <circle cx="188.286" cy="20.9999" r="1.71429" transform="rotate(-90 188.286 20.9999)" fill="black" />
                    <circle cx="202.572" cy="20.9996" r="1.71429" transform="rotate(-90 202.572 20.9996)" fill="black" />
                    <rect x="61.3796" y="0.37963" width="40.2407" height="40.2407" rx="1.62037" stroke="black" strokeWidth="0.759259" />
                    <path d="M86.0258 20.2338L79.9816 26.6234L78.5713 25.1325L83.2052 20.2338L78.5713 15.3351L79.9816 13.8442L86.0258 20.2338Z" fill="black" />
                    <rect x="40.6204" y="40.6204" width="40.2407" height="40.2407" rx="1.62037" transform="rotate(-180 40.6204 40.6204)" stroke="black" strokeWidth="0.759259" />
                    <path d="M15.9742 20.7662L22.0184 14.3766L23.4287 15.8675L18.7948 20.7662L23.4287 25.6649L22.0184 27.1558L15.9742 20.7662Z" fill="black" />
                </svg>
                : <svg className="navigate" width="83" height="56" viewBox="0 0 83 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="49.4032" y="0.305555" width="32.3889" height="32.3889" rx="1.3042" stroke="black" strokeWidth="0.611111" />
                    <path d="M69.2402 16.2854L64.3754 21.4282L63.2402 20.2282L66.97 16.2854L63.2402 12.3425L64.3754 11.1425L69.2402 16.2854Z" fill="black" />
                    <rect x="32.6944" y="32.6944" width="32.3889" height="32.3889" rx="1.3042" transform="rotate(-180 32.6944 32.6944)" stroke="black" strokeWidth="0.611111" />
                    <path d="M12.8574 16.7146L17.7223 11.5718L18.8574 12.7718L15.1277 16.7146L18.8574 20.6575L17.7223 21.8575L12.8574 16.7146Z" fill="black" />
                    <circle cx="22.4218" cy="49.4391" r="1.83972" transform="rotate(-90 22.4218 49.4391)" fill="black" />
                    <circle cx="22.4214" cy="49.4384" r="6.20906" transform="rotate(-90 22.4214 49.4384)" stroke="black" strokeWidth="0.45993" />
                    <circle cx="40.3583" cy="49.4391" r="1.37979" transform="rotate(-90 40.3583 49.4391)" fill="black" />
                    <circle cx="53.2372" cy="49.4391" r="1.37979" transform="rotate(-90 53.2372 49.4391)" fill="black" />
                    <circle cx="64.7353" cy="49.4386" r="1.37979" transform="rotate(-90 64.7353 49.4386)" fill="black" />
                </svg>
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