import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/JsKTBMC/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div
        className="hero-content text-start
       text-neutral-content"
      >
        <div className=" ">
          <h1 className="mb-5 pt-20 text-3xl md:text-5xl tracking-widest  text-white font-bold">
            Take Full <br /> Control <br />
            Of Your {""}
            <span className="text-[#65B741]">TASKS</span>
          </h1>

          <Link to={"/login"}>
            <button className="bg-[#65B741] text-white py-3 px-3 rounded-full text-xl hover:border-2 border-white ">
              Let's Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
