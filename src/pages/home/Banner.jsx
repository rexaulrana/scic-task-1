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
          <h1 className="mb-5 text-3xl md:text-5xl tracking-widest  text-white font-bold">
            Take Full <br /> Control <br />
            Of Your {""}
            <span className="text-[#65B741]">TASKS</span>
          </h1>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
