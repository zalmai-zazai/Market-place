"use client";
import Dropdownone from "./Dropdownone";
import Dropdowntwo from "./Dropdowntwo";

const Banner = () => {
  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
              ALL YOUR <span className="text-red">NEEDS</span> <br />
            </h1>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:4px">
              {" "}
              IN ONE PLACE
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              find all of your needs nearby with reasonable prices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="hidden sm:block -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="bannerBorder sm:pl-8">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="text-2xl font-semibold mr-2">4.6</h3>
                  <img src={"/assets/banner/Stars.svg"} alt="stars-icon" />
                </div>
                <div>
                  <h3 className="text-sm">Rated by 25k on google.</h3>
                </div>
              </div>
            </div>
          </div>

          {/* DROPDOWN BUTTONS */}

          {/* <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
            <div className="flex gap-2">
              <input
                type="Email address"
                name="q"
                className="py-4 text-sm w-full text-black bg-white rounded-md pl-4"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button className="bg-purple hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Banner;
