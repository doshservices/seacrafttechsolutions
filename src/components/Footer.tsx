import { FC } from "react";
import { Link } from "react-router-dom";
import { FooterLogo } from "../assets";
import { emailAddress } from "../utils/variables";
import { useWindowWidth } from "../utils/useWindowWidth";

export const Footer: FC = () => {
    const windowWidth = useWindowWidth()
    return (
        <footer>
            <div className="wrapper">
                <div className="logo">
                    <FooterLogo />
                </div>
                <section className="address">
                    <h4>Main Office Address</h4>
                    <address>
                        3791 Shai Huluds Crescent,
                        Avenger’s Corner, Lagos, Nigeria
                    </address>
                    <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">{emailAddress}</a>
                </section>
                <section className="links">
                    <Link to="">About</Link>
                    <Link to="">Specialization</Link>
                    <Link to="">Project</Link>
                    <Link to="">Project</Link>
                    <Link to="">Polices</Link>
                    <Link to="">Sustainability</Link>
                    <Link to="">Contact</Link>
                    <Link to="">Contact</Link>
                </section>
                {windowWidth >= 850 ?
                    <div></div>
                    : null
                }
                <section className="copyright">
                    <p>&copy; 2024 SeaCraft</p>
                    <div className="social-links">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_37_2840)">
                                    <path d="M8.49999 0C13.1944 0 17 3.58173 17 7.99999C17 12.0902 13.7385 15.463 9.52979 15.9414V10.4447L11.8292 10.4447L12.3062 8H9.52979V7.13539C9.52979 6.48945 9.6644 6.04226 9.97324 5.75656C10.2821 5.47084 10.7652 5.34662 11.462 5.34662C11.6384 5.34662 11.8008 5.34827 11.9448 5.35157C12.1543 5.35638 12.3251 5.36467 12.444 5.37644V3.16032C12.3965 3.14789 12.3404 3.13547 12.2776 3.12324C12.1352 3.09554 11.9582 3.06883 11.768 3.04537C11.3704 2.99635 10.9149 2.96153 10.5962 2.96153C9.3092 2.96153 8.33652 3.22068 7.65758 3.75746C6.83817 4.40527 6.4466 5.45748 6.4466 6.94659V7.99999H4.69383V10.4447H6.4466V15.7644C2.74431 14.8999 0 11.7518 0 7.99999C0 3.58173 3.80558 0 8.49999 0Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_2840">
                                        <rect width="17" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://" target="_blank" rel="noopener noreferrer">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9812 1.26929H15.3707L10.1503 6.88495L16.2917 14.5266H11.483L7.71665 9.89198L3.40709 14.5266H1.0161L6.59989 8.52002L0.708374 1.26929H5.63916L9.04361 5.50551L12.9812 1.26929ZM12.1425 13.1805H13.4666L4.91969 2.54471H3.49883L12.1425 13.1805Z" fill="white" />
                            </svg>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0299 4.68141C12.467 4.68245 12.0093 4.25347 12.0082 3.72365C12.0071 3.19384 12.4629 2.76305 13.0261 2.76201C13.5893 2.76097 14.047 3.19021 14.0481 3.72002C14.0489 4.24984 13.5931 4.68038 13.0299 4.68141Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.50813 12.1073C6.0981 12.1117 4.14028 10.2766 4.13561 8.00777C4.13092 5.73948 6.08129 3.89654 8.49133 3.89213C10.9019 3.88773 12.86 5.72393 12.8647 7.99197C12.8694 10.2608 10.9184 12.1029 8.50813 12.1073ZM8.49436 5.33357C6.93009 5.33616 5.66379 6.53239 5.66655 8.00492C5.66957 9.47772 6.94083 10.6693 8.5051 10.6664C10.0699 10.6636 11.3362 9.46761 11.3332 7.99481C11.3302 6.52202 10.0589 5.33072 8.49436 5.33357Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.91777 0.430986C3.45756 0.231917 4.07528 0.0955748 4.97969 0.0553988C5.88633 0.0144484 6.17576 0.00511401 8.48362 0.000968414C10.792 -0.00317719 11.0815 0.00511241 11.9881 0.0429556C12.8928 0.079762 13.5108 0.214032 14.0517 0.411029C14.6113 0.613983 15.0861 0.887188 15.5592 1.33069C16.0324 1.7747 16.3237 2.22001 16.5421 2.74594C16.7533 3.2545 16.8982 3.83537 16.9412 4.68712C16.9841 5.54015 16.9946 5.81231 16.999 7.9847C17.0034 10.1568 16.994 10.4295 16.9544 11.2833C16.915 12.1343 16.7726 12.7162 16.5633 13.225C16.3471 13.7517 16.0574 14.1986 15.5862 14.6439C15.115 15.0895 14.6413 15.3635 14.0825 15.5693C13.5422 15.7678 12.925 15.9042 12.0206 15.9449C11.114 15.9853 10.8245 15.9949 8.51584 15.999C6.20825 16.0032 5.91882 15.9949 5.0122 15.9573C4.1075 15.92 3.48923 15.786 2.94861 15.5892C2.38901 15.3855 1.91421 15.1131 1.44107 14.6693C0.967661 14.2256 0.676023 13.78 0.457908 13.2541C0.246399 12.7458 0.102076 12.1646 0.0588431 11.3137C0.0156087 10.4601 0.00542234 10.1874 0.00101934 8.01529C-0.00340066 5.8429 0.00569264 5.57074 0.0453451 4.71744C0.0852832 3.8657 0.227118 3.28404 0.436425 2.77471C0.652607 2.24826 0.942328 1.80165 1.41409 1.35609C1.8853 0.910776 2.35898 0.636012 2.91777 0.430986ZM3.50026 14.2453C3.80016 14.3539 4.25016 14.4835 5.07885 14.5174C5.97555 14.554 6.24406 14.562 8.51308 14.5579C10.7829 14.554 11.0515 14.5449 11.9479 14.5052C12.7757 14.4682 13.2257 14.337 13.5248 14.2271C13.9217 14.0812 14.2042 13.9067 14.5011 13.6271C14.798 13.3463 14.9817 13.0796 15.1354 12.7061C15.251 12.4236 15.3885 11.9998 15.4245 11.2198C15.4639 10.3764 15.4722 10.1234 15.4678 7.9873C15.4636 5.85171 15.454 5.59873 15.4113 4.75503C15.3722 3.9756 15.2331 3.55205 15.1161 3.27082C14.961 2.89679 14.7762 2.63137 14.4783 2.35169C14.1803 2.072 13.8969 1.89963 13.4995 1.755C13.2001 1.64588 12.7496 1.51679 11.9214 1.48284C11.0247 1.44577 10.7559 1.43825 8.48637 1.4424C6.21734 1.44655 5.94884 1.4551 5.05241 1.49502C4.224 1.53208 3.77454 1.66298 3.4749 1.77314C3.07833 1.91907 2.79577 2.09248 2.49862 2.3732C2.202 2.65391 2.01831 2.92012 1.86464 3.29441C1.74953 3.57643 1.61099 4.00048 1.57548 4.77991C1.53636 5.62387 1.52811 5.87686 1.53251 8.01244C1.53665 10.1485 1.54628 10.4015 1.58842 11.2447C1.62725 12.0247 1.76742 12.4477 1.88392 12.7299C2.03897 13.1029 2.22377 13.3689 2.52148 13.6486C2.81974 13.9272 3.10312 14.1006 3.50026 14.2453Z" fill="white" />
                            </svg>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_37_2843)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1121 3.22263C16.3759 3.47247 16.5653 3.78313 16.6614 4.12353C17.0168 5.37989 17.0168 7.99989 17.0168 7.99989C17.0168 7.99989 17.0168 10.6199 16.6614 11.8763C16.5653 12.2166 16.3759 12.5273 16.1121 12.7771C15.8483 13.027 15.5195 13.2073 15.1584 13.2999C13.8293 13.6363 8.51685 13.6363 8.51685 13.6363C8.51685 13.6363 3.20435 13.6363 1.87525 13.2999C1.51421 13.2073 1.18535 13.027 0.921591 12.7771C0.657828 12.5273 0.468412 12.2166 0.3723 11.8763C0.0168457 10.6199 0.0168457 7.99989 0.0168457 7.99989C0.0168457 7.99989 0.0168457 5.37989 0.3723 4.12353C0.468412 3.78313 0.657828 3.47247 0.921591 3.22263C1.18535 2.97279 1.51421 2.79253 1.87525 2.69989C3.20435 2.36353 8.51685 2.36353 8.51685 2.36353C8.51685 2.36353 13.8293 2.36353 15.1584 2.69989C15.5195 2.79253 15.8483 2.97279 16.1121 3.22263ZM11.2214 7.99991L6.77822 5.62082V10.379L11.2214 7.99991Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_2843">
                                        <rect width="17" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </section>
                <div className="policy">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}