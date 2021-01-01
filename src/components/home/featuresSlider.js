import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, A11y]);

const HomeFeaturesSlider = () => {
  return (
    <section className="featureSlider mt-5">
      <div className="container">
        <div className="row text-center">
          <p className="col-12 mb-4 heading-big">Fast, Cheap, Zero Fraud</p>
          <h2 className="col-12 text-slate-dark heading-bigger mb-4">
            A scalable Proof of Investment Vehicle
          </h2>

          <p className="col-12 mb-sm-4 mb-md-5">
            Easily buy, sell or exchange over 30 different cryptocurrencies. Now
            euro deposits and withdrawn available.
          </p>

          <div
            style={{
              position: 'relative',
              width: '100%',
            }}
          >
            <div className="features-dots" />
            <Swiper
              className="featureSlider-carousel"
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                el: '.features-dots',
              }}
            >
              {[...Array(5).keys()].map((i) => (
                <SwiperSlide key={i}>
                  <img
                    src="/images/slider-1-96a31a3c05f96991ef9d18c911538cb2.png"
                    className="testimonial-img"
                    alt="Features"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesSlider;
