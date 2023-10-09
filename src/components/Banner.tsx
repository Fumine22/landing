const Banner = () => {
  return (
    <section className="text-white bg-[url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')] bg-cover bg-center">
      <div className="container">
        <div className="h-[450px] md:h-[600px] flex justify-center items-center">
          <div className="flex justify-center lg:max-w-[550px]">
            <div className="text-center">
              {/* Title */}
              <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                Generate more leads with a professional landing page!
              </h1>

              {/* Form */}
              <form>
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-4 px-5 rounded-lg w-full"
                  />

                  {/* Button */}
                  <button className="bg-[#0d6efd] px-5 py-4 opacity-60 rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
