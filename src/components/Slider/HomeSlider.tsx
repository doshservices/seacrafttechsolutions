import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FC } from 'react';
import { slides } from '../../data/homeSlider';
import { Link } from 'react-router-dom';

export const HomeSlider: FC = () => {
    // const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

    return (
        <div className='home__swiper'>
            <div className="navigation-buttons">
                <button>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40.6204" y="40.6204" width="40.2407" height="40.2407" rx="1.62037" transform="rotate(-180 40.6204 40.6204)" stroke="#F8F8F8" strokeWidth="0.759259" />
                        <path d="M15.9742 20.7662L22.0184 14.3766L23.4287 15.8675L18.7948 20.7662L23.4287 25.6649L22.0184 27.1558L15.9742 20.7662Z" fill="#F8F8F8" />
                    </svg>
                </button>
                <button>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.37963" y="0.37963" width="40.2407" height="40.2407" rx="1.62037" stroke="#F8F8F8" strokeWidth="0.759259" />
                        <path d="M25.0258 20.2338L18.9816 26.6234L17.5713 25.1325L22.2052 20.2338L17.5713 15.3351L18.9816 13.8442L25.0258 20.2338Z" fill="#F8F8F8" />
                    </svg>
                </button>
            </div>
            <Swiper
                // onSwiper={setSwiperRef}
                effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true
                }}
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                // }}
                className='home__slider'
                modules={[EffectFade, Pagination, Navigation, Autoplay]}
            >
                {slides.map((slide: any, index: number) =>
                    <SwiperSlide className='slides' key={index}>
                        <img className='background-image' src={slide.background} alt="" />
                        <div>
                            <h2>{slide.topic}</h2>
                            <h1>{slide.name}</h1>
                        </div>
                        <div>
                            <p>{slide.description}</p>
                            {slide.action ?
                                <Link to="/about">{slide.action}</Link>
                                : null
                            }
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}