import banner from "../assets/images/banner.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-3xl"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="text-white">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
            Discover an exceptional cooking <br className="hidden md:block" />{" "}
            class tailored for you!
          </h1>
          <p className="mb-5">
            Unleash your culinary creativity with a personalized cooking class{" "}
            <br className="hidden md:block" />
            designed to match your tastes and skill level.
          </p>
          <div className="space-y-5 md:space-x-5">
            <button className="btn bg-[#0BE58A] text-[#150B2B] text-lg border-none explore-btn">
              Explore Now
            </button>
            <button className="btn bg-transparent text-white text-lg border rounded-full feedback-btn">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
