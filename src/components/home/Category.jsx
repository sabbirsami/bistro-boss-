import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../sectionTitle/SectionTitle";

const Category = () => {
    return (
        <div>
            <div className="py-10">
                <SectionTitle
                    heading={"Order Online"}
                    subHeading={"From 10:00am to 11:00pm"}
                ></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="w-full object-cover h"
                        src={slide1}
                        alt=""
                    />
                    <h3 className="text-3xl text-center -mt-20 pb-20">Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="w-full object-cover h"
                        src={slide3}
                        alt=""
                    />
                    <h3 className="text-3xl text-center -mt-20 pb-20">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full object-cover h"
                        src={slide4}
                        alt=""
                    />
                    <h3 className="text-3xl text-center -mt-20 pb-20">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full object-cover h"
                        src={slide5}
                        alt=""
                    />
                    <h3 className="text-3xl text-center -mt-20 pb-20">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full object-cover h"
                        src={slide1}
                        alt=""
                    />
                    <h3 className="text-3xl text-center -mt-20 pb-20">Pizza</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
