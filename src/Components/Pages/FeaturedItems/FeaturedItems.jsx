import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import img1 from "../../../assets/images/img-1.jpg"
import img2 from "../../../assets/images/img2.jpg"
import img3 from "../../../assets/images/img3.jpg"
import img4 from "../../../assets/images/img4.jpg"
import img5 from "../../../assets/images/img5.jpg"
import img6 from "../../../assets/images/img6.jpg"







const FeaturedItems = () => {
    return (
        <div>
            <SectionTitle
                heading={"Discover Our Featured Listings"}
            ></SectionTitle>


            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="" />
                    </SwiperSlide>
                    
                </Swiper>
            </>
        </div>
    );
};

export default FeaturedItems;