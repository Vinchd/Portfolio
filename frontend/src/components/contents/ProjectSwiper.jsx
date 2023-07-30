import React, { useEffect, useState } from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function ProjectSwiper() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fakedata = [
      {
        name: "Ravenfeed",
        resume: "Socialmedia",
        image: "thumbnail_ravenfeed.png",
        link: "https://github.com/Vinchd/Projet1_Ravenclaw",
      },
      {
        name: "Blurtest",
        resume: "Minigame",
        image: "thumbnail_blurtest.png",
        link: "https://blurtest.remote-fr-2.wilders.dev/",
      },
      {
        name: "Choîxteau",
        resume: "Travel",
        image: "thumbnail_choixteau.png",
        link: "https://choixteau.netlify.app/",
      },
      {
        name: "Emmaus Connect",
        resume: "Support",
        image: "thumbnail_emmausconnect.png",
        link: "https://github.com/Vinchd/Hackaton-2",
      },
      {
        name: "Inovin",
        resume: "Support",
        image: "thumbnail_inovin.png",
        link: "https://github.com/WildCodeSchool/2023-02-JS-RemoteFR-JSWizards-P3-Team-Slytherin",
      },
    ];
    setProjects(fakedata);
  }, []);

  const style = {
    width: "250px",
    height: "300px",
    // display: "flex",
    // flexDirection: "column",
  };
  return (
    <section id="projects" className="scroll-area">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slideActiveClass={"active-slide"}
        navigation={true}
        // loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        // style={{ width: "100%" }}
      >
        {projects.map((project) => (
          <SwiperSlide style={style}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                project.image
              }`}
              className="img-swiper"
              onClick={() => {
                console.log(
                  `${import.meta.env.VITE_BACKEND_URL}/uploads/${project.image}`
                );
              }}
            />
          </SwiperSlide>
        ))}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-1.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-2.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-3.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-4.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-5.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-6.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-7.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide style={style}>*/}
        {/*  <img*/}
        {/*    src="https://swiperjs.com/demos/images/nature-8.jpg"*/}
        {/*    className="img-swiper"*/}
        {/*  />*/}
        {/*</SwiperSlide>*/}
      </Swiper>
    </section>
  );
}
