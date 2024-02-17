import { Swiper, SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, FC } from 'react';

export const HomeSlider: FC = () => {
    const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
    console.log(swiperRef);

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Pagination, Navigation, Autoplay]}
                className="home__swiper"
            >
            </Swiper>
        </>
    )
}