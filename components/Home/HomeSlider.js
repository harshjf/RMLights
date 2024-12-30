"use client";
import { sliderData } from "@/data";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// register Swiper custom elements
register();

export default function HomeSlider() {
  return (
    <>
      <div
        className="industify_slider_alpha"
        data-desc-show="yes"
        data-category-show="yes"
        data-nav-types="square"
        data-autoplay-switch="enabled"
        data-autoplay-time="8000"
        data-effect="cards"
        data-progress="enabled"
        data-box-pos="cr"
        data-img-effect="enabled"
        data-text-effect="enabled"
      >
        <div className="owl_control">
          <div className="fn_prev">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
          <div className="fn_next">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
        </div>

        <div className="swiper-pagination"></div>

        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".fn_prev",
            nextEl: ".fn_next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="custom-class"
        >
          {sliderData.map(({ title, image }) => {
            return (
              <SwiperSlide key={title}>
                <div className="item">
                  <div
                    className="img_holder"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
                  </div>
                  <div className="f-slider-one-data">
                    <h1>{title}</h1>
                    <div className="social-media-icons">
                      <a href="https://x.com/sagar_chou52083?t=8LmAPMt79RyGjm3gFeZ1Lw&s=09">
                        <div className="social-icon-wrapper">
                          <img
                            src="Images/slider/twitter.png"
                            alt="Twitter"
                            className="social-icon"
                          />
                        </div>
                      </a>

                      <a href="https://www.instagram.com/r_m_lights_industries_private_/profilecard/?igsh=OWdnZ3Ryc2Nkc2U2">
                        <div className="social-icon-wrapper">
                          <img
                            src="Images/slider/insta.png"
                            alt="Instagram"
                            className="social-icon"
                          />
                        </div>
                      </a>
                    </div>
                    <button className="free-estimate-btn">
                      Get a Free Estimate
                    </button>
                    <div className="icon-with-text">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-map-marker-alt"
                        ></i>
                      </span>
                      <span className="location-text">
                        Aurangabad, Maharashtra
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
