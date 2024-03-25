import { FC } from "react";
import project from "../assets/Seacraft Asset/Images/project.png"

const Project: FC = () => {
    return (
        <section className="project">
            <h2>PROJECTS</h2>
            <h3>Featured Projects</h3>
            <p>Seacraft partners with clients to take on complex challenges and provide innovative solutions that make a positive, lasting impact.</p>
            <div className="projects">
                <article title="Seacraft Technology Solutions Limited has proudly provided Remote Operated Vehicle (ROV) services for the prestigious SNEPCO-BRORON-TMT project.">
                    <figure>
                        <img src={project} alt="Seacraft Technology Solutions Limited has proudly provided Remote Operated Vehicle (ROV) services for the prestigious SNEPCO-BRORON-TMT project." loading="lazy" />
                    </figure>
                    <h4 className="title">SNEPCO-BRORON-TMT</h4>
                    <h5 className="subtitle">ROV Services from 2018 - 2024</h5>
                    <p>Seacraft Technology Solutions Limited has proudly provided Remote Operated Vehicle (ROV) services for the prestigious SNEPCO-BRORON-TMT project.</p>
                    <a className="read-more">
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
                    </a>
                </article>
                {/* <article title="Seacraft Technology Solutions Limited has proudly provided Remote Operated Vehicle (ROV) services for the prestigious SNEPCO-BRORON-TMT project.">
                    <figure>
                        <img src={project} alt="Seacraft Technology Solutions Limited has proudly provided Remote Operated Vehicle (ROV) services for the prestigious SNEPCO-BRORON-TMT project." />
                    </figure>
                    <h4 className="title">SNEPCO-BRORON-TMT</h4>
                    <h5 className="subtitle">ROV Services from 2018 - 2024</h5>
                    <p>Seacraft Technology Solutions Limited has proudly provided Remote Operated Vehicle (ROV) services for the prestigious SNEPCO-BRORON-TMT project.</p>
                    <a className="read-more">
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
                    </a>
                </article> */}
            </div>
        </section>
    )
}

export default Project;