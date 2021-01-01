import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, A11y]);

const HomeTestimonials = () => {
  return (
    <section id="testimonials" className="section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Swiper
              className="testimonials-carousel"
              id="doctors_slide"
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                el: '.testimonials-dots',
              }}
            >
              {[...Array(5).keys()].map((i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-item">
                    <p className="testimonial-quote text-slate mb-md-4">
                      Impressed with master class support of the team and really
                      look forward for the future.
                    </p>
                    <div className="testimonial-person">
                      <img
                        src="/images/author-4-c976c6c3de011c3117c66c7c99cddee6.jpg"
                        className="testimonial-img"
                        alt="reviewer-1"
                      />
                      <h3 className="text-slate-dark">Saul Goodman</h3>
                      <h4 className="text-slate font-weight-normal">
                        Ceo &amp; Founder
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonials-dots" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
