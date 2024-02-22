import { Hero } from "../components";
import { FC, useState } from "react";
import vision from "../assets/Seacraft Asset/Images/[Downloader.la]-65c6361316a69.jpg"
import { DropDownWhite } from "../assets";
import { useWindowWidth } from "../utils/useWindowWidth";
import { values } from "../data/values";
import { coreValues } from "../utils/interface";

const About: FC = () => {
    const windowWidth = useWindowWidth()
    const [showVision, setShowVision] = useState<boolean>(false)
    const [showHealth, setShowHealth] = useState<boolean>(false)
    const [showAssurance, setShowAssurance] = useState<boolean>(false)

    return (
        <>
            <Hero heading="A Nigerian indigenous Subsea and Marine engineering company"
                paragraph1="Seacraft Technology Solutions Limited Sets the Standard in Subsea Excellence. With a relentless commitment to innovation, safety, and quality, we are a leading provider of subsea and marine solutions worldwide."
                paragraph2="Our expert team combines cutting-edge technology with extensive industry experience to deliver comprehensive services tailored to meet the evolving needs of our clients. From marine operations to specialized tooling and autonomous vehicles, we are dedicated to exceeding expectations and driving success in the offshore industry."
                className="about-hero"
            />
            {windowWidth > 600 ?
                <div className="mission__vision__desktop">
                    <figure>
                        <img src={vision} alt="vision and mission" loading="lazy" />
                    </figure>
                    <div>
                        <section>
                            <h3>VISION</h3>
                            <p>To be the leading offshore technology solution serviceprovider of choice in Nigeria and the West Africa sub region.</p>
                        </section>
                        <section>
                            <h3>MISION</h3>
                            <p>To deliver customized services that benefit our clients. We achieve this by:</p>
                            <ul>
                                <li>Running safe and efficient operations</li>
                                <li>Leveraging technology and innovative solutions</li>
                                <li>Building strong relationships with international OEMs</li>
                                <li>Complying with regulatory requirements</li>
                                <li>Engaging talented and disciplined people in our operations</li>
                            </ul>
                        </section>
                    </div>
                </div>
                :
                <>
                    <button onClick={() => setShowVision(!showVision)} className="mission__toggler">
                        <span>VISION & MISSION</span>
                        <DropDownWhite />
                    </button>
                    {
                        showVision ?
                            <div className="mission__vision__mobile">
                                <section>
                                    <h3>VISION</h3>
                                    <p>To be the leading offshore technology solution serviceprovider of choice in Nigeria and the West Africa sub region.</p>
                                </section>
                                <figure>
                                    <img src={vision} alt="vision and mission" loading="lazy" />
                                </figure>
                                <section>
                                    <h3>MISION</h3>
                                    <p>To deliver customized services that benefit our clients. We achieve this by:</p>
                                    <ul>
                                        <li>Running safe and efficient operations</li>
                                        <li>Leveraging technology and innovative solutions</li>
                                        <li>Building strong relationships with international OEMs</li>
                                        <li>Complying with regulatory requirements</li>
                                        <li>Engaging talented and disciplined people in our operations</li>
                                    </ul>
                                </section>
                            </div>
                            : null
                    }
                </>
            }
            <div className="coperate-values">
                <div>
                    <h3>VALUES</h3>
                    <h5>
                        Our
                        Corporate
                        Values
                    </h5>
                </div>
                {values.map((value: coreValues, index: number) =>
                    <div className="values" key={index}>
                        <h3>{value.number}</h3>
                        <h4>{value.name}</h4>
                        <p>{value.description}</p>
                    </div>
                )}
            </div>
            <section className="content__policy">
                <h2>OUR CONTENT POLICY</h2>
                <h3>Local Content Policy</h3>
                <p>Seacraft Technology Solutions limited staff, its contractors, supplies, and stakeholders involved in project or operations in Nigeria shall consider local content as an important element in their project and operations delivery.</p>
            </section>
            <div className="about-policy">
                <section className="health__and__safety">
                    <h2>Health and Safety Policy</h2>
                    <p>
                        Seacraft Technology Solutions is committed to providing safe and healthy working conditions for the prevention of work-related injury that is appropriate to the purpose, size, and context of the organization and to the specific nature of its Health & Safety risks and opportunities.
                    </p>
                    <p>
                        This Policy applies to all areas of the Company’s operations at all its worksite locations.
                    </p>
                    <p>
                        In support of this commitment to Health and Safety, Seacraft Technology Solutions will:
                    </p>
                    {showHealth ?
                        <>
                            <ul>
                                <li> Comply with Nigeria Health and Safety legislation</li>
                                <li>Promote culture that integrates safety as a core activity into all aspects of work.</li>
                                <li>Develop and allocate Health and Safety roles and responsibilities.</li>
                                <li>Educate employees and all interested parties on Seacraft Technology Solutions Health and Safety Policy and objectives.</li>
                                <li>Have systems in place to ensure personnel maintain an awareness of their health and safety responsibilities whilst performing their work activities.</li>
                                <li>Provide instruction, supervision, training, and ready access to information to all employees so as to enable safe work practices that minimize the risk to health.</li>
                                <li>Develop measurable Health and Safety objectives and targets to ensure continued improvement of the OHS management system. </li>
                                <li>Develop measurable key performance indicators and review these regularly.</li>
                                <li> Communicate, consult, and cooperate with employees and health and safety representatives to ensure that all practicable measures are undertaken to improve OHS performance.</li>
                                <li>Provide resources for the management of Health and Safety.</li>
                                <li>Employ the hierarchy of controls to eliminate hazards and minimize risks effectively.</li>
                            </ul>
                        </>
                        :
                        null
                    }
                    <button onClick={() => setShowHealth(!showHealth)}>
                        <span>{showHealth ? "See Less" : "See More"}</span>
                        <svg style={{ transform: showHealth ? "rotate(180deg)" : "rotate(0)" }} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6L0 1.13514L1.16667 0L5 3.72973L8.83333 0L10 1.13514L5 6Z" fill="white" />
                        </svg>
                    </button>
                </section>
                <section className="quality">
                    <h2>Quality Assurance Policy</h2>
                    <p>
                        The purpose of the policy is to confirm Seacraft Technology Solutions is commitment to meeting quality standards expected by customers in the delivery of products and/or services. This Policy applies to all areas of the Company’s operations at all its worksite locations.
                    </p>
                    <p>
                        Our Company’s mission, goals and objectives are directed towards ongoing process improvement as a basis for strengthening our competitive position, improving product quality, and raising service standards.
                    </p>
                    <p>
                        Seacraft Technology Solutions will:
                    </p>
                    {showAssurance ?
                        <>
                            <ul>
                                <li>Develop and implement a Quality Management System to achieve best practice outcomes across the Company.</li>
                                <li>Ensure continuous improvement.</li>
                                <li>Seacraft Technology Solutions is committed to communicating to all staff and stakeholders the Company’s strategic direction, objectives, and achievements, to ensure all staff operate consistently to meet quality goals.</li>
                            </ul>
                            <p>
                                To implement this Policy, we will focus on the needs of our business with particular reference to consistently meeting our customers’ requirements and statutory obligations. Our Quality Management System will provide mechanisms for detecting system shortfalls and for stimulating process improvements.
                            </p>
                            <p>
                                Seacraft Technology Solutions has developed procedures and disciplines to ensure that:
                            </p>
                            <ul>
                                <li>All staff are provided with the necessary information, training, and resources to maintain the quality of our products and services to satisfy the needs and expectations of our customers.</li>
                                <li>Responsibilities for quality are established by communicating these responsibilities clearly to all employees.</li>
                                <li>The policy and procedures continue to be appropriate by initiating regular reviews to check their effectiveness and ongoing relevance.</li>
                                <li>Seacraft Technology Solutions will regularly review the needs and expectations of its customers and initiates continuous improvement activities to meet these expectations.  These are measured in service performance, reliability, relevance, and timeliness.</li>
                            </ul>
                        </>
                        : null
                    }
                    <button onClick={() => setShowAssurance(!showAssurance)}>
                        <span>{showAssurance ? "See Less" : "See More"}</span>
                        <svg style={{ transform: showAssurance ? "rotate(180deg)" : "rotate(0)" }} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6L0 1.13514L1.16667 0L5 3.72973L8.83333 0L10 1.13514L5 6Z" fill="white" />
                        </svg>
                    </button>
                </section>
            </div>
        </>
    )
}

export default About;