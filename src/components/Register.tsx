import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <section className='bg-[url("https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg")] bg-cover bg-center opacity-100 text-white'>
      <div className="container">
        <div className="h-[372px] lg:h-[350px] flex justify-center items-center lg:max-w-full">
          <div className="text-center flex flex-col gap-5">
            {/* Title */}
            <h3 className="text-2xl font-bold">
              Ready to get started? Sign up now!
            </h3>

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
    </section>
  );
};

export default Register;
