import React from "react";
import HeroImg1 from "../../assets/images/hero1.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className=" pt-0" id="about">
      <div className="container pt-14">
        <div className=" md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========= Hero left content start ========== */}
          <div className=" w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className=" text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" text-headingColor font-[600] text-[30px] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Ponkoj Mondol <br /> Front-end Web Designer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact ">
                <button className=" bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-send-line"></i> Hire me
                </button>
              </a>

              <a
                href="#portfolio"
                className=" text-smallTextColor font-[500] text-[16px] border-b border-solid border-smallTextColor hover:font-[700] duration-200 "
              >
                See portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm-pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I specialize in building visually appealing and user-friendly
              websites using a combination of HTML, CSS, JavaScript and ReactJS.
            </p>

            <div className=" flex items-center gap-9 mt-12">
              <span className=" text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>

              <span className=" text-smallTextColor text-[15px] font-[600]">
                <a href="#youtube">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span className=" text-smallTextColor text-[15px] font-[600]">
                <a href="#github">
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className=" text-smallTextColor text-[15px] font-[600]">
                <a href="#facebook">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span className=" text-smallTextColor text-[15px] font-[600]">
                <a href="#instagram">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ========= Hero left content end ========== */}

          {/* ========= Hero Image start ========== */}
          <div className=" basis-1/3 mt-10 sm:mt-0">
            <figure className=" flex items-center justify-center">
              <img src={HeroImg1} alt="" />
            </figure>
          </div>
          {/* ========= Hero image end ========== */}
          {/* ========= Hero content right ========== */}
          <div className=" md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <h4 className=" text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>

            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className=" text-headingColor font-[600] text-[18px]">
                Sucess Rate
              </h4>
            </div>

            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className=" text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>

            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={250} duration={2} suffix="+" />
              </h2>
              <h4 className=" text-headingColor font-[600] text-[18px]">
                Project Completed
              </h4>
            </div>
          </div>
          {/* ========= Hero content right end ========== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
