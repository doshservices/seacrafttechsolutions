import { FC, useEffect, useState } from "react";
import { services } from "../data/services";
import { useLocation } from "react-router-dom";
import { useWindowWidth } from "../utils/useWindowWidth";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import heroImg from "../assets/Seacraft Asset/Images/tmt-hero.png"
import video1 from "../assets/videos/video1.mp4"
import video2 from "../assets/videos/video2.mp4"
import { project } from "./Project";
import ReactPlayer from 'react-player'

const ProjectOverview: FC = () => {
    const location = useLocation();
    const [service, setService] = useState<any>(null);
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

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
        <div id="project__overview">
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
                                <img className='background-image' src={hero} alt={`${service?.name} ProjectOverview Logo`} />
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
                        <img src={heroImg} alt={`SNEPCO-BRORON-TMT workers logo`} />
                        :
                        <img src={project} alt={`SNEPCO-BRORON-TMT workers logo`} />
                    }
                </figure>
            }
            <div id="service__description">
                <div className="icon-name">
                    {/* <img src={service?.pageIcon} alt={service?.name} /> */}
                    <h2>SNEPCO
                        -BRORON
                        -TMT</h2>
                </div>
                <div className="description">
                    <div className="paragraph">
                        {/* {service?.fullDescription?.map((description: string, index: number) => */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                        </p>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
                        </p>
                        <ReactPlayer style={{ background: "hsla(0, 0%, 0%, .4)" }} url={video2} controls muted={true} width="100%" pip={true} stopOnUnmount={false} />
                        <ReactPlayer style={{ background: "hsla(0, 0%, 0%, .4)" }} url={video1} controls muted={true} width="100%" pip={true} stopOnUnmount={false} />
                        {/* )} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectOverview;